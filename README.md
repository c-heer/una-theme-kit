# UNA Theme-Kit
- Theme-Kit for Sites & Apps written in SCSS
- Maximum power / tons of glitter / made for unicorns

---

### About
Una-CSS Theme-Kit is a lightweight SCSS starter with the most used Styles based on CSS-Variables.
It ships styles for Typography, Forms, Animations and includes a Reset.
To keep things simple most Variables are named after the property-value name.
Once you get used to it, it's as easy as 1,2,3. Enjoy!

### Version 1.0.12
- remove basic grid-layout
- add scrollbar styles for Firefox back again

### Version 1.0.11
- bugfix scrollbar styling

### Version 1.0.10
- bugfix hover links rollback

### Version 1.0.7
- add css style `*{scrollbar-width: thin;}` for Firefox thin scrollbars

### Version 1.0.6
- update readme.md

### Version 1.0.5
- bugfix typo

### Version 1.0.4
- add compiled / minified CSS Versions
 
### Version 1.0.3
- update readme.md
- move ul-styles to reset.scss and add initial padding
- change min-width to name max-width
- add scrollbar styles and variable names
- add css style `scrollbar-gutter: stable;` to reset

### Version 0.0.1 - 1.0.2
- developing / refactoring / bugfixing

### How to Install
- Install with npm `npm install @heer.dev/una-theme-kit`
- Or download from GitHub https://github.com/c-heer/una-theme-kit

### Getting Started
```scss
// Put this in your main.scss file

// import base styles from npm-package
@import "node_modules/@heer.dev/una-theme-kit/dist/scss/base";

// set global css variables
:root {
  --max-width: 1280px; // in case we need a center width
  --family-1: 'Helvetica', sans-serif; // define family 1
  --family-2: 'Helvetica', sans-serif; // define family 2
  // some CSS3 magic stuff to calculate font-sizes based on screen-size
  --font-size-1: max(.8rem, .45vw); // caption / footer / etc
  --font-size-2: max(.95rem, .55vw); // base font size used on body
  --font-size-3: max(1.1rem, .65vw); // headline base
  --font-size-4: max(2.2rem, min(4.2vw, 120px)); // Heros / Large Block Text
  --line-height-1: 1; // Base line-height / reset
  --line-height-2: 1.7; // standard / p-tag
  --line-height-3: 2.25; // if needed
  // in case you need fixed heights
  --height-1: 50px; // use for buttons / inputs / small toolbars
  --height-2: 70px; // use for regular toolbars / bigger buttons 
  --height-3: 100px; // if needed
  // global spacing makes it easy to adjust layouts
  --space-1: .5rem; // standard space
  --space-2: 1rem; // bigger space
  --space-3: 10vh; // vertical large space / used as a separator for example between  <sections>
}

// alternate Font-sizes / set class on body / use js to toggle between sizes by adding / removing class
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

// Theme Variables
// !Important `class="dark"` or `class="light"' MUST be set on body tag!
// use js to toggle between themes by adding / removing class
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
  --scrollbar-track: hsl(216, 16%, 94%);
  --scrollbar-thumb: hsl(232, 12%, 70%);
}
.dark {
  --color-1: hsl(200, 100%, 25%);
  --color-2: inherit;
  --color-3: inherit;
  --on-color: hsl(0, 0%, 90%);
  --background-1: hsl(0, 0%, 10%);
  --background-2: hsl(0, 0%, 7%);
  --background-3: hsl(0, 0%, 20%);
  --on-background: hsl(0, 0%, 80%);
  --border: hsl(0, 0%, 17%);
  --error: #c42600;
  --warning: #d38f00;
  --success: #009600;
  --scrollbar-track: hsl(216, 16%, 6%);
  --scrollbar-thumb: hsl(232, 12%, 30%);
}

// Media queries / if needed
@media screen and (min-width: 768px) {} // Tablets
@media screen and (min-width: 1180px) {} // Laptops
@media screen and (min-width: 2561px) {} // 4k

// -------------------------------------------------------
// Put all your custom global CSS styles below this line
// -------------------------------------------------------
```

### test some standard HTML and variables 
```html
<body class="dark">
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <p>
        Some paragraph content
    </p>
    <ul>
      <li>list-item-1</li>
      <li>list-item-2</li>
      <li>list-item-3</li>
    </ul>
    <div style="color: var(--color-1); background: var(--background-2); font-size: var(--font-size-4);)">
        A div with background-color-2 and text with color-1 and massive font-size <br>
        Resize your browser to see what happens.
    </div>
</body>
```

### animation and transition classes
```html
<!-- use classNames on HTML-Tags-->
<div class="fadeIn"></div>
<div class="dropInRight"></div>
<div class="dropInLeft"></div>
<div class="dropInTop"></div>
<div class="dropInBottom"></div>
```
```scss
:root { // predefined timings for animations / transitions
  --transition-fast: .3s ease-in-out;
  --transition-slow: .6s ease-in-out;
  --animation-fast: .3s ease-in-out forwards;
  --animation-slow: .9s ease-in-out forwards;
  --animation-fast-infinite: .3s ease-in-out 0s infinite;
  --animation-slow-infinite: .6s ease-in-out 0s infinite;
}
.myClass {
  animation: myAnimation var(--animation-fast);
}
```
```scss
.motion-off {
  // set class .motion-off on body to completely turn off Animations / Transitions
}
```

### Done
- Thanks for reading!
- heer.dev
