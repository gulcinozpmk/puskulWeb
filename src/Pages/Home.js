import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { Image } from "react-bootstrap";
import "./Styles.css";
import amigurimi from "../images/amigurimi.jpg"
import aksesuar from "../images/aksesuar.jpg"
import çanta from "../images/çanta.JPG"

export default function Home() {
    const cardInfo = [
        {
            header: "Amigurimi",
            image:  amigurimi,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            header: "Aksesuar",
            image: aksesuar,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            header: "Çanta",
            image: çanta,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Card key={index} className="box">
                <Card.Header className='card-h  eader'>{card.header}</Card.Header>
                <img src={card.image} alt={`Your alt text`}/>
                {/* <Card.Img variant="top" src="holder.js/300x200" alt="Card image" /> */}
                <Card.Body>

                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    <Button variant="primary">Sayfaya Git</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
        <Container className='container'>
        <div className='grid'>
            {cardInfo.map(renderCard)}
        </div>
        </Container>
        </>


    )
}
