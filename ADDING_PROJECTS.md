# Adding projects

Project cards are rendered from the `projects` array in `src/data.js`. Use these steps to replace a Coming soon card or add a new project; no React component or CSS changes are needed.

1. Put the finished video in `public/media/`, for example `project-04.mp4`.
2. Put its thumbnail image in `public/media/`, for example `project-04.jpg`.
3. Add a project object to the `projects` array in `src/data.js` and set `video` and `cover` to those paths. Include an `id`, `number`, `title`, `category`, `format`, `year`, `tone`, `description`, and `services`.
4. Choose a supported category exactly as shown in the filters: `YouTube`, `Film`, `Brand`, or `Social`. Supported visual tones are `violet`, `purple`, `indigo`, and `plum`.
5. Save the file and run the site with `npm run dev`.

To replace a placeholder, edit one of the three Coming soon objects in `src/data.js`. To keep the placeholders and add another card, append a new project object instead. Real project cards automatically use the existing filters and open the video dialog.

Example object:

```js
{
  id: 'project-04',
  number: '04',
  title: 'Your project title',
  category: 'YouTube',
  format: 'LONG-FORM VIDEO',
  year: 'YEAR',
  cover: '/media/project-04.jpg',
  video: '/media/project-04.mp4',
  tone: 'violet',
  description: 'Add a concise description of the edit and your role.',
  services: [],
}
```
