import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
      </main>
    </>
  );
}
