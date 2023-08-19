import Testimonials from "./components/Testimonials/Testimonials";
import Article from "./components/Articles/Article/Article";
import Articles from "./components/Articles/Articles";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Stats />
            <Services />
            <Articles />
            <Testimonials />
            <Contacts />
          </Route>
          <Route exact path="/articles/:articleId">
            <Article />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}
