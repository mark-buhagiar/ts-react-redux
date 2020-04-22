import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import AboutPage from './about/AboutPage';
import HomePage from './home/HomePage';
import CoursesPage from './courses/CoursesPage';

export const App: React.FC = (): JSX.Element => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/" render={(): JSX.Element => <div>404!</div>} />
            </Switch>
        </div>
    );
};

export default App;
