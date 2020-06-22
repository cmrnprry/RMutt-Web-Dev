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


const correctList = getCorrect();
var currList = intializeArray();
var puzzleSolved = false;

//Function that initalizes the array. 
//Moving any of the draggables positions requires you to adjust this 
function intializeArray() {
    let array = [];

    array[0] = "1917"; array[16] = "ew"; array[32] = "of";
    array[1] = "8th"; array[17] = "independents"; array[33] = "next";
    array[2] = "demuth"; array[18] = "duchamp"; array[34] = "the";
    array[3] = "a"; array[19] = "avenue"; array[35] = "exhibition";
    array[4] = "grand"; array[20] = "day"; array[36] = "that";
    array[5] = "do anything"; array[21] = "it"; array[37] = "ork";
    array[6] = "co"; array[22] = "ittee"; array[38] = "schuvler";
    array[7] = "central"; array[23] = "you"; array[39] = "s";
    array[8] = "henry"; array[24] = "j"; array[40] = "super";
    array[9] = "ce"; array[25] = "marcel"; array[41] = "tain";
    array[10] = "fou"; array[26] = "move"; array[42] = "rich";
    array[11] = "dear"; array[27] = "you"; array[43] = "saalon";
    array[12] = "bre"; array[28] = "y"; array[44] = "it was not exhibited";
    array[13] = "appreciate"; array[29] = "would"; array[45] = "independents";
    array[14] = "article"; array[30] = "the"; array[46] = "ity";
    array[15] = "columbus"; array[31] = "mutt"; array[47] = "lptu";
    array[15] = "columbus"; array[31] = "mutt"; array[47] = "lptu";

    return array;
}

//Function that creates an array woth the correct order of words
function getCorrect() {
    let array = [];

    // array[0] = "1917"; array[16] = "ew"; array[32] = "of";
    // array[1] = "8th"; array[17] = "independents"; array[33] = "next";
    // array[2] = "demuth"; array[18] = "duchamp"; array[34] = "the";
    // array[3] = "a"; array[19] = "avenue"; array[35] = "exhibition";
    // array[4] = "grand"; array[20] = "day"; array[36] = "that";
    // array[5] = "do anything"; array[21] = "it"; array[37] = "ork";
    // array[6] = "co"; array[22] = "ittee"; array[38] = "schuvler";
    // array[7] = "central"; array[23] = "you"; array[39] = "s";
    // array[8] = "henry"; array[24] = "j"; array[40] = "super";
    // array[9] = "ce"; array[25] = "marcel"; array[41] = "tain";
    // array[10] = "fou"; array[26] = "move"; array[42] = "rich";
    // array[11] = "dear"; array[27] = "you"; array[43] = "saalon";
    // array[12] = "bre"; array[28] = "y"; array[44] = "it was not exhibited";
    // array[13] = "appreciate"; array[29] = "would"; array[45] = "independents";
    // array[14] = "article"; array[30] = "the"; array[46] = "ity";
    // array[15] = "columbus"; array[31] = "mutt"; array[47] = "lptu";


    array[0] = "henry"; array[16] = "central"; array[32] = "you";
    array[1] = "1917"; array[17] = "it was not exhibited"; array[33] = "you";
    array[2] = "bre"; array[18] = "independents"; array[34] = "anything";
    array[3] = "avanue"; array[19] = "co"; array[35] = "that";
    array[4] = "8th"; array[20] = "ittee"; array[36] = "day";
    array[5] = "ew"; array[21] = "j"; array[37] = "article";
    array[6] = "ork"; array[22] = "y"; array[38] = "would";
    array[7] = "ity"; array[23] = "of"; array[39] = "apprciate";
    array[8] = "dear"; array[24] = "the"; array[40] = "it";
    array[9] = "ce"; array[25] = "exhibition"; array[41] = "demuth";
    array[10] = "s"; array[26] = "super"; array[42] = "marcel";
    array[11] = "lput"; array[27] = "independents"; array[43] = "duchamp";
    array[12] = "a"; array[28] = "would"; array[44] = "columbus";
    array[13] = "fou"; array[29] = "salon"; array[45] = "rich";
    array[14] = "tain"; array[30] = "the"; array[46] = "mutt";
    array[15] = "grand"; array[31] = "move"; array[47] = "schuvler";

    return array;

}

//Draggable function
interact('.draggable').draggable({
    listeners: {

        start(event) {
            console.log(event.type, event.target)
        },
        move: dragMoveListener,

        end(event) {
            var textEl = event.target.querySelector('p')

            textEl && (textEl.textContent =
                'Pos: ' + event.x0 + ', ' + event.y0)
        }
    }
})

//Dropzone function
interact('.dropzone').dropzone({
    accept: '.draggable',
    overlap: 0.50,

    // var draggableElement = event.relatedTarget
    // var dropzoneElement = event.target

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')

    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
    },
    ondrop: function (event) {
        pushInList(event.relatedTarget.classList[0], event.target.classList[1])
        console.log(event.relatedTarget.classList[0])

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    }

})

//Function that swaps the position of two objects and checks to see if the current list is correct
function pushInList(text, position) {
    // var currTextPos = currList.indexOf(text);
    // var temp = "";

    //this works whil we are not swaping the objects and are just dropping them one at a time
    currList.splice(position, 1, text);

    // if (currTextPos !== position) {
    //     temp = currList[position];
    //     currList[position] = text;
    //     currList[currTextPos] = temp;
    // }


    if (checkList()) {
        puzzleSolved = true;
        showEndText();
    }
}

//Function that displays text if the array is correct
function showEndText() {
    alert("TODO: add Kieran words");
}

//Function that checks to see if the currect list is in the correct order
function checkList() {
    var allCorrect = true;

    if (correctList.length === currList.length) {
        for (let i = 0; i < correctList.length; i++) {
            if (currList[i] !== correctList[i]) {
                allCorrect = false;
                break;
            }
        }
    }


    return allCorrect;
}

//Function that handles how draggable objects act when you drag them
function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
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
        console.log("here")
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        console.log("puzzleSolved: " + puzzleSolved);
        if (puzzleSolved) {
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
                            {/* <Image src={Under} className="demuth-resize" /> */}

                            {/* line one */}
                            <div className="dropzone 0" style={{
                                height: "35px",
                                width: "66px",
                                left: "87px",
                                top: "42px"
                            }} />

                            {/* line two */}
                            <div className="dropzone 1" style={{
                                height: "30px",
                                width: "53px",
                                left: "302px",
                                top: "64px"
                            }} />

                            {/* line three */}
                            <div className="dropzone 2" style={{
                                height: "23px",
                                width: "42px",
                                left: "248px",
                                top: "86px"
                            }} />

                            <div className="dropzone 3" style={{
                                height: "37px",
                                width: "77px",
                                left: "448px",
                                top: "79px"
                            }} />

                            <div className="dropzone 4" style={{
                                height: "37px",
                                width: "53px",
                                left: "540px",
                                top: "80px"
                            }} />

                            {/* line four */}
                            <div className="dropzone 5" style={{
                                height: "23px",
                                width: "35px",
                                left: "260px",
                                top: "106px"
                            }} />

                            <div className="dropzone 6" style={{
                                height: "23px",
                                width: "41px",
                                left: "298px",
                                top: "106px"
                            }} />

                            <div className="dropzone 7" style={{
                                height: "29px",
                                width: "41px",
                                left: "344px",
                                top: "105px"
                            }} />

                            {/* line five */}
                            <div className="dropzone 8" style={{
                                height: "38px",
                                width: "55px",
                                left: "91px",
                                top: "134px"
                            }} />

                            {/* line six */}
                            <div className="dropzone 9" style={{
                                height: "26px",
                                width: "36px",
                                left: "156px",
                                top: "160px"
                            }} />

                            <div className="dropzone 10" style={{
                                height: "26px",
                                width: "36px",
                                left: "207px",
                                top: "160px"
                            }} />

                            <div className="dropzone 11" style={{
                                height: "26px",
                                width: "51px",
                                left: "244px",
                                top: "160px"
                            }} />

                            <div className="dropzone 12" style={{
                                height: "30px",
                                width: "28px",
                                left: "392px",
                                top: "160px"
                            }} />

                            <div className="dropzone 13" style={{
                                height: "30px",
                                width: "41px",
                                left: "416px",
                                top: "158px"
                            }} />

                            <div className="dropzone 14" style={{
                                height: "32px",
                                width: "50px",
                                left: "456px",
                                top: "158px"
                            }} />

                            {/* line seven */}
                            <div className="dropzone 15" style={{
                                height: "32px",
                                width: "70px",
                                left: "616px",
                                top: "175px"
                            }} />

                            {/* line eight */}
                            <div className="dropzone 16" style={{
                                height: "30px",
                                width: "85px",
                                left: "60px",
                                top: "195px"
                            }} />

                            {/* line nine */}
                            <div className="dropzone 17" style={{
                                height: "30px",
                                width: "207px",
                                left: "112px",
                                top: "216px"
                            }} />

                            {/* line ten */}
                            <div className="dropzone 18" style={{
                                height: '30px',
                                width: '200px',
                                left: '287px',
                                top: '422px'
                            }} />

                            <div className="dropzone 19" style={{
                                height: '30px',
                                width: '42px',
                                left: '925px',
                                top: '415px'
                            }} />

                            <div className="dropzone 20" style={{
                                height: '30px',
                                width: '85px',
                                left: '1001px',
                                top: '415px'
                            }} />

                            {/* line eleven */}
                            <div className="dropzone 21" style={{
                                height: '30px',
                                width: '25px',
                                left: '110px',
                                top: '451px'
                            }} />

                            <div className="dropzone 22" style={{
                                height: '30px',
                                width: '20px',
                                left: '172px',
                                top: '451px'
                            }} />

                            <div className="dropzone 23" style={{
                                height: '30px',
                                width: '50px',
                                left: '705px',
                                top: '447px'
                            }} />

                            <div className="dropzone 24" style={{
                                height: '30px',
                                width: '55px',
                                left: '762px',
                                top: '447px'
                            }} />

                            <div className="dropzone 25" style={{
                                height: '30px',
                                width: '185px',
                                left: '820px',
                                top: '447px'
                            }} />

                            {/* line twelve */}
                            <div className="dropzone 26" style={{
                                height: '33px',
                                width: '55px',
                                left: '600px',
                                top: '480px'
                            }} />

                            <div className="dropzone 27" style={{
                                height: '33px',
                                width: '95px',
                                left: '660px',
                                top: '483px'
                            }} />

                            <div className="dropzone 28" style={{
                                height: '33px',
                                width: '200px',
                                left: '765px',
                                top: '483px'
                            }} />

                            <div className="dropzone 29" style={{
                                height: '33px',
                                width: '100px',
                                left: '1045px',
                                top: '478px'
                            }} />

                            {/* line thirteen */}
                            <div className="dropzone 30" style={{
                                height: '33px',
                                width: '60px',
                                left: '370px',
                                top: '515px'
                            }} />

                            <div className="dropzone 31" style={{
                                height: '33px',
                                width: '73px',
                                left: '440px',
                                top: '515px'
                            }} />

                            <div className="dropzone 32" style={{
                                height: '33px',
                                width: '73px',
                                left: '520px',
                                top: '515px'
                            }} />

                            {/* line fourteen */}
                            <div className="dropzone 33" style={{
                                height: '33px',
                                width: '73px',
                                left: '255px',
                                top: '555px'
                            }} />

                            <div className="dropzone 34" style={{
                                height: '30px',
                                width: '70px',
                                left: '425px',
                                top: '555px'
                            }} />

                            <div className="dropzone 35" style={{
                                height: '30px',
                                width: '145px',
                                left: '580px',
                                top: '550px'
                            }} />

                            <div className="dropzone 36" style={{
                                height: '30px',
                                width: '70px',
                                left: '815px',
                                top: '550px'
                            }} />

                            {/* line fifteen */}
                            <div className="dropzone 37" style={{
                                height: '33px',
                                width: '53px',
                                left: '183px',
                                top: '583px'
                            }} />

                            <div className="dropzone 38" style={{
                                height: '33px',
                                width: '135px',
                                left: '240px',
                                top: '587px'
                            }} />

                            <div className="dropzone 39" style={{
                                height: '33px',
                                width: '95px',
                                left: '437px',
                                top: '583px'
                            }} />

                            <div className="dropzone 40" style={{
                                height: '33px',
                                width: '170px',
                                left: '539px',
                                top: '585px'
                            }} />

                            <div className="dropzone 41" style={{
                                height: '33px',
                                width: '42px',
                                left: '715px',
                                top: '580px'
                            }} />

                            {/* line sixteen*/}
                            <div className="dropzone 42" style={{
                                height: '33px',
                                width: '170px',
                                left: '586px',
                                top: '675px'
                            }} />

                            {/* line seventeen */}
                            <div className="dropzone 43" style={{
                                height: '40px',
                                width: '105px',
                                left: '960px',
                                top: '735px'
                            }} />

                            {/* line eighteen */}
                            <div className="dropzone 44" style={{
                                height: '33px',
                                width: '160px',
                                left: '115px',
                                top: '778px'
                            }} />

                            <div className="dropzone 45" style={{
                                height: '33px',
                                width: '142px',
                                left: '355px',
                                top: '778px'
                            }} />

                            <div className="dropzone 46" style={{
                                height: '33px',
                                width: '65px',
                                left: '575px',
                                top: '778px'
                            }} />

                            <div className="dropzone 47" style={{
                                height: '33px',
                                width: '80px',
                                left: '690px',
                                top: '778px'
                            }} />

                            <div className="dropzone 48" style={{
                                height: '35px',
                                width: '145px',
                                left: '873px',
                                top: '775px'
                            }} />
                        </div>

                    </Col>

                    <Col>

                        {/* Dragables Container */}
                        <div className="">
                            {/* First Row */}

                            <Image src={DL_2} onMouseUp={() => this.setChildren()} className="2 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                // width: "18%",

                            }} />

                            <Image src={DL_1} onMouseUp={() => this.setChildren()} className="1 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: '5px'
                            }} />

                            <Image src={DL_14} onMouseUp={() => this.setChildren()} className="14 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_3} onMouseUp={() => this.setChildren()} className="3 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_20} onMouseUp={() => this.setChildren()} className="20 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_15} onMouseUp={() => this.setChildren()} className="15 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_10} onMouseUp={() => this.setChildren()} className="10 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_9} onMouseUp={() => this.setChildren()} className="9 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_21} onMouseUp={() => this.setChildren()} className="21 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_8} onMouseUp={() => this.setChildren()} className="8 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_19} onMouseUp={() => this.setChildren()} className="19 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_13} onMouseUp={() => this.setChildren()} className="13 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_7} onMouseUp={() => this.setChildren()} className="7 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_4} onMouseUp={() => this.setChildren()} className="4 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_5} onMouseUp={() => this.setChildren()} className="5 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_11} onMouseUp={() => this.setChildren()} className="11 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_17} onMouseUp={() => this.setChildren()} className="17 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_22} onMouseUp={() => this.setChildren()} className="22 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_16} onMouseUp={() => this.setChildren()} className="16 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_6} onMouseUp={() => this.setChildren()} className="6 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_49} onMouseUp={() => this.setChildren()} className="49 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_12} onMouseUp={() => this.setChildren()} className="12 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_28} onMouseUp={() => this.setChildren()} className="28 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_24} onMouseUp={() => this.setChildren()} className="24 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_25} onMouseUp={() => this.setChildren()} className="25 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_26} onMouseUp={() => this.setChildren()} className="26 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_47} onMouseUp={() => this.setChildren()} className="47 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_27} onMouseUp={() => this.setChildren()} className="27 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_29} onMouseUp={() => this.setChildren()} className="29 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_30} onMouseUp={() => this.setChildren()} className="30 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_46} onMouseUp={() => this.setChildren()} className="46 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_45} onMouseUp={() => this.setChildren()} className="45 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_44} onMouseUp={() => this.setChildren()} className="44 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_43} onMouseUp={() => this.setChildren()} className="43 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_31} onMouseUp={() => this.setChildren()} className="31 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_33} onMouseUp={() => this.setChildren()} className="33 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_32} onMouseUp={() => this.setChildren()} className="32 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_42} onMouseUp={() => this.setChildren()} className="42 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_18} onMouseUp={() => this.setChildren()} className="18 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_41} onMouseUp={() => this.setChildren()} className="41 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_34} onMouseUp={() => this.setChildren()} className="34 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_38} onMouseUp={() => this.setChildren()} className="38 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_36} onMouseUp={() => this.setChildren()} className="36 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_39} onMouseUp={() => this.setChildren()} className="39 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_40} onMouseUp={() => this.setChildren()} className="40 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_35} onMouseUp={() => this.setChildren()} className="35 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_37} onMouseUp={() => this.setChildren()} className="37 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_23} onMouseUp={() => this.setChildren()} className="23 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />

                            <Image src={DL_48} onMouseUp={() => this.setChildren()} className="48 draggable demuth-box" style={{
                                left: '0px',
                                top: '0px',
                                width: "3%",

                            }} />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default withCookies(Demuth);