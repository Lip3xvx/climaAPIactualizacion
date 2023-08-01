import mysql from 'mysql2';

export const conection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database :'clima',
    password :'alejo123abc..'
})


export const conectionBD = ()=>{
    conection.connect((err)=>{
        if (err) {
            console.log("Incorrect Conection DataBase");
        }
        else{
            console.log("Congratilations Conection DataBase");
        }
    })
}

