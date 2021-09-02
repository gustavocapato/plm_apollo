import { gql } from 'apollo-server';
import { postResolvers } from './post/resolves';
import { postTypeDefs } from './post/typeDefs';
import { userResolvers } from './user/resolvers';
import { usersTypeDefs } from './user/typeDefs';

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'true',
  },
};
export const typeDefs = [rootTypeDefs, usersTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
