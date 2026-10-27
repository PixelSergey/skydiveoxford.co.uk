# Editing the website

Everything the committee normally needs to change lives in this folder. You
can do all of it in your browser on GitHub, without installing anything.
The site rebuilds automatically after every change and is usually live
within about two minutes.

| What                                  | Edit this file      | Upload files to      |
| ------------------------------------- | ------------------- | -------------------- |
| Intro day dates, sign-up links, state | `intro-days.yml`    |                      |
| Committee members                     | `committee.yml`     | `committee-photos/`  |
| Constitution, policies, etc.          | `documents.yml`     | `documents/`         |
| Gallery photos and videos             | `gallery.yml`       | `gallery/`           |

Each `.yml` file starts with a comment explaining its fields.

## Changing text (e.g. opening sign-ups for an intro day)

1. Open the file above (e.g. `intro-days.yml`) and click the pencil icon
   ("Edit this file").
2. Make the change, e.g. change `state: not yet active` to `state: active`
   and add a `link:` line underneath.
3. Click **Commit changes…** and then **Commit changes** again.

## Adding a photo, video or document

1. Open the folder (e.g. `gallery/`), click **Add file → Upload files**,
   drag the file in, and commit.
2. Edit the matching `.yml` file (e.g. `gallery.yml`) and add an entry whose
   file name matches exactly (names are case-sensitive: `Photo.JPG` is not
   `photo.jpg`).

Some tips:

- Avoid spaces in file names. `mia-first-jump.jpg` is better than
  `Mia First Jump.jpg`.
- iPhone photos in `.heic` format don't show in most browsers, so convert
  them to `.jpg` first. Exporting or sharing from the Photos app usually
  does this.
- GitHub's website can't upload files over 25 MB. Compress videos (e.g.
  with HandBrake's "Fast 1080p30" preset) and keep them short. Smaller
  files also load faster for visitors.
- To remove something, delete its entry from the `.yml` file, then delete
  the file itself.

## If something goes wrong

The site is checked before it goes live. If an edit has a mistake (a typo in
a field name, a missing file, a wrong `state`), the live site **does not
change** and GitHub emails whoever made the edit. To see what went wrong,
open the repository's **Actions** tab, click the failed run (red ❌), then
click **build** and expand the "Build site" step. Look for a line starting
with `Problem in content/...`. It says which file and entry need fixing.
