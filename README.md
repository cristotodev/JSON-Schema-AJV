# Validación de JSON con AJV y JSON Schema

Este repositorio contiene una aplicación JavaScript que muestra cómo validar JSON utilizando la librería AJV con JSON Schema y sus plugins.

## ¿Qué es JSON Schema?

JSON Schema es un lenguaje para describir la estructura y el contenido de los objetos JSON. Proporciona un conjunto de reglas que definen la estructura esperada del JSON, incluidos tipos de datos, restricciones y validaciones. Esto permite validar fácilmente los datos JSON para garantizar su conformidad con un esquema predefinido.

## Requisitos

- [Node.js](https://nodejs.org/en) instalado en su sistema
- npm

## Instalación

Para instalar las dependencias, ejecute el siguiente comando en su terminal:

```bash
npm install
```

## Uso

Hemos utilizado el [plugin de AJV](https://github.com/ajv-validator/ajv-formats) que permite validar formatos como email, IP, hora, etc., asegurando que los datos cumplan con las reglas especificadas en el esquema JSON.

### Ejecución del ejemplo del video

Para ejecutar el ejemplo del video, utilice el siguiente comando:

```bash
npm run video
```

### Ejemplos de validación de formatos

Para ejecutar ejemplos que validen el formato del JSON, use el siguiente comando:

```bash
npm run format
```

## Contribución
¡Las contribuciones son bienvenidas! Si encuentra algún problema o tiene alguna sugerencia, no dude en abrir un problema o enviar un PR.

