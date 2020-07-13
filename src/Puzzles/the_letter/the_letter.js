//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'

//Image Imports
import Background from '../../folder_elements/wooden.png'
import letter from './ar_letter_elements/ar_letter.jpg'
import letter_red from './ar_letter_elements/ar_letter_red.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";



class AR_Letter extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.resizeWindow = this.resizeWindow.bind(this);
        this.setChildren = this.setChildren.bind(this);
    }

    //Sets the listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerHeight, height: window.innerHeight });
    }

    setChildren() {
        const { cookies } = this.props;

        cookies.set('TheLetterChildren', "show");
        this.props.history.push('/clues');

    }

    render() {

        return (

            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The spark that started the fire</title>
                </Helmet>

                <Back />

                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={<Image src={letter} className='ar-letter' style={{ marginLeft: 'auto', marginRight: 'auto' }} />}
                    modal
                    closeOnDocumentClick
                    onClose={this.setChildren}
                >
                    <div style={{ backgroundImage: `url(${Background}`, border: 'none' }}>
                        <p className='text'>Click outside to escape window</p>
                        <Image src={letter_red} className="red-letter" />
                    </div>
                </Popup>

            </Container>
        );
    }
}

export default withCookies(AR_Letter);