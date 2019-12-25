import React from "react";
import data from "./data.json";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";
import Navigation from "./components/navigation/Navigation";
import ArtistList from "./components/ArtistList/ArtistList.js";
import Artist from "./components/Artist/Artist.js";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


import { Route, Switch } from "react-router-dom";

function App() {
  console.log('call app')
  return (
    <div className="container">
      {/* <Header name="DP Fine Art" tagline="Fine American Contemporary Artworks" /> */}
      <Navigation></Navigation>
      <main>
        {/* <div className="container"> */}
        <Switch>
          <Route path="/" component={Home} exact/>
          {/* <Route path='/artists' component={ArtistList}/> */}
          <Route exact path='/artists' render={props => <ArtistList {...props} data={data}></ArtistList>}/>
          <Route exact path="/artist/:id" component={Artist}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* </div> */}
        
      </main>

      <Footer name="DP Fine Arts" tagline="c'est la vie" />
    </div>
  );
}

export default App;
