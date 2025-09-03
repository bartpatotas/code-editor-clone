# 🚀 Code Editor Clone

Un editor de código moderno y completo construido con React, TypeScript y Vite. Inspirado en editores como CodePen, este proyecto permite escribir HTML, CSS y JavaScript con vista previa en tiempo real.

## ✨ Características

### 🎯 **Funcionalidades Principales**
- **Editor Triple Panel** - HTML, CSS y JavaScript separados
- **Vista Previa en Tiempo Real** - Los cambios se reflejan instantáneamente
- **Ejecución Automática** - Código que se ejecuta mientras escribes (configurable)
- **Persistencia Automática** - Tu trabajo se guarda automáticamente en localStorage
- **Temas Claro/Oscuro** - Alternancia fluida entre temas

### 🛠️ **Herramientas Avanzadas**
- **Sistema de Plantillas** - Comienza con ejemplos predefinidos
- **Guardar/Cargar Proyectos** - Exporta e importa proyectos como JSON
- **Exportar HTML** - Descarga tu proyecto como archivo HTML completo
- **Consola Integrada** - Ve los console.log de tu código
- **Manejo de Errores** - Muestra errores JavaScript en la vista previa
- **Atajos de Teclado** - Navegación rápida con shortcuts

### ⌨️ **Atajos de Teclado**
- `Ctrl/Cmd + Enter` → Ejecutar código
- `Ctrl/Cmd + S` → Guardar proyecto
- `Ctrl/Cmd + Shift + R` → Reset código
- `Ctrl/Cmd + D` → Cambiar tema
- `Ctrl/Cmd + ,` → Abrir configuración

## 🚀 Demo en Vivo

🔗 **[Ver Demo](https://code-simple-editor.vercel.app)**

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - [React 18](https://reactjs.org/) - Biblioteca de UI
  - [TypeScript](https://www.typescriptlang.org/) - Tipado estático
  - [Vite](https://vitejs.dev/) - Build tool y dev server
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

- **Librerías:**
  - [Lucide React](https://lucide.dev/) - Iconos modernos
  - LocalStorage API - Persistencia de datos

## ⚡ Instalación Rápida

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Clonar e Instalar
```bash
# Clonar el repositorio
git clone https://github.com/cmurestudillos/code-editor-clone.git

# Navegar al directorio
cd code-editor-clone

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Editor.tsx           # Componente principal del editor
│   ├── KeyboardShortcuts.tsx # Manejo de atajos de teclado
│   └── ConsolePanel.tsx     # Panel de consola integrada
├── assets/
│   └── index.css           # Estilos globales
├── App.tsx                 # Componente principal
└── main.tsx               # Punto de entrada
```

## 🎯 Plantillas Incluidas

### 🗒️ En Blanco
Comienza desde cero con un lienzo limpio.

### 🎨 Ejemplo Básico
```html
<div class="container">
  <h1>¡Hola Mundo!</h1>
  <button onclick="cambiarColor()">Cambiar Color</button>
</div>
```

### 🧮 Calculadora
Una calculadora completamente funcional con diseño moderno.

## 🔧 Configuración Avanzada

### Personalizar Plantillas
```typescript
// En App.tsx
const templates = {
  miPlantilla: {
    html: '<div>Mi HTML</div>',
    css: '.mi-clase { color: red; }',
    js: 'console.log("¡Hola!");',
    name: 'Mi Plantilla'
  }
};
```

### Modificar Temas
```css
/* En src/assets/index.css */
.bg-mi-tema { 
  background-color: #tu-color; 
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/amazing-feature`)
3. **Commit** tus cambios (`git commit -m 'Add amazing feature'`)
4. **Push** a la rama (`git push origin feature/amazing-feature`)
5. Abre un **Pull Request**

### 🐛 Reportar Bugs
Si encuentras un bug, por favor abre un [issue](https://github.com/cmurestudillos/code-editor-clone/issues) con:
- Descripción detallada del problema
- Pasos para reproducirlo
- Capturas de pantalla (si aplica)
- Información del navegador/OS

## 📝 Roadmap

### 🎯 Próximas Características
- [ ] **Colaboración en tiempo real** - Edición colaborativa
- [ ] **Más plantillas** - React, Vue, Angular
- [ ] **Autocompletado** - Sugerencias inteligentes
- [ ] **Exportar a CodePen** - Integración directa
- [ ] **Modo de presentación** - Para demos y tutoriales
- [ ] **Integración con GitHub** - Guardar en repositorios
- [ ] **Múltiples archivos** - Soporte para proyectos complejos
- [ ] **Presets de librerías** - Bootstrap, jQuery, etc.

### 🚀 Mejoras Técnicas
- [ ] **PWA** - Aplicación web progresiva
- [ ] **Monaco Editor** - Editor más avanzado
- [ ] **Web Workers** - Ejecución de código en background
- [ ] **Tests automatizados** - Jest + Testing Library

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Inspirado en [CodePen](https://codepen.io/)
- Iconos por [Lucide](https://lucide.dev/)
- Fuentes por [Google Fonts](https://fonts.google.com/)
- Comunidad de [React](https://reactjs.org/) y [Vite](https://vitejs.dev/)

## 📊 Stats del Proyecto

![GitHub stars](https://img.shields.io/github/stars/cmurestudillos/code-editor-clone?style=social)
![GitHub forks](https://img.shields.io/github/forks/cmurestudillos/code-editor-clone?style=social)
![GitHub issues](https://img.shields.io/github/issues/cmurestudillos/code-editor-clone)
![GitHub license](https://img.shields.io/github/license/cmurestudillos/code-editor-clone)

---

⭐ **¿Te gustó el proyecto? ¡Dale una estrella en GitHub!** ⭐