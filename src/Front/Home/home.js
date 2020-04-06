import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import Logo from '../../Logos/logo_sqr.png'
import Arrow from '../../Navigation/arrow.png'
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