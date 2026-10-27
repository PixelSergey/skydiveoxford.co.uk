// Schemas for the editable YAML files in /content. They are checked at build
// time by the content plugin in vite.config.ts, so keep this file free of
// "@/..." imports and browser-only code.
import { z } from "zod";

const filename = z
  .string()
  .min(1)
  .refine((name) => !name.includes("/"), "use just the file name, not a folder path");

export const introDaysSchema = z.array(
  z
    .object({
      date: z.string().min(1),
      state: z.enum(["active", "not yet active", "sold out"]),
      link: z.string().url().optional(),
      places: z.number().int().nonnegative(),
    })
    .strict()
    .refine((day) => day.state !== "active" || day.link, {
      message: 'an intro day with state "active" needs a sign-up link',
      path: ["link"],
    }),
);

export const committeeSchema = z.array(
  z
    .object({
      role: z.string().min(1),
      name: z.string().min(1),
      details: z.string().optional(),
      email: z.string().email(),
      photo: filename.optional(),
    })
    .strict(),
);

export const documentsSchema = z.array(
  z
    .object({
      label: z.string().min(1),
      file: filename,
    })
    .strict(),
);

export const gallerySchema = z.array(
  z
    .object({
      file: filename,
      caption: z.string().min(1),
      featured: z.boolean().optional(),
    })
    .strict(),
);

export type IntroDay = z.infer<typeof introDaysSchema>[number];
export type CommitteeMember = z.infer<typeof committeeSchema>[number];
export type ClubDocument = z.infer<typeof documentsSchema>[number];
export type GalleryItem = z.infer<typeof gallerySchema>[number];

// For each YAML file: its schema, which folder its files live in, and which
// field names a file in that folder.
export const contentFiles = {
  "intro-days.yml": { schema: introDaysSchema },
  "committee.yml": { schema: committeeSchema, folder: "committee-photos", fileField: "photo" },
  "documents.yml": { schema: documentsSchema, folder: "documents", fileField: "file" },
  "gallery.yml": { schema: gallerySchema, folder: "gallery", fileField: "file" },
} as const;

export const VIDEO_EXTENSIONS = ["mp4", "webm", "mov"];
export const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif", "avif"];
