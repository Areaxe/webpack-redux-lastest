import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Router,Route,Link,Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './containers/home.jsx';
import List from './containers/list.jsx';
import style from 'style/base.scss';
import { createStore,applyMiddleware } from 'redux';
import TopicReducer from './reducer/topicReducer';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';


let store = createStore(TopicReducer,applyMiddleware(thunk,promiseMiddleware));
const history = createBrowserHistory();
const Main = ()=>{
  return <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/list" component={List}/>
    </Switch>
  </Router>
}
  
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
),document.querySelector('#root'));


// react-router React Router 核心
// react-router-dom 用于 DOM 绑定的 React Router
// react-router-native 用于 React Native 的 React Router
// react-router-redux React Router 和 Redux 的集成
// react-router-config 静态路由配置的小助手