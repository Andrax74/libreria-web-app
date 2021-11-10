import {Container, Row} from 'react-bootstrap';
import React, { useEffect } from 'react'

import BookCard from '../Components/BookCard';
import IPage from '../Interfaces/IPage'
import Loading from '../Components/UI/Loading';
import logging from '../Config/logging';
import useFetch from '../Hooks/useFetch';

const BooksList: React.FC<IPage> = (props) => {

    const {dati, isLoading, error} = useFetch("http://127.0.0.1:5051/api/libri/");

    useEffect(() => {
        logging.info(`Avvio ${props.name}`);
    }, [props.name])

    const viewAllBooks = dati!.map(book => 
        <BookCard 
            key =  {book?.isbn} 
            isbn = {book?.isbn} 
            immagine = {book?.immagine}
            titolo = {book?.titolo}
            autore = {book?.autore}
            prezzo = {book?.prezzo}
            sinossi = ""
        /> 
        )

    return (
        <div>
            <h1>Libri</h1>

            {isLoading && <Loading />}

            <Container fluid>
                <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
                    {!isLoading && !error && viewAllBooks}    
                </Row>
            </Container>
            {error && <div className="errmsg alert alert-danger" role="alert">{error}</div>}
        </div>
    )
}

export default BooksList
