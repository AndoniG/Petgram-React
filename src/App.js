import React, { Suspense } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router, Redirect } from '@reach/router';
import { NavBar } from './components/Navbar'
import { useStateValue } from './Context';

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const [{ loggedIn }] = useStateValue();
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!loggedIn && <NotRegisteredUser path="/login" />}
        {!loggedIn && <Redirect noThrow from="/favs" to="/login"></Redirect>}
        {!loggedIn && <Redirect noThrow from="/user" to="/login"></Redirect>}
        {loggedIn && <Redirect noThrow from='/login' to="/"></Redirect>}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
};
