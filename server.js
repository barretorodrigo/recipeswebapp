const express = require('express')
const app = express()

let users=[
    {
        id: '1',
        username: 'barreto'
    },
    {
        id: '2',
        username: 'rodrigo'
    }
]

app.listen(3000, function(){
    console.log('Hello World')
})

app.get('/', (req, res)=>{
    //res.send('Hello World!')
    return res.send(Object.values(users))
})

app.get('/:id', (req, res)=>{
    //res.send('Hello World!')
    return res.send(users.filter(function(user){
        if(user.id === req.params.id)
            return true
    }))
})
