import React from 'react'
import Card from './Card'

import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const cards = [
    {
        id: 1,
        title: 'f1',
        image: image1
    },
    {
        id: 2,
        title: 'f2',
        image: image2
    },
    {
        id: 3,
        title: 'f3',
        image: image3
    },
]

function CardContainer() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" kay={card.id}>
                            <Card title={card.title} imageSRC={card.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardContainer
