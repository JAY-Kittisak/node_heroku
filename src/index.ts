import express from "express";
import createServer from "./createServer";

const startServer = () => {
  const port = process.env.PORT || 3000;
  const app = express();
  const server = createServer();

  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(
      `Server is  ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

startServer();
