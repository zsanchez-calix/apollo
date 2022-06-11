const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

//making a type
const StoreType = new GraphQLObjectType({
  name: "StoreType", //name of type
  fields: () => ({
    store_id: { type: GraphQLFloat }, //declaring types
    location: { type: GraphQLString },
    stock_count: { type: GraphQLFloat },
    item_price: { type: GraphQLFloat },
  }),
});

module.exports = StoreType;
