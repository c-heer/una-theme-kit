# UNA THEME KIT
- Theme-Kit for Sites & Apps written in SCSS
- Maximum power / tons of glitter / made for unicorns

---

### About
Since 2021 I am constantly developing a CSS-Utility-Theme-Kit (or whatever the current buzzword is) for Sites and Apps.
But this is more of a large CSS reset, which adds minimal styling to standard HTML-Tags and adds some helper-classes for animations.
The core concept behind `una.css` is the use of CSS-variables to control typography / size / spacing and colors.
Naming those variables was the most challenging and exhausting part during development.
Instead of naming css-variables like `primary-color` or `space-medium` which lead to the problem that there is no such thing like `--background-medium`.
I decided to just increase numbers and use `property-names` as `variable-names`.
So `--primary-color`, `--color-primary` or `--brand-color` just becomes `--color-1`, also stripping things like `background-color` to just `--background-1`.
This feels more natural when writing `.className { color: var(color-1);}`. Give it a try, enjoy!

### Install
- Install with npm `npm install @heer.dev/una-theme-kit`
- Download from GitHub https://github.com/c-heer/una-theme-kit

### Getting Started
```scss
// Put this in your main.scss file

// Import base styles from npm-package
@import "node_modules/@heer.dev/una.css/scss/base";

// Set global css variables
:root {
  --min-width: 1280px; // in case we need a center width
  --family-1: 'Helvetica', sans-serif; // define family 1
  --family-2: 'Helvetica', sans-serif; // define family 2
  // Some CSS3 Magic stuff to calculate font-sizes based on screen-size
  --font-size-1: max(.8rem, .45vw); // caption / footer / etc
  --font-size-2: max(.95rem, .55vw); // base font size used on body
  --font-size-3: max(1.1rem, .65vw); // headline base
  --font-size-4: max(2.2rem, min(4.2vw, 120px)); // Heros / Large Block Text
  --line-height-1: 1; // Base line-height / reset
  --line-height-2: 1.7; // standard / p-tag
  --line-height-3: 2.25; // if needed
  // Even in Flexible Layouts a fixed height is awesome!
  --height-1: 50px; // use for buttons / inputs / small toolbars
  --height-2: 70px; // use for regular toolbars / bigger buttons 
  --height-3: 100px; // if needed
  // Global Spacing makes it easy to adjust Layouts
  --space-1: .5rem; // standard space
  --space-2: 1rem; // bigger space
  --space-3: 10vh; // vertical large space / used as a separator for example between  <sections>
}

// Alternat Font-sizes / class must be set on body!
.typo-medium {
  --font-size-1: max(.9rem, .55vw);
  --font-size-2: max(1.1rem, .63vw);
  --font-size-3: max(1.3rem, .75vw);
}
.typo-large {
  --font-size-1: max(1.05rem, .7vw);
  --font-size-2: max(1.3rem, .85vw);
  --font-size-3: max(1.5rem, 1.05vw);
}

// Theme Variables / !Important `class="dark"` or `class="light"' MUST be set on body tag!
.light {
  --color-1: hsl(175, 100%, 32%);
  --color-2: inherit;
  --color-3: inherit;
  --on-color: hsl(0, 0%, 10%);
  --background-1: hsl(0, 0%, 90%);
  --background-2: hsl(0, 0%, 95%);
  --background-3: hsl(0, 0%, 93%);
  --on-background: hsl(0, 0%, 35%);
  --border: hsl(0, 0%, 85%);
  --error: #c42600;
  --warning: #d38f00;
  --success: #009600;
}
.dark {
  --color-1: hsl(175, 100%, 32%);
  --color-2: inherit;
  --color-3: inherit;
  --background-2: hsl(0, 0%, 7%);
  --background-3: hsl(0, 0%, 20%);
  --on-background: hsl(0, 0%, 80%);
  --border: hsl(0, 0%, 17%);
  --error: #c42600;
  --warning: #d38f00;
  --success: #009600;
}

// Media queries / if needed
@media screen and (min-width: 768px) {} // Tablets
@media (min-width: 1180px) {} // Laptops
@media screen and (min-width: 2561px) {} // 4k

// -------------------------------------------------------
// Put all your custom global CSS styles below this
// -------------------------------------------------------
```

### Build in CSS Animation Classes
```html
<div class="fadeIn"></div>
<div class="dropInRight"></div>
<div class="dropInLeft"></div>
<div class="dropInTop"></div>
<div class="dropInBottom"></div>
```
```scss
.motion-off {
  // set class .motion-off on body to completely turn off Animations / Transitions
}
```

### Done
- Thanks for reading!
- heer.dev
