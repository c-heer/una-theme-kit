# UNA.CSS
- Variable Theme-Kit for Sites & Apps
- Maximum power
- Tons of glitter
- Made for unicorns!

---

### About
Since 2021, I am constantly developing a CSS-Starter Kit for my Sites / Apps called una.css.
It's not a Framework, it's more a larger CSS reset, which adds minimal styling to standard HTML-Tags.
The core concept behind `una.css` is different and dead-simple. 
CSS-variables are used to primarily control typography / size / spacing and colors - nothing more.
Enjoy!

### Getting Started
```bash
npm install @heer.dev/una-theme-kit`
```

### Import the Base Styles
```scss
// Import base styles from npm Package in your main.scss
@import "node_modules/@heer.dev/una.css/scss/base";
```

### Add Theme-Variables / Theme-Kit
```scss
// Global Variables
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
  --height-1: 50px; // use for buttons / inputs / small toolbars
  --height-2: 70px; // use for regular toolbars / bigger buttons 
  --height-3: 100px; // if needed
  --space-1: .5rem; // standard space
  --space-2: 1rem; // bigger space
  --space-3: 10vh; // vertical large space / used as a separator for example between  <sections>
}

// Typography Extra 
// Set class on body to increase font sizes to medium
.typo-medium {
  --font-size-1: max(.9rem, .55vw);
  --font-size-2: max(1.1rem, .63vw);
  --font-size-3: max(1.3rem, .75vw);
}
// Set class on body to increase font sizes to medium
.typo-large {
  --font-size-1: max(1.05rem, .7vw);
  --font-size-2: max(1.3rem, .85vw);
  --font-size-3: max(1.5rem, 1.05vw);
}

// Theme Variables
// !Important `class="dark"` or `class="light"' MUST be set on body tag!
.dark {
  --color-1: hsl(231, 48%, 32%);
  --color-2: inherit;
  --color-3: inherit;
  --on-color: rgba(232, 233, 236, 1);
  --background-1: rgba(14, 20, 27, 1);
  --background-2: rgba(9, 16, 21, 1);
  --background-3: rgb(58, 64, 81, 1);
  --on-background: rgba(161, 165, 182, 1);
  --border: rgba(44, 47, 66, 1);
  --error: hsl(346, 48%, 46%);
  --warning: hsl(52, 50%, 47%);
  --success: hsl(141, 50%, 47%);
}
.light {
  --color-1: hsl(231, 48%, 32%);
  --color-2: inherit;
  --color-3: inherit;
  --on-color: rgba(239, 241, 245, 1);
  --background-1: rgba(245, 245, 245, 1);
  --background-2: rgba(255, 255, 255, 1);
  --background-3: rgba(190, 190, 190, 1);
  --on-background: rgba(70, 71, 78, 1);
  --border: rgba(205, 205, 205, 1);
  --error: hsl(346, 48%, 46%);
  --warning: hsl(52, 50%, 47%);
  --success: hsl(141, 50%, 47%);
}

// Media queries / if needed
@media screen and (min-width: 768px) {} // Tablets
@media (min-width: 1180px) {} // Laptops
@media screen and (min-width: 2561px) {} // 4k

// Put all your custom global CSS styles below...
```

### Build in CSS Animation Classes
```scss
.fadeIn,
.dropInRight,
.dropInLeft,
.dropInTop,
.dropInBottom {
  // set one of the classnames on any html element makes it dropIn via css @keyframes
}

.motion-off {
  // set class .motion-off on body to completely turn off Animations / Transitions
}
```

### Done
- If anyone ever finds this repo / package and uses it
- Feel free to drop me a line at ilikeuna@heer.dev and tell me what you think.
- Thanks for reading!
- c.heer
