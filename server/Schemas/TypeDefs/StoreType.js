const {
  graphql,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const StoreType = new GraphQLObjectType({
  name: "StoreType",
  fields: () => ({
    store_id: { type: GraphQLFloat },
    location: { type: GraphQLString },
    stock_count: { type: GraphQLFloat },
    item_price: { type: GraphQLFloat },
  }),
});

module.exports = StoreType;
