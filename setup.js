const readline = require('readline')
const fs = require('fs')

const admin = require('./database/admin.json')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

if (admin.length === 1) {
    const add = () => {
        rl.question('Masukkan nomor hp owner (bukan nomor hp bot) diawali dengan 62: ', (answer) => {
            rl.question(`Apakah nomor anda sudah benar? [${answer}] (Y/N, default: Y) `, (answer1) => {
                if(answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes' || answer1 === '') {

                    admin.push(`${answer}@c.us`)
                    fs.writeFileSync('./database/admin.json', JSON.stringify(admin, null, 4))
                } else add()
            })
        })
    }

    add()
}