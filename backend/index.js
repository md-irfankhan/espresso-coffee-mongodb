const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
require('dotenv').config();


const port = 3000
app.use(cors())
app.use(express.json())
// app.use(env)

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.oenll6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const myDB = client.db("espressoCoffee");
    const myColl = myDB.collection("coffeeStore");

    app.get('/', async (req, res) => {
      const data = myColl.find()
      const result = await data.toArray()
      console.log(result);

      res.send(result)
    })
    app.get('/find/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const data = await myColl.findOne(query);
      console.log(id);

      res.send(data)
    })
    app.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const data = await myColl.deleteOne(query);


      res.send(data)
    })
    app.put('/update',async(req,res)=>{
      const data=req.body;
      const query={_id: new ObjectId(data._id)}
      const options = { upsert: true };
      const update={
        $set:{
          name:data.name,
          chef:data.chef,
          suplier:data.suplier,
          taste:data.taste,
          category:data.category,
          details:data.details,
          photo:data.photo
        }
      }
      const result = await myColl.updateOne(query, update, options);
      console.log(result);
      res.send(result)
      
    })




    app.post('/create', async (req, res) => {
      const reqBody = req.body;

      const result = await myColl.insertOne(reqBody);
      res.send(result)

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
