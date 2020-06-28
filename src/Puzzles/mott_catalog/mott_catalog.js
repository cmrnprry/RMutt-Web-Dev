//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Magnifier from "react-magnifier";

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

import Cursor from './mott_catalog_images/magnify.png'
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
    //this works whil we are not swaping the objects and are just dropping them one at a time
    currList.splice(position, 1, text);

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

//Set where the pages appear on screen
function setPages() {


    document.getElementById("0").style.left = "56px";
    document.getElementById("1").style.left = (document.getElementById("0").getBoundingClientRect().x + document.getElementById("0").width) + 15 + "px";
    document.getElementById("2").style.left = (document.getElementById("1").getBoundingClientRect().x + document.getElementById("1").width) + 15 + "px";
    document.getElementById("3").style.left = (document.getElementById("2").getBoundingClientRect().x + document.getElementById("2").width) + 15 + "px";
    document.getElementById("4").style.left = (document.getElementById("3").getBoundingClientRect().x + document.getElementById("3").width) + 15 + "px";
    document.getElementById("5").style.left = (document.getElementById("4").getBoundingClientRect().x + document.getElementById("4").width) + 15 + "px";
    document.getElementById("6").style.left = (document.getElementById("5").getBoundingClientRect().x + document.getElementById("5").width) + 15 + "px";

    document.getElementsByClassName("page-resize")[0].style.left =
        (document.getElementById("Page2").getBoundingClientRect().x - (document.getElementById("Page2").getBoundingClientRect().width) - 10 + "px")
    
    // document.getElementsByClassName("page-resize")[1].style.left =
    //     (document.getElementById("Page1").getBoundingClientRect().x + document.getElementById("Page1").getBoundingClientRect().width + "px");
    
    document.getElementsByClassName("page-resize")[2].style.left =
        (document.getElementById("Page2").getBoundingClientRect().x + (document.getElementById("Page2").getBoundingClientRect().width) + "px");
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
        if (this.state.width > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }

        //listener for window resize
        window.addEventListener('resize', this.resizeWindow);

        //sets the pages
        setPages();
    }

    resizeWindow() {
        // if the screen is big enough
        if (window.innerWidth > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
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

                {/* <div id="note" className="mott-container">
                    <Image src={Sticky} className="mott-sticky" />
                    <div className="mott-text-sticky"> Double <br /> click a<br />page to <br />zoom</div>
                </div> */}


                {/* Draggables */}
                <div style={{ textAlign: 'center' }}>
                    < Image src={toilet1} id="0" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("0")} className="0 draggable toliet-pos"
                        style={{
                            top: '-1px',
                        }} />

                    < Image src={toilet2} id="1" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("1")} className="1 draggable toliet-pos"
                        style={{
                            top: '8px',
                        }} />

                    < Image src={toilet3} id="2" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("2")} className="2 draggable toliet-pos"
                        style={{
                            top: '26px',
                        }} />

                    < Image src={toilet4} id="3" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("3")} className="3 draggable toliet-pos"
                        style={{
                            top: '25px',
                        }} />

                    < Image src={toilet5} id="4" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("4")} className="4 draggable toliet-pos"
                        style={{
                            top: '6px',
                            width: '11%'
                        }} />

                    < Image src={toilet6} id="5" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("5")} className="5 draggable toliet-pos"
                        style={{
                            top: '6px',
                        }} />

                    < Image src={toilet7} id="6" onMouseUp={() => this.setChildren()} onDoubleClick={() => this.changeZoomed("6")} className="6 draggable toliet-pos"
                        style={{
                            top: '6px',
                        }} />
                </div>

                <Row className="justify-content-center">
                    {/* <Image id="Zoom" src={toilet1} className="mott-zoom" /> */}

                    <Magnifier
                        src={Page1}
                        id="Page1"
                        className="page-resize"
                        zoomFactor="2"
                    />

                    <Magnifier
                        src={Page2}
                        id="Page2"
                        className="page-resize"
                        zoomFactor="2"
                    />

                    <Magnifier
                        src={Page3}
                        id="Page3"
                        className="page-resize"
                        zoomFactor="2"
                    />

                    {/* <Magnifier
                        src={Page1}
                        id="1"
                        className="page-resize-fake"
                        zoomFactor="2"
                    />

                    <Magnifier
                        src={Page2}
                        id="2"
                        className="page-resize-fake"
                        zoomFactor="2"
                    />

                    <Magnifier
                        src={Page3}
                        id="3"
                        className="page-resize-fake"
                        zoomFactor="2"
                    /> */}
                </Row>
            </Container >

        );
    }
}

export default withCookies(Mott);