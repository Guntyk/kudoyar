import Testimonials from "./components/Testimonials/Testimonials";
import Articles from "./components/Articles/Articles";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
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
        <Articles />
        <Testimonials />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
