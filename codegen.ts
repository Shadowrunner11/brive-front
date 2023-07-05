
import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/graphql/**/*.gql.ts'],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config
