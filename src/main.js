const Ajv = require("ajv")

const ajv = new Ajv()

const schema = {
    type: "object",
    properties: {
        nombre: {
            type: "string",
        },
        edad: {
            type: "integer"
        }
    },
    required: ["nombre"]
}

const validate = ajv.compile(schema)

const usuario = {
    nombre: "pepe",
    edad: 10
}

console.log(`Devuelve true porque el usuario cumple la estructura: ${validate(usuario)}`)

const usuarioEdadNoValida = {
    nombre: "pepe",
    edad: 10.4
}

console.log(`Devuelve false porque el usuario tiene una edad que no es un número entero: ${validate(usuarioEdadNoValida)}`)