# Customization Guide - Adapt Fade Text

This guide provides detailed instructions for customizing the Fade Text component to match your design requirements.

## Table of Contents

1. [CSS Custom Properties](#css-custom-properties)
2. [Color Schemes](#color-schemes)
3. [Typography](#typography)
4. [Timing & Animation](#timing--animation)
5. [Responsive Design](#responsive-design)
6. [Advanced Customization](#advanced-customization)

---

## CSS Custom Properties

The component uses CSS custom properties (CSS variables) for easy theming. Override these in your theme's CSS file:

### Available Variables

```css
.fadetext__content {
  /* Colors */
  --fadetext-faded-color: #cccccc;      /* Color before fade */
  --fadetext-active-color: #000000;     /* Color after fade */
  
  /* Transitions */
  --fadetext-transition-speed: 0.3s;    /* Fade duration */
  --fadetext-transition-timing: ease-out; /* Timing function */
  
  /* Typography */
  --fadetext-font-size: inherit;        /* Font size */
  --fadetext-line-height: 1.6;          /* Line height */
  --fadetext-font-weight: inherit;      /* Font weight */
}
```

### Example: Global Theme Override

```css
/* In your theme's custom.css */
:root {
  --fadetext-faded-color: #e0e0e0;
  --fadetext-active-color: #2c3e50;
  --fadetext-font-size: 1.1rem;
  --fadetext-line-height: 1.8;
}
```

---

## Color Schemes

### Light Background Theme

```css
.fadetext__content {
  --fadetext-faded-color: #d0d0d0;
  --fadetext-active-color: #1a1a1a;
  background: #ffffff;
}
```

### Dark Background Theme

```css
.fadetext__content {
  --fadetext-faded-color: #4a4a4a;
  --fadetext-active-color: #ffffff;
  background: #1a1a1a;
}
```

### Brand Color Schemes

```css
/* Blue theme */
.fadetext__content.theme-blue {
  --fadetext-faded-color: #cce5ff;
  --fadetext-active-color: #0066cc;
}

/* Green theme */
.fadetext__content.theme-green {
  --fadetext-faded-color: #d4edda;
  --fadetext-active-color: #155724;
}

/* Purple theme */
.fadetext__content.theme-purple {
  --fadetext-faded-color: #e8daef;
  --fadetext-active-color: #6c3483;
}
```

### Gradient Text Effect

```css
.fadetext__word.is-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Typography

### Font Customization

```css
.fadetext__content {
  --fadetext-font-size: 1.25rem;
  --fadetext-line-height: 1.8;
  --fadetext-font-weight: 400;
}

.fadetext__text {
  font-family: 'Georgia', serif;
  letter-spacing: 0.02em;
}
```

### Large Display Text

```css
.fadetext__content.large-text {
  --fadetext-font-size: 2rem;
  --fadetext-line-height: 1.5;
  --fadetext-font-weight: 700;
}

.fadetext__content.large-text .fadetext__word {
  margin: 0 0.1em;
}
```

### Monospace Style

```css
.fadetext__content.monospace {
  --fadetext-font-size: 1rem;
  --fadetext-line-height: 1.6;
}

.fadetext__text {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
}
```

---

## Timing & Animation

### Slow Dramatic Reveal

```css
.fadetext__content.slow-reveal {
  --fadetext-transition-speed: 1.5s;
  --fadetext-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Fast Snappy Animation

```css
.fadetext__content.fast-reveal {
  --fadetext-transition-speed: 0.15s;
  --fadetext-transition-timing: ease-in;
}
```

### Custom Easing Functions

```css
/* Elastic bounce */
.fadetext__content.elastic {
  --fadetext-transition-timing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Smooth curve */
.fadetext__content.smooth {
  --fadetext-transition-timing: cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Linear */
.fadetext__content.linear {
  --fadetext-transition-timing: linear;
}
```

### Additional Effects on Active Words

```css
.fadetext__word.is-active {
  transform: scale(1.02);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

---

## Responsive Design

### Mobile Optimization

```css
@media (max-width: 768px) {
  .fadetext__content {
    --fadetext-font-size: 0.95rem;
    --fadetext-line-height: 1.6;
    padding: 1rem;
  }
}
```

### Tablet Adjustments

```css
@media (min-width: 769px) and (max-width: 1024px) {
  .fadetext__content {
    --fadetext-font-size: 1.05rem;
    padding: 1.5rem;
  }
}
```

### Desktop Enhancement

```css
@media (min-width: 1025px) {
  .fadetext__content {
    --fadetext-font-size: 1.2rem;
    --fadetext-line-height: 1.8;
    padding: 2rem;
  }
}
```

---

## Advanced Customization

### Component-Specific Classes

Add custom classes via the `_classes` attribute in your JSON:

```json
{
  "_component": "fadetext",
  "_classes": "theme-blue large-text",
  "body": "Your text here"
}
```

### Background Styling

```css
.fadetext__content {
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Word Hover Effects

```css
.fadetext__word {
  cursor: default;
  transition: color var(--fadetext-transition-speed) var(--fadetext-transition-timing),
              transform 0.2s ease;
}

.fadetext__word:hover {
  transform: translateY(-2px);
}
```

### Highlight Current Line

```css
.fadetext__word.is-active {
  position: relative;
}

.fadetext__word.is-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: currentColor;
  opacity: 0.3;
}
```

### Print Styles

```css
@media print {
  .fadetext__word {
    color: var(--fadetext-active-color) !important;
    transition: none !important;
  }
  
  .fadetext__content {
    background: none !important;
    box-shadow: none !important;
  }
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  .fadetext__content {
    --fadetext-faded-color: #666666;
    --fadetext-active-color: #000000;
  }
  
  .fadetext__word.is-active {
    font-weight: bold;
    text-decoration: underline;
  }
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  .fadetext__content {
    --fadetext-faded-color: #666666;
    --fadetext-active-color: #ffffff;
    background: #1a1a1a;
  }
}
```

### Container Padding & Spacing

```css
.fadetext__content {
  padding: 2rem;
  margin: 1rem 0;
}

.fadetext__instruction {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-left: 4px solid var(--fadetext-active-color);
}
```

---

## Configuration via JSON

Many customizations can be done directly in the component configuration:

```json
{
  "_component": "fadetext",
  "_classes": "theme-blue large-text",
  "body": "Your text content",
  "_fadeText": {
    "_triggerPoint": 0.5,
    "_fadedColor": "#cce5ff",
    "_activeColor": "#0066cc",
    "_transitionSpeed": "0.5s",
    "_smoothness": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

---

## Tips & Best Practices

1. **Performance**: Keep transitions under 1 second for best performance
2. **Contrast**: Ensure sufficient contrast between faded and active colors
3. **Readability**: Don't make the faded color too light (maintain at least 3:1 contrast ratio)
4. **Mobile**: Test your customizations on mobile devices
5. **Accessibility**: Always test with reduced motion preferences enabled
6. **Browser Testing**: Test across different browsers for consistency

---

## Need Help?

- Check the main [README.md](README.md) for component documentation
- Review the [example.json](example/example.json) for configuration examples
- Open the [demo.html](example/demo.html) for live testing

---

**Happy Customizing! 🎨**
