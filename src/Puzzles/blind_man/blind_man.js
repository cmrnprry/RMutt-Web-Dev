//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";
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

//Web Imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Helmet from "react-helmet";
import interact from 'interactjs'


//Moving any of the draggables positions requires you to adjust this 
var currList = ["1", "4", "15", "6", "8", "13", "11", "10", "3", "2", "0", "14", "9", "5", "7", "12"];
const correctList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var puzzleSolved = false;

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
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        event.target.classList.remove('drop-active-blind')
        dropzoneElement.classList.add('drop-target-blind')
        draggableElement.classList.add('can-drop')

    },
    ondragleave: function (event) {
        //currPos = event.target.classList[0];
        // remove the drop feedback style
        event.target.classList.add('drop-active-blind')
        event.target.classList.remove('drop-target-blind')
        event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
        //swapToPos = event.target.classList[0];
        // swapPositions(currPos, swapToPos)
        pushInList(event.relatedTarget.classList[0], event.target.classList[0])
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

function hideOthers(cur) {
    for (var i = 0; i < 16; i++) {
        if (cur == i) {
            var index = i.toString()
            var x = document.getElementById(index);
            console.log(x)
            console.log(i)
        }
    }
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
            height: window.innerHeight
        };

        this.resizeWindow = this.resizeWindow.bind(this);
    }

    //Sets the listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
        setDrops();
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerHeight, height: window.innerHeight });
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

    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ overflowX: 'hidden', minHeight: this.state.height, maxWidth: this.state.width }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Such vision!</title>
                </Helmet>

                {/* Draggables */}

                <Row className="align-items-center py-2">
                    <Col className="d-flex justify-content-center">
                        <Image name="0" />
                        
                        <SideBySideMagnifier
                            imageSrc={Page2}
                            largeImageSrc={Page2}
                            className="1 resize draggable"
                            id="0"
                            onMouseUp={() => this.setChildren()}
                            renderOverlay={() => hideOthers("0")}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="1" />

                        <SideBySideMagnifier
                            imageSrc={Page5}
                            largeImageSrc={Page5}
                            name="1"
                            className="4 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="2" />

                        <SideBySideMagnifier
                            imageSrc={Back}
                            largeImageSrc={Back}
                            name="2"
                            className="15 resize draggable"
                            onMouseUp={() => this.setChildren()}
                            switchSides='true'
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="3" />

                        <SideBySideMagnifier
                            imageSrc={Page7}
                            largeImageSrc={Page7}
                            name="3"
                            className="6 resize draggable"
                            onMouseUp={() => this.setChildren()}
                            switchSides='true'
                        />
                    </Col>
                </Row>

                <Row className="align-items-center py-2">
                    <Col className="d-flex justify-content-center">
                        <Image name="4" />

                        <SideBySideMagnifier
                            imageSrc={Page9}
                            largeImageSrc={Page9}
                            name="4"
                            className="8 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="5" />

                        <SideBySideMagnifier
                            imageSrc={Page14}
                            largeImageSrc={Page14}
                            name="5"
                            className="13 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="6" />

                        <SideBySideMagnifier
                            imageSrc={Page12}
                            largeImageSrc={Page12}
                            name="6"
                            className="11 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="7" />

                        <SideBySideMagnifier
                            imageSrc={Page10}
                            largeImageSrc={Page10}
                            name="7"
                            className="10 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>
                </Row>

                <Row className="align-items-center py-2">
                    <Col className="d-flex justify-content-center">
                        <Image name="8" />

                        <SideBySideMagnifier
                            imageSrc={Page4}
                            largeImageSrc={Page4}
                            name="8"
                            className="3 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="9" />

                        <SideBySideMagnifier
                            imageSrc={Page9}
                            largeImageSrc={Page9}
                            name="9"
                            className="8 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="10" />

                        <SideBySideMagnifier
                            imageSrc={Cover}
                            largeImageSrc={Cover}
                            name="10"
                            className="0 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="11" />

                        <SideBySideMagnifier
                            imageSrc={Page15}
                            largeImageSrc={Page15}
                            name="11"
                            className="14 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>
                </Row>

                <Row className="align-items-center py-2">
                    <Col className="d-flex justify-content-center">
                        <Image name="12" />

                        <SideBySideMagnifier
                            imageSrc={Page10}
                            largeImageSrc={Page10}
                            name="9"
                            className="12 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="13" />

                        <SideBySideMagnifier
                            imageSrc={Page6}
                            largeImageSrc={Page6}
                            name="13"
                            className="5 resize draggable"
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="14" />

                        <SideBySideMagnifier
                            imageSrc={Page8}
                            largeImageSrc={Page8}
                            name="14"
                            className="7 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Image name="15" />

                        <SideBySideMagnifier
                            imageSrc={Page13}
                            largeImageSrc={Page13}
                            name="15"
                            className="12 resize draggable"
                            switchSides='true'
                            onMouseUp={() => this.setChildren()}
                        />
                    </Col>
                </Row >
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