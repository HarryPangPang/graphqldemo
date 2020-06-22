var express = require('express');
var router = express.Router();
const userDao = require('../dao/userSqlMapping')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource users');
});


//graphql
var graphqlHTTP = require('express-graphql');
var userSchema =require ('../graphql/user/schema');

router.use('/graphql', graphqlHTTP({
    schema: userSchema,
    graphiql: true, //启用GraphiQL
}));



module.exports = router;
