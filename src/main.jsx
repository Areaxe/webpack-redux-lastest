import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Router,Route,Link,Switch,HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import style from 'style/base.scss';
import { createStore,applyMiddleware } from 'redux';
import Reducer from './reducer';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from './util/thunk';
import AsyncComponent from './components/asyncComponent.jsx';

const Home = AsyncComponent(() => import('./containers/home.jsx'));
const TopicDetail = AsyncComponent(() => import('./containers/topicDetail.jsx'));
const NotFound = AsyncComponent(() => import('./containers/not_found.jsx'));
const ComponentTest = AsyncComponent(() => import('./containers/componentTest.jsx'));

let store = createStore(Reducer,applyMiddleware(thunk,promise));
const history = createBrowserHistory();

const Main = ()=>{
  return <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/topics" component={Home}/>
      <Route path="/topic/:id" component={TopicDetail}/>
      <Route path="/components" component={ComponentTest}/>
      <Route component={NotFound}/>
    </Switch>
}
  
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>
),document.querySelector('#root'));