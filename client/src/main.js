import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<App />, document.getElementById('app'));
/*ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='about' component={About} />
            <Route path='reg' component={Reg} />

        </Route>
    </Router>,
    document.getElementById('root')
)*/
/*ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));*/
