//React Imports
import React, { Component } from 'react';
import Sound from 'react-sound';
import { withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'

//Image Imports
import Background from '../../folder_elements/wooden.png'
import letter from './ar_letter_elements/ar_letter.png'
import letter_red from './ar_letter_elements/ar_letter_red.png'
import Question from "../../folder_elements/hints/sticky_closed.png"
import One from "../../folder_elements/hints/sticky_I.png"
import BackImage from '../../folder_elements/back_button.png'
import VoiceLine from '../../Voice clips/TheLetter.wav'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

var hintOpen = false;

//sticky
const closedQ = require('../../folder_elements/hints/sticky_closed.png')
const sticky1 = require('../../folder_elements/hints/sticky_I.png')

class AR_Letter extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            hints: [closedQ, sticky1],

        };

        this.resizeWindow = this.resizeWindow.bind(this);
        this.setChildren = this.setChildren.bind(this);
        this.OpenHint = this.OpenHint.bind(this);
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
                    <title>The spark that started the fire</title>
                </Helmet>

                <Back />

                <Sound
                    url={VoiceLine}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.hideVoiceText}
                />

                <div id="Voice" className="subtitle">"Hello artist, it's Bet. Just leaving some messages to help you with your tasks. Anyways, I think this is one of my favorite records in our archive. Overlapping layers of ephemeral meaning. It's so fitting, isn't it? Anyway. I'd suggest you solve this one by... process of elimination, so to speak. Translation and reflection. Hope that helps."
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

                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={<Image src={letter} className='ar-letter pointer' style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} />}
                    modal
                    closeOnDocumentClick
                //onClose={this.setChildren}
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