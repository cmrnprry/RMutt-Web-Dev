//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Web Imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Helmet from 'react-helmet'


class Cacodylate extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.resizeWindow = this.resizeWindow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        console.log()
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    //Handles the submit event
    handleSubmit(event) {
        const { cookies } = this.props;

        cookies.set('TheCacodylicEyeChildren');

        //TODO: Put Keiren words here
        this.props.history.push('/clues')
    }


    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ minHeight: this.state.height, minWidth: this.state.width }}>
                {/* <Image src={Background} style={{ position: 'relative', minWidth: this.state.width, minHeight: this.state.height}}/> */}

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                {/* container for the images. */}
                {/* <div className="cacodylate-container">
                    <Image src={Original} className="original-rose" />
                    {/* <Image src={Edited} className="edited-rose" /> *

                    {/* clickable box 
                    <div className="click-box" onClick={() => this.handleSubmit()} />
                </div> */}

                <Row style={{ marginRight: '0px', marginLeft: '0px', paddingTop: ((this.state.height / 2) - 300) }}>
                    <Col>
                        <div className="original-rose" />
                    </Col>

                    <Col>
                        <div className="edited-rose">
                            <div className="click-box-eye" onClick={() => this.handleSubmit()} />
                        </div>
                    </Col>

                </Row>


            </Container>
        );
    }
}

export default withCookies(Cacodylate);