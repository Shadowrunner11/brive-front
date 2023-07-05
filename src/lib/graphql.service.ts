import { GraphQLClient } from 'graphql-request'
import { apiURL } from '../config/graphql'

export const client = new GraphQLClient(apiURL)
