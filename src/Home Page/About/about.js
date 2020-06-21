//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Logo from '../../Logos/logo_rect.png'
import Archive from '../../Navigation/archive.png'
import AboutImg from '../../Navigation/about.png'
import Menu from '../../Navigation/menu_bar.png'
import AboutUs from './about.jpg'
import Pamphlet from '../../Navigation/flyer.png'
import flyer from '../Front/D.A.D.A._Flyer.pdf'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet";


class About extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.background = "#b5b5b5";
    }

    checkCookie() {
        const { cookies } = this.props;
        var val = cookies.get('login');

        console.log(val);

        if (val === 'whoisrmutt' || val === 'nonsense') {
            this.props.history.push('/clues');
        }
        else {
            this.props.history.push('/archive');
        }
    }

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

                <Row>
                    <Col>
                        <Link to="archive">
                            <Image className="page archive" src={Archive} onClick={() => this.checkCookie()} />
                        </Link>

                        <Link to="about">
                            <Image className="page about" src={AboutImg} />
                        </Link>

                        <a href={flyer} target="_blank" rel="noopener noreferrer">
                            <Image className="page pamphlet" src={Pamphlet} />
                        </a>
                    </Col>
                </Row>

                <Image src={AboutUs} style={{ width: '100%', height: 'auto' }} />
            </Container>

        );
    }
}

export default withCookies(About);