// Site content edited by the committee in /content. The YAML files are
// validated against ./schema.ts when the site is built (see vite.config.ts).
import introDaysData from "../../content/intro-days.yml";
import committeeData from "../../content/committee.yml";
import documentsData from "../../content/documents.yml";
import galleryData from "../../content/gallery.yml";
import {
  VIDEO_EXTENSIONS,
  type ClubDocument,
  type CommitteeMember,
  type GalleryItem,
  type IntroDay,
} from "./schema";

const urlsOf = (files: Record<string, string>) =>
  Object.fromEntries(Object.entries(files).map(([filePath, url]) => [filePath.split("/").pop(), url]));

const committeePhotoUrls = urlsOf(
  import.meta.glob<string>("/content/committee-photos/*", { eager: true, query: "?url", import: "default" }),
);
const documentUrls = urlsOf(
  import.meta.glob<string>("/content/documents/*", { eager: true, query: "?url", import: "default" }),
);
const galleryUrls = urlsOf(
  import.meta.glob<string>("/content/gallery/*", { eager: true, query: "?url", import: "default" }),
);

export const introDays = introDaysData as IntroDay[];

export const committeeMembers = (committeeData as CommitteeMember[]).map((member) => ({
  ...member,
  initials: member.name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase(),
  photoUrl: member.photo ? committeePhotoUrls[member.photo] : undefined,
}));

export const documents = (documentsData as ClubDocument[]).map((doc) => ({
  ...doc,
  url: documentUrls[doc.file],
}));

export const galleryItems = (galleryData as GalleryItem[]).map((item) => ({
  ...item,
  url: galleryUrls[item.file],
  isVideo: VIDEO_EXTENSIONS.includes(item.file.split(".").pop()?.toLowerCase() ?? ""),
}));

export type GalleryEntry = (typeof galleryItems)[number];
