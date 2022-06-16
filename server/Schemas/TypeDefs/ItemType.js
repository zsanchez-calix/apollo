const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const ItemType = new GraphQLObjectType({
  name: "ItemType",
  fields: () => ({
    item: { type: GraphQLString },
    price: { type: GraphQLFloat },
    amount: { type: GraphQLInt },
  }),
});

module.exports = ItemType;
