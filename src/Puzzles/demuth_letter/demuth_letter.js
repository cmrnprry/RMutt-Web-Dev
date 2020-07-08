//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//Image Imports
import Under from './demuth_letter_images/demuth_letter_under.png'
import DL_1 from './demuth_letter_images/demuth_letter_overlays/8th.png'
import DL_2 from './demuth_letter_images/demuth_letter_overlays/1917.png'
import DL_3 from './demuth_letter_images/demuth_letter_overlays/a.png'
import DL_4 from './demuth_letter_images/demuth_letter_overlays/anything.png'
import DL_5 from './demuth_letter_images/demuth_letter_overlays/appreciate.png'
import DL_6 from './demuth_letter_images/demuth_letter_overlays/article.png'
import DL_7 from './demuth_letter_images/demuth_letter_overlays/avenue.png'
import DL_8 from './demuth_letter_images/demuth_letter_overlays/bre.png'
import DL_9 from './demuth_letter_images/demuth_letter_overlays/ce.png'
import DL_10 from './demuth_letter_images/demuth_letter_overlays/central.png'
import DL_11 from './demuth_letter_images/demuth_letter_overlays/co.png'
import DL_12 from './demuth_letter_images/demuth_letter_overlays/columbus.png'
import DL_13 from './demuth_letter_images/demuth_letter_overlays/day.png'
import DL_14 from './demuth_letter_images/demuth_letter_overlays/dear.png'
import DL_15 from './demuth_letter_images/demuth_letter_overlays/demuth.png'
import DL_16 from './demuth_letter_images/demuth_letter_overlays/duchamp.png'
import DL_17 from './demuth_letter_images/demuth_letter_overlays/ew.png'
import DL_18 from './demuth_letter_images/demuth_letter_overlays/exhibition.png'
import DL_19 from './demuth_letter_images/demuth_letter_overlays/fou.png'
import DL_20 from './demuth_letter_images/demuth_letter_overlays/grand.png'
import DL_21 from './demuth_letter_images/demuth_letter_overlays/henry.png'
import DL_22 from './demuth_letter_images/demuth_letter_overlays/independents.png'
import DL_23 from './demuth_letter_images/demuth_letter_overlays/independents2.png'
import DL_24 from './demuth_letter_images/demuth_letter_overlays/it.png'
import DL_25 from './demuth_letter_images/demuth_letter_overlays/it_was_not_exhibited.png'
import DL_26 from './demuth_letter_images/demuth_letter_overlays/ittee.png'
import DL_27 from './demuth_letter_images/demuth_letter_overlays/ity.png'
import DL_28 from './demuth_letter_images/demuth_letter_overlays/j.png'
import DL_29 from './demuth_letter_images/demuth_letter_overlays/lptu.png'
import DL_30 from './demuth_letter_images/demuth_letter_overlays/marcel.png'
import DL_31 from './demuth_letter_images/demuth_letter_overlays/move.png'
import DL_32 from './demuth_letter_images/demuth_letter_overlays/mutt.png'
import DL_33 from './demuth_letter_images/demuth_letter_overlays/next.png'
import DL_34 from './demuth_letter_images/demuth_letter_overlays/of.png'
import DL_35 from './demuth_letter_images/demuth_letter_overlays/ork.png'
import DL_36 from './demuth_letter_images/demuth_letter_overlays/rich.png'
import DL_37 from './demuth_letter_images/demuth_letter_overlays/s.png'
import DL_38 from './demuth_letter_images/demuth_letter_overlays/salon.png'
import DL_39 from './demuth_letter_images/demuth_letter_overlays/schuyler.png'
import DL_40 from './demuth_letter_images/demuth_letter_overlays/super.png'
import DL_41 from './demuth_letter_images/demuth_letter_overlays/tain.png'
import DL_42 from './demuth_letter_images/demuth_letter_overlays/the.png'
import DL_43 from './demuth_letter_images/demuth_letter_overlays/the2.png'
import DL_44 from './demuth_letter_images/demuth_letter_overlays/the3.png'
import DL_45 from './demuth_letter_images/demuth_letter_overlays/this.png'
import DL_46 from './demuth_letter_images/demuth_letter_overlays/would.png'
import DL_47 from './demuth_letter_images/demuth_letter_overlays/y.png'
import DL_48 from './demuth_letter_images/demuth_letter_overlays/you.png'
import DL_49 from './demuth_letter_images/demuth_letter_overlays/you2.png'

//track the position of an object
var x = 0, y = 0;
//list of puzzle pieces
var list = [];

//Draggable function
interact('.draggable-demuth').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            // console.log(event.target.classList[0] + " at x: " + x);
            // console.log(event.target.classList[0] + " at y: " + y);
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
        if ((dx >= -502 && dx <= -494) && (dy >= 60 && dy <= 68)) {
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
            if ((dx >= -372 && dx <= -363) && (dy >= 78 && dy <= 87)) {
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
        if ((dx >= -921 && dx <= -911) && (dy >= 135 && dy <= 141)) {
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

class Demuth extends Component {
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
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        // console.log("puzzleSolved: " + puzzleSolved());
        if (puzzleSolved()) {
            alert("puzzle solved");
            cookies.set('DemuthLetterChildren');
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
                <Row>
                    <Col>
                        {/* Base Letter */}
                        <div className="demuth-container">
                            <Image src={Under} className="demuth-resize demuth-shadow" />
                        </div>
                    </Col>

                    <Col>
                        <Image src={DL_2} onMouseUp={() => this.setChildren()} className="1 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '55px',
                        }} />

                        <Image src={DL_1} onMouseUp={() => this.setChildren()} className="4 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '53px'
                        }} />

                        <Image src={DL_14} onMouseUp={() => this.setChildren()} className="8 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '60px'

                        }} />

                        <Image src={DL_3} onMouseUp={() => this.setChildren()} className="12 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '26px'

                        }} />

                        <Image src={DL_20} onMouseUp={() => this.setChildren()} className="15 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: '68px'

                        }} />

                        <Image src={DL_15} onMouseUp={() => this.setChildren()} className="42 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "77px",

                        }} />

                        <Image src={DL_10} onMouseUp={() => this.setChildren()} className="16 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "83px",

                        }} />

                        <Image src={DL_9} onMouseUp={() => this.setChildren()} className="9 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "35px",

                        }} />

                        <Image src={DL_21} onMouseUp={() => this.setChildren()} className="0 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "70px",

                        }} />

                        <Image src={DL_8} onMouseUp={() => this.setChildren()} className="2 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "40px",

                        }} />

                        <Image src={DL_19} onMouseUp={() => this.setChildren()} className="13 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "42px",

                        }} />

                        <Image src={DL_13} onMouseUp={() => this.setChildren()} className="37 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "48px",

                        }} />

                        <Image src={DL_7} onMouseUp={() => this.setChildren()} className="3 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "81px",

                        }} />

                        <Image src={DL_4} onMouseUp={() => this.setChildren()} className="35 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "96px",

                        }} />

                        <Image src={DL_5} onMouseUp={() => this.setChildren()} className="40 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "105px",

                        }} />

                        <Image src={DL_11} onMouseUp={() => this.setChildren()} className="19 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "37px",

                        }} />

                        <Image src={DL_17} onMouseUp={() => this.setChildren()} className="5 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "30px",

                        }} />

                        <Image src={DL_22} onMouseUp={() => this.setChildren()} className="18 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "130px",

                        }} />

                        <Image src={DL_16} onMouseUp={() => this.setChildren()} className="44 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "99px",

                        }} />

                        <Image src={DL_6} onMouseUp={() => this.setChildren()} className="38 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "80px",

                        }} />

                        <Image src={DL_49} onMouseUp={() => this.setChildren()} className="34 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "43px",

                        }} />

                        <Image src={DL_12} onMouseUp={() => this.setChildren()} className="45 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "100px",

                        }} />

                        <Image src={DL_28} onMouseUp={() => this.setChildren()} className="21 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "32px",

                        }} />

                        <Image src={DL_24} onMouseUp={() => this.setChildren()} className="41 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "30px",

                        }} />

                        <Image src={DL_25} onMouseUp={() => this.setChildren()} className="17 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "205px",

                        }} />

                        <Image src={DL_26} onMouseUp={() => this.setChildren()} className="20 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "60px",

                        }} />

                        <Image src={DL_47} onMouseUp={() => this.setChildren()} className="22 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "30px",

                        }} />

                        <Image src={DL_27} onMouseUp={() => this.setChildren()} className="7 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "48px",

                        }} />

                        <Image src={DL_29} onMouseUp={() => this.setChildren()} className="11 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "50px",

                        }} />

                        <Image src={DL_30} onMouseUp={() => this.setChildren()} className="43 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "81px",

                        }} />

                        <Image src={DL_46} onMouseUp={() => this.setChildren()} className="39 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "65px",
                        }} />

                        <Image src={DL_45} onMouseUp={() => this.setChildren()} className="36 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "63px",

                        }} />

                        <Image src={DL_44} onMouseUp={() => this.setChildren()} className="30 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "48px",

                        }} />

                        <Image src={DL_43} onMouseUp={() => this.setChildren()} className="26 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "45px",

                        }} />

                        <Image src={DL_31} onMouseUp={() => this.setChildren()} className="32 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "48px",

                        }} />

                        <Image src={DL_33} onMouseUp={() => this.setChildren()} className="31 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "53px",

                        }} />

                        <Image src={DL_32} onMouseUp={() => this.setChildren()} className="47 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "57px",

                        }} />

                        <Image src={DL_42} onMouseUp={() => this.setChildren()} className="24 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "41px",

                        }} />

                        <Image src={DL_18} onMouseUp={() => this.setChildren()} className="25 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "110px",

                        }} />

                        <Image src={DL_41} onMouseUp={() => this.setChildren()} className="14 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "50px",

                        }} />

                        <Image src={DL_34} onMouseUp={() => this.setChildren()} className="23 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "35px",

                        }} />

                        <Image src={DL_38} onMouseUp={() => this.setChildren()} className="29 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "74px",

                        }} />

                        <Image src={DL_36} onMouseUp={() => this.setChildren()} className="46 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "54px",

                        }} />

                        <Image src={DL_39} onMouseUp={() => this.setChildren()} className="48 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "95px",

                        }} />

                        <Image src={DL_40} onMouseUp={() => this.setChildren()} className="27 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "57px",

                        }} />

                        <Image src={DL_35} onMouseUp={() => this.setChildren()} className="6 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "43px",

                        }} />

                        <Image src={DL_37} onMouseUp={() => this.setChildren()} className="10 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "25px",

                        }} />

                        <Image src={DL_23} onMouseUp={() => this.setChildren()} className="28 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "129px",

                        }} />

                        <Image src={DL_48} onMouseUp={() => this.setChildren()} className="33 draggable-demuth demuth-box" style={{
                            left: '0px',
                            top: '0px',
                            width: "45px",

                        }} />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default withCookies(Demuth);