import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express();
app.use(express.json());
app.use(cors());


app.listen(8800,()=> console.log('Servidor on 8800'))

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'ReactCRUD'
});

app.get("/usuarios",(req,res)=>{
    const q ="SELECT * FROM usuarios"
    db.query(q, (err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.post("/usuarios",(req, res)=>{
    const q = "INSERT INTO usuarios(`nombre`,`numDocumento`,`email`,`contraseña`)values(?)";
    const values =[
        req.body.nombre,
        req.body.numDocumento,
        req.body.email,
        req.body.contraseña
    ]

    db.query(q,[values],(err ,data)=>{
        if(err) return res.json(err)
        return res.json("Almacenado")
    })
})