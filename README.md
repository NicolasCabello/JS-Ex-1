# JS-Ex-1 — Desafío JavaScript

Ejercicio de manipulación del DOM con JavaScript vanilla: una tarjeta de producto con botones para modificar la cantidad y calcular el total a pagar.

## Qué se hizo

- Se implementó la lógica de los botones **+** y **-** para sumar o restar unidades en la cantidad del producto.
- Al cambiar la cantidad, el total se recalcula automáticamente multiplicando el **precio base** (400.000) por la cantidad actual.
- El botón **-** no permite bajar la cantidad por debajo de 0.
- Se seleccionan los elementos del DOM con `querySelector` y se actualizan con `innerHTML`.

## Estructura del proyecto

```
JS-Ex-1/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── estilos.css
    └── js/
        └── index.js
```

## Demo

El proyecto está deployado en GitHub Pages:

**https://nicolascabello.github.io/JS-Ex-1/**
