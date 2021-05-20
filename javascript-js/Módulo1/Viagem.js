const destinos = new Array(`Salvador`, `São Paulo`, `Picos`, `Floriano`, `Cancun`)
console.log(`Imprimindo destinos:\n${destinos}\n`)

destinos.push(`Fernando de Noronha`)
console.log(`Adicionando destino:\n${destinos}\n`)

destinos.splice(0, 2)
console.log(`Removendo destinos:\n${destinos}\n`)
