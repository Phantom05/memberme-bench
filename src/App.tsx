import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { Page } from '@pages/index';

const Header = loadable(
  () => import(/* webpackChunkName: "Header" */ './components/header/MainHeader'),
);
const Footer = loadable(
  () => import(/* webpackChunkName: "Footer" */ './components/footer/Footer'),
);
const Home = loadable(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const News = loadable(() => import(/* webpackChunkName: "News" */ './pages/News'));
const SignUp = loadable(() => import(/* webpackChunkName: "SignUp" */ './pages/SignUp'));
const ResetPassword = loadable(
  () => import(/* webpackChunkName: "ResetPassword" */ './pages/ResetPassword'),
);

export default function App() {
  return (
    <Page title="Brnad">
      {/* <Route path="/" render={() => <Header />} /> */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/resetpassword" render={() => <ResetPassword />} />
      </Switch>
      {/* <Footer /> */}
    </Page>
  );
}
