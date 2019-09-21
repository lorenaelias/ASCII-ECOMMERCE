const express = require("express")
const bodyparser = require("body-parser")
const router = require("./router")

class App
{
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){

    }

    routes(){
        this.express.use(router)
    }
}

module.exports = new App().express