var {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLEnumType,
    GraphQLNonNull,
    GraphQLInterfaceType,
    GraphQLInputObjectType
} = require('graphql');

const userSchema = require('./user');
const courseSchema = require('./course');

// 这里的意思是新建一个简单的查询
const Query=new GraphQLObjectType({
    name:'UserQuery',
    description:'用户信息查询',
    fields:()=>(Object.assign({},
        userSchema.query,
        courseSchema.query
    )),
});

// GraphQL 的大部分讨论集中在数据获取（query），但是任何完整的数据平台也都需要一个改变服务端数据的方法。
// 简单说就是，GraphQL用mutation来实现数据的修改，虽然mutation能做的query也能做，但还是要区分开这连个方法，就如同REST中约定用GET来请求数据，用其他方法来更新数据一样。
const Mutation=new GraphQLObjectType({
    name:'UserMutation',
    description:'用户信息维护',
    fields:()=>(Object.assign({},
        userSchema.mutation
        )),
});
const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

module.exports = schema;