//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import toilet1 from './toilet/toilet1.png'
import toilet2 from './toilet/toilet2.png'
import toilet3 from './toilet/toilet3.png'
import toilet4 from './toilet/toilet4.png'
import toilet5 from './toilet/toilet5.png'
import toilet6 from './toilet/toilet6.png'
import toilet7 from './toilet/toilet7.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

const correctList = getCorrect();
var currList = intializeArray();

//starting order of list
function intializeArray() {
    let array = [];

    array[0] = "toilet1";
    array[1] = "toilet2";
    array[3] = "toilet4";
    array[4] = "toilet5";
    array[5] = "toilet6";
    array[6] = "toilet7";

    return array;

}

//correct list of vars
function getCorrect() {
    let array = [];

    array[0] = "toilet1";
    array[1] = "toilet2";
    array[2] = "toilet3";
    array[3] = "toilet4";
    array[4] = "toilet5";
    array[5] = "toilet6";
    array[6] = "toilet7";

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
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')

    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
        pushInList(event.relatedTarget.classList[0], event.target.classList[1])

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    }

})

// text is the object being placed on 2the letter, and postion is the place in the list
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
        puzzleSolved();
    }
}

function puzzleSolved() {
    alert("TODO: add Kieran words");
}

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



class Mott extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

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
    render() {

        return (
            <Container fluid='true' className="wooden-background" style={{ overflowX: 'hidden', minHeight: this.state.height, minWidth: this.state.width }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>One of these things is not</title>
                </Helmet>
                <div style={{ position: 'relative' }} >
                    {/* dragables */}
                    <div className="0 draggable toliet-pos" style={{
                        left: '0px'
                    }} >
                        {/* <Image src={DL_2} /> */}
                        < Image src={toilet1} style={{ maxWidth: '100%', width: '200px' }} />
                    </div>

                    <div className="1 draggable toliet-pos" style={{
                        left: '220px'
                    }} >
                        {/* <Image src={DL_1} /> */}
                        < Image src={toilet2} style={{ maxWidth: '100%' }} />
                    </div >

                    <div className="2 draggable toliet-pos" style={{
                        left: '445px'
                    }} >
                        {/* <Image src={DL_14} /> */}
                        < Image src={toilet3} style={{ maxWidth: '100%' }} />
                    </div >
                    <div className="3 draggable toliet-pos" style={{
                        left: '645px'
                    }} >
                        {/* <Image src={DL_2} /> */}
                        < Image src={toilet4} style={{ maxWidth: '100%' }} />
                    </div >

                    <div className="4 draggable toliet-pos" style={{
                        left: '845px'
                    }} >
                        {/* <Image src={DL_1} /> */}
                        < Image src={toilet5} style={{ maxWidth: '100%' }} />
                    </div >

                    <div className="5 draggable toliet-pos" style={{
                        left: '1045px'
                    }} >
                        {/* <Image src={DL_14} /> */}
                        < Image src={toilet6} style={{ maxWidth: '100%' }} />
                    </div >
                    <div className="6 draggable toliet-pos" style={{
                        left: '1245px'
                    }} >
                        {/* <Image src={DL_14} /> */}
                        < Image src={toilet7} style={{ maxWidth: '100%' }} />
                    </div >

                    <Row>
                        <div className="page-one">
                            {/* line one */}
                            <div className="dropzone 0" style={{
                                height: '221px',
                                width: '242px',
                                left: '25px',
                                top: '85px',
                            }} />

                            {/* line two */}
                            <div className="dropzone 1" style={{
                                height: '221px',
                                width: '242px',
                                left: '312px',
                                top: '85px',
                            }} />

                            {/* line three */}
                            <div className="dropzone 2" style={{
                                height: '291px',
                                width: '255px',
                                left: '25px',
                                top: '400px',
                            }} />
                        </div>

                        <div className="page-two">
                            <div className="dropzone 3" style={{
                                height: '274px',
                                width: '238px',
                                left: '44px',
                                top: '379px',
                            }} />

                            <div className="dropzone 4" style={{
                                height: '274px',
                                width: '238px',
                                left: '325px',
                                top: '379px',
                            }} />
                        </div>

                    </Row>

                    <Row>
                        <div className="page-three">
                            <div className="dropzone 5" style={{
                                height: '290px',
                                width: '233px',
                                left: '346px',
                                top: '428px',
                            }} />
                        </div>
                    </Row>
                </div>
            </Container >

        );
    }
}

export default withCookies(Mott);