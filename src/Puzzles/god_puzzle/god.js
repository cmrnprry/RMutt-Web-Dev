//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import BackNav from '../../Navigation/Back.js'
import Sound from 'react-sound';
import VoiceLine from '../../Voice clips/God.wav'

//Image Imports
import One from './pipe_elements/pipe_0.png'
import Two from './pipe_elements/pipe_1.png'
import Three from './pipe_elements/pipe_2.png'
import Four from './pipe_elements/pipe_3.png'
import Five from './pipe_elements/pipe_4.png'
import Six from './pipe_elements/pipe_5.png'
import Seven from './pipe_elements/pipe_6.png'
import Eight from './pipe_elements/pipe_7.png'
import Nine from './pipe_elements/pipe_8.png'
import Question from "../../folder_elements/hints/sticky_closed.png"
import Note from "../../folder_elements/hints/sticky_XI.png"

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//track the position of an object
var x = 0, y = 0;

var pipe1, pipe2, pipe3, pipe4, allInPlace = false;

var hintOpen = false;

//sticky
const closedQ = require('../../folder_elements/hints/sticky_closed.png')
const sticky1 = require('../../folder_elements/hints/sticky_XI.png')



function SetPages() {
    //middle of screen
    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;
    var middle = window.innerWidth / 2;

    //set the base 

    document.getElementById("1").style.left = (middle - (document.getElementById("1").getBoundingClientRect().width) / 2) + "px";
    document.getElementById("1").style.top = 450 + 'px';

    //set to the left
    document.getElementById("9").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 150) + "px";
    document.getElementById("9").style.top = 40 + "px";

    document.getElementById("7").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 230) + "px";
    document.getElementById("7").style.top = 250 + "px";

    document.getElementById("4").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 30) + "px";
    document.getElementById("4").style.top = 40 + "px";

    document.getElementById("6").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 75) + "px";
    document.getElementById("6").style.top = 150 + "px";


    //set to right
    document.getElementById("5").style.top = (document.getElementById("1").getBoundingClientRect().y) - 400 + "px";
    document.getElementById("5").style.left = (document.getElementById("1").getBoundingClientRect().right) + 15 + "px";

    document.getElementById("8").style.left = (document.getElementById("1").getBoundingClientRect().right) + 135 + "px";
    document.getElementById("8").style.top = (document.getElementById("1").getBoundingClientRect().y) - 250 + "px";

    document.getElementById("2").style.left = (document.getElementById("1").getBoundingClientRect().right) + 50 + "px";
    document.getElementById("2").style.top = (document.getElementById("1").getBoundingClientRect().y) - 250 + "px";

    document.getElementById("3").style.left = (document.getElementById("1").getBoundingClientRect().right) + 250 + "px";
    document.getElementById("3").style.top = (document.getElementById("1").getBoundingClientRect().y) - 445 + "px";
}

interact('.draggable').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            checkPosition(event.target.id, x, y);
            console.log(event.target.id + " at x: " + x);
            console.log(event.target.id + " at y: " + y);
        }
    },
    inertia: false
})

function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

function checkImage1(dx, dy) {
    if ((dx >= -310 && dx <= -260) && (dy >= -105 && dy <= -73)) {
        pipe1 = true;
    }
    else {
        pipe1 = false;
    }

    console.log("Pipe 2: " + pipe1);
}

function checkImage2(dx, dy) {

    if ((dx >= -339 && dx <= -307) && (dy >= 90 && dy <= 137)) {
        pipe2 = true;
    }
    else {
        pipe2 = false;
    }



    console.log("Pipe 5: " + pipe2);
}

function checkImage3(dx, dy) {
    if ((dx >= 290 && dx <= 323) && (dy >= 20 && dy <= 41)) {
        pipe3 = true;
    }
    else {
        pipe3 = false;
    }

    console.log("Pipe 7: " + pipe3);

}

function checkImage4(dx, dy) {
    if ((dx >= 230 && dx <= 259) && (dy >= 245 && dy <= 267)) {
        pipe4 = true;
    }
    else {
        pipe4 = false;
    }

    console.log("Pipe 9: " + pipe4);
}

function checkPosition(obj, dx, dy) {
    switch (obj) {
        case "2":
            checkImage1(dx, dy);
            break;
        case "5":
            checkImage2(dx, dy);
            break;
        case "7":
            checkImage3(dx, dy);
            break;
        case "9":
            checkImage4(dx, dy);
            break;
        default:
            console.log("Something has gone terribly wrong.")
    }

    if (pipe1 && pipe2 && pipe3 && pipe4) {
        alert("God has been found");
        allInPlace = true;
    }
}



class God extends Component {
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

        //Set the pages
        SetPages();
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

    resizeWindow() {
        // if the screen is big enough
        if (window.innerWidth > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }
        SetPages();
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        if (allInPlace) {
            cookies.set('GodChildren');
            this.props.history.push('/clues');
        }
    }

    hideVoiceText() {
        document.getElementById("Voice").style.display = "none";
    }

    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Turn and turn</title>
                </Helmet>

                <BackNav />

                <Sound
                    url={VoiceLine}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.hideVoiceText}
                />

                <div id="Voice" className="subtitle">"Oh, this one's easy. You just need to find god, and if you can't find him, make him yourself. Its not hard. People have been making god for millennia."
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

                <div className="god-container" style={{ height: this.state.height }}>
                    {/* Static */}
                    <Image id="1" src={One} className="pipe-base" />

                    {/* Pages */}
                    <Image id="3" src={Three} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '100px',
                        }} />
                    <Image id="4" src={Four} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '80px',
                        }} />
                    <Image id="5" src={Five} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '200px',
                            zIndex: '15'
                        }} />
                    <Image id="6" src={Six} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '100px',
                        }} />
                    <Image id="7" src={Seven} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '55px',
                            zAxis: '5'
                        }} />
                    <Image id="8" src={Eight} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '90px',
                        }} />
                    <Image id="9" src={Nine} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '125px',
                        }} />
                    <Image id="2" src={Two} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '60px',
                        }} />
                </div>



            </Container >

        );
    }
}

export default withCookies(God);