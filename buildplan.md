# UNA Theme Kit - Build Plan

## Project Overview
Building a minimal, elegant documentation site for UNA Theme Kit that showcases the library while embodying its design philosophy of simplicity and minimalism.

## Current Status ✅
- [x] Docker environment set up
- [x] Angular workspace configured
- [x] Demo app (`una-theme-kit-demo-app`) running on port 4200
- [x] UNA CSS files located in `workspace/projects/una-theme-kit/css/`
- [x] Basic layout with header and sidebar navigation
- [x] Routing structure with 5 main pages
- [x] Getting Started page complete with content
- [x] UNA CSS imported and working

## Design Philosophy
The docs should reflect UNA's minimalist approach:
- Clean, spacious layouts
- Typography-focused design
- Subtle animations
- Light/dark theme switching
- CSS variable-driven styling (eating our own dog food)

## Architecture

### File Structure
```
workspace/
├── projects/
│   ├── una-theme-kit/           # CSS library (for npm publishing)
│   │   └── css/
│   │       ├── base.css
│   │       ├── _reset.css
│   │       ├── _typography.css
│   │       ├── _form.css
│   │       ├── _buttons.css
│   │       ├── _animation.css
│   │       ├── _scrollbars.css
│   │       ├── _utilities.css
│   │       └── starter.css
│   └── una-theme-kit-demo-app/  # Documentation site
│       └── src/
│           ├── app/
│           │   ├── core/        # Layout, navigation
│           │   ├── features/    # Page modules
│           │   └── shared/      # Reusable components
│           └── styles.scss
```

## Features to Build

### 1. Core Layout & Navigation
- [ ] **Header Component**
  - UNA logo/title
  - Theme switcher (light/dark)
  - GitHub link
  - npm package link
  
- [ ] **Sidebar Navigation**
  - Getting Started
  - Variables Reference
  - Components
  - Examples
  - Variable Builder (tool)
  
- [ ] **Main Content Area**
  - Responsive layout
  - Clean typography
  - Code syntax highlighting

### 2. Documentation Pages

#### Getting Started
- [ ] Installation instructions
- [ ] Basic setup
- [ ] First theme example
- [ ] CDN vs npm usage

#### Variables Reference
- [ ] Color variables (with live preview)
- [ ] Typography variables
- [ ] Spacing variables
- [ ] Animation variables
- [ ] Form variables
- [ ] Interactive examples for each category

#### Components Showcase
- [ ] **Typography**
  - Headings (h1-h6)
  - Paragraphs
  - Links
  - Lists
  - Blockquotes
  
- [ ] **Buttons**
  - Default styles
  - States (hover, active, disabled)
  - Size variations
  
- [ ] **Forms**
  - Inputs
  - Textareas
  - Selects
  - Checkboxes
  - Radio buttons
  - Form layouts
  
- [ ] **Animations**
  - fadeIn variations
  - dropIn variations
  - Live demos with toggle

- [ ] **Utilities**
  - Motion preferences
  - Custom scrollbars

#### Examples
- [ ] Complete page layouts
- [ ] Theme variations
- [ ] Real-world use cases

### 3. Variable Builder Tool 🎨
Interactive form to generate custom CSS variables:

- [ ] **Color Scheme Builder**
  - Primary/secondary color pickers
  - Auto-generate light/dark variants
  - Contrast checker
  
- [ ] **Typography Customizer**
  - Font family selection
  - Size scale adjuster
  - Line height controls
  
- [ ] **Export Options**
  - Copy to clipboard
  - Download as CSS file
  - Preview live

### 4. Technical Implementation

#### Phase 1: Setup & Foundation ✅ COMPLETE
- [x] Import UNA CSS into Angular app
- [x] Set up routing structure
- [x] Create base layout components
- [x] Remove theme switching (SSR compatibility - will add later)
- [x] Simplified to flat page structure
- [ ] Add syntax highlighting library (e.g., Prism.js) - DEFERRED

#### Phase 2: Content Pages - IN PROGRESS (40% Complete)
- [x] Build Getting Started page (complete with installation, features, philosophy)
- [x] Create Variables Reference with interactive previews ✅ NEW!
  - 50+ variables organized in 6 categories
  - Live color swatches
  - Interactive font size/spacing/radius demos
  - Copy-to-clipboard functionality
  - Usage guide with code examples
- [ ] Develop Component Showcase pages
- [ ] Add Examples section

**Current Priority**: Components Showcase page next

#### Phase 3: Variable Builder
- [ ] Design builder UI/UX
- [ ] Implement color picker integration
- [ ] Build CSS variable generator
- [ ] Add export functionality
- [ ] Create live preview

#### Phase 4: Polish & Deploy
- [ ] Responsive design testing
- [ ] Accessibility audit (a11y)
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] GitHub Pages deployment setup

## Technical Stack

### Core
- **Angular 18** - Framework
- **SCSS** - Styling (using UNA variables)
- **UNA Theme Kit** - CSS foundation

### Additional Libraries
- **Prism.js** - Code syntax highlighting
- **@angular/cdk** - Clipboard functionality
- **Color picker** - For variable builder (research options)

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline

## Design Tokens (Use UNA's Own Variables)

The site should demonstrate UNA by using its own CSS variables:

```css
/* Colors from UNA */
--color-primary
--color-secondary
--color-bg
--color-text

/* Typography */
--font-family
--font-size-*
--line-height-*

/* Spacing */
--space-*

/* Animations */
--animation-duration
--animation-easing
```

## Content Writing

### Tone & Voice
- Clear and concise
- Developer-friendly
- No marketing fluff
- Code-first examples

### Key Messages
1. Minimal but powerful
2. Variable-driven theming
3. Easy to customize
4. Accessibility-focused
5. Framework-agnostic

## Next Steps

1. **Import UNA CSS** into the Angular app's `styles.scss`
2. **Create routing structure** with placeholder components
3. **Build header & sidebar** navigation
4. **Start with Getting Started page** (easiest content to write)
5. **Develop Variable Reference** with interactive previews
6. **Build Variable Builder tool** (most complex feature)
7. **Polish and deploy** to GitHub Pages

## Future Enhancements (v2+)
- [ ] Playground/sandbox for testing CSS
- [ ] Community themes gallery
- [ ] Video tutorials
- [ ] Blog for updates
- [ ] npm download stats
- [ ] Interactive CSS variable editor in DevTools style

---

## Quick Commands

```bash
# Start dev server
npm start

# Build for production
npm run build

# Run in Docker
docker-compose up
```

## Notes
- Keep design minimal and clean
- Use UNA's own CSS throughout (dogfooding)
- Focus on usability and clarity
- Make the variable builder the star feature
- Ensure mobile responsiveness
- Test theme switching thoroughly
