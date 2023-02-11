import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>
        <Routes>
          <Route path='/' element={<div>메인페이지임</div>} />
          <Route path='/detail' element={<div>상세페이지임</div>} />
        </Routes>
      </Router>

      <div className="main-bg" />
      <Container>
        <Row>
          {
            shoes.map((a, i) => {
              return (
                <Goods shoes={shoes[i]} i={i}></Goods>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Goods(props) {
  return (
    <Col md="4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}







export default App;
