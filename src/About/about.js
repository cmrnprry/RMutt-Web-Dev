//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream:src/About/about.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/dada.css';
import Logo from '../Logos/logo_rect.png'
import Archive from '../Navigation/archive.png'
import AboutImg from '../Navigation/about.png'
import Menu from '../Navigation/menu_bar.png'
=======

//Image Imports
import Logo from '../../Logos/logo_rect.png'
import Archive from '../../Navigation/archive.png'
import AboutImg from '../../Navigation/about.png'
import Menu from '../../Navigation/menu_bar.png'
>>>>>>> Stashed changes:src/Home Page/About/about.js
import AboutUs from './about.jpg'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Helmet} from "react-helmet";


class About extends Component {

    render() {

        return (
            <Container fluid="true">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - About</title>
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
                            <Image className="page" src={AboutImg} />
                        </Link>
                    </li>
                </ul>

                <Image src={AboutUs} style={{ width: '100%', height: 'auto' }} />
            </Container>

        );
    }
}

export default About;