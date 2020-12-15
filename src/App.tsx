import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.sass';
import Content from './ui/Content/Content';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';
import Services from './ui/ServicesUi/Services';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route component={Content} path="/" exact />
          <Route component={Services} path="/services" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



