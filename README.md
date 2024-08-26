# Rhino Linux Wiki

This is the official Rhino Linux Wiki, built with [Nextra](https://nextra.site).

[**Live Demo →**](https://rhino-linux-wiki.vercel.app)

[![](https://github.com/user-attachments/assets/ae8f5395-34df-4352-84f0-0dea02dfd0ad)](https://rhino-linux-wiki.vercel.app)

## Quick Start

Click the button to clone this repository and deploy it on Vercel:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&showOptionalTeamCreation=false)

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run:
```bash
npx concurrently "pnpm dev" "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
```
This will start the development server at `localhost:3000`, or if port `:3000` is taken up, the next accessible port (e.g. `:3001`).
This will also keep `tailwindcss` running while you work, so `div` entries in wiki pages and `input.css` changes are properly added.

## License

This project is licensed under the MIT License.
