# Campo password interactivo en formularios HTML
Este proyecto implementa una entrada de formulario para contraseñas con funcionalidades de mostrar/ocultar contraseña y borrar el contenido de la contraseña utilizando HTML, CSS y JavaScript.

<span><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></span>
<span><img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/></span>

También he preparado un video, en el que te guiaré a través de los pasos necesarios para qué puedas implementarlo en tus proyectos:  

<a href="https://youtu.be/umQ5UMzsdVA">Mostrar/Ocultar Contraseña en Formulario con JavaScript</a>

<img src="https://github.com/VintaBytes/Modo-claro-y-modo-oscuro-en-tu-web/blob/main/portada.jpeg?raw=true" width="320px">

---

### Explicación del Código

Este proyecto implementa una entrada de formulario para contraseñas con funcionalidades de mostrar/ocultar contraseña y borrar el contenido de la contraseña utilizando HTML, CSS y JavaScript.

#### Archivos del Proyecto

### 1. `index.html`

Este archivo HTML define la estructura básica de la página, incluyendo un formulario con un campo de entrada de contraseña y dos íconos para mostrar/ocultar la contraseña y borrar su contenido.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario JS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form>
        <div class="contenedor-password">
            <input type="password" id="password" placeholder="Contraseña">
            <img src="imagenes/close.png" id="pass-icon" class="icon" onclick="pass()">
            <img src="imagenes/borrar.png" id="pass-borrar" class="icon" onclick="borrar()">            
        </div>
    </form>
    <script src="codigojs.js"></script>
</body>
</html>
```

### 2. `style.css`

Este archivo CSS define el estilo para el contenedor de la contraseña y los íconos.

```css
.contenedor-password {
    display: inline-flex;
    border: 2px solid #095588;
    border-radius: 10px;
    padding: 10px;
}

.icon {
    height: 20px;
    margin: 5px;
    cursor: pointer;
}
```

### 3. `codigojs.js`

Este archivo JavaScript maneja la lógica para mostrar/ocultar la contraseña y borrar el contenido del campo de entrada de contraseña.

```javascript
function borrar() {
    document.getElementById("password").value = "";
}

let flag = true;
function pass() {
    if (flag) {
        document.getElementById("password").type = "password";
        document.getElementById("pass-icon").src = "imagenes/close.png";
        flag = false;
    } else {
        document.getElementById("password").type = "text";
        document.getElementById("pass-icon").src = "imagenes/open.png";
        flag = true;
    }
}
```

### Explicación del Funcionamiento

1. **HTML (`index.html`)**:
   - Contiene un formulario con un campo de entrada de tipo contraseña (`input type="password"`) y dos íconos (`img`):
     - Uno para mostrar/ocultar la contraseña (`id="pass-icon"`).
     - Otro para borrar el contenido de la contraseña (`id="pass-borrar"`).
   - Los íconos tienen eventos `onclick` que llaman a las funciones `pass()` y `borrar()` en el archivo JavaScript.

2. **CSS (`style.css`)**:
   - Define el estilo para el contenedor de la contraseña (`.contenedor-password`), incluyendo borde, radio de borde y relleno.
   - Estiliza los íconos (`.icon`), incluyendo tamaño, margen y cursor.

3. **JavaScript (`codigojs.js`)**:
   - **Función `borrar()`**: Borra el contenido del campo de entrada de contraseña.
   - **Función `pass()`**: Alterna entre mostrar y ocultar la contraseña.
     - Usa una bandera (`flag`) para rastrear el estado actual.
     - Cambia el tipo del campo de entrada entre `password` y `text`.
     - Cambia la imagen del ícono entre "close.png" y "open.png".

### Ejecución

- Al hacer clic en el ícono de mostrar/ocultar contraseña, la función `pass()` se ejecuta, alternando entre mostrar y ocultar la contraseña.
- Al hacer clic en el ícono de borrar, la función `borrar()` se ejecuta, limpiando el campo de entrada de contraseña.
