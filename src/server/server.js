// const express = require('express')
import  express from 'express'
// const path = require('path')
import path from 'path'

export const startServer = (options)=>{
    const{port,public_path= 'public'}= options
    
    const app= express()

    //PARA PODER USAR middlesware se usa la palabra use(express)
    app.use(express.static(public_path)) //Contenido estatico disponible

    app.get('*', (req,res)=>{
        const indexPath = path.join.apply(_dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })
}

// module.exports={
//     startServer
// }