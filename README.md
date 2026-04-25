# 🥐 Panquesú – App Web

Página web oficial de **Panquesú**, la panadería artesanal de Montería, Colombia.

## Tecnologías

- React 18 (JSX, sin TypeScript)
- Tailwind CSS v3
- Create React App

## Estructura del proyecto

```
panquesu/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── menu.js          ← Productos y sedes (editar aquí)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Modal.jsx
│   │   ├── About.jsx
│   │   ├── Locations.jsx
│   │   ├── Footer.jsx
│   │   └── WAButton.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# 3. Iniciar servidor de desarrollo
npm start
```

La app abre en http://localhost:3000

## Personalización

### Cambiar número de WhatsApp
Busca `WA_NUMBER` en:
- `src/components/Modal.jsx`
- `src/components/Footer.jsx`
- `src/components/WAButton.jsx`

### Agregar productos
Edita el array en `src/data/menu.js`.

### Cambiar colores
Los colores personalizados están en `tailwind.config.js`.
