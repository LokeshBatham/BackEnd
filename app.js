const mongoo = require('mongoose')
const express = require('express')
var cors = require('cors')
const app = express()
const route = require('./Route/route.js') 
 



var corsOptions = { origin: true };

mongoo.connect('mongodb://localhost:27017/Keeper',{ useNewUrlParser: true })
.then((result)=>{ //TESTNODE Database name
console.log('connect succsfully to server')
}) 

app.use(cors())


app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }))
    //middleware
app.use(express.json());

// Middleware function to trim req.body
app.use((req, res, next) => {
    // Check if the request has a body
    if (req.body) {
        // Trim each value in req.body
        Object.keys(req.body).forEach((key) => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = req.body[key].trim();
            }
        });
    }
    console.log("HTTP method is " + req.method + ", URL -" + req.url);
    next(); // Proceed to the next middleware or route handler
});

app.use(route);

const PORT = 8000;
app.listen(PORT,()=>{
    console.log("Server Run Successfully" + PORT)
})


{/* Find Query */} 




// async function run() {
//   try {
//     const database = client.db("Learning");
//     const movies = database.collection("Products");

//     // Query for a movie that has the title 'The Room'
//     // const query = { _id: 1 } ;
//     const query = { _id: [{ _id: 3 } , { _id: 4 }] } ;

//     const options = {
//       // sort matched documents in descending order by rating
//       // sort: { "imdb.rating": -1 },
//       // Include only the `title` and `imdb` fields in the returned document
//       projection: { _id: 0, title: 1, imdb: 1 },
//     };

//     // const movie = await movies.findOne(query);
//     const movie = await movies.findOne(query);


//      // print a message if no documents were found
//      if ((await movies.countDocuments(query)) === 0) {
//       console.log("No documents found!");
//     }

//     // since this method returns the matched document, not a cursor, print it directly
//     console.log(movie);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);


{/* Insert Document */}


// async function run() {
//   try {
//     const database = client.db("Learning");
//     const haiku = database.collection("Products");
//     // create a document to insert
//     const doc = [ 
//       {
//       _id : 3, Name: "rubber", Price : 10, Stock: ""  
//       },
//       {
//         _id : 4, Name : "tape", price : 15, Stock: "" 
//       }
//   ]
//     // const result = await haiku.insertOne(doc);
//     const result = await haiku.insertMany(doc);

//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);


// {/* Update  */}

// async function run() {
//   try {
//     const database = client.db("Learning");
//     const haiku = database.collection("Products");

//     // create a filter for a movie to update
//     const filter = { _id: 3 };

//     // this option instructs the method to create a document if no documents match the filter
//     const options = { upsert: true };

//     // create a document that sets the plot of the movie
//     const updateDoc = {
//       $set: {
//         Stock: 0.75
//       },
//     };

//     // increment every document matching the filter with 2 more comments
//     // const updateDoc = {
//     //   $set: {
//     //     random_review: `After viewing I am ${
//     //       100 * Math.random()
//     //     }% more satisfied with life.`,
//     //   },
//     // };

//     const result = await haiku.updateOne(filter, updateDoc, options);
//     console.log(
//       result
//     );
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
