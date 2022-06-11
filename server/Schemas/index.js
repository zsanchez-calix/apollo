const storeData = require("../STORE_DATA.json");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = require("graphql");
const StoreType = require("./TypeDefs/StoreType");

//Queries to be passed to GraphQLSchema
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //queries go here
    getAllStores: {
      type: new GraphQLList(StoreType), //type of query returned and of what type
      args: { store_id: { type: GraphQLFloat } }, //argument types
      resolve(
        parent,
        args //funcion to be executed
      ) {
        return storeData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStore: {
      type: StoreType,
      args: {
        //id is created by server
        location: { type: GraphQLString },
        stock_count: { type: GraphQLFloat },
        item_price: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        storeData.push({
          //adding passed info into array
          store_id: storeData.length + 1,
          location: args.location,
          stock_count: args.stock_count,
          item_price: args.item_price,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
