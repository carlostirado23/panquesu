# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server (localhost:3000)
npm run build    # production build
```

No test suite configured.

## Architecture

Create React App + React Router v7. Two routes:

- `/` → `HomePage` — landing page (Navbar, Hero, About, Locations, Footer, WAButton). No cart.
- `/menu` → `MenuPage` — full menu with cart. `CartProvider` wraps this page only (not App-level).

### Data layer

All product and location data lives in `src/data/menu.js` as static exports:
- `menu` — array of `{ categoria, emoji, items[] }` where each item has `{ id, nombre, precio, descripcion, color }`.
- `sedes` — array of location objects.

WhatsApp number: `src/config.js` → `WA_NUMBER`. Order flow: user picks items → CartDrawer → OrderModal collects mesa number → builds WhatsApp message → opens `wa.me` link.

### Cart

`src/context/CartContext.jsx` exposes `{ items, add, update, clear, total, count }` via `useCart()`. Scoped to MenuPage only — never wrap at App level.

### Styling

Tailwind with custom palette defined in `tailwind.config.js`:
- Colors: `cream`, `caramel`, `espresso`, `sand`
- Fonts: `font-display` (Playfair Display), `font-body` (DM Sans)

Reusable CSS utility classes defined in `src/index.css`: `.fade-up`, `.fade-up-2/3/4`, `.card-hover`, `.nav-link`, `.wa-btn`, `.grain`, `.tab-btn`, `.modal-overlay`. Use these before adding new Tailwind animations.

### Component responsibilities

| Component | Role |
|-----------|------|
| `Menu` | Category filter tabs + product grid. Flattens `menu` data, filters by category. |
| `ProductCard` | Single item card. Calls `useCart().add` and triggers `Modal` via `onOpen` prop. |
| `Modal` | Product detail modal (opened from Menu, not from cart). |
| `CartDrawer` | Slide-in cart sidebar. Calls `onPedir` prop to open OrderModal. |
| `OrderModal` | Collects mesa number, builds WA message, opens wa.me link. |
| `WAButton` | Floating pulse button for direct WA contact. |
