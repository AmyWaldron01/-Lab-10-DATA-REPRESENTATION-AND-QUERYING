import logo from './logo.svg';
//importing react so we can change it from a class from a function
import React from 'react';
//importing css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//importing all the info from the class content
import { Content } from './components/content'
//importing all the info from the class Header
import { Header } from './components/header';
//importing all the info from the class Footer
import { Footer } from './components/footer';

//importing all the revelent info for Nav Bar
import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

import { Read } from './components/read';
import { Create } from './components/create';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//changed from fucntion to class
class App extends React.Component {
  //must included this method called render
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/read' element={<Read></Read>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
          </Routes>

          {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> 
      do ctrl + k + c to comment*/}
        </div>
      </Router>
    );
  }
}
export default App;
