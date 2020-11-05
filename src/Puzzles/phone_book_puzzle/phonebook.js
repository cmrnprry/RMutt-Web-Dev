//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'
import Sound from 'react-sound';
import VoiceLine from '../../Voice clips/PhoneBook.wav'

//Image Imports
import Book from './phone_book_letter.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

class Phonebook extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight

        };
    }

    //Sets the listener
    componentDidMount() {
        if (this.state.width > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }

        //listener for window resize
        window.addEventListener('resize', this.resizeWindow);
    }

    resizeWindow() {
        // if the screen is big enough
        if (window.innerWidth > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        // if (checkList()) {
        //     cookies.set('PhonebookgChildren');
        //     this.props.history.push('/clues');
        // }
    }

    hideVoiceText() {
        document.getElementById("Voice").style.display = "none";
    }

    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Throught the wires</title>
                </Helmet>
                
                <Back />

                <Sound
                    url={VoiceLine}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.hideVoiceText}
                />

                <div id="Voice" className="subtitle">Oh, R. Mutt's number is NOT Duchamp's! That's an inconsistency if I've ever seen one! I suppose you'll have to figure out whose number it is, then. The phone book should prove invaluable! "
                </div>

                <Image src={Book} className="book-resize" />

            </Container >

        );
    }
}

export default withCookies(Phonebook);