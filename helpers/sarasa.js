const fs = require('fs');

try {
    const tablica = async (base, lista = false, hasta) => {
        let i = 1;
        let start = "";
        for (i; i <= hasta; i++) {
            start += `${base} x ${i} = ${base * i} \n`;
        }

        if (lista) {
            console.log(start);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, start);
            start = "";
            
        }
        return `Tabla del ${base} creada`
    }
    module.exports = {
        tablica
    }
}

catch (err) {
    throw err;
}