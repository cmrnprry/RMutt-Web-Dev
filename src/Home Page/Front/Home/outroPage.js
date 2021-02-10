//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Image Imports
import Logo from '../../../Logos/logo_sqr.png'
import Arrow from '../../../Navigation/arrow.png'
import Letter from './DADA_Stationery.png'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet";


class Home extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.SetLeft = this.SetLeft.bind(this);
    }

    componentDidMount() {
        document.body.style.background = "#b5b5b5";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";

        this.SetLeft();
    }

    SetLeft() {
        console.log(document.getElementById("Image").getBoundingClientRect().left)
        document.getElementById("Text").left = document.getElementById("Image").getBoundingClientRect().left + "px";
    }


    render() {
        return (
            // <div id="black">
            <Container fluid="true">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>DADA</title>
                </Helmet>

                <Link to="clues">
                    <div className="letter-container ar-letter pointer">
                        <Image id="Image" src={Letter} className='ar-letter pointer' />
                        <div id="Text" className="text-block">
                            <h4>
                                Thank you for joining the Displaced Attribution Defense Association’s research team to work on our current project: <b>Discover the true identity of the infamous R. Mutt!</b> In order to solve this conundrum, we need you to help us to (re)write(!) the wrongs of HIStory. To do this:
                            <br />
                            Log into the Archive with a simple question!
                            Once in the Archive, you have access to a dossier with a set of files containing decomposed (dada-fied?) artifacts.
                            Your job is to reassemble the evidence—collage some call it, but it’s so much more!—and identify suspects to discover the true identity of R. Mutt.
                            When you find a clue, enter it using the pen!
                            <br />
                                <b>To help with your research:</b>
                            Have a paper and pencil at the ready to take notes, draw and doodle!
                            Our operatives have left you some notes and hints to help in your investigation
                            Interpreting some evidence requires research beyond the files—feel free to search the web for additional clues on your own. The globe stamp will appear on a page when you’ve unlocked some external research.
                            Click on the red string to get to your Evidence Board to lay out your clues and discover the truth!
                            A camera icon appearing in a file means there’s a clue that can be deciphered using DADA’s special prototype Who is R. Mutt? mobile research tool. (To receive a copy, please send an email to whoisrmutt@gmail.com, including your Testflight Account information for iOS.) When used with the archives, the app will reveal new evidence, and possibly lead you to some field research!
                            <br />
                            After you’ve completed your research, arrive at your own conclusions. If you see fit, take a stand and join the movement!
                            </h4>
                        </div>
                    </div>
                </Link>
            </Container >
        );
    }
}

export default Home;