import express from'express';
const cors = require('cors')
import router from '../src/routes/routes.js'
const app = express()
    .use(express.json())
    .use(router)
    .use(cors())
    .listen(port,() =>{
        console.log(`Servidor corriendo en http://localhost:${4200}`)
    })
export default app;



