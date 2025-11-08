# Adapt Fade Text

<img src="https://img.shields.io/badge/adapt-component-blue" alt="Adapt Component"> <img src="https://img.shields.io/badge/version-1.0.0-green" alt="Version 1.0.0"> <img src="https://img.shields.io/badge/framework-%3E%3D5.5-orange" alt="Framework >=5.5">

A scroll-based text fade component for the Adapt Learning Framework that progressively reveals text as users scroll down the page. Each word smoothly transitions from a faded color to an active color when it crosses a configurable trigger point in the viewport.

## Description

The **Fade Text** component creates an engaging reading experience by animating text visibility based on scroll position. As users scroll through the content, words smoothly fade from a muted color to full visibility, creating a progressive disclosure effect that encourages continued scrolling and engagement with the content.

### Key Features

- 🎨 **Customizable Colors**: Configure both faded and active text colors
- ⚡ **Performance Optimized**: Throttled scroll handling for smooth 60fps performance
- ♿ **Accessible**: Full support for `prefers-reduced-motion` and ARIA attributes
- 🎯 **Configurable Trigger Point**: Set where text starts to fade in (viewport position)
- 🎭 **Smooth Transitions**: Adjustable transition speed and timing functions
- 📱 **Responsive**: Works seamlessly across all device sizes
- 🎨 **CSS Custom Properties**: Easy theming without touching component code
- 🔌 **Framework Integration**: Built following Adapt best practices

## Installation

### Using Adapt CLI

```bash
adapt install adapt-fadetext
```

### Manual Installation

1. Download the component
2. Extract to `src/components/` in your Adapt course
3. Run `grunt build` or `adapt dev`

## Usage

### Basic Configuration

Add the component to your `components.json`:

```json
{
  "_id": "c-105",
  "_parentId": "b-10",
  "_type": "component",
  "_component": "fadetext",
  "_classes": "",
  "_layout": "full",
  "title": "Scroll to Reveal",
  "displayTitle": "Scroll to Reveal",
  "instruction": "Scroll down to reveal the text below.",
  "body": "Your text content here. Each word will fade in as you scroll.",
  "_fadeText": {
    "_triggerPoint": 0.6,
    "_fadedColor": "#cccccc",
    "_activeColor": "#000000",
    "_transitionSpeed": "0.3s",
    "_smoothness": "ease-out",
    "_disableAnimation": false
  }
}
```

### Configuration Options

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `_component` | String | `"fadetext"` | **Required**. Component type identifier |
| `title` | String | `""` | Component title |
| `displayTitle` | String | `""` | Display title shown to users |
| `instruction` | String | `""` | Instructional text (optional) |
| `body` | String | `""` | **Required**. The text content to fade |
| `_fadeText` | Object | See below | Configuration object |

#### `_fadeText` Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `_triggerPoint` | Number | `0.6` | Viewport position (0-1) where fade begins. 0.6 = 60% from top |
| `_fadedColor` | String | `"#cccccc"` | Color of text before it fades in (CSS color value) |
| `_activeColor` | String | `"#000000"` | Color of text after it fades in (CSS color value) |
| `_transitionSpeed` | String | `"0.3s"` | CSS transition duration (e.g., "0.3s", "500ms") |
| `_smoothness` | String | `"ease-out"` | CSS timing function (e.g., "ease-out", "linear", "ease-in-out") |
| `_disableAnimation` | Boolean | `false` | Disable animation for accessibility |

## Examples

### Example 1: Fast Fade with Blue Text

```json
{
  "_component": "fadetext",
  "body": "This text will quickly fade to blue as you scroll.",
  "_fadeText": {
    "_triggerPoint": 0.5,
    "_fadedColor": "#e0e0e0",
    "_activeColor": "#0066cc",
    "_transitionSpeed": "0.15s",
    "_smoothness": "ease-in"
  }
}
```

### Example 2: Slow Dramatic Reveal

```json
{
  "_component": "fadetext",
  "body": "This text reveals slowly with dramatic timing.",
  "_fadeText": {
    "_triggerPoint": 0.7,
    "_fadedColor": "#f0f0f0",
    "_activeColor": "#1a1a1a",
    "_transitionSpeed": "1s",
    "_smoothness": "ease-in-out"
  }
}
```

### Example 3: Accessibility Mode

```json
{
  "_component": "fadetext",
  "body": "This text appears immediately without animation.",
  "_fadeText": {
    "_disableAnimation": true
  }
}
```

## Customization

### CSS Custom Properties

The component exposes CSS custom properties for easy theming. Add these to your theme's CSS:

```css
.fadetext__content {
  --fadetext-faded-color: #d3d3d3;
  --fadetext-active-color: #2c3e50;
  --fadetext-transition-speed: 0.4s;
  --fadetext-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --fadetext-font-size: 1.2rem;
  --fadetext-line-height: 1.8;
  --fadetext-font-weight: 400;
}
```

### Advanced Styling

Create a custom LESS file in your theme:

```less
// Custom fade text styling
.fadetext {
  &__content {
    background: linear-gradient(to bottom, #f9f9f9, #ffffff);
    border-radius: 8px;
    padding: 2rem;
  }
  
  &__word {
    font-family: 'Georgia', serif;
    
    &.is-active {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
```

## Accessibility

The component is built with accessibility as a priority:

### Reduced Motion Support

- Automatically detects `prefers-reduced-motion` setting
- Falls back to static display when motion is reduced
- Can be manually disabled via `_disableAnimation` option

### ARIA Support

- Uses `role="region"` for semantic structure
- Includes `aria-label` for screen reader context
- Proper focus management with visible focus indicators

### Keyboard Navigation

- Fully keyboard accessible
- No keyboard traps
- Standard tab navigation

## Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ iOS Safari (latest 2 versions)
- ✅ Chrome Android (latest 2 versions)

### Graceful Degradation

- Falls back to static text if JavaScript is disabled
- Uses Intersection Observer with fallback for older browsers
- Respects user preferences for reduced motion

## Performance

The component is optimized for performance:

- **Throttled Scroll Events**: Limited to ~60fps (16ms intervals)
- **Efficient DOM Queries**: Cached selectors, minimal reflows
- **Intersection Observer**: Used for viewport detection
- **CSS Transitions**: Hardware-accelerated animations
- **Memory Management**: Proper cleanup on component removal

## Architecture & Lessons from adapt-marqueetext

This component incorporates best practices from the `adapt-marqueetext` component:

### Component Structure
- Clear separation of Model and View
- Proper extend of ComponentView and ComponentModel
- Clean lifecycle management (preRender, postRender, remove)

### Configuration Schema
- Well-defined properties.schema with validation
- Sensible defaults for all options
- Clear help text and documentation

### Accessibility First
- Reduced motion detection and fallbacks
- ARIA attributes for screen readers
- Semantic HTML structure
- Keyboard navigation support

### Performance
- Throttled scroll handlers
- Efficient event cleanup
- Intersection Observer for visibility detection
- CSS hardware acceleration

### Theming
- CSS custom properties for easy customization
- LESS variables for theme integration
- Responsive breakpoints
- High contrast mode support

## Demo

Open `example/demo.html` in a browser to see a live demonstration with adjustable settings.

## Development

### File Structure

```
adapt-fadetext/
├── bower.json              # Component metadata
├── properties.schema       # Configuration schema
├── README.md              # This file
├── js/
│   └── adapt-fadetext.js  # Main component logic
├── less/
│   └── fadetext.less      # Component styles
├── templates/
│   └── fadetext.hbs       # Handlebars template
└── example/
    ├── example.json       # Example configuration
    └── demo.html          # Standalone demo
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Version History

### 1.0.0
- Initial release
- Scroll-based fade effect
- Configurable colors and timing
- Full accessibility support
- Responsive design
- Performance optimizations

## License

GPL-3.0

## Credits

- Inspired by the architecture of [adapt-marqueetext](https://github.com/fosterc1/adapt-margueetext)
- Built for the [Adapt Learning Framework](https://www.adaptlearning.org/)
- Developed with accessibility and performance in mind

## Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Check the [Adapt Community Forums](https://community.adaptlearning.org/)
- Review the example files in the `example/` directory

---

**Made with ❤️ for the Adapt Learning Community**
