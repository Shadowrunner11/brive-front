// TODO: react has api context to provide Inversion of Control
// lets pass this to a context

import { GraphQLClient } from 'graphql-request'
import graphqlFacade from '../services/graphql.service'
import { apiURL } from '../../config/graphql'


export const client = new GraphQLClient(apiURL)

export const grahqlClient = graphqlFacade(client)
