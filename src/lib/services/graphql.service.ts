import type { GraphQLClient } from 'graphql-request'
import { GET_PAGINATED_CHARACTERS } from '../../graphql/characters.gql'
import { getOrThrow } from '../../tools'
import { GetPaginatedCharactersQuery } from '../../gql/graphql'


class RickAndMortyFacadeSingleton{
  private constructor(private client: GraphQLClient){}

  private static instance: RickAndMortyFacadeSingleton

  static getInstance(client?: GraphQLClient){
    RickAndMortyFacadeSingleton.instance ??= new RickAndMortyFacadeSingleton(getOrThrow(client))

    return RickAndMortyFacadeSingleton.instance
  }

  async getPaginatedCharacters(page = 1){
    return await this.client.request(GET_PAGINATED_CHARACTERS, {
      page
    }) satisfies GetPaginatedCharactersQuery
  }
}

export default RickAndMortyFacadeSingleton.getInstance
