const storeData = require("../STORE_DATA.json");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const StoreType = require("./TypeDefs/StoreType");

//Queries to be passed to GraphQLSchema
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //queries go here
    getAllStores: {
      type: new GraphQLList(StoreType), //type of query returned and of what type
      args: {
        location: { type: GraphQLString },
        item: { type: GraphQLString },
        price: { type: GraphQLFloat },
      }, //argument types
      resolve(
        parent,
        args //funcion to be executed
      ) {
        if (!args.location && !args.item && !args.price) return storeData;

        //front end default values should be location = null and price = 0
        //take location, item, price parameters
        return storeData.filter((store) => {
          //filter through stores
          if (
            //if location matches return true
            args.location &&
            store.location.toLowerCase().split(" ").join("") ===
              args.location.toLowerCase().split(" ").join("")
          ) {
            return true;
          }

          for (let i = 0; i < store.items.length; i++) {
            //iterate through stores items
            if (
              //if item is in stock and price is less than or equal to passed price return true
              store.items[i].item === args.item &&
              store.items[i].price <= args.price &&
              store.items[i].amount > 0
            ) {
              return true;
            }
          }
        });
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
        carrotsAmount: { type: GraphQLInt },
        carrotsPrice: { type: GraphQLFloat },
        applesAmount: { type: GraphQLInt },
        applesPrice: { type: GraphQLFloat },
        orangesAmount: { type: GraphQLInt },
        orangesPrice: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        storeData.push({
          store_id: storeData.length + 1,
          location: args.location,
          items: [
            {
              item: "carrots",
              price: args.carrotsPrice,
              amount: args.carrotsAmount,
            },
            {
              item: "apples",
              price: args.applesPrice,
              amount: args.applesAmount,
            },
            {
              item: "oranges",
              price: args.orangesPrice,
              amount: args.orangesAmount,
            },
          ],
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
