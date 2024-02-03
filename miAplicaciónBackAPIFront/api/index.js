//Importo express y el cors
const express = require('express')
const cors = require('cors')

//Creo una aplicacion con express y el puerto que va a escuchar
const app = express()
const port = 3000

let transactionArray = []

//#region
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

//#endregion

//Cuando haya un GET a la ruta http://localhost:3000/prueba
app.get('/prueba', (req, res) =>{
    res.send(JSON.stringify(transactionArray));
    //res.send('Me hicieron un get a transactionsss')
 })

//Cuando haya un post a la ruta http://localhost:3000/prueba
app.post('/prueba', (req, res) =>{
    //Muestro en la consola lo que me esta llegando desde el FrontEnd
    let transaction = req.body;
    transactionArray.push(transaction)
    res.send(JSON.stringify("Guardada"));
    console.log(transactionArray);

 })


//Es decirle a la app que escuche o corra en este puerto en espcifico
app.listen(port, () =>{
    console.log(`Estoy ejecutandome en el puerto http://localhost:${port}`)
})