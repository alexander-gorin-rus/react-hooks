import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import useStatePage from './pages/useStatePage';
import { Header } from './components/header';
import useEffectPage from './pages/useEffectPage';
import useRefPage from './pages/useRefPage';
import useMemoHook from './pages/useMemoHook';
import useCallBackHook from './pages/useCallBackHook';
import useContextHook from './pages/useContextHook';
import useCustomHook from './pages/useCustomHook';


function App() {
  return (
    <Router>
    <Fragment> 
      <Header />
      <div className='container'>
       
        <Switch>
            <Route exact path="/useStateHook" component={useStatePage}/> 
            <Route exact path="/useEffectHook" component={useEffectPage}/> 
            <Route exact path="/useRefHook" component={useRefPage}/> 
            <Route exact path="/useMemoHook" component={useMemoHook}/>
            <Route exact path="/useCallBackHook" component={useCallBackHook}/>
            <Route exact path="/useContext" component={useContextHook}/>
            <Route exact path="/customHook" component={useCustomHook}/>
        </Switch>
        </div>
    </Fragment>
  </Router>
  );
}

export default App;
