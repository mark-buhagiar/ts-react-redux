import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="jumbotron">
                <h1>PluralSight Admin</h1>
                <p>React, redux and react-router</p>
                <Link to="about" className="btn btn-primary btn-lg">
                    Learn more
                </Link>
            </div>
        </>
    );
};

export default HomePage;
