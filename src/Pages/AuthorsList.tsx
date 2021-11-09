import React, { useEffect } from 'react'

import IPage from '../Interfaces/IPage'
import logging from '../Config/logging';

const AuthorsList: React.FC<IPage> = (props) =>  {

    useEffect(() => {
        logging.info(`Avvio ${props.name}`);
    }, [props.name]);
    
    return (
        <div>
            <h1>Autori</h1>
        </div>
    )
}

export default AuthorsList
