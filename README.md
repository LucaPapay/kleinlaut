# Kleinlaut

## Local assets setup

### Fonts
- Put font files in `public/fonts/`.
- Add `@font-face` rules in `src/style.css` (or another imported CSS file).

Example:
```
@font-face {
  font-family: "Your Font";
  src: url("/fonts/YourFont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Images
You have two common options:

1) Static public assets (no bundling)
- Place files in `public/images/` and reference by absolute path.
- Example in Vue: `<img src="/images/hero.jpg" alt="..." />`

2) Bundled assets (hashed on build)
- Place files in `src/assets/images/` and import them.
- Example in Vue:
```
<script setup>
import heroImage from '@/assets/images/hero.jpg'
</script>

<template>
  <img :src="heroImage" alt="..." />
</template>
```
