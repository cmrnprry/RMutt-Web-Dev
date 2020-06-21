//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
// import {
//     Magnifier,
//     GlassMagnifier,
//     SideBySideMagnifier,
//     PictureInPictureMagnifier,
//     MOUSE_ACTIVATION,
//     TOUCH_ACTIVATION
// } from "react-image-magnifiers";
import { instanceOf } from 'prop-types';

//Image Imports
import Cover from "./blind_man_images/cover.jpg"
import Page2 from "./blind_man_images/2.jpg"
import Page3 from "./blind_man_images/3.jpg"
import Page4 from "./blind_man_images/4.jpg"
import Page5 from "./blind_man_images/5.jpg"
import Page6 from "./blind_man_images/6.jpg"
import Page7 from "./blind_man_images/7.jpg"
import Page8 from "./blind_man_images/8.jpg"
import Page9 from "./blind_man_images/9.jpg"
import Page10 from "./blind_man_images/10.jpg"
import Page11 from "./blind_man_images/11.jpg"
import Page12 from "./blind_man_images/12.jpg"
import Page13 from "./blind_man_images/13.jpg"
import Page14 from "./blind_man_images/14.jpg"
import Page15 from "./blind_man_images/15.jpg"
import Back from "./blind_man_images/back.jpg"
import Sticky from "../../folder_elements/sticky/sticky.png"

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from "react-helmet";
import interact from 'interactjs'


//Moving any of the draggables positions requires you to adjust this 
var currList = ["1", "4", "15", "6", "8", "13", "11", "10", "3", "2", "0", "14", "9", "5", "7", "12"];
const correctList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var puzzleSolved = false;
var prev = "1";
const cover = require('./blind_man_images/cover.jpg');
const img2 = require('./blind_man_images/2.jpg');
const img3 = require('./blind_man_images/3.jpg');
const img4 = require('./blind_man_images/4.jpg');
const img5 = require('./blind_man_images/5.jpg');
const img6 = require('./blind_man_images/6.jpg');
const img7 = require('./blind_man_images/7.jpg');
const img8 = require('./blind_man_images/8.jpg');
const img9 = require('./blind_man_images/9.jpg');
const img10 = require('./blind_man_images/10.jpg');
const img11 = require('./blind_man_images/11.jpg');
const img12 = require('./blind_man_images/12.jpg');
const img13 = require('./blind_man_images/13.jpg');
const img14 = require('./blind_man_images/14.jpg');
const img15 = require('./blind_man_images/15.jpg');
const back = require('./blind_man_images/back.jpg');

//Draggable function
interact('.draggable').draggable({
    modifiers: [
        interact.modifiers.restrict({
            restriction: 'container-blind-man',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
        })
    ],
    listeners: {
        move: dragMoveListener,
    }
})

//Dropzone function
interact('.dropzone-blind').dropzone({
    accept: '.draggable',
    overlap: 0.75,

    // var draggableElement = event.relatedTarget
    // var dropzoneElement = event.target

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active-blind')
        event.target.classList.remove('drop-notactive-blind')
        event.relatedTarget.classList.add('drag-shadow')
    },
    ondragenter: function (event) {
        // var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        event.target.classList.remove('drop-active-blind')
        dropzoneElement.classList.add('drop-target-blind')

    },
    ondragleave: function (event) {
        //currPos = event.target.classList[0];
        // remove the drop feedback style
        event.target.classList.add('drop-active-blind')
        event.target.classList.remove('drop-target-blind')
    },
    ondrop: function (event) {
        //swapToPos = event.target.classList[0];
        // swapPositions(currPos, swapToPos)
        pushInList(event.relatedTarget.classList[0], event.target.classList[0])
        event.relatedTarget.classList.remove('drag-shadow')
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active-blind')
        event.target.classList.remove('drop-target-blind')
        event.relatedTarget.classList.remove('can-drop')
        event.target.classList.add('drop-notactive-blind')
    }

})

function setDrops() {
    for (var i = 0; i < 16; i++) {
        var x = "drag-" + i;
        var drag = document.getElementsByName(i)[0].getBoundingClientRect();
        var drop = document.getElementById(x);

        drop.style.top = ((drag.y - 5) + 'px');
        drop.style.left = ((drag.x - 6) + 'px');
    }
}

function setZoomed() {
    var left = document.getElementsByName("3")[0].getBoundingClientRect().x + document.getElementsByName("3")[0].width;
    document.getElementById("Zoom").style.left = (left + 250) + "px";
}

//Function that swaps the position of two objects and checks to see if the current list is correct
function pushInList(draggable, dropzone) {
    currList.splice(dropzone, 1, draggable);

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

class Blind_Man extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            imgList: [cover, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, back]
        };
    }

    //Sets the listener
    componentDidMount() {
        if (this.state.width >= 1500) {
            document.body.style.overflowX = "hidden";
        }
        setDrops();
        setZoomed();
        console.log(document.getElementById("Zoom").style.left)
        document.getElementById("note").style.left = (document.getElementById("Zoom").getBoundingClientRect().x + document.getElementById("Zoom").width - 50) + "px"
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        console.log("puzzleSolved: " + puzzleSolved);
        if (puzzleSolved) {
            cookies.set('BlindManChildren');
            this.props.history.push('/clues');
        }

    }

    changeZoomed(newZoom) {
        var img = null;
        var clName = "0";
        if (newZoom === "Cover") {
            img = cover
            clName = "0";
        }
        else if (newZoom === "Back") {
            img = back
            clName = "15";
        }
        else {
            img = this.state.imgList[newZoom - 1]
            clName = parseInt(newZoom) - 1;
            clName.toString();
        }

        //set the new image to be large
        document.getElementById("Zoom").setAttribute('src', img);

        //add border to new img
        document.getElementsByClassName(clName)[0].classList.add("zoomBorder");

        //remove the border from the prev
        var element = document.getElementsByClassName(prev)[0];
        if (element.classList.contains("zoomBorder")) {
            element.classList.remove("zoomBorder");
        }

        prev = clName;
    }

    render() {
        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Such vision!</title>
                </Helmet>

                {/* Draggables */}
                <div>
                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("2")} name="0" src={Page2} className="1 resize draggable zoomBorder" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("5")} name="1" src={Page5} className="4 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("Back")} name="2" src={Back} className="15 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("3")} name="3" src={Page3} className="2 resize draggable" />
                </div>

                <br />

                <div>
                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("7")} name="4" src={Page7} className="6 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("14")} name="5" src={Page14} className="13 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("12")} name="6" src={Page12} className="11 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("11")} name="7" src={Page11} className="10 resize draggable" />
                </div>

                <br />

                <div>
                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("4")} name="8" src={Page4} className="3 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("9")} name="9" src={Page9} className="8 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("Cover")} name="10" src={Cover} className="0 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("15")} name="11" src={Page15} className="14 resize draggable" />
                </div>

                <br />

                <div>
                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("10")} name="12" src={Page10} className="9 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("6")} name="13" src={Page6} className="5 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("8")} name="14" src={Page8} className="7 resize draggable" />

                    <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("13")} name="15" src={Page13} className="12 resize draggable" />
                </div>


                <Image id="Zoom" src={Page2} className="zoom" />

                <div id="note" className="container">
                    <Image src={Sticky} className="sticky" />
                    <div className="text-sticky"> Double <br /> click an<br />image to <br />zoom</div>
                </div>

                {/* <Row className="d-flex justify-content-center py-2">
                    <Col className="justify-content-left">
                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="0" src={Page2} className="1 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="1" src={Page5} className="4 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="2" src={Back} className="15 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="3" src={Page2} className="6 resize draggable" />
                    </Col>

                    <div className="w-100" />

                    <Col className="justify-content-left">
                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="4" src={Page9} className="18 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="5" src={Page14} className="13 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="6" src={Page12} className="11 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="7" src={Page10} className="10 resize draggable" />
                    </Col>

                    <div className="w-100" />

                    <Col className="justify-content-left">
                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="8" src={Page4} className="3 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="9" src={Page9} className="8 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="10" src={Cover} className="10 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="11" src={Page15} className="14 resize draggable" />
                    </Col>

                    <div className="w-100" />

                    <Col className="justify-content-left">
                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="12" src={Page10} className="9 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="13" src={Page6} className="5 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="14" src={Page8} className="7 resize draggable" />

                        <Image onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed()} name="15" src={Page13} className="12 resize draggable" />
                    </Col>
                </Row> */}

                {/* Drop Zones */}
                <div>
                    <div id="drag-0" className="0 drop-notactive-blind dropzone-blind" />
                    <div id="drag-1" className="1 drop-notactive-blind dropzone-blind" />
                    <div id="drag-2" className="2 drop-notactive-blind dropzone-blind" />
                    <div id="drag-3" className="3 drop-notactive-blind dropzone-blind" />
                    <div id="drag-4" className="4 drop-notactive-blind dropzone-blind" />
                    <div id="drag-5" className="5 drop-notactive-blind dropzone-blind" />
                    <div id="drag-6" className="6 drop-notactive-blind dropzone-blind" />
                    <div id="drag-7" className="7 drop-notactive-blind dropzone-blind" />
                    <div id="drag-8" className="8 drop-notactive-blind dropzone-blind" />
                    <div id="drag-9" className="9 drop-notactive-blind dropzone-blind" />
                    <div id="drag-10" className="10 drop-notactive-blind dropzone-blind" />
                    <div id="drag-11" className="11 drop-notactive-blind dropzone-blind" />
                    <div id="drag-12" className="12 drop-notactive-blind dropzone-blind" />
                    <div id="drag-13" className="13 drop-notactive-blind dropzone-blind" />
                    <div id="drag-14" className="14 drop-notactive-blind dropzone-blind" />
                    <div id="drag-15" className="15 drop-notactive-blind dropzone-blind" />
                </div>
            </Container >

        );
    }
}

export default withCookies(Blind_Man); 