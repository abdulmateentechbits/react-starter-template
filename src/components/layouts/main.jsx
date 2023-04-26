import { Col, Container, Row } from 'reactstrap';
import Footer from './footer';
import MainNavbar from './navbar';
import Sidebar from './sidebars/sidebar';

function Main({ children }) {
  return (
    <>
      <MainNavbar />
      <Container>
        <Sidebar />
        <Row>
          <Col md="10" className="main-content">{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Main;
