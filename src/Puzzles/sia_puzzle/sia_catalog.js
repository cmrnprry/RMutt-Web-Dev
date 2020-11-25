//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import BackNav from '../../Navigation/Back.js';
import Sound from 'react-sound';
import VoiceLine from '../../Voice clips/SIACatalog.wav'


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
//list of puzzle pieces
var list = [];

function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;
    //set the under
    document.getElementById("under").style.left = (middle - (document.getElementById("under").getBoundingClientRect().width) / 2) + "px";
    document.getElementById("under").style.top = 25 + "px";

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

function checkPagePosition(obj, dx, dy) {
    var pos = parseInt(obj);

    if (pos === 2) {
        if ((dx >= -388 && dx <= -365) && (dy >= 40 && dy <= 60)) {
            list[0] = true;
        }
        else {
            list[0] = false;
        }
        console.log("list at index 0: " + list[0]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 3) {
        if ((dx >= 455 && dx <= 480) && (dy >= -22 && dy <= -3)) {
            list[1] = true;
        }
        else {
            list[1] = false;
        }

        console.log("list at index 1: " + list[1]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 4) {
        if ((dx >= -30 && dx <= -5) && (dy >= -220 && dy <= -200)) {
            list[2] = true;
        }
        else {
            list[2] = false;
        }

        console.log("list at index 2: " + list[2]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 5) {
        if ((dx >= -640 && dx <= -618) && (dy >= 147 && dy <= 167)) {
            list[3] = true;
        }
        else {
            list[3] = false;
        }

        console.log("list at index 3: " + list[3]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 6) {
        if ((dx >= -424 && dx <= -395) && (dy >= -187 && dy <= -160)) {
            list[4] = true;
        }
        else {
            list[4] = false;
        }

        console.log("list at index 4: " + list[4]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 8) {
        if ((dx >= -7 && dx <= 18) && (dy >= -260 && dy <= -242)) {
            list[5] = true;
        }
        else {
            list[5] = false;
        }

        console.log("list at index 5: " + list[5]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 10) {
        if ((dx >= 203 && dx <= 233) && (dy >= -140 && dy <= -115)) {
            list[6] = true;
        }
        else {
            list[6] = false;
        }

        console.log("list at index 6: " + list[6]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 12) {
        if ((dx >= -230 && dx <= -205) && (dy >= -108 && dy <= -90)) {
            list[9] = true;
        }
        else {
            list[9] = false;
        }

        console.log("list at index 9: " + list[9]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 13) {
        if ((dx >= 365 && dx <= 388) && (dy >= 158 && dy <= 181)) {
            list[7] = true;
        }
        else {
            list[7] = false;
        }

        console.log("list at index 7: " + list[7]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
    else if (pos === 15) {
        if ((dx >= 151 && dx <= 175) && (dy >= -239 && dy <= -219)) {
            list[8] = true;
        }
        else {
            list[8] = false;
        }

        console.log("list at index 8: " + list[8]);
        console.log(pos + " at x: " + dx);
        console.log(pos + " at y: " + dy);
    }
}

function puzzleSolved() {
    if (list.length === 10) {
        for (var i = 0; i < 10; i++) {
            // console.log("list at index" + i + ": " + list[i]);
            if (list[i] !== true) {
                return false;
            }
        }
        return true;
    }

    return false;
}

interact('.draggable-sia').draggable({
    listeners: {
        move: dragMoveListener,
        end(event) {
            checkPagePosition(event.target.id, x, y);
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
        SetPages();
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        if (puzzleSolved()) {
            alert("puzzle solved");
            cookies.set('SiaCatalogChildren');
            this.props.history.push('/clues');
        }
    }

    hideVoiceText() {
        document.getElementById("Voice").style.display = "none";
    }


    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Turn and turn</title>
                </Helmet>

                <BackNav />

                <Sound
                    url={VoiceLine}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.hideVoiceText}
                />

                <div id="Voice" className="subtitle">"Hello, this is Lila Q., I'm DADA's Vice President of Paint Drinking. Only acrylic and watercolor paint, though. Someone else is the Vice President of Oil Paint Drinking. Anyways, Bet is busy, so I'll try to help (Long pause.) Well, I suppose you'll have to arrange the exhibits in the gallery like they would have been arranged in the exhibition. Line them up on those little Xs. See what develops. At least, that's what would make sense to me. Don't be so stressed about it! You'll do fine. Now, if you'll excuse me, I have a fine Vermillion to taste."
                </div>

                <div className="sia-container" style={{ height: this.state.height }}>
                    {/* Under */}
                    <Image id="under" src={Under} className="sia-resize sia-shadow" />

                    {/* Pages */}
                    <Image id="1" src={One} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="2" src={Two} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="3" src={Three} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="4" src={Four} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="5" src={Five} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="6" src={Six} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="7" src={Seven} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="8" src={Eight} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="9" src={Nine} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="10" src={Ten} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="11" src={Eleven} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="12" src={Twelve} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="13" src={Thirteen} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="14" src={Fourteen} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                    <Image id="15" src={Fifteen} className="draggable-sia sia-page-resize"
                        onMouseUp={() => this.setChildren()} />
                </div>



            </Container >

        );
    }
}

export default withCookies(Sia);