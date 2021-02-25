"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type User {
    id: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`;
const users = [
    { id: "123", username: "Jane", email: "jane@test.com", password: "abc" },
];
const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        createUser: (_, args) => {
            const { username, email, password } = args;
            const newUser = {
                id: "345",
                username,
                email,
                password,
            };
            users.push(newUser);
            return newUser;
        },
    },
};
exports.default = () => {
    return new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
};
//# sourceMappingURL=createServer.js.map