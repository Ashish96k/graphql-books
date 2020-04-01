const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');
require('dotenv/config');

const app = express();

const port = 4000 || process.env.PORT;

// Allow Cross Origin Request
app.use(cors());

// Mongo Connection
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('MongoDB connection success !!');
    }
  }
);

// Routes
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));
