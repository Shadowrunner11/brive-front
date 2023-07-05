import { graphql } from '../gql'

export const GET_PAGINATED_CHARACTERS = graphql(/* GraphQL */ `
  query getPaginatedCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        next
      }
      results {
        name
        image
        species
      }
    }
  }
`)
