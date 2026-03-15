# Hailan Ma Academic Homepage

This repository contains a personal academic homepage deployed with GitHub Pages. It is built with plain HTML, CSS, and JavaScript, with no build step required.

## Site Structure

- `index.html`: home page with profile, research focus, news, representative publications, and contact information
- `cv.html`: HTML version of the CV
- `publications.html`: publications page organized by year
- `education.html`: education page covering course teaching, supervision, and program organization
- `engagement.html`: engagement page covering professional service, conference organization, visits, and reviewing
- `styles.css`: shared site styling
- `script.js`: page animation and footer date logic
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Deployment

This repository is configured to deploy with GitHub Actions.

1. Push the site content to the `main` branch.
2. Open `Settings > Pages` in the GitHub repository.
3. Set `Source` to `GitHub Actions`.
4. After each push, GitHub will run `.github/workflows/deploy.yml` and publish the site automatically.

For a repository named `vericoware`, the published URL is typically:

`https://vericoware.github.io/vericoware/`

## Maintenance Notes

- The home page already includes live links for Google Scholar and ORCID.
- To enable the LinkedIn icon, replace `href="#"` in `index.html` with the actual profile URL.
- All assets use relative paths, so the site works correctly when deployed under a project-style GitHub Pages path.

## Possible Extensions

- PDF, slides, poster, or code links for publications
- Research statement, teaching statement, and other application materials
- A custom domain and `CNAME`
- Additional sections such as News, Talks, and Students
