// find react library and assing the library to the variable React
import React from 'react';
// react knwos how to work with react components, the functionalities to render into the dom are separeted to another
// library called react_dom
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBBfb3qH16pS8lNgpvL2aqZGkfGizLtnm0';

// create a new component
// this component should produce some HTML

// can have many instances of the App this function is a factory that produces instances that get rendered to the DOM
// in react with ES6 we can declare a function by using "=>" instead the function keyword
const App = () => {
  // the component name div is a component class but using it inside jsx transforms it into a component instance
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this componet's generated HTML and put it on the page.
// (in the DOM)

// <App /> creates an instance of App and passes it to ReactDOM.render
ReactDOM.render(<App />, document.querySelector('.container'));
