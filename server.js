const express = require("express");
// const expressGraphQL = require("express-graphql");
const { graphqlHTTP } = require("express-graphql");
const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require("graphql");

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloWorld",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => "Hello World"
            }
        })
    })
});

const app = express();

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(5000, () => console.log("Server is running on port 5000"));