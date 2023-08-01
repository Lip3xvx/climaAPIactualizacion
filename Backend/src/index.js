import app from './app.js';
import { conectionBD } from './db.js';
const port = 4200;

conectionBD ();

app.listen(port,()=>{
    console.log("Server : true ", port);
})