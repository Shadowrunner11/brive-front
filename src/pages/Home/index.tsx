import { Hero } from "../../components/Hero";
import { Nav } from "../../components/Nav";
import { RickAndMortyList } from "../../components/RickAndMortyList";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <RickAndMortyList />
    </>
  );
}
