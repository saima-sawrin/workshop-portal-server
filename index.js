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
    

    app.get('/events', async(req,res)=>{
        const query = {}
        const cursor = eventsCollection.find(query);
        const events = await (await cursor.toArray());
        res.send(events);
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