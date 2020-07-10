//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import One from './pipe_elements/pipe_0.png'
import Two from './pipe_elements/pipe_1.png'
import Three from './pipe_elements/pipe_2.png'
import Four from './pipe_elements/pipe_3.png'
import Five from './pipe_elements/pipe_4.png'
import Six from './pipe_elements/pipe_5.png'
import Seven from './pipe_elements/pipe_6.png'
import Eight from './pipe_elements/pipe_7.png'
import Nine from './pipe_elements/pipe_8.png'


//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//track the position of an object
var x = 0, y = 0;

var pipe1, pipe2, pipe3, pipe4, other = false;


function SetPages() {
    //middle of screen
    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;

    //set the base 
    document.getElementById("1").style.left = (w - (document.getElementById("1").getBoundingClientRect().width) / 2) + "px";
    document.getElementById("1").style.top = h + (document.getElementById("1").getBoundingClientRect().width) / 2 + "px";

    //set to the left
    document.getElementById("9").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 30) + "px";
    document.getElementById("9").style.top = 40 + "px";

    document.getElementById("7").style.left = (document.getElementById("9").getBoundingClientRect().x - document.getElementById("9").getBoundingClientRect().width) + "px";
    document.getElementById("7").style.top = document.getElementById("9").getBoundingClientRect().y + 40 + "px";

    document.getElementById("4").style.left = (document.getElementById("1").getBoundingClientRect().x - document.getElementById("1").getBoundingClientRect().width + 150) + "px";
    document.getElementById("4").style.top = document.getElementById("9").getBoundingClientRect().y + 150 + "px";

    document.getElementById("5").style.left = (document.getElementById("4").getBoundingClientRect().x - document.getElementById("4").getBoundingClientRect().width - 200) + "px";
    document.getElementById("5").style.top = document.getElementById("4").getBoundingClientRect().y + 285 + "px";

    document.getElementById("8").style.left = (document.getElementById("4").getBoundingClientRect().x - document.getElementById("4").getBoundingClientRect().width - 25) + "px";
    document.getElementById("8").style.top = document.getElementById("4").getBoundingClientRect().y + "px";
}

interact('.draggable').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            checkPosition(event.target.id, x, y);
            console.log(event.target.id + " at x: " + x);
            console.log(event.target.id + " at y: " + y);
        }
    },
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

    // var top = document.getElementsByName(event.target.name)[0].style.top;
    // var left = document.getElementsByName(event.target.name)[0].style.left;
}

function checkImage1(dx, dy) {
    if ((dx >= -573 && dx <= -531) && (dy >= 24 && dy <= 53)) {
        pipe1 = true;
    }
    else {
        pipe1 = false;
    }
    console.log("Pipe 2: " + pipe1);

}

function checkImage2(dx, dy) {

    if ((dx >= 516 && dx <= 528) && (dy >= -368 && dy <= -330)) {
        pipe2 = true;
    }
    else {
        pipe2 = false;
    }

    console.log("Pipe 5: " + pipe2);
}

function checkImage3(dx, dy) {
    if ((dx >= 618 && dx <= 630) && (dy >= 153 && dy <= 164)) {
        pipe3 = true;
    }
    else {
        pipe3 = false;
    }

    console.log("Pipe 7: " + pipe3);

}

function checkImage4(dx, dy) {
    if ((dx >= 326 && dx <= 363) && (dy >= 202 && dy <= 218)) {
        pipe4 = true;
    }
    else {
        pipe4 = false;
    }

    console.log("Pipe 9: " + pipe4);

}





function checkPosition(obj, dx, dy) {
    switch (obj) {
        case "2":
            checkImage1(dx, dy);
            break;
        case "5":
            checkImage2(dx, dy);
            break;
        case "7":
            checkImage3(dx, dy);
            break;
        case "9":
            checkImage4(dx, dy);
            break;
        default:
            console.log("Something has gone terribly wrong.")
    }

    if (pipe1 && pipe2 && pipe3 && pipe4) {
        alert("All objects are in the correct places!");

    }
}

class God extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
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

        //Set the pages
        SetPages();
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

        if (false) {
            cookies.set('GodCatalogChildren');
            this.props.history.push('/clues');
        }
    }

    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Turn and turn</title>
                </Helmet>


                <div className="god-container">
                    {/* Pages */}
                    <Image id="1" src={One} className="pipe-base" />


                    <Image id="3" src={Three} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '100px',
                            left: '1000px',
                            top: '25px'
                        }} />
                    <Image id="4" src={Four} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '80px',
                            left: '260px',
                            top: '207px'
                        }} />
                    <Image id="5" src={Five} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '200px',
                            left: '150px',
                            top: '397px'
                        }} />
                    <Image id="6" src={Six} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '100px',
                            left: '1210px',
                            top: '167px'
                        }} />
                    <Image id="7" src={Seven} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '80px',
                            left: '114px',
                            top: '30px'
                        }} />
                    <Image id="8" src={Eight} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '90px',
                            left: '15px',
                            top: '251px'
                        }} />
                    <Image id="9" src={Nine} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '125px',
                            left: '325px',
                            top: '40px'
                        }} />
                    <Image id="2" src={Two} className="draggable pipe-resize"
                        onMouseUp={() => this.setChildren()}
                        style={{
                            width: '60px',
                            left: '1161px',
                            top: '25px'
                        }} />
                </div>



            </Container >

        );
    }
}

export default withCookies(God);