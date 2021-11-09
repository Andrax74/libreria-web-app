import React, { useEffect } from 'react'

import IPage from '../Interfaces/IPage'
import logging from '../Config/logging';

const Home: React.FC<IPage> = props => {

    useEffect(() => {
        logging.info(`Avvio ${props.name}`);
    }, [props.name])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
