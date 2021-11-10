import { Card, Col } from 'react-bootstrap'

import IBook from '../Interfaces/IBook'
import { Link } from 'react-router-dom'
import React from 'react'

const BookCard : React.FC<IBook> = ({isbn,immagine,titolo,autore,sinossi,prezzo}) => {
    return (
        <div>
            <Col key={isbn} className='d-flex'>
                <Card style={{width: '15rem'}} className='text-center p-3 m-2 mx-auto shadow'>
                    <Link to={`/books/${isbn}`}>
                        <Card.Img variant='top' src={"/images/" + immagine} alt={`Cover of ${titolo}`} />
                    </Link>
                    <Card.Title>{titolo}</Card.Title>
                    <Card.Text>by {autore}</Card.Text>
                    <Card.Text>{currencyFormat(prezzo.toString())}</Card.Text>    
                </Card> 
            </Col>
        </div>
    )
}

export default BookCard

function currencyFormat(prezzo: string): React.ReactNode {
        return '€ ' + parseFloat(prezzo).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

