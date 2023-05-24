const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
async function run(){


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9wy3smt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


    try{
      const eventsCollection = client.db('workshop_portal').collection('events');
      const usersCollection = client.db('workshop_portal').collection('user');
    

    app.get('/events', async(req,res)=>{
        const query = {}
        const cursor = eventsCollection.find(query);
        const events = await (await cursor.toArray());
        res.send(events);
    })
    app.get('/events/:id([0-9a-fA-F]{24})', async (req, res) => {
      const id = req.params.id;
      const query = { _id:new ObjectId(id) };
      const details = await eventsCollection.findOne(query);
      console.log(details)
      res.send(details);
      });
      app.post('/events', async (req, res) => {
        const events = req.body;
        const result = await eventsCollection.insertOne(events);
        res.send(result);
        })
  
    app.get('/users', async(req,res)=>{
        const query = {}
        const cursor = usersCollection.find(query);
        const users = await (await cursor.toArray());
        res.send(users);
    })
    app.post('/users', async (req, res) => {
      const users = req.body;
      const result = await usersCollection.insertOne(users);
      res.send(result);
      })


}
finally{

}
}
run().catch(e=> console.log(e))



app.get('/', async (req, res) => {
res.send('workshop portal server is running');
})

app.listen(port, () => {console.log(` workshop portal server is running ${port}`);
})