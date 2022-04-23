const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT|| 5000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World fellow brothers!')
})

const users =[
  {id: 1, name:'Karim', email: 'karim@gmail.com', mobile: '0175656544'},
  {id: 2, name:'Rahim', email: 'Rahim@gmail.com', mobile: '0175656544'},
  {id: 3, name:'Mizan', email: 'Mizan@gmail.com', mobile: '0175656544'},
  {id: 4, name:'Bakar', email: 'Bakar@gmail.com', mobile: '0175656544'},
  {id: 5, name:'khabib', email: 'khabib@gmail.com', mobile: '0175656544'}
]

app.get('/users', (req, res) =>{
  
  if(req.query.name){
    console.log(req.query);
    const search = req.query.name.toLowerCase();
    const matched = users.filter(u=>u.name.toLocaleLowerCase().includes(search))
    res.send(matched);
  }
  else{
    res.send(users)
  }
})

app.post('/user', (req, res)=>{
  const user = req.body;
  user.id = users.length +1;
  users.push(user);
  
  res.send(user)
})


app.get('/user/:id', (req, res)=>{

  console.log(req.params)
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})