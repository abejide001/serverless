const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean
  } = require("graphql");

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "test",
      fields: () => ({
        message: {
          type: GraphQLBoolean,
          resolve: () => true,
        },
        number: {
            type: GraphQLString,
            resolve: () => "200"
        }
      }),
    }),
  });

  module.exports = schema