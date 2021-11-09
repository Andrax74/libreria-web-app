import { Link, RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import IPage from '../Interfaces/IPage'
import logging from '../Config/logging';

const BookShow: React.FC<IPage & RouteComponentProps<any>> = (props) => {

    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`Avvio ${props.name}`);

        let number = props.match.params.id;

        setMessage(`L'id del libro è ${number}`);

    }, [props])
    
    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    )
}

export default BookShow
