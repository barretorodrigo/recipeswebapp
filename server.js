const uuidv4 = require('uuid/v4');

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let datas=[
    {
        id: '1',
        username: 'barreto'
    },
    {
        id: '2',
        username: 'rodrigo'
    }
]

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
    return res.send(Object.values(users))
})

app.get('/:id', (req, res)=>{
    return res.send(datas.filter(function(user){
        if(user.id === req.params.id)
            return true
    }))
})

app.get('/user/:id', (req, res)=>{
    return res.send(users[req.params.id])
})


app.post('/messages', (req, res) => {
    const id = uuidv4();
    const text = req.body.text
    const message = {
      id,text
    };
    return res.send(message);
  });

