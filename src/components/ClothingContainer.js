import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './ClothingContainer.css';

export default function ClothingContainer({cloth, onView}) {

    let clothCards;
    let displayTitle;
    switch (onView) {
        case 'mens':
            clothCards = cloth.filter( card => card.mens)
            displayTitle = 'MENS'
            break;
        case 'womens':
            clothCards = cloth.filter( card => !card.mens)
            displayTitle = 'WOMENS'
            break;
        default:
            clothCards = cloth
            displayTitle = 'All APPAREL'
            break;
    }

    const renderCards = () => {
        return clothCards.map(card => {
            return (
            <Link
                to={`/show/${card.id}`}
                className="col-sm-6 col-md-4 col-lg-3 col-10 mt-3"
                key={card.id}
                style={{textDecoration: 'none', cursor: 'pointer'}}
            >
                <Card border="light">
                    <div className='ui slide masked reveal image'>
                        <img src={card.front_URL} alt={card.name} className='visible content'/>
                        <img src={card.back_URL} alt={card.name} className='hidden content' />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>
                            {card.name}
                        </Card.Title>
                        <Card.Text>
                            {`$${card.price}`}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            )
        })
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <h1 className='col-sm-6 col-lg-3 col-md-4 col-10 text-center align-self-center mt-4 mt-md-0 pb-0 pb-md-5' style={{ letterSpacing: '0.1rem' }}>{displayTitle}</h1>
                {renderCards()}
            </div>
        </div>
    )
}

{/* <div className='ui four column grid centered'>
    <h1 className='ui column'>{displayTitle}</h1>
    {renderCardCols()}
</div> */}
