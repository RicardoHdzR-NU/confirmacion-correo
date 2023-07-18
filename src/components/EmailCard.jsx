import React from 'react'
import {Card, Button, Row, Col, Image, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import NU_logo from '../img/nu-logo.png'
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Mail from '../img/envelope-fill.svg'

import './EmailCard.css'

function EmailCard(){
    return(
        <Container >
            <Row className='mb-4 justify-content-center'>
                <Image src={NU_logo} style={{width: '18rem'}}></Image>
            </Row>
            <Card className='cuerpo p-0' style={{width: '25rem'}}>
                <Card.Body className='text-start'>
                    <Card.Title className='titulo justify-content-center'>Confirmación de Transacción</Card.Title>
                    <Card.Text className='contenido'>
                    National Unity Insurance Company<br/>
                    One Huebner Parke 15303, Huebner Road<br/>
                    San Antonio, Tx. 78248<br/>
                    "2023-07-18 09:00:13"<br/>
                    SALE<br/>
                    ACCOUNT :
                    **** **** **** "1562"<br/>
                    APPROVAL : "0JX5R1"<br/>
                    TRANS ID : "40123566455"<br/>
                    REFERENCE :  "ARR-343"<br/>
                    TOTAL PAID $ : "1" USD<br/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row className='mt-4 justify-content-center' style={{width: '25rem'}}>
                <Col xs lg="5">
                    <a href='https://www.facebook.com/NationalUnityIC/'>
                        <Image width={32} height={32} src={Facebook}/>
                    </a>
                </Col>
                
                <Col xs lg="5">
                    <a href='https://www.instagram.com/nationalunity_seguros/'>
                        <Image width={32} height={32} src={Instagram}/>
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center mt-4' style={{width: '25rem'}}>
                 <Col md="auto">
                    <Image width={32} height={32} src={Mail}/> 
                </Col>
                <Col md="auto" className='text-start contenido mt-1'>servicoalcliente@nationalunity.com.mx</Col>
            </Row>
        </Container>
        
    )
}

export default EmailCard;