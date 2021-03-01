//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Image Imports
import Logo from '../../../Logos/logo_sqr.png'
import Arrow from '../../../Navigation/arrow.png'
import Letter from './RMuttIntroLetter.png'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet";


class Home extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.background = "#b5b5b5";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
    }


    render() {
        return (
            // <div id="black">
            <Container fluid="true">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>DADA</title>
                </Helmet>

                <Link to="clues">
                    <div className="letter-container ar-letter pointer">
                        <Image id="Image" src={Letter} className='ar-letter pointer' />
                       
                    </div>
                </Link>
            </Container >
        );
    }
}

export default Home;