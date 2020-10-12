import React from "react";
import { connect } from "react-redux";
import classes from "./App.css";
import Deck from "./components/game/Deck";
import PlayerForm from "./player/PlayerForm";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className={classes.App}>
          <Switch>
            <Route path="/AboutUs" component={Deck} />
            <Route path="/" component={PlayerForm} />
            <Route path="/:id" component={PlayerForm} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return { matchInPlay: state.gameReducer.matchInPlay };
}

export default connect(mapStateToProps)(App);
