//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
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

//width and height
var width = 0;
var height = 0;

//Moving any of the draggables positions requires you to adjust this 
var currList = ["1", "4", "15", "6", "8", "13", "11", "10", "3", "2", "0", "14", "9", "5", "7", "12"];
const correctList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var puzzleSolved = false;

//The X and Y Postions of the images
var topPositions = ["0px", "000px"];
var leftPositions = setIntialX();

var topPositionsDrop = setIntialXDrop();
var leftPositionsDrop = ["128px", "838px"];


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

window.onload = function () {
    console.log("width: " + width)
    console.log("height: " + height)
    var spaceBetweenL = 0;
    var spaceBetweenT = 0;

    var paddingH = height * 0.3;
    var paddingW = width * 0.3;

    spaceBetweenL = (width - (paddingW * 2)) % 400;
    spaceBetweenL = Math.floor(spaceBetweenL / 4);
    console.log(spaceBetweenL);

    var x = (spaceBetweenL + "px");
    var y = ((spaceBetweenL + paddingW) + "px");
    var z = (spaceBetweenL + "px");

}

//Sets the intial x of the images
function setIntialX() {
    var array = [];
    var count = 0;
    var val = 50;
    for (var i = 0; i < 8; i++) {
        array[i] = val + "px";
        array[i + 8] = val + "px";

        val += 180;
    }

    return array;
}

//Sets the intial x of the images
function setIntialXDrop() {
    var array = [];
    var val = 64;
    for (var i = 0; i < 16; i++) {
        array[i] = val + "px";
        array[i + 1] = val + "px";

        val += 790;
        i++;
    }

    return array;
}

//Function that swaps the position of two objects and checks to see if the current list is correct
function pushInList(draggable, dropzone) {
    // var currPos = currList.indexOf(draggable);
    // var temp = "";

    // console.log("curr Position: " + currPos);
    // console.log("dropzone Position: " + dropzone);
    // console.log("array Position: " + draggable);

    //this works whil we are not swaping the objects and are just dropping them one at a time
    currList.splice(dropzone, 1, draggable);

    // if (currPos !== dropzone) {
    //     temp = currList[dropzone];
    //     currList[dropzone] = draggable;
    //     currList[currPos] = temp;
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
        // for (let i = 0; i < currList.length; i++) {
        //     console.log("curr at index " + i + ": " + currList[i]);
        //     allCorrect = false;
        // }
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
        this.setWH();
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

        console.log("puzzleSolved: " + puzzleSolved);
        if (puzzleSolved) {
            cookies.set('BlindManChildren');
            this.props.history.push('/clues');
        }
    }

    setWH() {
        width = this.state.width;
        height = this.state.height;
    }

    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ overflow: 'hidden', maxHeight: this.state.height, maxWidth: this.state.width }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Such vision!</title>
                </Helmet>

                <div id="container-blind-man" className="blind-man" style={{
                    padding: '10px'
                }}>
                    {/* Draggables */}

                    <Row className="py-2">
                        <Col className="d-flex justify-content-center">
                            <Image onMouseUp={() => this.setChildren()} id="img" src={Page2} name="0" className="1 resize draggable"
                            // style={{
                            //     left: leftPositions[0],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page5} name="1" className="4 resize draggable"
                            // style={{
                            //     left: leftPositions[1],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Back} name="2" className="15 resize draggable"
                            // style={{
                            //     left: leftPositions[2],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page7} name="3" className="6 resize draggable"
                            // style={{
                            //     left: leftPositions[3],
                            //     top: topPositions[1]
                            // }}
                            />
                        </Col>
                    </Row>

                    <Row className="py-2">
                        <Col className="d-flex justify-content-left">
                            <Image onMouseUp={() => this.setChildren()} src={Page9} name="4" className="8 resize draggable"
                            // style={{
                            //     left: leftPositions[4],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page14} name="5" className="13 resize draggable"
                            // style={{
                            //     left: leftPositions[5],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page12} name="6" className="11 resize draggable"
                            // style={{
                            //     left: leftPositions[6],
                            //     top: topPositions[1]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page11} name="7" className="10 resize draggable"
                            // style={{
                            //     left: leftPositions[7],
                            //     top: topPositions[1]
                            // }}
                            />
                        </Col>
                    </Row>

                    <Row className="py-2">
                        <Col className="d-flex justify-content-center">
                            <Image src={Page4} name="8" className="3 resize draggable"
                            // style={{
                            //     left: leftPositions[8],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page3} name="9" className="2 resize draggable"
                            // style={{
                            //     left: leftPositions[9],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Cover} name="10" className="0 resize draggable"
                            // style={{
                            //     left: leftPositions[10],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page15} name="11" className="14 resize draggable"
                            // style={{
                            //     left: leftPositions[11],
                            //     top: topPositions[0]
                            // }}
                            />
                        </Col>
                    </Row>

                    <Row className="py-2">
                        <Col className="d-flex justify-content-center">
                            <Image onMouseUp={() => this.setChildren()} src={Page10} name="12" className="9 resize draggable"
                            // style={{
                            //     left: leftPositions[12],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page6} name="13" className="5 resize draggable"
                            // style={{
                            //     left: leftPositions[13],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page8} name="14" className="7 resize draggable"
                            // style={{
                            //     left: leftPositions[14],
                            //     top: topPositions[0]
                            // }}
                            />
                        {/* </Col>

                        <Col className="d-flex justify-content-center"> */}
                            <Image onMouseUp={() => this.setChildren()} src={Page13} name="15" className="12 resize draggable"
                            // style={{
                            //     left: leftPositions[15],
                            //     top: topPositions[0]
                            // }}
                            />
                        </Col>
                    </Row >
                    {/* Drop Zones */}
                    <div>
                        <div className="0 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[0],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="1 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[1],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="2 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[2],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="3 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[3],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="4 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[4],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="5 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[5],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="6 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[6],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="7 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[7],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="8 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[8],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="9 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[9],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="10 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[10],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="11 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[11],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="12 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[12],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="13 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[13],
                            left: leftPositionsDrop[1]
                        }} />
                        <div className="14 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[14],
                            left: leftPositionsDrop[0]
                        }} />
                        <div className="15 drop-notactive-blind dropzone-blind" style={{
                            top: topPositionsDrop[15],
                            left: leftPositionsDrop[1]
                        }} />
                    </div> 
                </div >
            </Container >

        );
    }
}

export default withCookies(Blind_Man); 