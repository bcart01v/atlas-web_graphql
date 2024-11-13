const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb+srv://bcart0v:AuOzQQg9Qg1JDTl5@bendev.nwbbc.mongodb.net/?retryWrites=true&w=majority&appName=BenDev';

mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});