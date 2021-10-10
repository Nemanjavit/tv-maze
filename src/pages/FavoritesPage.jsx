import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-grid-system';
import ShowCard from '../components/ShowCard';

import { ShowContext } from '../context/GlobalState';


const FavoritesPage = () => {
    const context = useContext(ShowContext)
    const { favorites } = context;


    return (
        <Container>


            <Row className="favoritesPage">
                {favorites ?
                    favorites.map(show => {
                        return <Col xs={6} sm={4} md={3} lg={2}><ShowCard show={show} /></Col>
                    })
                    : null}

            </Row>
        </Container>
    )
}

export default FavoritesPage;