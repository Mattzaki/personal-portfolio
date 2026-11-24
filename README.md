# Matteo Zacchino · Portfolio

Personal portfolio of **Matteo Zacchino**, Frontend Developer.
Built with **Angular** in a neon-retro style, available in **Italian and English**.

🔗 **Live:** https://mattzaki.github.io/personal-portfolio/

## Stack

- Angular (standalone components, signals)
- Plain CSS, no UI libraries
- Self-hosted fonts (VT323, Inter) via Fontsource
- Automatic deploy to GitHub Pages with GitHub Actions

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Editing the content

| What | Where |
| --- | --- |
| Projects, experience, skills, links | `src/app/data/portfolio.data.ts` |
| Interface text (IT / EN) | `src/app/i18n/translations.ts` |
| Colours and fonts | `src/styles.css` (variables at the top) |
| Project images | `public/projects/` |
| CV to download | `public/cv/Matteo_Zacchino_CV.pdf` |

To add a project, add an object to `PROJECTS` and put its image in `public/projects/`.

## Deploy

Every push to `main` publishes the site automatically
(see `.github/workflows/deploy.yml`).
