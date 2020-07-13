//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

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
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet";

class Front extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.background = "#b5b5b5";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
    }

    checkCookie() {
        const { cookies } = this.props;
        var val = cookies.get('login');

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
                    <title>Dada - Home</title>
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
                            <Image className="page about" src={About} />
                        </Link>

                        <a href={flyer} target="_blank" rel="noopener noreferrer">
                            <Image className="page pamphlet" src={Pamphlet} />
                        </a>
                    </Col>
                </Row>

                <Image src={FrontImg} style={{ width: '100%', height: 'auto' }} />
            </Container>

        );
    }
}

export default withCookies(Front);