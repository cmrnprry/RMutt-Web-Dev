//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'

//Image Imports
import Under from './godII_overlay/card_under.png'
import One from './godII_overlay/card_1.png'
import Two from './godII_overlay/card_2.png'
import Three from './godII_overlay/card_3.png'
import Four from './godII_overlay/card_4.png'
import Five from './godII_overlay/card_5.png'
import Six from './godII_overlay/card_6.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";



//track the position of an object
var x = 0, y = 0;
//list of puzzle pieces
var list = [];

function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;

    //set the under
    document.getElementById("under").style.left = (middle - (document.getElementById("under").getBoundingClientRect().width) / 2) + "px";
    document.getElementById("under").style.top = 25 + "px";

    //set to the left
    document.getElementById("5").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("5").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("5").getBoundingClientRect().width - 30) + "px";

    document.getElementById("2").style.top = (document.getElementById("under").getBoundingClientRect().y) +
        165 + "px";
    document.getElementById("2").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("2").getBoundingClientRect().width - 30) + "px";

    document.getElementById("4").style.top = (document.getElementById("under").getBoundingClientRect().y) +
        325 + "px";
    document.getElementById("4").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("4").getBoundingClientRect().width - 30) + "px";


    //set to the right

    document.getElementById("1").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("1").style.left = (document.getElementById("under").getBoundingClientRect().right) + 15 + "px";

    document.getElementById("3").style.top = (document.getElementById("under").getBoundingClientRect().y) +
        275 + "px";
    document.getElementById("3").style.left = (document.getElementById("under").getBoundingClientRect().right) + 15 + "px";


    //Set Underneath
    document.getElementById("6").style.top = 500 + "px";
    document.getElementById("6").style.left = (middle - (document.getElementById("6").getBoundingClientRect().width) / 2) + "px";
}

function checkPagePosition(obj, dx, dy) {
    var pos = parseInt(obj);

    if (pos === 1) {
        if ((dx >= -421 && dx <= -416) && (dy >= 15 && dy <= 22)) {
            list[0] = true;
        }
        else {
            list[0] = false;
        }
        console.log("list at index 0: " + list[0]);
    }
    else if (pos === 2) {
        if ((dx >= 323 && dx <= 331) && (dy >= 110 && dy <= 124)) {
            list[1] = true;
        }
        else {
            list[1] = false;
        }
        console.log("list at index 1: " + list[1]);
    }
    else if (pos === 3) {
        if ((dx >= -315 && dx <= -308) && (dy >= -82 && dy <= -65)) {
            list[2] = true;
        }
        else {
            list[2] = false;
        }

        console.log("list at index 2: " + list[2]);
    }
    else if (pos === 4) {
        if ((dx >= 285 && dx <= 293) && (dy >= -335 && dy <= -323)) {
            list[3] = true;
        }
        else {
            list[3] = false;
        }

        console.log("list at index 3: " + list[3]);
    }
    else if (pos === 5) {
        if ((dx >= 513 && dx <= 522) && (dy >= 131 && dy <= 144)) {
            list[4] = true;
        }
        else {
            list[4] = false;
        }

        console.log("list at index 4: " + list[4]);
    }
}

function puzzleSolved() {
    if (list.length === 5) {
        for (var i = 0; i < 5; i++) {
            if (list[i] !== true) {
                return false;
            }
        }
        return true;
    }

    return false;
}

interact('.draggable-god2').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            checkPagePosition(event.target.id, x, y);
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

class GodII extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight

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

        SetPages();
        //listener for window resize
        window.addEventListener('resize', this.resizeWindow);
    }

    resizeWindow() {
        document.body.style.overflowX = "scroll";

        SetPages();
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        if (puzzleSolved()) {
            alert("puzzle solved");
            cookies.set('GodIIChildren');
            this.props.history.push('/clues');
        }
    }

    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Baronness of Nonsense</title>
                </Helmet>

                <Back />

                <div className="god2-container" style={{ height: this.state.height }}>
                    <Image id="under" src={Under} className="god2-resize" />
                    {/* Pages */}
                    <Image id="1" src={One} className="draggable-god2 god2-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="2" src={Two} className="draggable-god2 god2-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="3" src={Three} className="draggable-god2 god2-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="4" src={Four} className="draggable-god2 god2-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="5" src={Five} className="draggable-god2 god2-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="6" src={Six} className="god2-page-resize"
                        onMouseUp={() => this.setChildren()} />

                </div>



            </Container >

        );
    }
}

export default withCookies(GodII);