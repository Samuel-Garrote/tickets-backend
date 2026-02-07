const express = require('express')
const cors = require('cors')
const ticketsRouter = require('./routes/tickets')
const app = express();
const PORT = 5000

//Middlewares 

app.use(cors({
    origin: 'http://localhost:5173',  // URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json())

//Test Endpoint
app.get("/", (req, res)=>{
    res.send('Server is running')
})

//All tickets are handled by ticketsRouter
app.use("/tickets", ticketsRouter)
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});