import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import SignUpModal from './SignUpModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="https://i.ibb.co/D89nt8b/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="mx-auto">
                            <Form.Control
                                style={{ width: 360, background: `url("https://static.thenounproject.com/png/101791-200.png")`, backgroundSize: 20, backgroundRepeat: 'no-repeat', backgroundPositionX: 10, backgroundPositionY: 9, textIndent: 30 }}
                                type="search"
                                placeholder="Search for your favorite groups in ATG"
                                className="me-2 rounded-pill fw-normal text-light fw-bold"
                                aria-label="Search"
                            />
                        </Form>
                        <button className='pe-5 btn btn-link text-black text-decoration-none' onClick={() => setModalShow(true)}>Create account. <span className='text-primary fw-bold'> It's free <FontAwesomeIcon icon={faCaretDown}/></span></button>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <SignUpModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default TopNav;