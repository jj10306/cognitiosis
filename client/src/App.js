import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage';
import RegisterForm from './components/RegisterForm';

import './App.scss';



function App() {
    return (
        <Router>
            <>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" exact component={RegisterForm} />
            </>
        </Router>
    );

}

export default App;

// eslint-disable-next-line
{/*<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}