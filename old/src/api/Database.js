const { readFileSync, writeFileSync } = require('fs')

module.exports = class Database {
    constructor(file) {
        this.file = file
        this.data = {}
        this.read()
    }

    read() {
        try {
            // Read file
            const rawData = readFileSync(this.file, 'utf8')

            // Parse JSON
            return this.data = JSON.parse(rawData)
        } catch(error) {
            console.log(`Error reading file from disk: ${error}`)
        }
    }

    write(data) {
        try {
            // Convert data object to JSON
            const tempData = JSON.stringify(this.data, null, 4)
            
            // Write file to disk
            writeFileSync(this.file, tempData, 'utf8')
        }  catch(error) {
            console.log(`Error writing file: ${error}`)
        }
    }
}