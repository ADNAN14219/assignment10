import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-success">
                        Adnan-Healthcare-enter
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Link to="/home">
                                <button type="button" className="btn btn-outline-success mx-2">Home</button>
                            </Link>
                            <Link to="/doctors">
                                <button type="button" className="btn btn-outline-success mx-2">Doctors</button>
                            </Link>
                            <Link to="/blogs">
                                <button type="button" className="btn btn-outline-success mx-2">Blogs</button>
                            </Link>

                        </Nav>
                        {user?.email ?

                            <button onClick={logOut} type="button" className="btn btn-outline-success">Logout</button> :

                            <Link to="/login">
                                <button type="button" className="btn btn-outline-success ">Login</button>
                            </Link>
                        }
                        <Link to="/register">
                            <button type="button" className="btn btn-outline-success mx-2">SignUp</button>
                        </Link>
                        <Navbar.Text>
                            <span className="text-success">Signed in as:</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;