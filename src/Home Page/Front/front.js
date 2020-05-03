//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Image Imports
import Logo from '../../Logos/logo_rect.png'
import Archive from '../../Navigation/archive.png'
import About from '../../Navigation/about.png'
import Pamphlet from '../../Navigation/flyer.png'
import flyer from './D.A.D.A._Flyer.pdf'
import Menu from '../../Navigation/menu_bar.png'
import FrontImg from './front.jpg'


//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet";



class Front extends Component {

    render() {

        return (
            <Container fluid="true">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>

                <Image className="menu-bar" src={Menu} />
                <Link to="front">
                    <Image className="header" src={Logo} />
                </Link>

                <ul>
                    <li>
                        <Link to="archive">
                            <Image className="page" src={Archive} />
                        </Link>
                    </li>
                    <li>
                        <Link to="about">
                            <Image className="page" src={About} />
                        </Link>
                    </li>
                    <li>
                        <a href={flyer} target="_blank" rel="noopener noreferrer">
                            <Image className="page" src={Pamphlet} />
                        </a>
                    </li>
                </ul>

                <Image src={FrontImg} style={{ width: '100%', height: 'auto' }} />
            </Container>

        );
    }
}

export default Front;