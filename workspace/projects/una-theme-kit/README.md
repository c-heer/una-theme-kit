# UNA Theme Kit

A minimal, variable-driven CSS theme kit for building accessible and customizable web interfaces.

## Features

- 🎨 **CSS Variable-Driven** - Customize everything through CSS custom properties
- 🌓 **Light & Dark Themes** - Built-in theme support with easy switching
- ♿ **Accessibility First** - Semantic HTML, proper contrast, respects motion preferences
- 📦 **Lightweight** - Under 10KB, zero dependencies
- 🎯 **Framework Agnostic** - Works with React, Vue, Angular, or plain HTML
- 🚀 **Modern CSS** - Fluid typography, custom scrollbars, smooth animations

## Installation

### npm

```bash
npm install una-theme-kit
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/una-theme-kit/css/base.css">
```

## Quick Start

### 1. Import UNA CSS base

**Using a bundler (Webpack, Vite, Parcel, etc.):**

```css
/* In your main CSS file (e.g., styles.css) */
@import 'una-theme-kit/css/base.css';
```

**Using plain HTML:**

```html
<!-- From node_modules (if you have a dev server) -->
<link rel="stylesheet" href="/node_modules/una-theme-kit/css/base.css">

<!-- Or from CDN (easiest for static sites) -->
<link rel="stylesheet" href="https://unpkg.com/una-theme-kit/css/base.css">
```

### 2. Copy and customize the CSS variables

Copy the contents of `starter.css` (or view it below) into your own CSS file and customize the values to match your design:

```css
/* Your custom variables (copy from starter.css and customize) */
:root {
  /* Layout */
  --max-width: 1280px;
  
  /* Typography */
  --family-1: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  --family-2: Georgia, 'Times New Roman', serif;
  
  /* Font sizes */
  --font-size-0: 0.75rem;   /* 12px */
  --font-size-1: 0.875rem;  /* 14px */
  --font-size-2: 1rem;      /* 16px */
  --font-size-3: 1.5rem;    /* 24px */
  --font-size-4: 3rem;      /* 48px */
  
  /* Line heights */
  --line-height-0: 1;
  --line-height-1: 1.2;
  --line-height-2: 1.6;
  --line-height-3: 2;
  
  /* Component heights */
  --height-1: 40px;
  --height-2: 48px;
  --height-3: 64px;
  
  /* Spacing */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-around: var(--space-3) var(--space-1);
  
  /* Transitions & Animations */
  --transition-fast: 0.2s ease-in-out;
  --transition-slow: 0.4s ease-in-out;
  --animation-fast: 0.3s ease-in-out forwards;
  --animation-slow: 0.6s ease-in-out forwards;
  --animation-fast-infinite: 0.3s ease-in-out 0s infinite;
  --animation-slow-infinite: 0.6s ease-in-out 0s infinite;
  
  /* Optional */
  --border-radius: 0;
}

/* Light theme */
.light {
  --color-1: hsl(210, 100%, 50%);
  --color-2: hsl(280, 70%, 55%);
  --color-3: hsl(160, 70%, 45%);
  --on-color: hsl(0, 0%, 100%);
  
  --background-1: hsl(0, 0%, 96%);
  --background-2: hsl(0, 0%, 100%);
  --background-3: hsl(0, 0%, 98%);
  --background-4: hsl(0, 0%, 100%);
  
  --on-background: hsl(0, 0%, 15%);
  --on-background-light: hsl(0, 0%, 45%);
  --on-background-dark: hsl(0, 0%, 5%);
  --on-background-inverted: hsl(0, 0%, 95%);
  
  --border-1: hsl(0, 0%, 88%);
  --border-2: hsl(0, 0%, 75%);
  
  --error: hsl(0, 70%, 50%);
  --warning: hsl(40, 90%, 50%);
  --success: hsl(140, 60%, 45%);
  
  --scrollbar-track: hsl(0, 0%, 95%);
  --scrollbar-thumb: hsl(0, 0%, 70%);
}

/* Dark theme */
.dark {
  --color-1: hsl(210, 100%, 60%);
  --color-2: hsl(280, 70%, 65%);
  --color-3: hsl(160, 70%, 55%);
  --on-color: hsl(0, 0%, 10%);
  
  --background-1: hsl(0, 0%, 10%);
  --background-2: hsl(0, 0%, 14%);
  --background-3: hsl(0, 0%, 18%);
  --background-4: hsl(0, 0%, 8%);
  
  --on-background: hsl(0, 0%, 90%);
  --on-background-light: hsl(0, 0%, 65%);
  --on-background-dark: hsl(0, 0%, 98%);
  --on-background-inverted: hsl(0, 0%, 15%);
  
  --border-1: hsl(0, 0%, 25%);
  --border-2: hsl(0, 0%, 40%);
  
  --error: hsl(0, 70%, 60%);
  --warning: hsl(40, 90%, 60%);
  --success: hsl(140, 60%, 55%);
  
  --scrollbar-track: hsl(0, 0%, 12%);
  --scrollbar-thumb: hsl(0, 0%, 35%);
}
```

### 3. Apply a theme class to your HTML

```html
<body class="light">
  <!-- Your content -->
</body>
```

### 4. Use the CSS variables in your styles

```css
.my-component {
  background: var(--background-2);
  color: var(--on-background);
  padding: var(--space-2);
  border: 1px solid var(--border-1);
  transition: var(--transition-fast);
}
```

## Usage Examples

### React / Vue / Angular (with bundler)

```jsx
// In your main entry file (e.g., main.jsx, App.jsx, or main.ts)
import 'una-theme-kit/css/base.css';
import './your-custom-variables.css'; // Your copied starter.css variables

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <h1>Hello World</h1>
    </div>
  );
}
```

### Plain HTML / Static Site

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App with UNA Theme Kit</title>
  
  <!-- Import UNA CSS from node_modules -->
  <link rel="stylesheet" href="node_modules/una-theme-kit/css/base.css">
  
  <!-- Or from CDN -->
  <!-- <link rel="stylesheet" href="https://unpkg.com/una-theme-kit/css/base.css"> -->
  
  <style>
    /* Your custom variables */
    :root {
      --max-width: 1280px;
      --font-size-0: clamp(0.75rem, 0.4vw + 0.65rem, 0.9rem);
      /* ... copy all variables from starter.css ... */
    }
    
    .light {
      --color-1: hsl(210, 100%, 50%);
      /* ... copy light theme variables ... */
    }
    
    .dark {
      --color-1: hsl(210, 100%, 60%);
      /* ... copy dark theme variables ... */
    }
    
    /* Your custom styles */
    .card {
      background: var(--background-2);
      padding: var(--space-2);
      border: 1px solid var(--border-1);
    }
  </style>
</head>
<body class="light">
  <h1>Hello World</h1>
  <button>Click me</button>
  <div class="card">A styled card</div>
</body>
</html>
```

## CSS Variables Reference

### Colors
- `--color-1`, `--color-2`, `--color-3` - Brand colors
- `--on-color` - Text color on colored backgrounds
- `--background-1`, `--background-2`, `--background-3`, `--background-4` - Background shades
- `--on-background`, `--on-background-light`, `--on-background-dark` - Text colors
- `--on-background-inverted` - Inverted text color
- `--border-1`, `--border-2` - Border colors
- `--error`, `--warning`, `--success` - Status colors
- `--scrollbar-track`, `--scrollbar-thumb` - Scrollbar colors

### Typography
- `--family-1` - Primary font stack (sans-serif)
- `--family-2` - Secondary font stack (serif)
- `--font-size-0` - Extra small (caption, labels)
- `--font-size-1` - Small (secondary text)
- `--font-size-2` - Body text (default)
- `--font-size-3` - Headings (h2-h6)
- `--font-size-4` - Hero text (h1, display)
- `--line-height-0` - Tight (1)
- `--line-height-1` - Compact (1.2)
- `--line-height-2` - Comfortable (1.6)
- `--line-height-3` - Spacious (2)

### Spacing
- `--space-1` - Small (0.5rem / 8px)
- `--space-2` - Medium (1rem / 16px)
- `--space-3` - Large (2rem / 32px)
- `--space-around` - Responsive container padding

### Layout
- `--max-width` - Maximum content width (1280px)
- `--height-1` - Small component height (40px)
- `--height-2` - Medium component height (48px)
- `--height-3` - Large component height (64px)
- `--border-radius` - Corner rounding (0 = sharp)

### Animations
- `--transition-fast` - Quick transitions (0.2s)
- `--transition-slow` - Slower transitions (0.4s)
- `--animation-fast` - Quick animations (0.3s)
- `--animation-slow` - Slower animations (0.6s)
- `--animation-fast-infinite` - Quick looping animations
- `--animation-slow-infinite` - Slow looping animations

## Customization

Override any variable in your own CSS to customize the theme:

```css
:root {
  /* Make everything purple */
  --color-1: hsl(280, 70%, 55%);
  
  /* Increase spacing */
  --space-2: 1.5rem;
  
  /* Add rounded corners */
  --border-radius: 8px;
  
  /* Use a different font */
  --family-1: 'Inter', sans-serif;
}
```

## Theme Switching

### Manual Toggle

```javascript
// Toggle between light and dark
const body = document.body;
body.classList.toggle('light');
body.classList.toggle('dark');
```

### Respect System Preference

```css
/* Default to light */
body {
  @extend .light;
}

/* Auto dark mode based on system preference */
@media (prefers-color-scheme: dark) {
  body {
    @extend .dark;
  }
}
```

### Save User Preference

```javascript
// Get saved theme or default to light
const theme = localStorage.getItem('theme') || 'light';
document.body.classList.add(theme);

// Toggle and save
function toggleTheme() {
  const current = document.body.classList.contains('light') ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  
  document.body.classList.remove(current);
  document.body.classList.add(next);
  localStorage.setItem('theme', next);
}
```

## What's Included

UNA Theme Kit includes these CSS modules:

- **base.css** - Combines all modules below
- **_reset.css** - Modern CSS reset
- **_typography.css** - Headings, paragraphs, links, lists
- **_buttons.css** - Button styles and states
- **_form.css** - Inputs, textareas, selects, checkboxes, radios
- **_animation.css** - Fade-in and drop-in animations
- **_scrollbars.css** - Custom scrollbar styling (WebKit browsers)
- **_utilities.css** - Motion preference utilities
- **starter.css** - Reference CSS variables (copy to your project)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 15+

Requires CSS custom properties (CSS variables) support.

## License

MIT

## Links

- [GitHub Repository](https://github.com/yourusername/una-theme-kit)
- [Report Issues](https://github.com/yourusername/una-theme-kit/issues)
- [npm Package](https://www.npmjs.com/package/una-theme-kit)
