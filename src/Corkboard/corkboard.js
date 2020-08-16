// Base code for the canvas lines being drawn was found on stack overflow.
//Link https://stackoverflow.com/questions/49885020/drawing-a-straight-line-using-mouse-events-on-canvas-in-javascript

//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import Back from '../Navigation/Back.js'

//Image Imports
import Image1 from './Corboard Images/MVIMG_20200808_115800.jpg'
import Image2 from './Corboard Images/MVIMG_20200808_115817.jpg'
import Image3 from './Corboard Images/MVIMG_20200808_120217_1.jpg'
import Image4 from './Corboard Images/MVIMG_20200808_125714.jpg'
import Image5 from './Corboard Images/MVIMG_20200808_125852.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import interact from 'interactjs'
import Popup from "reactjs-popup";

var x = 0, y = 0;

var canvasWidth = 500;
var canvasHeight = 500;
var canvas = null;
var bounds = null;
var ctx = null;
var saveData = null;
var hasLoaded = false;

var startX = 0;
var startY = 0;
var mouseX = 0;
var mouseY = 0;
var isDrawing = false;
var existingLines = [];


function draw() {
    console.log("lines length: " + existingLines.length);

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();

    DrawLines();

    ctx.stroke();

    if (isDrawing) {
        
        DrawLines();
        ctx.strokeStyle = "darkred";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        //  saveData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
}

function DrawLines() {
    for (var i = 0; i < existingLines.length; ++i) {
        var line = existingLines[i];
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
    }
}

function Clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function FullClear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    existingLines = [];
}


//Draggable function
interact('.draggable-board').draggable({
    listeners: {
        move: dragMoveListener,
    },
    modifiers: [
        interact.modifiers.restrict({
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
        })
    ],
    inertia: false
})

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

class Corkboard extends Component {
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
        this.setChildren = this.setChildren.bind(this);

    }

    SetIt() {
        canvas = document.getElementById("Canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.onmousedown = onmousedown;
        canvas.onmouseup = onmouseup;
        canvas.onmousemove = onmousemove;

        bounds = canvas.getBoundingClientRect();
        ctx = canvas.getContext("2d");
        hasLoaded = true;

        draw();
        saveData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    //Sets the listener
    componentDidMount() {
        canvasWidth = document.getElementById("board").getBoundingClientRect().width;
        canvasHeight = document.getElementById("board").getBoundingClientRect().height;

        this.SetIt();
        window.addEventListener("resize", this.resizeWindow);
        window.addEventListener('mousedown', this.Onmousedown, false);
        window.addEventListener('mousemove', this.Onmousemove, false);
        window.addEventListener('mouseup', this.Onmouseup, false);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerHeight, height: window.innerHeight });
    }

    Onmousedown(e) {
        console.log("on mouse down");
        if (hasLoaded && e.button === 0) {
            if (!isDrawing) {
                startX = e.clientX - bounds.left;
                startY = e.clientY - bounds.top;

                isDrawing = true;
            }

            draw();
        }
    }

    Onmouseup(e) {
        console.log("on mouse up");

        if (hasLoaded && e.button === 0) {
            if (isDrawing) {
                existingLines.push({
                    startX: startX,
                    startY: startY,
                    endX: mouseX,
                    endY: mouseY
                });

                isDrawing = false;
            }

            draw();
            saveData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
    }

    Onmousemove(e) {
        console.log("on mouse move");

        if (hasLoaded) {
            mouseX = e.clientX - bounds.left;
            mouseY = e.clientY - bounds.top;

            if (isDrawing) {
                Clear();
                draw();
            }
        }
    }

    setChildren() {
        const { cookies } = this.props;


    }

    render() {

        return (

            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The spark that started the fire</title>
                </Helmet>

                <Back />

                {/* Base Letter */}
                <div id="board" className="board-container">

                    <canvas id="Canvas" className="canvas" />


                    {/* <Image src={Image1} className="draggable-board board-resize" />
                    <Image src={Image2} className="draggable-board board-resize" />
                    <Image src={Image3} className="draggable-board board-resize" />
                    <Image src={Image4} className="draggable-board board-resize" />
                    <Image src={Image5} className="draggable-board board-resize" /> */}
                </div>

                <button onClick={() => FullClear()} />
            </Container>
        );
    }
}

export default withCookies(Corkboard);