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
        if ((dx >= -1063 && dx <= -1049) && (dy >= -22 && dy <= -11)) {
            list[0] = true;
        }
        else {
            list[0] = false;
        }
        console.log("list ar index 0: " + list[0]);
    }
    //line two
    else if (pos === 1) {
        if ((dx >= -503 && dx <= -491) && (dy >= 55 && dy <= 68)) {
            list[1] = true;
        }
        else {
            list[1] = false;
        }

        console.log("list ar index 1: " + list[1]);

    }
    //line three
    else if (pos >= 2 && pos <= 4) {
        //2
        if (pos === 2) {
            if ((dx >= -1023 && dx <= -1009) && (dy >= 15 && dy <= 25)) {
                list[2] = true;
            }
            else {
                list[2] = false;
            }
        }

        //3
        if (pos === 3) {
            if ((dx >= -555 && dx <= -542) && (dy >= -52 && dy <= -38)) {
                list[3] = true;
            }
            else {
                list[3] = false;
            }
        }

        //4
        if (pos === 4) {
            if ((dx >= -372 && dx <= -359) && (dy >= 76 && dy <= 89)) {
                list[4] = true;
            }
            else {
                list[4] = false;
            }
        }

        console.log("list ar index 2: " + list[2]);
        console.log("list ar index 3: " + list[3]);
        console.log("list ar index 4: " + list[4]);
    }
    //line four
    else if (pos >= 5 && pos <= 7) {
        //5th pos
        if (pos === 5) {
            if ((dx >= -785 && dx <= -773) && (dy >= -88 && dy <= -78)) {
                list[5] = true;
            }
            else {
                list[5] = false;
            }
        }
        if (pos === 6) {
            if ((dx >= -986 && dx <= -976) && (dy >= -451 && dy <= -444)) {
                list[6] = true;
            }
            else {
                list[6] = false;
            }
        }
        if (pos === 7) {
            if ((dx >= -544 && dx <= -532) && (dy >= -269 && dy <= -262)) {
                list[7] = true;
            }
            else {
                list[7] = false;
            }
        }

        console.log("list ar index 5: " + list[5]);
        console.log("list ar index 6: " + list[6]);
        console.log("list ar index 7: " + list[7]);

    }
    //line five
    else if (pos === 8) {
        if ((dx >= -925 && dx <= -905) && (dy >= 127 && dy <= 147)) {
            list[8] = true;
        }
        else {
            list[8] = false;
        }

        console.log("list ar index 8: " + list[8]);

    }
    //line six
    else if (pos >= 9 && pos <= 13) {
        //9th pos
        if (pos === 9) {
            if ((dx >= -909 && dx <= -894) && (dy >= 88 && dy <= 98)) {
                list[9] = true;
            }
            else {
                list[9] = false;
            }
        }
        if (pos === 10) {
            if ((dx >= -588 && dx <= -581) && (dy >= -453 && dy <= -446)) {
                list[10] = true;
            }
            else {
                list[10] = false;
            }
        }
        if (pos === 11) {
            if ((dx >= -740 && dx <= -728) && (dy >= -215 && dy <= -208)) {
                list[11] = true;
            }
            else {
                list[11] = false;
            }
        }
        if (pos === 12) {
            if ((dx >= -727 && dx <= -720) && (dy >= 154 && dy <= 161)) {
                list[12] = true;
            }
            else {
                list[12] = false;
            }
        }
        if (pos === 13) {
            if ((dx >= -390 && dx <= -382) && (dy >= 25 && dy <= 34)) {
                list[13] = true;
            }
            else {
                list[13] = false;
            }
        }

        console.log("list ar index 9: " + list[9]);
        console.log("list ar index 10: " + list[10]);
        console.log("list ar index 11: " + list[11]);
        console.log("list ar index 12: " + list[12]);
        console.log("list ar index 13: " + list[13]);

    }
    //line seven
    else if (pos === 14) {
        if ((dx >= -709 && dx <= -695) && (dy >= -336 && dy <= -324)) {
            list[14] = true;
        }
        else {
            list[14] = false;
        }
        console.log("list ar index 14: " + list[14]);

    }
    //line eight
    else if (pos === 15) {
        if ((dx >= -585 && dx <= -577) && (dy >= 172 && dy <= 181)) {
            list[15] = true;
        }
        else {
            list[15] = false;
        }
        console.log("list ar index 15: " + list[15]);

    }
    //line nine
    else if (pos === 16) {
        if ((dx >= -869 && dx <= -853) && (dy >= 124 && dy <= 135)) {
            list[16] = true;
        }
        else {
            list[16] = false;
        }

        console.log("list ar index 16: " + list[16]);

    }
    //line ten
    else if (pos >= 17 && pos <= 19) {
        //17th pos
        if (pos === 17) {
            if ((dx >= -859 && dx <= -842) && (dy >= -102 && dy <= -89)) {
                list[17] = true;
            }
            else {
                list[17] = false;
            }
        }

        //18th pos
        if (pos === 18) {
            if ((dx >= -969 && dx <= -955) && (dy >= 42 && dy <= 55)) {
                list[18] = true;
            }
            else {
                list[18] = false;
            }
        }

        //19th pos
        if (pos === 19) {
            if ((dx >= -434 && dx <= -421) && (dy >= 40 && dy <= 51)) {
                list[19] = true;
            }
            else {
                list[19] = false;
            }
        }
        console.log("list ar index 17: " + list[17]);
        console.log("list ar index 18: " + list[18]);
        console.log("list ar index 19: " + list[19]);
    }
    //line eleven
    else if (pos >= 20 && pos <= 24) {
        //20th pos
        if (pos === 20) {
            if ((dx >= -656 && dx <= -642) && (dy >= -81 && dy <= -72)) {
                list[20] = true;
            }
            else {
                list[20] = false;
            }
        }

        //21st pos
        if (pos === 21) {
            if ((dx >= -743 && dx <= -735) && (dy >= -64 && dy <= -53)) {
                list[21] = true;
            }
            else {
                list[21] = false;
            }
        }

        //22nd pos
        if (pos === 22) {
            if ((dx >= -709 && dx <= -701) && (dy >= -126 && dy <= -114)) {
                list[22] = true;
            }
            else {
                list[22] = false;
            }
        }

        //23th pos
        if (pos === 23) {
            if ((dx >= -859 && dx <= -846) && (dy >= -243 && dy <= -23)) {
                list[23] = true;
            }
            else {
                list[23] = false;
            }
        }

        //24th pos
        if (pos === 24) {
            if ((dx >= -477 && dx <= -466) && (dy >= -241 && dy <= -232)) {
                list[24] = true;
            }
            else {
                list[24] = false;
            }
        }

        console.log("list ar index 20: " + list[20]);
        console.log("list ar index 21: " + list[21]);
        console.log("list ar index 22: " + list[22]);
        console.log("list ar index 23: " + list[23]);
        console.log("list ar index 24: " + list[24]);
    }
    //line twelve
    else if (pos >= 25 && pos <= 28) {
        //25th pos
        if (pos === 25) {
            if ((dx >= -536 && dx <= -517) && (dy >= -244 && dy <= -233)) {
                list[25] = true;
            }
            else {
                list[25] = false;
            }
        }

        //26th pos
        if (pos === 26) {
            if ((dx >= -676 && dx <= -663) && (dy >= -165 && dy <= -155)) {
                list[26] = true;
            }
            else {
                list[26] = false;
            }
        }

        //27th pos
        if (pos === 27) {
            if ((dx >= -796 && dx <= -785) && (dy >= -282 && dy <= -273)) {
                list[27] = true;
            }
            else {
                list[27] = false;
            }
        }

        //28th pos
        if (pos === 28) {
            if ((dx >= -446 && dx <= -433) && (dy >= -341 && dy <= -329)) {
                list[28] = true;
            }
            else {
                list[28] = false;
            }
        }

        console.log("list ar index 25: " + list[25]);
        console.log("list ar index 26: " + list[26]);
        console.log("list ar index 27: " + list[27]);
        console.log("list ar index 28: " + list[28]);
    }
    //line thirteen
    else if (pos >= 29 && pos <= 31) {
        //29th pos
        if (pos === 29) {
            if ((dx >= -216 && dx <= -204) && (dy >= -287 && dy <= -277)) {
                list[29] = true;
            }
            else {
                list[29] = false;
            }
        }

        //30th pos
        if (pos === 30) {
            if ((dx >= -711 && dx <= -696) && (dy >= -147 && dy <= -136)) {
                list[30] = true;
            }
            else {
                list[30] = false;
            }
        }

        //31st pos
        if (pos === 31) {
            if ((dx >= -959 && dx <= -947) && (dy >= -147 && dy <= -135)) {
                list[31] = true;
            }
            else {
                list[31] = false;
            }
        }
        console.log("list ar index 29: " + list[29]);
        console.log("list ar index 30: " + list[30]);
        console.log("list ar index 31: " + list[31]);
    }
    //line fourteen
    else if (pos >= 32 && pos <= 35) {
        //32nd pos
        if (pos === 32) {
            if ((dx >= -810 && dx <= -800) && (dy >= -146 && dy <= -137)) {
                list[32] = true;
            }
            else {
                list[32] = false;
            }
        }

        //33th pos
        if (pos === 33) {
            if ((dx >= -911 && dx <= -899) && (dy >= -300 && dy <= -293)) {
                list[33] = true;
            }
            else {
                list[33] = false;
            }
        }

        //34th pos
        if (pos === 34) {
            if ((dx >= -844 && dx <= -832) && (dy >= 59 && dy <= 68)) {
                list[34] = true;
            }
            else {
                list[34] = false;
            }
        }

        //35th pos
        if (pos === 35) {
            if ((dx >= -800 && dx <= -783) && (dy >= 173 && dy <= 185)) {
                list[35] = true;
            }
            else {
                list[35] = false;
            }
        }

        console.log("list ar index 32: " + list[32]);
        console.log("list ar index 33: " + list[33]);
        console.log("list ar index 34: " + list[34]);
        console.log("list ar index 35: " + list[35]);
    }
    //line fifteen
    else if (pos >= 36 && pos <= 40) {
        //36th pos
        if (pos === 36) {
            if ((dx >= -348 && dx <= -331) && (dy >= -131 && dy <= -118)) {
                list[36] = true;
            }
            else {
                list[36] = false;
            }
        }

        //37th pos
        if (pos === 37) {
            if ((dx >= -796 && dx <= -785) && (dy >= 197 && dy <= 206)) {
                list[37] = true;
            }
            else {
                list[37] = false;
            }
        }

        //38th pos
        if (pos === 38) {
            if ((dx >= -818 && dx <= -802) && (dy >= 75 && dy <= 89)) {
                list[38] = true;
            }
            else {
                list[38] = false;
            }
        }

        //39th pos
        if (pos === 39) {
            if ((dx >= -968 && dx <= -954) && (dy >= -48 && dy <= -38)) {
                list[39] = true;
            }
            else {
                list[39] = false;
            }
        }

        //40th pos
        if (pos === 40) {
            if ((dx >= -498 && dx <= -485) && (dy >= 137 && dy <= 147)) {
                list[40] = true;
            }
            else {
                list[40] = false;
            }
        }

        console.log("list ar index 36: " + list[36]);
        console.log("list ar index 37: " + list[37]);
        console.log("list ar index 38: " + list[38]);
        console.log("list ar index 39: " + list[39]);
        console.log("list ar index 40: " + list[40]);
    }
    //line sixteen
    else if (pos === 41) {
        if ((dx >= -473 && dx <= -465) && (dy >= 11 && dy <= 21)) {
            list[41] = true;
        }
        else {
            list[41] = false;
        }
        console.log("list ar index 41: " + list[41]);

    }
    //line seventeen
    else if (pos === 42) {
        if ((dx >= -478 && dx <= -463) && (dy >= 314 && dy <= 324)) {
            list[42] = true;
        }
        else {
            list[42] = false;
        }
        console.log("list ar index 42: " + list[42]);

    }
    //line eighteen
    else if (pos >= 43 && pos <= 48) {
        //43rd pos
        if (pos === 43) {
            if ((dx >= -542 && dx <= -527) && (dy >= 41 && dy <= 53)) {
                list[43] = true;
            }
            else {
                list[43] = false;
            }
        }

        //44th pos
        if (pos === 44) {
            if ((dx >= -748 && dx <= -728) && (dy >= 188 && dy <= 201)) {
                list[44] = true;
            }
            else {
                list[44] = false;
            }
        }

        //45th pos
        if (pos === 45) {
            if ((dx >= -980 && dx <= -968) && (dy >= 187 && dy <= 197)) {
                list[45] = true;
            }
            else {
                list[45] = false;
            }
        }

        //46th pos
        if (pos === 46) {
            if ((dx >= -608 && dx <= -595) && (dy >= -117 && dy <= -106)) {
                list[46] = true;
            }
            else {
                list[46] = false;
            }
        }

        //47th pos
        if (pos === 47) {
            if ((dx >= -412 && dx <= -397) && (dy >= -54 && dy <= -45)) {
                list[47] = true;
            }
            else {
                list[47] = false;
            }
        }

        //48th pos
        if (pos === 48) {
            if ((dx >= -538 && dx <= -527) && (dy >= -113 && dy <= -103)) {
                list[48] = true;
            }
            else {
                list[48] = false;
            }
        }
        console.log("list ar index 43: " + list[43]);
        console.log("list ar index 44: " + list[44]);
        console.log("list ar index 45: " + list[45]);
        console.log("list ar index 46: " + list[46]);
        console.log("list ar index 47: " + list[47]);
        console.log("list ar index 48: " + list[48]);
    }
}

function puzzleSolved() {
    if (list.length === 49) {
        for (var i = 0; i < 49; i++) {
            if (list[i] !== true) {
                return false;
            }
        }
        return true;
    }

    return false;
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
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        document.body.style.overflowX = "hidden";
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

                <Row>
                    <Col className="text-center">
                        <div className="mina-container">
                            <Image src={Unsolved} className="mina-resize demuth-shadow" />
                        </div>
                    </Col>

                    <Col>
                        {/* <Image src={Poem} onMouseUp={() => this.setChildren()} className="mina-box" style={{
                            left: '0px',
                            top: '0px',
                        }} /> */}

                        <Image src={Did} onMouseUp={() => this.setChildren()} className="7 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={Eyes} onMouseUp={() => this.setChildren()} className="1 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={I} onMouseUp={() => this.setChildren()} className="13 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={Silent} onMouseUp={() => this.setChildren()} className="11 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '95px'
                        }} />

                        <Image src={Marcel} onMouseUp={() => this.setChildren()} className="0 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '89px'
                        }} />

                        <Image src={No} onMouseUp={() => this.setChildren()} className="8 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={People} onMouseUp={() => this.setChildren()} className="6 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={See} onMouseUp={() => this.setChildren()} className="3 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={Show} onMouseUp={() => this.setChildren()} className="14 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '119px'
                        }} />

                        <Image src={Tongue} onMouseUp={() => this.setChildren()} className="9 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={What} onMouseUp={() => this.setChildren()} className="4 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={When} onMouseUp={() => this.setChildren()} className="12 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={Will1} onMouseUp={() => this.setChildren()} className="2 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={Will2} onMouseUp={() => this.setChildren()} className="10 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />
                        <Image src={You} onMouseUp={() => this.setChildren()} className="5 draggable-mina mina-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />
                    </Col>

                </Row>


            </Container>

        );
    }
}

export default withCookies(Mina_Loy);