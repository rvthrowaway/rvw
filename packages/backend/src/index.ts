import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { graphqlApplication } from "./app";

export const main = async () => {
  // We startup our  express server app
  const app = express()
  const { createSchemaForApollo } = graphqlApplication;
  const schema = createSchemaForApollo();
  const server = new ApolloServer({ schema });

// We make sure to connect to the database before starting the server.
  await createConnection({
    type: "postgres",
    database: "reviews",
    username: "agusti",
    entities: ["./**/*.entity.ts"],
    synchronize: true,
  });;

  // starting apollo server
  await server.start();


  // applying express middleware to apollo server
  server.applyMiddleware({ app });
  const httpServer = createServer(app);

  // listening to port 4000 for incoming requests
  httpServer.listen({ port: 4000 }, () => {
    // tslint:disable-next-line: no-console
    console.info(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
  return app;
};

main();
