# deliberatecode.github.io

Static site for [Deliberate Code](https://deliberatecode.github.io), hosted on GitHub Pages.

## Structure

```
index.html           Home
system2/index.html   System2 product page
overlays/index.html  System2 overlay library
css/site.css         Shared styles (light/dark via prefers-color-scheme)
js/site.js           Shared site nav and copy-to-clipboard for install commands
assets/DC-check.png        Full-res brand mark (source)
assets/favicon-96.png      96×96 favicon and header mark
assets/apple-touch-icon.png  180×180 Apple touch icon / OG image
```

Add new pages as `your-project/index.html`, link from the home “Projects” section when ready, and reuse `css/site.css` plus the shared header/footer pattern.

## Local preview

From this repository root (the folder that contains `index.html`):

```bash
cd /path/to/deliberatecode.github.io
python3 -m http.server 8080
```

Open http://localhost:8080/

Do not open `index.html` directly in the browser (`file://`); use the local server above.
