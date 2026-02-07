const express = require ('express')
const { validateTicket } = require('../middleware/validateTicket')
const router = express.Router()

//Simple array of tickets (in-memory)

let tickets = [
    { id: 1, title: 'Test Ticket 1', description: 'This is the first ticket', status: 'pending', createdAt: new Date() },
    { id: 2, title: 'Test Ticket 2', description: 'This is the second ticket', status: 'done', createdAt: new Date() }
]

//Test Endpoint for Tickets
router.get("/", (req, res)=>{
    res.json(tickets)
})


router.post("/", validateTicket,(req, res)=>{
    const {title, description} = req.body
    //Simple ticket objet
    const newTicket = {
        id: Date.now(),
        title,
        description,
        status: 'pending',
        createdAt : new Date()
    }
    //Add tickets to the array
    tickets.push(newTicket);
    //Respond with the new  ticket 
    res.status(201).json(newTicket)
})
// UPDATE ticket by id
router.put('/:id', (req, res)=>{
    const ticketId = Number(req.params.id);
    const {title, description} = req.body;

    const ticketIndex = tickets.findIndex(ticket=> ticket.id === ticketId)
    if(ticketIndex === -1 ){
        return res.status(404).json({message: 'Ticket not found'})
    }
    //Update ticket
    tickets[ticketIndex] = {
        ...tickets[ticketIndex],
        title,
        description
    }
    res.json(tickets[ticketIndex])
})

//DELETE ticket by id
router.delete("/:id" , (res, res) => {
    const ticketId = Number(req.params.id)
    tickets.filter(ticket => ticket.id !== ticketId)
    res.json({message: 'Ticket deleted'})
})



module.exports = router