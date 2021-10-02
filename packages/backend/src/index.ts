import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { graphqlApplication } from './app';

export const startup = async () => {
const { createSchemaForApollo } = graphqlApplication;
const schema = createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

const app = express();

  await server.start()
  server.applyMiddleware({ app });
  const httpServer = createServer(app);
  httpServer.listen({ port: 4000 }, () => {
    // tslint:disable-next-line: no-console
    console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
  return app
}
// Init graphql server startup
startup()
