// Base code for the canvas lines being drawn was found on stack overflow.
//Link https://stackoverflow.com/questions/49885020/drawing-a-straight-line-using-mouse-events-on-canvas-in-javascript

//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../Navigation/Back.js'

//Image Imports
import Background from './Corboard Images/corkboard-web.png'
import Rrose from './Corboard Images/RRose.png'
import God from './Corboard Images/god.png'
import Demuth from './Corboard Images/demuth_letter.png'
import Elsa from './Corboard Images/elsa.png'
import Amie from './Corboard Images/ar_letter_red.png'
import BlindMan from './Corboard Images/blind_man.png'
import Louise from './Corboard Images/louise.png'
import MinaLoy from './Corboard Images/mina_loy.png'
import BeatriceWood from './Corboard Images/beatrice_wood.png'
import ClearButton from './Corboard Images/full_clear_button.png'
import Undo from './Corboard Images/undo_button.png'
import Sticky from '../folder_elements/sticky/stickyLeft.png'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import interact from 'interactjs'

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
var ImagePos = [];
var key = 'n/a'


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

    localStorage.setItem("SaveData", JSON.stringify(existingLines));
}

function UndoLastStroke() {
    existingLines.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw()
    localStorage.setItem("SaveData", JSON.stringify(existingLines));
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

    draw();
}

function LogPosition(id, x, y)
{
    // ImagePos.push()
    var newValue = {
        ID: id,
        xPos: x,
        yPos: y
    }
    
    console.log(newValue.ID)

    var found = false
    ImagePos.forEach(element => {
        
    });
    for (var ii = 0; ii < ImagePos.length; ii ++) {
        if (ImagePos[ii].ID === id) {
            console.log("replacing old")
            ImagePos[ii] = newValue;
            found = true
        }
    }

    if (!found)
    {
        console.log("adding new")
        ImagePos.push(newValue)
    }

    console.log(ImagePos)

    localStorage.setItem("ImageData", JSON.stringify(ImagePos));
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

    if (key == false)
    {
        // keep the dragged position in the data-x/data-y attributes
        x = ((parseFloat(target.getAttribute('data-x')) || 0) + event.dx)
        y = ((parseFloat(target.getAttribute('data-y')) || 0) + event.dy)

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        LogPosition(event.target.id, x, y)
    }
    
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
            height: window.innerHeight,
            key: "n/a"
        };

        this.resizeWindow = this.resizeWindow.bind(this);
        this.setChildren = this.setChildren.bind(this);
        this.checkImages = this.checkImages.bind(this);
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
        window.addEventListener('keydown', this.OnKeyDown, false);
        window.addEventListener('keyup', this.OnKeyUp, false);

        this.checkImages();
    }

    OnKeyDown(evt)
    {
        if (evt.keyCode === 16) {
            console.log('The "shift" key is being held down...?');
            key = true;
        }
    }

    OnKeyUp(evt)
    {
        if (evt.keyCode === 16) {
            console.log('The "shift" key is not being held');
            key = false;
        }
    }

    checkImages() {
        var puzzle = [];
        if (localStorage.getItem("SolvedPuzzle") !== null) {
            puzzle = JSON.parse(localStorage.getItem("SolvedPuzzle"));
        }

        if (localStorage.getItem("ImageData") !== null) {
            ImagePos = JSON.parse(localStorage.getItem("ImageData"));
        }

        puzzle.forEach(element => {
            console.log("Puzzle: " + element)
            switch (element) {
                case "TheLetter":
                    if (document.getElementById("Amie") !== null){
                        document.getElementById("Amie").style.display = "block";
                    }
                    break;
                case "DemuthLetter":
                    if (document.getElementById("Demuth") !== null)
                        document.getElementById("Demuth").style.display = "block";

                    break;
                case "SiaCatalog":
                    if (document.getElementById("Sia") !== null)
                        document.getElementById("Sia").style.display = "block";

                    break;
                case "BlindMan":
                    if (document.getElementById("BlindMan") !== null && document.getElementById("BlindMan2") !== null)
                        document.getElementById("BlindMan").style.display = "block";
                        document.getElementById("BlindMan2").style.display = "block";

                    break;
                case "MinaLoy":
                    if (document.getElementById("MinaLoy") !== null)
                        document.getElementById("MinaLoy").style.display = "block";

                    break;
                case "TissuePaper":
                    if (document.getElementById("TissuePaper") !== null)
                        document.getElementById("TissuePaper").style.display = "block";

                    break;
                case "Phonebook":
                    if (document.getElementById("Phonebook") !== null)
                        document.getElementById("Phonebook").style.display = "block";

                    break;
                case "Elsa":
                    if (document.getElementById("Elsa") !== null)
                        document.getElementById("Elsa").style.display = "block";

                    break;
                case "Rrose":
                    if (document.getElementById("Rrose") !== null)
                        document.getElementById("Rrose").style.display = "block";

                    break;
                case "MottCatalog":
                    if (document.getElementById("MottCatalog") !== null)
                        document.getElementById("MottCatalog").style.display = "block";

                    break;
                case "God":
                    if (document.getElementById("God") !== null)
                        document.getElementById("God").style.display = "block";

                    break;
                case "GodII":
                    if (document.getElementById("GodII") !== null)
                        document.getElementById("GodII").style.display = "block";

                    break;
                default:
                    console.log("error");
                    break;
            }
        });

        ImagePos.forEach(element => {
            var image = document.getElementById(element.ID);

            image.addEventListener('load', function () {
                image.style.webkitTransform =
                image.style.transform = 'translate(' + element.xPos + 'px, ' + element.yPos + 'px)';
                image.setAttribute('data-x', element.xPos);
                image.setAttribute('data-y', element.yPos);
            });
        });
    }

    DrawImage() {
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
                var lines = JSON.parse(localStorage.getItem("SaveData"));
                existingLines = lines;
            }
            SetIt();
        });
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerHeight, height: window.innerHeight });
    }

    Onmousedown(e) {
        if (e.target.id === "Canvas" && key === true) {
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
                localStorage.setItem("SaveData", JSON.stringify(existingLines));
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

                <Image id="Rrose" src={Rrose} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="God" src={God} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="Demuth" src={Demuth} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="Amie" src={Amie} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="BlindMan" src={BeatriceWood} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="BlindMan2" src={BlindMan} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="Elsa" src={Elsa} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="MinaLoy" src={MinaLoy} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                <Image id="TissuePaper" src={Louise} className="draggable-board board-resize"
                    style={{ display: 'none' }} />
                {/* <Image id="Elsa" src={Elsa} className="draggable-board board-resize"
                    style={{ display: 'none' }} /> */}
                {/* <Image id="Phonebook" src={else} className="draggable-board board-resize"
                    style={{ display: 'none' }} /> */}
                {/* <Image id="GodII" src={else} className="draggable-board board-resize"
                    style={{ display: 'none' }} /> */}
                
                {/* <Image id="Sia" src={else} className="draggable-board board-resize"
                    style={{ display: 'none' }} /> */}
                


                {/* Canvases */}
                <canvas id="CanvasImage" className="canvas" />
                <canvas id="Canvas" className="canvas" />

                {/* Button to full clear the board */}
                <Image src={ClearButton} className="canvas"
                    style={{ top: "100px" }}
                    onClick={() => FullClear()} >
                </Image>

                {/* Button to undo last stroke */}
                <Image src={Undo} className="canvas"
                    style={{ top: "150px" }}
                    onClick={() => UndoLastStroke()}>
                </Image>

                <div id="note" img={Sticky} className="container"  style={{
                        top: "250px"
                    }}>
                    <Image src={Sticky} />
                </div>
            </Container >
        );
    }
}

export default withCookies(Corkboard);