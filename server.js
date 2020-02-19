const express = require('express')
const app = express()

let users={
    1:{
        id: '1',
        username: 'barreto'
    },
    2:{
        id: '2',
        username: 'rodrigo'
    }
}

app.listen(3000, function(){
    console.log('Hello World')
})

app.get('/', (req, res)=>{
    //res.send('Hello World!')
    return res.send(Object.values(users))
})