import type { GraphQLClient } from "graphql-request";
import { GET_PAGINATED_CHARACTERS } from "../../graphql/characters.gql";
import { getOrThrow } from "../../tools";
import { GetPaginatedCharactersQuery } from "../../gql/graphql";

// TODO: decouple singleton and create inyectable
class RickAndMortyFacadeSingleton {
  private constructor(private client: GraphQLClient) {}

  private static instance: RickAndMortyFacadeSingleton;

  static getInstance(client?: GraphQLClient) {
    RickAndMortyFacadeSingleton.instance ??= new RickAndMortyFacadeSingleton(
      getOrThrow(client),
    );

    return RickAndMortyFacadeSingleton.instance;
  }

  async getPaginatedCharacters(page = 1) {
    const { characters } = (await this.client.request(
      GET_PAGINATED_CHARACTERS,
      {
        page,
      },
    )) satisfies GetPaginatedCharactersQuery;

    return characters;
  }
}

export default RickAndMortyFacadeSingleton.getInstance;
