# Interface Design System

## Direction and Feel
- **Approach:** Premium, minimal, and reactive.
- **Vibe:** A "Studio" feel with high attention to craft and digital materials.
- **Interaction:** Interfaces should feel physical yet lightweight, reacting to user presence with subtle elevations and transitions.

## Design Tokens

### Palette
- **Canvas:** `#fbfaf7` (Main background)
- **Glass:** `rgba(255, 255, 255, 0.45)` with `backdrop-filter: blur(20px)`
- **Ink:** `#111827` (Deep dark for text and tooltips)
- **Accent:** `#2563eb` (Brand blue for interactive states)
- **Glint:** `rgba(255, 255, 255, 0.5)` (Inner highlight for glass surfaces)

### Depth & Elevation
- **Strategy:** Layered Glassmorphism.
- **Borders:** Low-opacity white for "inner glow" + very subtle dark for structure.
- **Shadows:** Layered shadows for presence (e.g., `0 10px 30px -10px rgba(0, 0, 0, 0.1)`).

### Spacing
- **Base Unit:** 4px / 8px grid.
- **Radius:** Large radii for a friendly but precise feel (999px for pills/docks, 1.35rem for cards).

## Component Patterns

### Floating Glass Dock
- **Positioning:** `fixed` bottom-center.
- **Layout:** Horizontal pill shape.
- **Material:** High-blur glass with inner highlight.
- **Interactive:** 
  - Icons scale and lift on hover.
  - Tooltips: Fixed dark labels appearing above the icons.
- **Responsive:** Hide tooltips and reduce padding on screens < 768px.

### Typography
- **Primary:** 'Inter', 'Segoe UI', sans-serif.
- **Weights:** 400 (Body), 600 (Labels/Buttons), 700 (Titles).
- **Scale:** High contrast between titles and supporting copy.
