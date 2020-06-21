//REact Imports
import React, { Component } from 'react';
import interact from 'interactjs'
import { Helmet } from "react-helmet";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Under from './tissue_paper_under.png'
import Insrtuctions from './tissue_paper_instructions.png'
import Image1 from './tissue_paper_overlays/1.PNG'
import Image2 from './tissue_paper_overlays/2.PNG'
import Image3 from './tissue_paper_overlays/3.PNG'
import Image4 from './tissue_paper_overlays/4.png'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


//Bools to check if any of the images are in the correct place
var img1InPlace = false, img2InPlace = false, img3InPlace = false, img4InPlace = false, allinPlace = false;
//track the position of an object
var x = 0, y = 0;

interact('.draggable-3').draggable({
    modifiers: [
        interact.modifiers.snap({
            targets: [
                interact.createSnapGrid({ x: 5, y: 5 })
            ],
            range: Infinity,

        }),
        interact.modifiers.restrict({
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
        })
    ],
    listeners: {
        move: dragMoveListener,
        end(event) {
            checkPosition(event.target.classList[1], x, y);
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

    console.log(event.target.classList[1] + " at x: " + x);
    console.log(event.target.classList[1] + " at y: " + y);
}

function checkPosition(obj, dx, dy) {
    switch (obj) {
        case "1":
            checkImage1(dx, dy);
            break;
        case "2":
            checkImage2(dx, dy);
            break;
        case "3":
            checkImage3(dx, dy);
            break;
        case "4":
            checkImage4(dx, dy);
            break;
        default:
            console.log("Something has gone terribly wrong.")
    }

    if (img1InPlace && img2InPlace && img3InPlace && img4InPlace && !allinPlace) {
        alert("All objects are in the correct places!");
        allinPlace = true;
    }
}


function checkImage1(dx, dy) {
    if ((dx >= 153 && dx <= 214) && (dy <= -520 && dy >= -597)) {
        img1InPlace = true;
    }
    else {
        img1InPlace = false;
    }
    console.log("Image 1: " + img1InPlace);

}

function checkImage2(dx, dy) {

    if ((dx <= -333 && dx >= -380) && (dy <= -606 && dy >= -653)) {
        img2InPlace = true;
    }
    else {
        img2InPlace = false;
    }

    console.log("Image 2: " + img2InPlace);
}

function checkImage3(dx, dy) {
    if ((dx <= -622 && dx >= -683) && (dy <= -541 && dy >= -607)) {
        img3InPlace = true;
    }
    else {
        img3InPlace = false;
    }

    console.log("Image 3: " + img3InPlace);

}

function checkImage4(dx, dy) {
    if ((dx >= 233 && dx <= 306) && (dy >= -797 && dy <= -752)) {
        img4InPlace = true;
    }
    else {
        img4InPlace = false;
    }

    console.log("Image 4: " + img4InPlace);

}

class LN_Puzzle extends Component {
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

    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        console.log()
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        console.log("allinplace: " + allinPlace);
        if (allinPlace) {
            cookies.set('TissuePaperChildren');
            this.props.history.push('/clues');
        }
    }

    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ overflowX: 'none', minHeight: this.state.height, minWidth: this.state.width }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Layers and Layers</title>
                </Helmet>

                <div className="tissue-paper-container">
                    <Image src={Under} style={{
                        top: '75px',
                        left: '45px',
                        position: 'absolute'
                    }} />
                    <Image src={Insrtuctions} style={{
                        position: 'absolute',
                        top: '250px',
                        left: '750px',
                    }} />

                    {/* Draggables */}
                    <Image name="image1" className="draggable-3 1" src={Image1}
                        style={{
                            width: '407px',
                            top: '650px',
                            left: '0px'
                        }} onMouseUp={() => this.setChildren()} />

                    <Image name="image2" className="draggable-3 2"
                        src={Image2} style={{
                            width: '355px',
                            top: '650px',
                            left: '425px'
                        }} onMouseUp={() => this.setChildren()} />

                    <Image name="image3" className="draggable-3 3"
                        src={Image3} style={{
                            width: '505px',
                            top: '650px',
                            left: '795px'
                        }} onMouseUp={() => this.setChildren()} />

                    <Image name="image4" className="draggable-3 4"
                        src={Image4} style={{
                            width: '410px',
                            top: '1100px',
                            left: '0px'
                        }} onMouseUp={() => this.setChildren()} />
                </div>
            </Container>

        );
    }
}

export default withCookies(LN_Puzzle);