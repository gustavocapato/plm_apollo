import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: string
    }
  `,
});

server.listen(4003).then((url) => {
  console.log(`listen at por ${url}`);
});
