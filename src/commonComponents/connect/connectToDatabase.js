import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const uri = 'mongodb+srv://oneebfaisal:admin@oneeb.com@cluster0.vzdutns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace YOUR_PASSWORD_HERE with your MongoDB password
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('Portfolio'); // Replace 'my-database' with your database name
    return database;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
        
      const database = await connectToDatabase();
      console.log(database, "===")
      const collection = database.collection('Reaction'); // Replace 'my-collection' with your collection name
      const data = await collection.find({}).toArray();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data from MongoDB' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
