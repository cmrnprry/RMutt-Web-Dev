//REact Imports
import React, { Component } from 'react';
import interact from 'interactjs'
import { Helmet } from "react-helmet";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Background from '../../folder_elements/wooden.png'
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

interact('.draggable-2').draggable({
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
    if ((dx >= 136 && dx <= 179) && (dy <= -602 && dy >= -671)) {
        img1InPlace = true;
    }
    else {
        img1InPlace = false;
    }

}

function checkImage2(dx, dy) {
    if ((dx >= -455 && dx <= -412) && (dy <= -621 && dy >= -667)) {
        img2InPlace = true;
    }
    else {
        img2InPlace = false;
    }
}

function checkImage3(dx, dy) {
    if ((dx >= -786 && dx <= -729) && (dy >= -721 && dy <= -646)) {
        img3InPlace = true;
    }
    else {
        img3InPlace = false;
    }
}

function checkImage4(dx, dy) {
    if ((dx >= 243 && dx <= 271) && (dy >= -955 && dy <= -918)) {
        img4InPlace = true;
    }
    else {
        img4InPlace = false;
    }
}

class LN_Puzzle extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        console.log("allinplace: " + allinPlace);
        if (allinPlace) {
            cookies.set('TissuePaperChildren');
        }
    }

    render() {
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Layers and Layers</title>
                </Helmet>

                <div>
                    <Image src={Under} style={{ width: '50vw', marginTop: '5em' }} />
                    <Image src={Insrtuctions} style={{ width: '30vw', padding: '20px', textAlign: 'center' }} />

                    {/* Draggables */}
                    <Image className="draggable-2 1" src={Image1} style={{ width: '30vw' }} onMouseUp={() => this.setChildren()}/>
                    <Image className="draggable-2 2" src={Image2} style={{ width: '26vw' }} onMouseUp={() => this.setChildren()}/>
                    <Image className="draggable-2 3" src={Image3} style={{ width: '37vw' }} onMouseUp={() => this.setChildren()}/>
                    <Image className="draggable-2 4" src={Image4} style={{ width: '30vw' }} onMouseUp={() => this.setChildren()}/>
                </div>
            </Container>

        );
    }
}

export default withCookies(LN_Puzzle);