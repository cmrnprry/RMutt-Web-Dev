// Base code for the canvas lines being drawn was found on stack overflow.
//Link https://stackoverflow.com/questions/49885020/drawing-a-straight-line-using-mouse-events-on-canvas-in-javascript

//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import CanvasDraw from "react-canvas-draw";
import { instanceOf } from 'prop-types';
import { LazyBrush } from "lazy-brush";
import { Catenary } from "catenary-curve";
import Back from '../Navigation/Back.js'

//Image Imports
import Background from './Corboard Images/CorkBoard1.jpg'
import Image1 from './Corboard Images/CorkBoard1.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Helmet from 'react-helmet'
import interact from 'interactjs'
import Popup from "reactjs-popup";

var x = 0, y = 0;

var canvasWidth = 600;
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
    console.log("on mouse move");

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
        saveData = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
    console.log("on mouse move");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function FullClear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    existingLines = [];
}

function UndoLastStroke() {
    existingLines.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw()
}

function SetIt() {
    canvas = document.getElementById("Canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";
    canvas.onmousedown = onmousedown;
    canvas.onmouseup = onmouseup;
    canvas.onmousemove = onmousemove;

    bounds = canvas.getBoundingClientRect();

    ctx = canvas.getContext("2d");
    hasLoaded = true;

    if (saveData != null) {
        // ctx.putImageData(saveData, 0, 0);
    }
    draw();
    saveData = ctx.getImageData(0, 0, canvas.width, canvas.height);

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

    DrawImage() {
        const { cookies } = this.props;
        const canvas = document.getElementById("CanvasImage");
        const context = canvas.getContext("2d");
        const background = document.getElementById("image");

        canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";

        background.addEventListener('load', function () {
            canvasWidth = background.naturalWidth;
            canvasHeight = background.naturalHeight;

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            console.log(canvas.width)
            console.log(canvas.height)

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            if (localStorage.getItem("SaveData") !== null) {
                saveData = localStorage.getItem("SaveData");
            }
            SetIt();
        });
    }

    //Sets the listener
    componentDidMount() {
        // canvasWidth = 500//document.getElementById("board").getBoundingClientRect().width;
        // canvasHeight = 500//document.getElementById("board").getBoundingClientRect().height;

        this.DrawImage();
        // let image = new Image(canvasWidth, canvasWidth);
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
        if (e.target.id === "Canvas") {
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
    }

    Onmouseup(e) {
        if (e.target.id === "Canvas") {
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
                console.log("save data: " + saveData)
                localStorage.setItem("SaveData", saveData);
            }
        }
    }

    Onmousemove(e) {
        if (e.target.id === "Canvas") {
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
    }

    setChildren() {
        const { cookies } = this.props;
    }

    render() {

        return (
            <Container fluid='true' style={{ minWidth: this.state.width, minHeight: this.state.height }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Evidence Board</title>
                </Helmet>

                <Back />

                {/* Invisible image so that the background works its so weird i know */}
                <img id="image"
                    src={Background}
                    width="100"
                    heigh="100"
                    style={{ display: 'none' }} />

                {/* Canvases */}
                <canvas id="CanvasImage" className="canvas" />
                <canvas id="Canvas" className="canvas" />

                {/* <Image src={Image1} className="draggable-board board-resize" /> */}
                {/*   <Image src={Image2} className="draggable-board board-resize" />
                    <Image src={Image3} className="draggable-board board-resize" />
                    <Image src={Image4} className="draggable-board board-resize" />
                    <Image src={Image5} className="draggable-board board-resize" /> */}
                {/* </div> */}

                {/* Button to full clear the board */}
                <Button className="canvas"
                    style={{ top: "100px" }}
                    onClick={() => FullClear()} >
                    Full Clear
                </Button>

                {/* Button to undo last stroke */}
                <Button className="canvas"
                    style={{ top: "150px" }}
                    onClick={() => UndoLastStroke()}>
                    Undo
                </Button>
            </Container>
        );
    }
}

export default withCookies(Corkboard);