const express = require('express');
const {graphqlHTTP} = require('express-graphql');
var cors = require('cors')
const schema = require('./schema/schema')

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000,()=>{
    console.log('welcome buddy');
})