# 🎨 Iconos SVG Dinámicos

Sistema interactivo para personalizar iconos SVG con colores dinámicos, animaciones y descarga automática.

## ✨ Características

- **🎨 Colores Dinámicos**: Personaliza relleno y contorno independientemente
- **⚡ Animaciones CSS**: Latido de corazón, movimiento, entrada suave
- **📁 Carga de Archivos**: Optimiza automáticamente cualquier SVG
- **💾 Galería Persistente**: Los iconos optimizados se guardan para uso futuro
- **📥 Descarga Instantánea**: Genera SVG personalizado con un clic
- **👁️ Vista Previa en Vivo**: Cambios en tiempo real
- **🔄 Optimización Automática**: Convierte SVGs para usar `currentColor`

## 🚀 Demo en Vivo

[Ver Demo](https://tu-app.railway.app)

## 📱 Uso

1. **Selecciona un icono** de los disponibles o carga tu propio SVG
2. **Personaliza colores** usando los selectores de color
3. **Ajusta el contorno** con el slider de grosor
4. **Agrega animaciones** desde el menú desplegable
5. **Descarga** tu SVG personalizado
- `iconos-styles.css` - Hoja de estilos con todas las clases CSS
- `demo.html` - Página de demostración interactiva
- `README.md` - Esta documentación

## 🚀 Cómo usar

### ✅ Método recomendado: SVG inline

```html
<!-- Copia el código SVG directamente en tu HTML -->
<svg class="icon icon-medium icon-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
  <polygon fill="currentColor" points="17.32 40.05 22.37 40.05 22.37 45.1..."/>
</svg>

<!-- Con color personalizado -->
<svg class="icon icon-large" style="color: #ff6b6b;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
  <polygon fill="currentColor" points="17.32 40.05 22.37 40.05 22.37 45.1..."/>
</svg>
```

### 🔄 Método alternativo: Archivos externos

```html
<!-- Para iconos simples sin necesidad de contornos -->
<img src="icono-corazon-optimizado.svg" class="icon icon-medium icon-red" alt="Corazón">
```

### 🎨 Control dinámico con JavaScript

```javascript
// Cambiar colores programáticamente
function changeIconColor(element, fillColor, strokeColor) {
  element.style.color = fillColor;
  
  if (strokeColor && strokeColor !== 'transparent') {
    element.style.filter = `
      drop-shadow(0 0 0 ${strokeColor}) 
      drop-shadow(1px 0 0 ${strokeColor}) 
      drop-shadow(-1px 0 0 ${strokeColor}) 
      drop-shadow(0 1px 0 ${strokeColor}) 
      drop-shadow(0 -1px 0 ${strokeColor})
    `;
  }
}

const icon = document.querySelector('.icon');
changeIconColor(icon, '#ff6b6b', '#333333');
```

## 🎨 Cómo funciona

El sistema utiliza la propiedad CSS `color` para controlar el relleno de los iconos SVG y `filter: drop-shadow()` para simular contornos. Los iconos SVG usan `fill="currentColor"` que hereda el color del elemento padre.

## 📏 Clases de tamaño

- `.icon-small` - 16px
- `.icon` (defecto) - 24px  
- `.icon-medium` - 32px
- `.icon-large` - 48px
- `.icon-xl` - 64px

## 🎨 Clases de color

- `.icon-red`, `.icon-pink`, `.icon-purple`, `.icon-blue`
- `.icon-cyan`, `.icon-teal`, `.icon-green`, `.icon-lime`
- `.icon-yellow`, `.icon-amber`, `.icon-orange`, `.icon-grey`

## 🎭 Estados y efectos

- `.icon-shadow` - Sombra suave
- `.icon-glow` - Efecto de brillo
- `.icon-grayscale` - Escala de grises (color en hover)

## ✨ Animaciones

- `.animate-heartbeat` - Latido de corazón
- `.animate-shake` - Movimiento
- `.animate-fade-in` - Entrada suave

## 🔧 Personalización avanzada

### Crear tu propia variación de color:

```css
.icon-custom {
  color: #your-color;
}

/* Con contorno */
.icon-custom-outlined {
  color: #your-color;
  filter: drop-shadow(0 0 0 #stroke-color) 
          drop-shadow(1px 0 0 #stroke-color) 
          drop-shadow(-1px 0 0 #stroke-color) 
          drop-shadow(0 1px 0 #stroke-color) 
          drop-shadow(0 -1px 0 #stroke-color);
}
```

### Hover states:

```css
.icon:hover {
  color: #ff6b6b;
  transform: scale(1.1);
}
```

### Temas oscuros:

```css
.theme-dark .icon {
  color: #fff;
}
```

## 💡 Consejos importantes

1. **SVG inline vs archivos externos**: 
   - **Inline (recomendado)**: Control total de colores, mejor rendimiento
   - **Externos**: Más fácil de mantener, pero limitaciones de estilo

2. **Contornos**: Se simulan con `filter: drop-shadow()` ya que los contornos reales en SVG pixelados no se ven bien

3. **Rendimiento**: Los SVG inline cargan más rápido y permiten mayor control

4. **Accesibilidad**: Siempre añade atributos `alt` o `aria-label` apropiados

## 🎮 Demo interactiva

Abre `demo.html` en tu navegador para ver todos los ejemplos funcionando y probar el control interactivo de colores.

¡Disfruta creando iconos dinámicos y coloridos! 🎨✨
