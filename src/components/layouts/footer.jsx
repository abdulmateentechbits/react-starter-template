import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <p>Footer content goes here.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
