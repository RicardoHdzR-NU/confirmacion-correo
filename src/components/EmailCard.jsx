import React from 'react'
import {Card, Button, Row, Col, Image, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import NU_logo from '../img/nu-logo.png'
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Mail from '../img/envelope-fill.svg'
import Wha from '../img/whatsapp.svg'

import './EmailCard.css'

function EmailCard(){
    return(
        <Container >
            <Row className='mb-4 justify-content-center'>
                <Image src={NU_logo} style={{width: '12rem'}}></Image>
            </Row>
            <Card className='cuerpo p-0' style={{width: '28rem'}}>
                <Card.Body className='text-start'>
                    <Card.Title className='titulo text-center'>¡Pago exitoso!</Card.Title>
                    <Card.Text className='fecha text-center'>2023-07-18 09:00:13</Card.Text>
                    <hr/>
                    <Row className='justify-content-center pago'>
                        <Col className='text-start'>Monto Total :</Col>
                        <Col className='text-end'>1 USD</Col>
                    </Row>
                    <Row className='justify-content-center contenido'>
                        <Col className='text-start'>Póliza :</Col>
                        <Col className='text-end'>ARR-343</Col>
                    </Row>
                    <Row className='justify-content-center contenido'>
                        <Col className='text-start'>ID de transacción :</Col>
                        <Col className='text-end'>40123566455</Col>
                    </Row>
                    <Row className='justify-content-center contenido'>
                        <Col className='text-start'>Método de pago :</Col>
                        <Col className='text-end'>**** **** **** "1562"</Col>
                    </Row>
                </Card.Body>
            </Card>
            <Row className='mt-4 justify-content-center' style={{width: '28rem'}}>
                <Col xs lg="3">
                    <a href='https://www.facebook.com/NationalUnityIC/'>
                        <Image width={32} height={32} src={Facebook}/>
                    </a>
                </Col>
                
                <Col xs lg="3">
                    <a href='https://www.instagram.com/nationalunity_seguros/'>
                        <Image width={32} height={32} src={Instagram}/>
                    </a>
                </Col>
                <Col xs lg="3">
                    <a href='https://www.instagram.com/nationalunity_seguros/'>
                        <Image width={32} height={32} src={Wha}/>
                    </a>
                </Col>
            </Row>
            <Row className='mt-4 justify-content-center' style={{width: '28rem'}}>
                 <Col xs='auto' className='p-1'>
                    <Image width={32} height={32} src={Mail}/> 
                </Col>
                <Col xs="auto" className='mail p-1 mt-2'>servicoalcliente@nationalunity.com.mx</Col>
            </Row>
        </Container>
        
    )
}

export default EmailCard;