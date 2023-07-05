
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { RickAndMortyList } from './components/RickAndMortyList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <Nav />
      <Hero />
      <RickAndMortyList />
     </QueryClientProvider>
    </>
  )
}

export default App
