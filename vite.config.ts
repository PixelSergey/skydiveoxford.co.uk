import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { parse as parseYaml } from "yaml";
import { contentFiles, IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from "./src/content/schema";

const CONTENT_DIR = path.resolve(__dirname, "content");

// Client-side routes in src/App.tsx. GitHub Pages has no rewrite rules, so each
// one gets its own copy of index.html (served at /intro, /about, ...).
const ROUTES = ["intro", "about", "committee"];

// Loads content/*.yml as JSON modules, failing the build with a readable
// message if a file is malformed or points at a file that does not exist.
const contentPlugin = (): Plugin => ({
  name: "club-content",
  load(id) {
    if (path.dirname(id) !== CONTENT_DIR || !id.endsWith(".yml")) return null;
    const name = path.basename(id) as keyof typeof contentFiles;
    const spec = contentFiles[name];
    if (!spec) throw new Error(`content/${name} is not a known content file`);

    function fail(message: string): never {
      throw new Error(`\n\nProblem in content/${name}: ${message}\n`);
    }

    let raw: unknown;
    try {
      raw = parseYaml(fs.readFileSync(id, "utf8")) ?? [];
    } catch (error) {
      fail((error as Error).message);
    }

    const result = spec.schema.safeParse(raw);
    if (!result.success) {
      const issue = result.error.issues[0];
      const [index, ...field] = issue.path;
      const where = typeof index === "number" ? `entry ${index + 1}` : "the file";
      fail(`${where}${field.length ? `, "${field.join(".")}"` : ""}: ${issue.message}`);
    }

    if ("folder" in spec) {
      const folder = path.join(CONTENT_DIR, spec.folder);
      this.addWatchFile(folder);
      result.data.forEach((entry, i) => {
        const file = (entry as Record<string, unknown>)[spec.fileField] as string | undefined;
        if (!file) return;
        const ext = path.extname(file).slice(1).toLowerCase();
        if (["heic", "heif"].includes(ext)) {
          fail(`entry ${i + 1}: ${file} is a HEIC photo, which most browsers cannot show. Convert it to JPEG first.`);
        }
        if (spec.folder === "gallery" && ![...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS].includes(ext)) {
          fail(`entry ${i + 1}: ${file} is not a supported photo or video type`);
        }
        if (spec.folder === "committee-photos" && !IMAGE_EXTENSIONS.includes(ext)) {
          fail(`entry ${i + 1}: ${file} is not a supported photo type`);
        }
        if (!fs.existsSync(path.join(folder, file))) {
          fail(`entry ${i + 1}: there is no file called ${file} in content/${spec.folder}/ (names are case-sensitive)`);
        }
      });
    }

    return `export default ${JSON.stringify(result.data)};`;
  },
});

const githubPagesRoutes = (): Plugin => ({
  name: "github-pages-routes",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const index = bundle["index.html"];
    if (!index || index.type !== "asset") return;
    for (const fileName of [...ROUTES.map((route) => `${route}.html`), "404.html"]) {
      this.emitFile({ type: "asset", fileName, source: index.source });
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), contentPlugin(), githubPagesRoutes()],
  build: {
    // Always give uploaded content files real URLs, so e.g. tiny PDFs still open in a new tab.
    assetsInlineLimit: (filePath) => (filePath.startsWith(CONTENT_DIR) ? false : undefined),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
