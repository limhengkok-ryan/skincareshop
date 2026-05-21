---
name: The Nurturer's Gallery
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#524345'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#847375'
  outline-variant: '#d7c1c4'
  surface-tint: '#8c4b5a'
  primary: '#8c4b5a'
  on-primary: '#ffffff'
  primary-container: '#df91a2'
  on-primary-container: '#632939'
  inverse-primary: '#ffb1c1'
  secondary: '#486369'
  on-secondary: '#ffffff'
  secondary-container: '#c8e5ed'
  on-secondary-container: '#4c676e'
  tertiary: '#775845'
  on-tertiary: '#ffffff'
  tertiary-container: '#c59f89'
  on-tertiary-container: '#513626'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c1'
  on-primary-fixed: '#390819'
  on-primary-fixed-variant: '#6f3443'
  secondary-fixed: '#cbe7ef'
  secondary-fixed-dim: '#afcbd3'
  on-secondary-fixed: '#021f25'
  on-secondary-fixed-variant: '#304b51'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#e7bea7'
  on-tertiary-fixed: '#2c1608'
  on-tertiary-fixed-variant: '#5d402f'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  sand-beige: '#F9EFE7'
  earth-text: '#5A3E2D'
  soft-rose: '#DF91A2'
  baby-blue: '#D8F5FD'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built upon a philosophy of "Sophisticated Care." It balances the playful innocence of early childhood with the reliable, premium quality expected by modern parents. The brand personality is soothing, trustworthy, and editorial, moving away from cluttered e-commerce layouts toward a serene, gallery-like experience.

The visual style is **Minimalist / Corporate Modern**, utilizing generous whitespace to provide "breathing room" for busy parents. It incorporates tactile elements through subtle depth and a soft, organic geometry that feels safe and approachable. The aesthetic evokes a sense of calm and organized beauty, ensuring that the product remains the hero within a professional, high-end digital environment.

## Colors

The palette is anchored in warmth and serenity. The primary color, **Soft Rose**, is used for key actions and brand moments, providing a gentle but clear focal point. **Baby Blue** acts as a calming secondary accent, ideal for supporting information and soft highlights.

The neutral foundation swaps harsh whites for a warm **Cream (#FDFBF7)**, reducing eye strain and creating a premium "paper-like" feel. Typography is primarily rendered in **Earth Text (#5A3E2D)**, a deep, warm brown that provides high legibility while appearing softer and more organic than traditional black or gray. This creates a grounded, natural contrast across the interface.

## Typography

This design system utilizes a sophisticated pairing of a classic serif and a modern geometric sans-serif. 

**Literata** is used for headlines to convey authority and warmth. Its calligraphic details provide an editorial quality that feels premium and thoughtful. **Plus Jakarta Sans** is the workhorse for body text and functional UI elements. Its slightly rounded terminals and open apertures maintain a friendly, modern tone while ensuring maximum readability on mobile devices.

To maintain the premium feel, generous line heights are applied across all body styles, and display headings use slightly tighter letter spacing for a more "locked-in" editorial look.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to preserve the intentional whitespace of the editorial style, while transitioning to a fluid model for mobile.

- **Desktop (1440px+):** 12-column grid with a 1280px max-width container. 24px gutters and 64px outer margins to create a spacious, high-end feel.
- **Tablet (768px - 1024px):** 8-column grid with 24px gutters and 40px margins.
- **Mobile (Up to 767px):** 4-column grid with 16px gutters and 20px margins.

Vertical spacing follows an 8px rhythm. Section headers should be separated from content by at least 48px to reinforce the minimalist aesthetic. Component internal padding should be generous, typically starting at 16px (2 units) for even the smallest containers.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. This design system avoids harsh blacks for shadows, instead using "Tinted Shadows"—low-opacity dropshadows that incorporate the brand's Earth Brown or Soft Rose hues to maintain warmth.

- **Level 0 (Base):** Neutral Cream background.
- **Level 1 (Cards):** Soft White surfaces with a very subtle 1px border in Sand-Beige or a diffused 12px blur shadow with 4% opacity.
- **Level 2 (Dropdowns/Popovers):** More pronounced shadows with a 24px blur and 8% opacity to signify interaction depth.

Glassmorphism is used sparingly for navigation bars to maintain content visibility during scroll, using a high-density blur (20px) and a semi-transparent Cream background.

## Shapes

The shape language is defined by **Rounded (0.5rem)** geometry. This moderate radius strikes a balance between the "bubbly" look of budget toy brands and the "sharp" look of traditional corporate finance.

- **Standard Elements:** 0.5rem (8px) for buttons, input fields, and small cards.
- **Large Containers:** 1rem (16px) for product cards and main content sections.
- **Featured Elements:** 1.5rem (24px) or full pill-shapes for decorative chips and category badges to inject a sense of playfulness.

Icons should follow a consistent line-weight (2px) with rounded caps and corners to match the UI's softness.

## Components

### Buttons
Primary buttons use a solid **Soft Rose** fill with white text and a 0.5rem radius. Secondary buttons use an outline of **Earth Text** with a transparent background. Interaction states (hover/active) should involve a subtle shift in saturation rather than brightness to keep the palette soft.

### Input Fields
Fields use the **Sand Beige** color for backgrounds rather than pure white, creating a softer contrast against the Cream page. Borders are only 1px and appear in a slightly darker beige, turning Soft Rose on focus.

### Cards
Product and content cards should be borderless, relying on Level 1 shadows for definition. They must feature generous internal padding (min 24px) to avoid a cramped appearance.

### Chips & Badges
Used for categories like "New Arrival" or "Organic." These should use the **Baby Blue** background with Earth Text to provide a distinct but harmonious accent.

### Lists
Lists should utilize Earth Brown for bullets or custom soft-checked icons to reinforce the trustworthy and detailed nature of the brand.