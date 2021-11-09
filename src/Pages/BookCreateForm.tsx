import React, { useEffect } from 'react'

import IPage from '../Interfaces/IPage'
import logging from '../Config/logging';

const BookCreateForm: React.FC<IPage> = (props) => {

    useEffect(() => {
        logging.info(`Avvio ${props.name}`);
    }, [props.name]) 
    
    return (
        <div>
            <h1>Inserimento Libro</h1>
        </div>
    )
}

export default BookCreateForm
