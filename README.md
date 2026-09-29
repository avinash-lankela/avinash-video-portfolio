# Avinash — Video Editor & Visual Storyteller

A responsive React + Vite portfolio with project filtering, video dialogs, a mobile navigation menu, reveal-on-scroll motion, and an email-draft contact form.

## Run locally

Use Node.js `20.19+` or `22.12+` and npm:

```sh
npm install
npm run dev
```

Create and preview the production build with:

```sh
npm run build
npm run preview
```

## Add your media and details

The site intentionally uses paths instead of bundled sample media. Add your files under `public/media/` using the filenames below, or update the paths in `src/data.js` and `src/App.jsx`.

| File | Used for |
| --- | --- |
| `showreel-poster.jpg` | Showreel player poster |
| `avinash-showreel.mp4` | Main showreel |
| `youtube-featured.jpg` | Featured YouTube cover |
| `youtube-featured.mp4` | Featured YouTube edit |
| `project-01.jpg` through `project-04.jpg` | Selected-work covers |
| `project-01.mp4` through `project-04.mp4` | Project detail videos |

Until a media file is added, the work cards show designed colour-field placeholders and a video dialog tells you the expected path.

Update the editable content in `src/data.js`: project titles and descriptions, services, software, showreel paths, and `portfolio.email`. The contact form opens a prefilled email draft; it does not send or store form submissions on a server.

## Structure

```text
index.html
src/
  App.jsx       page sections and interactions
  data.js       portfolio content and media paths
  main.jsx      React entry point
  styles.css    responsive design system and animation
public/media/  add project media here
```
