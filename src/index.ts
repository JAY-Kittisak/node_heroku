import express from "express";

const startServer = () => {
  const port = process.env.PORT || 3000;
  const app = express();

  app.listen(port, () =>
    console.log(`Server is  ready at http://localhost:${port}`)
  );
};

startServer();
