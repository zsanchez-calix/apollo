const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require("graphql");
const ItemType = require("./ItemType");

const StoreType = new GraphQLObjectType({
  name: "StoreType",
  fields: () => ({
    store_id: { type: GraphQLInt },
    location: { type: GraphQLString },
    items: { type: new GraphQLList(ItemType) },
  }),
});

module.exports = StoreType;
