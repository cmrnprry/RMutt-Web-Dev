//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'
import Sound from 'react-sound';
import VoiceLine from '../../Voice clips/Elsa.wav'

//Image Imports
// import ElsaPhoto from './elsa_puzzle_elements/elsa.png'
import ElsaPuzzle from './elsa_puzzle_elements/elsapuzzle.png'
import Question from "../../folder_elements/hints/sticky_closed.png"
import One from "../../folder_elements/hints/sticky_VIII.png"

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

var hintOpen = false;

//sticky
const closedQ = require('../../folder_elements/hints/sticky_closed.png')
const sticky1 = require('../../folder_elements/hints/sticky_VIII.png')

class Elsa extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,            
            hints: [closedQ, sticky1],

        };

        this.OpenHint = this.OpenHint.bind(this);
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

    OpenHint() {
        var img = document.getElementById("Hint");

        if (hintOpen)
        {
            img.setAttribute('src', this.state.hints[0])
        }
        else {
            img.setAttribute('src', this.state.hints[1])
        }

        hintOpen = !hintOpen;
    }


    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Baronness of Nonsense</title>
                </Helmet>

                <Back />

                <Sound
                    url={VoiceLine}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.hideVoiceText}
                />

                <div id="Voice" className="subtitle">"Hey. It's Bet again. They let me build this part of the archive myself, so I can definitely lend you a hand. For this part, just observe. She has something to say, if you have eyes to listen."
                </div>

                 {/* Hint */}
                <Image id="Hint" src={Question}
                    style={{
                        width: "15%",
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        zIndex: "9999",
                        margin: "15px",
                        // boxShadow: "rgb(0 0 0 / 42%) 5px 5px 10px 5px",
                    }}
                    onClick={this.OpenHint}
                />

                <Image src={ElsaPuzzle} className="book-resize" />

            </Container >

        );
    }
}

export default withCookies(Elsa);