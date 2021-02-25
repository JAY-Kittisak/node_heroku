"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createServer_1 = __importDefault(require("./createServer"));
const startServer = () => {
    const port = process.env.PORT || 3000;
    const app = express_1.default();
    const server = createServer_1.default();
    server.applyMiddleware({ app });
    app.listen(port, () => console.log(`Server is  ready at http://localhost:${port}${server.graphqlPath}`));
};
startServer();
//# sourceMappingURL=index.js.map