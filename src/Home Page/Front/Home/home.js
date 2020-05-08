//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Image Imports
import Logo from '../../../Logos/logo_sqr.png'
import Arrow from '../../../Navigation/arrow.png'

//Web Imports
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";


class Home extends Component {

    render() {

        return (
                <div id="black">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>DADA</title>
                    </Helmet>

                    <Image className="logo" src={Logo} />
                    <Link to="front">
                        <Image className="arrow" src={Arrow} />
                    </Link>
                </div>
        );
    }
}

export default Home;