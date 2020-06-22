//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";

//Image Imports
import toilet1 from './mott_catalog_images/toilet/toilet1.png'
import toilet2 from './mott_catalog_images/toilet/toilet2.png'
import toilet3 from './mott_catalog_images/toilet/toilet3.png'
import toilet4 from './mott_catalog_images/toilet/toilet4.png'
import toilet5 from './mott_catalog_images/toilet/toilet5.png'
import toilet6 from './mott_catalog_images/toilet/toilet6.png'
import toilet7 from './mott_catalog_images/toilet/toilet7.png'

import Page1 from './mott_catalog_images/pages/mott_catalog_page1.png'
import Page2 from './mott_catalog_images/pages/mott_catalog_page2.png'
import Page3 from './mott_catalog_images/pages/mott_catalog_page3.png'
import Sticky from "../../folder_elements/sticky/sticky.png"

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

const correctList = getCorrect();
var currList = intializeArray();

//seting zoom
var prev = "0";
const img1 = require('./mott_catalog_images/toilet/toilet1.png');
const img2 = require('./mott_catalog_images/toilet/toilet2.png');
const img3 = require('./mott_catalog_images/toilet/toilet3.png');
const img4 = require('./mott_catalog_images/toilet/toilet4.png');
const img5 = require('./mott_catalog_images/toilet/toilet5.png');
const img6 = require('./mott_catalog_images/toilet/toilet6.png');
const img7 = require('./mott_catalog_images/toilet/toilet7.png');

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
        move: dragMoveListener,
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

function setPages() {
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");

    //Set left of page one
    one.style.left = (5 + 'px');

    //Set left of page two
    two.style.left = ((one.getBoundingClientRect().x + one.width) + 10 + 'px');

    //Set left of page three
    three.style.left = ((two.getBoundingClientRect().x + two.width) + 10 + 'px');
}

class Mott extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            imgList: [img1, img2, img3, img4, img5, img6, img7]

        };
    }

    //Sets the listener
    componentDidMount() {
        console.log(this.state.width)
        if (this.state.width <= 1190) {
            document.getElementsByClassName("mott-sticky")[0].setAttribute("width", '70%');
            document.getElementsByClassName("mott-text-sticky")[0].setAttribute("font-size", '19px');
            document.getElementsByClassName("mott-text-sticky")[0].setAttribute("top", '23px');
            document.getElementsByClassName("mott-text-sticky")[0].setAttribute("left", '35px');
        }
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        if (checkList()) {
            cookies.set('MottCatalogChildren');
            this.props.history.push('/clues');
        }
    }

    changeZoomed(newZoom) {
        var img = null;
        img = this.state.imgList[newZoom]


        //set the new image to be large
        document.getElementById("Zoom").setAttribute('src', img);

        //add border to new img
        document.getElementsByClassName(newZoom)[0].classList.add("zoomBorder");

        //remove the border from the prev
        var element = document.getElementsByClassName(prev)[0];
        if (element.classList.contains("zoomBorder")) {
            element.classList.remove("zoomBorder");
        }

        prev = newZoom;
    }
    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>One of these things is not</title>
                </Helmet>

                <div id="note" className="mott-container">
                    <Image src={Sticky} className="mott-sticky" />
                    <div className="mott-text-sticky"> Double <br /> click a<br />page to <br />zoom</div>
                </div>

                {/* Draggables */}
                <Row className="justify-content-end">
                    < Image src={toilet1} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("0")} className="0 draggable toliet-pos" />

                    < Image src={toilet2} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("1")} className="1 draggable toliet-pos" />

                    < Image src={toilet3} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("2")} className="2 draggable toliet-pos" />

                    < Image src={toilet4} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("3")} className="3 draggable toliet-pos" />

                    < Image src={toilet5} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("4")} className="4 draggable toliet-pos" />

                    < Image src={toilet6} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("5")} className="5 draggable toliet-pos" />

                    < Image src={toilet7} onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("6")} className="6 draggable toliet-pos" />
                </Row>

                <Row className="justify-content-end align-items-center">
                    <Image id="Zoom" src={toilet1} className="mott-zoom" />

                    <GlassMagnifier
                        imageSrc={Page1}
                        imageAlt="Example"
                        className="page-resize"
                        id="1"
                        square={true}
                        magnifierSize='45%'
                        largeImageSrc={Page1} // Optional
                    />

                    <GlassMagnifier
                        imageSrc={Page2}
                        imageAlt="Example"
                        id="2"
                        className="page-resize"
                        square={true}
                        magnifierSize='45%'
                        largeImageSrc={Page2} // Optional
                    />

                    <GlassMagnifier
                        imageSrc={Page3}
                        imageAlt="Example"
                        id="3"
                        square={true}
                        className="page-resize"
                        magnifierSize='45%'
                        largeImageSrc={Page3} // Optional
                    />
                </Row>
            </Container >

        );
    }
}

export default withCookies(Mott);