const express = require('express');

module.exports = class Server {
    constructor(port) {
        this.port = port || 3000
        this.app = express()
    }

    configure() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    addRoutes() {
        const Routes = require('./Routes')
        this.app.use('/api/hello', Routes.Hello)
        this.app.use('/api/hello2', Routes.Hello2)
    }

    start() {
        this.configure()
        this.addRoutes()

        this.app.listen(this.port, () => {
            console.log(`API rodando na porta ${this.port}`)
        })
    }
}