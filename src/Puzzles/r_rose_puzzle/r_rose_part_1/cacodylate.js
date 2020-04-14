import React, { Component } from 'react';
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Stylesheets/dada.css';
import '../../../Stylesheets/index.css';
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

import Background from '../../../folder_elements/wooden.png'
import Change from './r_rose_change.png'
import Edited from './r_rose_edited.png'
import Original from './r_rose_original.jpg'





class Cacodylate extends Component {

    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: '100%', position: 'relative'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                <Image src={Original} className="original-rose"/>
                <Image src={Edited} className="edited-rose" />
                

            </Container>

        );
    }
}

export default Cacodylate;