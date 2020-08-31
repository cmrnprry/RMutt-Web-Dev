//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import BackNav from '../../Navigation/Back.js'


//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//Image Imports
import Unsolved from './mina_loy/o_marcel_unsolved.png'
import One from './mina_loy/o_marcel_1.png'
import Two from './mina_loy/o_marcel_2.png'
import Did from './mina_loy/did.png'
import Eyes from './mina_loy/eyes.png'
import I from './mina_loy/I.png'
import Silent from './mina_loy/keep_silent.png'
import Marcel from './mina_loy/marcel.png'
import No from './mina_loy/no.png'
import People from './mina_loy/people.png'
import See from './mina_loy/SEE.png'
import Show from './mina_loy/show_her_to_you.png'
import Tongue from './mina_loy/tongue.png'
import What from './mina_loy/what.png'
import When from './mina_loy/WHEN.png'
import Will1 from './mina_loy/will.png'
import Will2 from './mina_loy/will2.png'
import You from './mina_loy/you.png'
import Poem from './mina_loy/o_marcel_poem.png'


//track the position of an object
var x = 0, y = 0;
//list of puzzle pieces
var list = [];

//Draggable function
interact('.draggable-mina').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            console.log(event.target.classList[0] + " at x: " + x);
            console.log(event.target.classList[0] + " at y: " + y);
            checkPosition(event.target.classList[0], x, y);
        }
    },
    inertia: false
})

//Function that displays text if the array is correct
function showEndText() {
    alert("TODO: add Kieran words");
}

//Function that handles how draggable objects act when you drag them
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

//This is the ugliest if-else chain you will ever see
//I'm sure future me will be very upset but right now current me is tired 
//so this is what we're doing ¯\_(ツ)_/¯
function checkPosition(obj, dx, dy) {
    var pos = parseInt(obj);

    //line one
    if (pos === 0) {
        if ((dx >= -499 && dx <= -484) && (dy >= 26 && dy <= 43)) {
            list[0] = true;
        }
        else {
            list[0] = false;
        }
    }
    else if (pos === 1) {
        if ((dx >= -469 && dx <= -457) && (dy >= 79 && dy <= 88)) {
            list[1] = true;
        }
        else {
            list[1] = false;
        }
    }
    else if (pos === 2) {
        if ((dx >= -418 && dx <= -401) && (dy >= 138 && dy <= 148)) {
            list[2] = true;
        }
        else if ((dx >= 549 && dx <= 565) && (dy >= 102 && dy <= 113)) {
            list[2] = true;
        }
        else {
            list[2] = false;
        }
    }
    else if (pos === 3) {
        if ((dx >= -589 && dx <= -568) && (dy >= 349 && dy <= 362)) {
            list[3] = true;
        }
        else {
            list[3] = false;
        }
    }
    else if (pos === 4) {
        if ((dx >= -356 && dx <= -339) && (dy >= 358 && dy <= 366)) {
            list[4] = true;
        }
        else {
            list[4] = false;
        }
    }
    else if (pos === 5) {
        if ((dx >= -648 && dx <= -629) && (dy >= 367 && dy <= 379)) {
            list[5] = true;
        }
        else {
            list[5] = false;
        }
    }
    else if (pos === 6) {
        if ((dx >= 404 && dx <= 421) && (dy >= 162 && dy <= 172)) {
            list[6] = true;
        }
        else {
            list[6] = false;
        }
    }
    else if (pos === 7) {
        if ((dx >= -609 && dx <= -594) && (dy >= 58 && dy <= 72)) {
            list[7] = true;
        }
        else {
            list[7] = false;
        }
    }
    else if (pos === 8) {
        if ((dx >= -407 && dx <= -393) && (dy >= 267 && dy <= 276)) {
            list[8] = true;
        }
        else {
            list[8] = false;
        }
    }
    else if (pos === 9) {
        if ((dx >= 251 && dx <= 260) && (dy >= -3 && dy <= 7)) {
            list[9] = true;
        }
        else {
            list[9] = false;
        }
    }
    else if (pos === 10) {
        if ((dx >= -406 && dx <= -393) && (dy >= -28 && dy <= -16)) {
            list[10] = true;
        }
        else if ((dx >= 565 && dx <= 574) && (dy >= -61 && dy <= -54)) {
            list[10] = true;
        }
        else {
            list[10] = false;
        }

        // 10 at x: -405.6000061035156 mina_loy.js: 49 10 at y: -27.199996948242188 10 at
        // x: -394.3999938964844 mina_loy.js: 49 10 at y: -17.600021362304688
    }
    else if (pos === 11) {
        if ((dx >= -538 && dx <= -522) && (dy >= 223 && dy <= 235)) {
            list[11] = true;
        }
        else {
            list[11] = false;
        }
    }
    else if (pos === 12) {
        if ((dx >= -492 && dx <= -482) && (dy >= -48 && dy <= -40)) {
            list[12] = true;
        }
        else {
            list[12] = false;
        }
    }
    else if (pos === 13) {
        if ((dx >= 553 && dx <= 565) && (dy >= -140 && dy <= -129)) {
            list[13] = true;
        }
        else {
            list[13] = false;
        }
    }
    else if (pos === 14) {
        if ((dx >= -311 && dx <= -294) && (dy >= -133 && dy <= -122)) {
            list[14] = true;
        }
        else {
            list[14] = false;
        }
    }
    console.log("list ar index 0: " + list[0]);
    console.log("list ar index 1: " + list[1]);
    console.log("list ar index 2: " + list[2]);
    console.log("list ar index 3: " + list[3]);
    console.log("list ar index 4: " + list[4]);
    console.log("list ar index 5: " + list[5]);
    console.log("list ar index 6: " + list[6]);
    console.log("list ar index 7: " + list[7]);
    console.log("list ar index 8: " + list[8]);
    console.log("list ar index 9: " + list[9]);
    console.log("list ar index 10: " + list[10]);
    console.log("list ar index 11: " + list[11]);
    console.log("list ar index 12: " + list[12]);
    console.log("list ar index 13: " + list[13]);
    console.log("list ar index 14: " + list[14]);
}

function puzzleSolved() {
    if (list.length === 15) {
        for (var i = 0; i < 15; i++) {
            if (list[i] !== true) {
                return false;
            }
        }
        return true;
    }

    return false;
}

function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;

    document.getElementById("0").style.width = 95 + "px";
    document.getElementById("0").style.left = (middle - document.getElementById("0").getBoundingClientRect().width / 2) + "px";
    document.getElementById("0").style.top = 20 + "px";

    document.getElementById("1").style.width = 64 + "px";
    document.getElementById("1").style.left = (middle - document.getElementById("1").getBoundingClientRect().width / 2) + 10 + "px";
    document.getElementById("1").style.top = 60 + "px";

    document.getElementById("2").style.width = 50 + "px";
    document.getElementById("2").style.left = (middle - document.getElementById("2").getBoundingClientRect().width / 2) + 30 + "px";
    document.getElementById("2").style.top = 80 + "px";

    document.getElementById("3").style.width = 50 + "px";
    document.getElementById("3").style.left = (middle - document.getElementById("3").getBoundingClientRect().width / 2) + 5 + "px";
    document.getElementById("3").style.top = 95 + "px";

    document.getElementById("4").style.width = 50 + "px";
    document.getElementById("4").style.left = (middle - document.getElementById("4").getBoundingClientRect().width / 2) + 30 + "px";
    document.getElementById("4").style.top = 120 + "px";

    document.getElementById("5").style.width = 50 + "px";
    document.getElementById("5").style.left = (middle - document.getElementById("5").getBoundingClientRect().width / 2) + 5 + "px";
    document.getElementById("5").style.top = 135 + "px";

    document.getElementById("6").style.width = 70 + "px";
    document.getElementById("6").style.left = (middle - document.getElementById("6").getBoundingClientRect().width / 2) + 45 + "px";
    document.getElementById("6").style.top = 165 + "px";

    document.getElementById("7").style.width = 45 + "px";
    document.getElementById("7").style.left = (middle - document.getElementById("7").getBoundingClientRect().width / 2) + 75 + "px";
    document.getElementById("7").style.top = 185 + "px";

    document.getElementById("8").style.width = 36 + "px";
    document.getElementById("8").style.left = (middle - document.getElementById("8").getBoundingClientRect().width / 2) + "px";
    document.getElementById("8").style.top = 200 + "px";

    document.getElementById("9").style.width = 70 + "px";
    document.getElementById("9").style.left = (middle - document.getElementById("9").getBoundingClientRect().width / 2) - 10 + "px";
    document.getElementById("9").style.top = 220 + "px";

    document.getElementById("10").style.width = 48 + "px";
    document.getElementById("10").style.left = (middle - document.getElementById("10").getBoundingClientRect().width / 2) + 20 + "px";
    document.getElementById("10").style.top = 245 + "px";

    document.getElementById("11").style.width = 95 + "px";
    document.getElementById("11").style.left = (middle - document.getElementById("11").getBoundingClientRect().width / 2) - 10 + "px";
    document.getElementById("11").style.top = 265 + "px";

    document.getElementById("12").style.width = 50 + "px";
    document.getElementById("12").style.left = (middle - document.getElementById("12").getBoundingClientRect().width / 2) + 20 + "px";
    document.getElementById("12").style.top = 295 + "px";

    document.getElementById("13").style.width = 30 + "px";
    document.getElementById("13").style.left = (middle - document.getElementById("13").getBoundingClientRect().width / 2) + "px";
    document.getElementById("13").style.top = 315 + "px";

    document.getElementById("14").style.width = 125 + "px";
    document.getElementById("14").style.left = (middle - document.getElementById("14").getBoundingClientRect().width / 2) + "px";
    document.getElementById("14").style.top = 355 + "px";
}

class Mina_Loy extends Component {
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
    }

    //Sets the listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);

        SetPages();
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        document.body.style.overflow = "auto";
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        // console.log("puzzleSolved: " + puzzleSolved());
        if (puzzleSolved()) {
            alert("puzzle solved");
            cookies.set('MinaLoyChildren');
            this.props.history.push('/clues');
        }
    }

    render() {
        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The other letter</title>
                </Helmet>

                <BackNav />

                <div className="mina-containter">
                    <Image src={Marcel} id="0" onMouseUp={() => this.setChildren()} className="0 draggable-mina mina-box" />

                    <Image src={Eyes} id="1" onMouseUp={() => this.setChildren()} className="1 draggable-mina mina-box" />

                    <Image src={Will1} id="2" onMouseUp={() => this.setChildren()} className="2 draggable-mina mina-box" />

                    <Image src={See} id="3" onMouseUp={() => this.setChildren()} className="3 draggable-mina mina-box" />

                    <Image src={What} id="4" onMouseUp={() => this.setChildren()} className="4 draggable-mina mina-box" />

                    <Image src={You} id="5" onMouseUp={() => this.setChildren()} className="5 draggable-mina mina-box" />

                    <Image src={People} id="6" onMouseUp={() => this.setChildren()} className="6 draggable-mina mina-box" />

                    <Image src={Did} id="7" onMouseUp={() => this.setChildren()} className="7 draggable-mina mina-box" />

                    <Image src={No} id="8" onMouseUp={() => this.setChildren()} className="8 draggable-mina mina-box" />

                    <Image src={Tongue} id="9" onMouseUp={() => this.setChildren()} className="9 draggable-mina mina-box" />

                    <Image src={Will2} id="10" onMouseUp={() => this.setChildren()} className="10 draggable-mina mina-box" />

                    <Image src={Silent} id="11" onMouseUp={() => this.setChildren()} className="11 draggable-mina mina-box" />

                    <Image src={When} id="12" onMouseUp={() => this.setChildren()} className="12 draggable-mina mina-box" />

                    <Image src={I} id="13" onMouseUp={() => this.setChildren()} className="13 draggable-mina mina-box" />

                    <Image src={Show} id="14" onMouseUp={() => this.setChildren()} className="14 draggable-mina mina-box" />
                </div>

                <Row>
                    <Col>
                        <div className="mina-container">
                            <Image src={One} className="mina-resize demuth-shadow" />\
                        </div>
                    </Col>

                    <Col>
                        <div className="mina-container">
                            <Image src={Two} className="mina-resize demuth-shadow" style={{ width: "600px", left: "115px" }} />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default withCookies(Mina_Loy);