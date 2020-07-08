//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Under from './sia_under.png'
import One from './sia_overlays/A_E_T.png'
import Two from './sia_overlays/A_G.png'
import Three from './sia_overlays/D.png'
import Four from './sia_overlays/E_Y.png'
import Five from './sia_overlays/F_I_P.png'
import Six from './sia_overlays/G_S.png'
import Seven from './sia_overlays/H_W.png'
import Eight from './sia_overlays/L_L.png'
import Nine from './sia_overlays/L_Y.png'
import Ten from './sia_overlays/M_D.png'
import Eleven from './sia_overlays/Q_D_P.png'
import Twelve from './sia_overlays/U_I_K.png'
import Thirteen from './sia_overlays/U_N.png'
import Fourteen from './sia_overlays/W_T.png'
import Fifteen from './sia_overlays/Y_N_X.png'


//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//track the position of an object
var x = 0, y = 0;

function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;
    //set the under
    document.getElementById("under").style.left = (middle - (document.getElementById("under").getBoundingClientRect().width) / 2) + "px";

    //set to the left

    //ROW 1
    document.getElementById("13").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("13").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("13").getBoundingClientRect().width - document.getElementById("7").getBoundingClientRect().width - 30) + "px";

    document.getElementById("1").style.top = (document.getElementById("under").getBoundingClientRect().y) +
        document.getElementById("13").getBoundingClientRect().width + 15 + "px";
    document.getElementById("1").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("1").getBoundingClientRect().width - document.getElementById("3").getBoundingClientRect().width - 30) + "px";

    document.getElementById("14").style.top = (document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("13").getBoundingClientRect().width +
        document.getElementById("1").getBoundingClientRect().width) + 27 + "px";
    document.getElementById("14").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("14").getBoundingClientRect().width - document.getElementById("10").getBoundingClientRect().width - 30) + "px";


    //ROW 2
    document.getElementById("7").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("7").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("7").getBoundingClientRect().width - 15) + "px";

    document.getElementById("3").style.top = (document.getElementById("under").getBoundingClientRect().y + document.getElementById("7").getBoundingClientRect().width) + 15 + "px";
    document.getElementById("3").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("13").getBoundingClientRect().width - 15) + "px";

    document.getElementById("10").style.top = (document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("7").getBoundingClientRect().width +
        document.getElementById("3").getBoundingClientRect().width) + 30 + "px";
    document.getElementById("10").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("13").getBoundingClientRect().width - 15) + "px";


    // //set to the right

    //ROW1
    document.getElementById("11").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("11").style.left = (document.getElementById("under").getBoundingClientRect().right) + 15 + "px";

    document.getElementById("2").style.top = document.getElementById("11").getBoundingClientRect().width + document.getElementById("under").getBoundingClientRect().y + 15 + "px";
    document.getElementById("2").style.left = (document.getElementById("under").getBoundingClientRect().right) + 15 + "px";

    document.getElementById("12").style.top = document.getElementById("11").getBoundingClientRect().width + document.getElementById("12").getBoundingClientRect().width + document.getElementById("under").getBoundingClientRect().y + 30 + "px";
    document.getElementById("12").style.left = (document.getElementById("under").getBoundingClientRect().right) + 5 + "px";

    //Row2
    document.getElementById("5").style.top = (document.getElementById("under").getBoundingClientRect().y) + "px";
    document.getElementById("5").style.left = (document.getElementById("under").getBoundingClientRect().right + document.getElementById("11").getBoundingClientRect().width) + 25 + "px";

    document.getElementById("9").style.top = document.getElementById("5").getBoundingClientRect().width + document.getElementById("under").getBoundingClientRect().y + 15 + "px";
    document.getElementById("9").style.left = (document.getElementById("under").getBoundingClientRect().right + document.getElementById("2").getBoundingClientRect().width) + 25 + "px";

    document.getElementById("6").style.top = document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("5").getBoundingClientRect().width +
        document.getElementById("9").getBoundingClientRect().width + 25 + "px";
    document.getElementById("6").style.left = (document.getElementById("under").getBoundingClientRect().right + document.getElementById("9").getBoundingClientRect().width) + 25 + "px";



    // //set underneath
    document.getElementById("15").style.top = (document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("7").getBoundingClientRect().width +
        document.getElementById("3").getBoundingClientRect().width) + 105 + "px";
    document.getElementById("15").style.left = (document.getElementById("under").getBoundingClientRect().x -
        document.getElementById("13").getBoundingClientRect().width + 175) + "px";

    document.getElementById("8").style.top = (document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("7").getBoundingClientRect().width +
        document.getElementById("3").getBoundingClientRect().width) + 105 + "px";
    document.getElementById("8").style.left = (middle - (document.getElementById("8").getBoundingClientRect().width) / 2) + "px";

    document.getElementById("4").style.top = (document.getElementById("under").getBoundingClientRect().y +
        document.getElementById("7").getBoundingClientRect().width +
        document.getElementById("3").getBoundingClientRect().width) + 105 + "px";
    document.getElementById("4").style.left = (document.getElementById("under").getBoundingClientRect().right) - 175 + "px";
}



interact('.draggable').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            // checkPosition(event.target.classList[1], x, y);
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

class Sia extends Component {
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
            cookies.set('SiaCatalogChildren');
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


                <div className="sia-container" style={{ height: this.state.height }}>
                    {/* Under */}
                    <Image id="under" src={Under} className="sia-resize sia-shadow" />

                    {/* Pages */}
                    <Image id="1" src={One} className="draggable sia-page-resize" />
                    <Image id="2" src={Two} className="draggable sia-page-resize" />
                    <Image id="3" src={Three} className="draggable sia-page-resize" />
                    <Image id="4" src={Four} className="draggable sia-page-resize" />
                    <Image id="5" src={Five} className="draggable sia-page-resize" />
                    <Image id="6" src={Six} className="draggable sia-page-resize" />
                    <Image id="7" src={Seven} className="draggable sia-page-resize" />
                    <Image id="8" src={Eight} className="draggable sia-page-resize" />
                    <Image id="9" src={Nine} className="draggable sia-page-resize" />
                    <Image id="10" src={Ten} className="draggable sia-page-resize" />
                    <Image id="11" src={Eleven} className="draggable sia-page-resize" />
                    <Image id="12" src={Twelve} className="draggable sia-page-resize" />
                    <Image id="13" src={Thirteen} className="draggable sia-page-resize" />
                    <Image id="14" src={Fourteen} className="draggable sia-page-resize" />
                    <Image id="15" src={Fifteen} className="draggable sia-page-resize" />
                </div>



            </Container >

        );
    }
}

export default withCookies(Sia);