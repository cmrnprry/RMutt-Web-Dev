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

import Sticky from "../../folder_elements/sticky/sticky.png"

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

const correctList = ["2", "3", "1", "4", "5", "0"];
var currList = [];

//seting zoom
var prev = "0";
const img1 = require('./mott_catalog_images/toilet/toilet1.png');
const img2 = require('./mott_catalog_images/toilet/toilet2.png');
const img3 = require('./mott_catalog_images/toilet/toilet3.png');
const img4 = require('./mott_catalog_images/toilet/toilet4.png');
const img5 = require('./mott_catalog_images/toilet/toilet5.png');
const img6 = require('./mott_catalog_images/toilet/toilet6.png');
const img7 = require('./mott_catalog_images/toilet/toilet7.png');

//Draggable function
interact('.draggable-mott').draggable({
    listeners: {
        move: dragMoveListener,
    }
})

//Dropzone function
interact('.dropzone-mott').dropzone({
    accept: '.draggable-mott',
    overlap: 0.50,

    // var draggableElement = event.relatedTarget
    // var dropzoneElement = event.target

    ondropactivate: function (event) {
        // add active dropzone feedback

    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop


    },
    ondragleave: function (event) {
        // remove the drop feedback style
        console.log("dragable: " + event.relatedTarget.classList[0]);
        console.log("drop: " + event.target.classList[0]);

        event.relatedTarget.classList.add("toliet-shadow");
        removeFromList(event.relatedTarget.classList[0], event.target.classList[0])
    },
    ondrop: function (event) {
        event.relatedTarget.classList.remove("toliet-shadow");

        if (event.relatedTarget.classList[0] !== "6") {
            pushInList(event.relatedTarget.classList[0], event.target.classList[0])
        }

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
    }

})

// text is the object being placed on 2the letter, and postion is the place in the list
function pushInList(draggable, drop) {
    currList[drop] = draggable;
    console.log("currList at index " + drop + ": " + draggable);

    if (checkList()) {
        puzzleSolved();
    }
}

// text is the object being placed on 2the letter, and postion is the place in the list
function removeFromList(draggable, drop) {
    if (currList[drop] === draggable) {
        currList[drop] = false;
        console.log("currList at index " + drop + ": false");
    }

    if (checkList()) {
        puzzleSolved();
    }
}

function puzzleSolved() {
    alert("Puzzle has been solved");
}

function checkList() {

    if (correctList.length === currList.length) {
        for (let i = 0; i < correctList.length; i++) {
            console.log("list at index " + i + ": " + currList[i]);
            if (currList[i] !== correctList[i]) {
                return false;
            }
        }
        return true;
    }



    return false;
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
    var middle = window.innerWidth / 2;

    //set toliets
    //center
    document.getElementById("1").style.left = (middle - (document.getElementById("1").getBoundingClientRect().width) / 2) + "px";

    //to the left
    document.getElementById("0").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width) - 10 + "px";
    document.getElementById("6").style.left = (document.getElementById("0").getBoundingClientRect().x - document.getElementById("0").getBoundingClientRect().width) - 10 + "px";
    document.getElementById("3").style.left = (document.getElementById("6").getBoundingClientRect().x - document.getElementById("6").getBoundingClientRect().width) - 10 + "px";

    //to the right
    document.getElementById("2").style.left = (document.getElementById("1").getBoundingClientRect().x + (document.getElementById("1").getBoundingClientRect().width) + 10 + "px");
    document.getElementById("4").style.left = (document.getElementById("2").getBoundingClientRect().x + (document.getElementById("2").getBoundingClientRect().width) + 10 + "px");
    document.getElementById("5").style.left = (document.getElementById("4").getBoundingClientRect().x + (document.getElementById("4").getBoundingClientRect().width) + 10 + "px");

    //set pages
    //center
    document.getElementsByClassName("page-resize")[1].style.left = (middle - (document.getElementById("Page2").getBoundingClientRect().width) / 2) + "px";

    //to the left
    document.getElementsByClassName("page-resize")[0].style.left =
        (document.getElementById("Page2").getBoundingClientRect().x - document.getElementById("Page2").getBoundingClientRect().width) - 30 + "px";

    //to the right
    document.getElementsByClassName("page-resize")[2].style.left =
        (document.getElementById("Page2").getBoundingClientRect().x + (document.getElementById("Page2").getBoundingClientRect().width) + 20 + "px");



    //Set dropzones
    document.getElementById("drop-0").style.left = document.getElementById("Page1").getBoundingClientRect().x + 11 + "px";
    document.getElementById("drop-0").style.top = document.getElementById("Page1").getBoundingClientRect().y + 48 + "px";

    document.getElementById("drop-1").style.left = document.getElementById("Page1").getBoundingClientRect().x + 187 + "px";
    document.getElementById("drop-1").style.top = document.getElementById("Page1").getBoundingClientRect().y + 48 + "px";

    document.getElementById("drop-2").style.left = document.getElementById("Page1").getBoundingClientRect().x + 11 + "px";
    document.getElementById("drop-2").style.top = document.getElementById("Page1").getBoundingClientRect().y + 242 + "px";

    document.getElementById("drop-3").style.left = document.getElementById("Page2").getBoundingClientRect().x + 23 + "px";
    document.getElementById("drop-3").style.top = document.getElementById("Page2").getBoundingClientRect().y + 230 + "px";

    document.getElementById("drop-4").style.left = document.getElementById("Page2").getBoundingClientRect().x + 197 + "px";
    document.getElementById("drop-4").style.top = document.getElementById("Page2").getBoundingClientRect().y + 230 + "px";

    document.getElementById("drop-5").style.left = document.getElementById("Page3").getBoundingClientRect().x + 208 + "px";
    document.getElementById("drop-5").style.top = document.getElementById("Page3").getBoundingClientRect().y + 257 + "px";
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

        setPages();
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
                < Image src={toilet4} id="3" onMouseUp={() => this.setChildren()} className="3 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '25px',
                    }} />

                < Image src={toilet7} id="6" className="6 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '6px',
                    }} />

                < Image src={toilet1} id="0" onMouseUp={() => this.setChildren()} className="0 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '-1px',
                    }} />

                < Image src={toilet3} id="2" onMouseUp={() => this.setChildren()} className="2 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '26px',
                    }} />

                < Image src={toilet6} id="5" onMouseUp={() => this.setChildren()} className="5 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '6px',
                    }} />

                < Image src={toilet5} id="4" onMouseUp={() => this.setChildren()} className="4 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '6px',
                        width: '150px'
                    }} />

                < Image src={toilet2} id="1" onMouseUp={() => this.setChildren()} className="1 draggable-mott toliet-pos toliet-shadow"
                    style={{
                        top: '8px',
                    }} />

                {/* Pages */}
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

                {/* Drops */}
                <div id="drop-0" className="0 mott-drop dropzone-mott" style={{
                    width: '158px',
                    height: '146px'
                }} />

                <div id="drop-1" className="1 mott-drop dropzone-mott" style={{
                    width: '158px',
                    height: '146px'
                }} />

                <div id="drop-2" className="2 mott-drop dropzone-mott" style={{
                    width: '166px',
                    height: '188px'
                }} />

                <div id="drop-3" className="3 mott-drop dropzone-mott" style={{
                    width: '156px',
                    height: '178px'
                }} />

                <div id="drop-4" className="4 mott-drop dropzone-mott" style={{
                    width: '156px',
                    height: '178px'
                }} />

                <div id="drop-5" className="5 mott-drop dropzone-mott" style={{
                    width: '153px',
                    height: '186px'
                }} />
            </Container >

        );
    }
}

export default withCookies(Mott);