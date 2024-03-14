const Ajv = require("ajv")
const addFormats = require("ajv-formats")

const ajv = new Ajv()
addFormats(ajv)

const schema = {
    type: "object",
    properties: {
        nombre: {
            type: "string"
        },
        edad: {
            type: "integer"
        },
        email: {
            type: "string",
            format: "email"
        },
        ipv4: {
            type: "string",
            format: "ipv4"
        },
        web: {
            type: "string",
            format: "url",
        }
    },
    required: ["nombre"],
}

const validate = ajv.compile(schema);

const usuario = {
    nombre: "pepe",
    edad: 10,
    email: "cristotodev@email.com"
}

console.log(`Devuelve true porque el email tiene un formato válido ${validate(usuario)}`)


usuario.web = "https://github.com/ajv-validator/ajv-formats"
console.log(`Devuelve true porque el formato de la web es una URI ${validate(usuario)}`)

usuario.ipv4 = "2.2.3."
console.log(`Devuelve false porque la ip tiene un formato no válido ${validate(usuario)}`)