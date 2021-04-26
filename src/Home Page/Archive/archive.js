//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { instanceOf } from 'prop-types';

//Image Imports
import Logo from '../../Logos/logo_rect.png'
import ArchiveImg from '../../Navigation/archive.png'
import About from '../../Navigation/about.png'
import Menu from '../../Navigation/menu_bar.png'
import Pamphlet from '../../Navigation/flyer.png'
import flyer from '../Front/D.A.D.A._Flyer.pdf'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet";

class Archive extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = { password: cookies.get('login') || '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { cookies } = this.props;

        document.body.style.background = "#b5b5b5";
        document.body.style.overflow = "hidden";
        cookies.set('currentTab', 1)
    }

    handleChange(event) {
        const { cookies } = this.props;

        cookies.set('login', event.target.value);
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();

        var val1 = 'whoisrmutt';
        var val2 = 'nonsense';
        var input = this.state.password.toLowerCase();
        input = input.split(" ").join("");

        if (input === val1) {
            this.props.history.push('/intro')
        }
        else {
            alert("Apologies. This question is not on our agenda.");
        }
    }

    render() {
        return (
            <Container fluid="true">


                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Archive</title>
                </Helmet>
                <Image className="menu-bar" src={Menu} />
                <Link to="front">
                    <Image className="header" src={Logo} />
                </Link>

                <Row>
                    <Col>
                        <Link to="archive">
                            <Image className="page archive" src={ArchiveImg} />
                        </Link>

                        <Link to="about">
                            <Image className="page about" src={About} />
                        </Link>

                        <a href={flyer} target="_blank" rel="noopener noreferrer">
                            <Image className="page pamphlet" src={Pamphlet} />
                        </a>
                    </Col>
                </Row>

                {/* ----------------------------------------------------------------------------- */}

                <div className="password">
                    <p>
                       Welcome to the DADA knowledge center.<br />
                        What question do you seek to answer?
                    </p>


                    <form name="login"
                        style={{ margin: '5px 0px 0px 0px' }}
                        onSubmit={this.handleSubmit}>
                        <input type="text" size="17"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                            style={{ width: '40%', height: '10%' }} /><br />
                        <input type="submit" value="Submit"
                            style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                    </form>
                </div>
            </Container>

        );
    }
}

export default withCookies(Archive);