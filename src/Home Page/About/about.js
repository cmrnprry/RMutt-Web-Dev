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
import { Helmet } from "react-helmet";


class About extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
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

                <ul>
                    <li>
                        <Image className="page" src={Archive} onClick={() => this.checkCookie()} />
                    </li>
                    <li>
                        <Link to="about">
                            <Image className="page" src={AboutImg} />
                        </Link>
                    </li>
                    <li>
                        <a href={flyer} target="_blank" rel="noopener noreferrer">
                            <Image className="page" src={Pamphlet} />
                        </a>
                    </li>
                </ul>

                <Image src={AboutUs} style={{ width: '100%', height: 'auto' }} />
            </Container>

        );
    }
}

export default withCookies(About);