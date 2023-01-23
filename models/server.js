const express = require("express")
const cors = require("cors");
const { usersRouter } = require("../routes/users.routes");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

       this.paths = {
            users:"/api/v1/users",
            transfer:"/api/v1/tranfer",
        };

            this.middlewares()

            this.routes()

    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }


    routes() {
        this.app.use(this.paths.users, usersRouter)
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server