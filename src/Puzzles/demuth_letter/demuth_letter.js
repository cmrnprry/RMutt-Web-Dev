//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet";



const correctList = getCorrect();
var currList = intializeArray();
var puzzleSolved = false;

//Function that initalizes the array. 
//Moving any of the draggables positions requires you to adjust this 
function intializeArray() {
    let array = [];

    array[0] = "1917"; array[16] = "ew"; array[32] = "of";
    array[1] = "8th"; array[17] = "independents"; array[33] = "next";
    array[2] = "demuth"; array[18] = "duchamp"; array[34] = "the";
    array[3] = "a"; array[19] = "avenue"; array[35] = "exhibition";
    array[4] = "grand"; array[20] = "day"; array[36] = "that";
    array[5] = "do anything"; array[21] = "it"; array[37] = "ork";
    array[6] = "co"; array[22] = "ittee"; array[38] = "schuvler";
    array[7] = "central"; array[23] = "you"; array[39] = "s";
    array[8] = "henry"; array[24] = "j"; array[40] = "super";
    array[9] = "ce"; array[25] = "marcel"; array[41] = "tain";
    array[10] = "fou"; array[26] = "move"; array[42] = "rich";
    array[11] = "dear"; array[27] = "you"; array[43] = "saalon";
    array[12] = "bre"; array[28] = "y"; array[44] = "it was not exhibited";
    array[13] = "appreciate"; array[29] = "would"; array[45] = "independents";
    array[14] = "article"; array[30] = "the"; array[46] = "ity";
    array[15] = "columbus"; array[31] = "mutt"; array[47] = "lptu";

    return array;
}

//Function that creates an array woth the correct order of words
function getCorrect() {
    let array = [];

    // array[0] = "1917"; array[16] = "ew"; array[32] = "of";
    // array[1] = "8th"; array[17] = "independents"; array[33] = "next";
    // array[2] = "demuth"; array[18] = "duchamp"; array[34] = "the";
    // array[3] = "a"; array[19] = "avenue"; array[35] = "exhibition";
    // array[4] = "grand"; array[20] = "day"; array[36] = "that";
    // array[5] = "do anything"; array[21] = "it"; array[37] = "ork";
    // array[6] = "co"; array[22] = "ittee"; array[38] = "schuvler";
    // array[7] = "central"; array[23] = "you"; array[39] = "s";
    // array[8] = "henry"; array[24] = "j"; array[40] = "super";
    // array[9] = "ce"; array[25] = "marcel"; array[41] = "tain";
    // array[10] = "fou"; array[26] = "move"; array[42] = "rich";
    // array[11] = "dear"; array[27] = "you"; array[43] = "saalon";
    // array[12] = "bre"; array[28] = "y"; array[44] = "it was not exhibited";
    // array[13] = "appreciate"; array[29] = "would"; array[45] = "independents";
    // array[14] = "article"; array[30] = "the"; array[46] = "ity";
    // array[15] = "columbus"; array[31] = "mutt"; array[47] = "lptu";


    array[0] = "henry"; array[16] = "central"; array[32] = "you";
    array[1] = "1917"; array[17] = "it was not exhibited"; array[33] = "you";
    array[2] = "bre"; array[18] = "independents"; array[34] = "anything";
    array[3] = "avanue"; array[19] = "co"; array[35] = "that";
    array[4] = "8th"; array[20] = "ittee"; array[36] = "day";
    array[5] = "ew"; array[21] = "j"; array[37] = "article";
    array[6] = "ork"; array[22] = "y"; array[38] = "would";
    array[7] = "ity"; array[23] = "of"; array[39] = "apprciate";
    array[8] = "dear"; array[24] = "the"; array[40] = "it";
    array[9] = "ce"; array[25] = "exhibition"; array[41] = "demuth";
    array[10] = "s"; array[26] = "super"; array[42] = "marcel";
    array[11] = "lput"; array[27] = "independents"; array[43] = "duchamp";
    array[12] = "a"; array[28] = "would"; array[44] = "columbus";
    array[13] = "fou"; array[29] = "salon"; array[45] = "rich";
    array[14] = "tain"; array[30] = "the"; array[46] = "mutt";
    array[15] = "grand"; array[31] = "move"; array[47] = "schuvler";

    return array;

}

//Draggable function
interact('.draggable').draggable({
    listeners: {

        start(event) {
            console.log(event.type, event.target)
        },
        move: dragMoveListener,

        end(event) {
            var textEl = event.target.querySelector('p')

            textEl && (textEl.textContent =
                'Pos: ' + event.x0 + ', ' + event.y0)
        }
    }
})

//Dropzone function
interact('.dropzone').dropzone({
    accept: '.draggable',
    overlap: 0.50,

    // var draggableElement = event.relatedTarget
    // var dropzoneElement = event.target

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')

    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
        pushInList(event.relatedTarget.textContent, event.target.classList[1])

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    }

})

//Function that swaps the position of two objects and checks to see if the current list is correct
function pushInList(text, position) {
    // var currTextPos = currList.indexOf(text);
    // var temp = "";

    //this works whil we are not swaping the objects and are just dropping them one at a time
    currList.splice(position, 1, text);

    // if (currTextPos !== position) {
    //     temp = currList[position];
    //     currList[position] = text;
    //     currList[currTextPos] = temp;
    // }

    if (checkList()) {
        puzzleSolved = true;
        showEndText();
    }
}

//Function that displays text if the array is correct
function showEndText() {
    alert("TODO: add Kieran words");
}

//Function that checks to see if the currect list is in the correct order
function checkList() {
    var allCorrect = true;

    if (correctList.length === currList.length) {
        for (let i = 0; i < correctList.length; i++) {
            if (currList[i] !== correctList[i]) {
                allCorrect = false;
                break;
            }
        }
    }


    return allCorrect;
}

//Function that handles how draggable objects act when you drag them
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



class Demuth extends Component {
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

    //Sets the listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        console.log("here")
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    //Tells the cookies to be set
    setChildren() {
        const { cookies } = this.props;

        console.log("puzzleSolved: " + puzzleSolved);
        if (puzzleSolved) {
            cookies.set('DemuthLetterChildren');
            this.props.history.push('/clues');
        }
    }

    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ overflowX: 'hidden', minHeight: this.state.height, minWidth: this.state.width }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The other letter</title>
                </Helmet>

                {/* Dragables Container */}
                <div>
                    {/* First Row */}

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '0px',
                        top: '0px'
                    }}>
                        {/* <Image src={DL_2} /> */}
                        1917
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '75px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_1} /> */}
                        8th
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '115px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_14} /> */}
                        Demuth
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '205px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_3} /> */}
                        A
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '235px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_20} /> */}
                        grand
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        // fontSize: '17px',
                        left: '315px',
                        top: '0px'
                    }}>
                        {/* <Image src={DL_15} /> */}
                        do anything
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '475px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_10} /> */}
                        co
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '505px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_9} /> */}
                        central
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        // fontSize: '20px',
                        left: '600px',
                        top: '0px'
                    }}>
                        {/* <Image src={DL_21} /> */}
                        henry
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '685px',
                        top: '0px'
                    }}>
                        {/* <Image src={DL_8} /> */}
                        ce
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '715px',
                        top: '0px'
                    }}>
                        {/* <Image src={DL_19} /> */}
                        fou
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '760px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_13} /> */}
                        dear
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '820px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_7} /> */}
                        bre
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '870px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_4} /> */}
                        appreciate
                    </div>

                    {/* Second Row */}

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1000px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_5} /> */}
                        article
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1100px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_11} /> */}
                        columbus
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1220px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_17} /> */}
                        ew
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1260px',
                        top: '0px',
                    }}>
                        {/* <Image src={DL_22} /> */}
                        independents
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '0px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_16} /> */}
                        duchamp
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '105px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_6} /> */}
                        avenue
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '190px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_12} /> */}
                        day
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '240px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_28} /> */}
                        lptu
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '300px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_24} /> */}
                        it
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '325px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_25} /> */}
                        ittee
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '385px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_26} /> */}
                        ity
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '430px',
                        top: '60px',
                    }}>
                        {/* <Image src={DL_47} /> */}
                        you
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '485px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_27} /> */}
                        j
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '505px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_29} /> */}
                        Marcel
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '595px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_30} /> */}
                        move
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '660px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_46} /> */}
                        you
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '715px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_45} /> */}
                        y
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '740px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_44} /> */}
                        would
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '820px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_43} /> */}
                        the
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '860px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_31} /> */}
                        mutt
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '920px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_33} /> */}
                        of
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '950px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_32} /> */}
                        next
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1005px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_42} /> */}
                        the
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1005px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_18} /> */}
                        exhibition
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1125px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_41} /> */}
                        that
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1170px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_34} /> */}
                        ork
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '1222px',
                        top: '60px'
                    }}>
                        {/* <Image src={DL_38} /> */}
                        schuvler
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '0px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_36} /> */}
                        s
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '20px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_39} /> */}
                        super
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '100px',
                        top: '120px',
                    }}>
                        {/* <Image src={DL_40} /> */}
                        tain
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '150px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_35} /> */}
                        rich
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '210px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_37} /> */}
                        salon
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        fontSize: '20px',
                        left: '280px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_23} /> */}
                        it was not exhibited
                    </div>

                    <div onMouseUp={() => this.setChildren()} className="draggable box" style={{
                        left: '510px',
                        top: '120px'
                    }}>
                        {/* <Image src={DL_48} /> */}
                        independents
                    </div>

                    {/* Base Letter */}
                    <div className="demuth-letter">
                        {/* line one */}
                        <div className="dropzone 0" style={{
                            height: '34px',
                            width: '96px',
                            left: '161px',
                            top: '90px'
                        }} />

                        {/* line two */}
                        <div className="dropzone 1" style={{
                            height: '34px',
                            width: '96px',
                            left: '535px',
                            top: '119px'
                        }} />

                        {/* line three */}
                        <div className="dropzone 2" style={{
                            height: '34px',
                            width: '55px',
                            left: '436px',
                            top: '153px'
                        }} />

                        <div className="dropzone 3" style={{
                            height: '34px',
                            width: '120px',
                            left: '780px',
                            top: '153px'
                        }} />

                        <div className="dropzone 4" style={{
                            height: '34px',
                            width: '90px',
                            left: '945px',
                            top: '153px'
                        }} />

                        {/* line four */}
                        <div className="dropzone 5" style={{
                            height: '30px',
                            width: '40px',
                            left: '461px',
                            top: '189px'
                        }} />

                        <div className="dropzone 6" style={{
                            height: '30px',
                            width: '60px',
                            left: '525px',
                            top: '189px'
                        }} />

                        <div className="dropzone 7" style={{
                            height: '30px',
                            width: '60px',
                            left: '607px',
                            top: '189px'
                        }} />

                        {/* line five */}
                        <div className="dropzone 8" style={{
                            height: '34px',
                            width: '85px',
                            left: '161px',
                            top: '250px'
                        }} />

                        {/* line six */}
                        <div className="dropzone 9" style={{
                            height: '25px',
                            width: '50px',
                            left: '282px',
                            top: '288px'
                        }} />

                        <div className="dropzone 10" style={{
                            height: '25px',
                            width: '25px',
                            left: '375px',
                            top: '288px'
                        }} />

                        <div className="dropzone 11" style={{
                            height: '25px',
                            width: '65px',
                            left: '432px',
                            top: '288px'
                        }} />

                        <div className="dropzone 12" style={{
                            height: '30px',
                            width: '25px',
                            left: '695px',
                            top: '288px'
                        }} />

                        <div className="dropzone 13" style={{
                            height: '30px',
                            width: '53px',
                            left: '730px',
                            top: '285px'
                        }} />

                        <div className="dropzone 14" style={{
                            height: '32px',
                            width: '70px',
                            left: '800px',
                            top: '285px'
                        }} />

                        {/* line seven */}
                        <div className="dropzone 15" style={{
                            height: '34px',
                            width: '100px',
                            left: '1075px',
                            top: '315px'
                        }} />

                        {/* line eight */}
                        <div className="dropzone 16" style={{
                            height: '34px',
                            width: '125px',
                            left: '115px',
                            top: '347px'
                        }} />

                        {/* line nine */}
                        <div className="dropzone 17" style={{
                            height: '30px',
                            width: '364px',
                            left: '175px',
                            top: '382px'
                        }} />

                        {/* line ten */}
                        <div className="dropzone 18" style={{
                            height: '30px',
                            width: '200px',
                            left: '287px',
                            top: '422px'
                        }} />

                        <div className="dropzone 19" style={{
                            height: '30px',
                            width: '42px',
                            left: '925px',
                            top: '415px'
                        }} />

                        <div className="dropzone 20" style={{
                            height: '30px',
                            width: '85px',
                            left: '1001px',
                            top: '415px'
                        }} />

                        {/* line eleven */}
                        <div className="dropzone 21" style={{
                            height: '30px',
                            width: '25px',
                            left: '110px',
                            top: '451px'
                        }} />

                        <div className="dropzone 22" style={{
                            height: '30px',
                            width: '20px',
                            left: '172px',
                            top: '451px'
                        }} />

                        <div className="dropzone 23" style={{
                            height: '30px',
                            width: '50px',
                            left: '705px',
                            top: '447px'
                        }} />

                        <div className="dropzone 24" style={{
                            height: '30px',
                            width: '55px',
                            left: '762px',
                            top: '447px'
                        }} />

                        <div className="dropzone 25" style={{
                            height: '30px',
                            width: '185px',
                            left: '820px',
                            top: '447px'
                        }} />

                        {/* line twelve */}
                        <div className="dropzone 26" style={{
                            height: '33px',
                            width: '55px',
                            left: '600px',
                            top: '480px'
                        }} />

                        <div className="dropzone 27" style={{
                            height: '33px',
                            width: '95px',
                            left: '660px',
                            top: '483px'
                        }} />

                        <div className="dropzone 28" style={{
                            height: '33px',
                            width: '200px',
                            left: '765px',
                            top: '483px'
                        }} />

                        <div className="dropzone 29" style={{
                            height: '33px',
                            width: '100px',
                            left: '1045px',
                            top: '478px'
                        }} />

                        {/* line thirteen */}
                        <div className="dropzone 30" style={{
                            height: '33px',
                            width: '60px',
                            left: '370px',
                            top: '515px'
                        }} />

                        <div className="dropzone 31" style={{
                            height: '33px',
                            width: '73px',
                            left: '440px',
                            top: '515px'
                        }} />

                        <div className="dropzone 32" style={{
                            height: '33px',
                            width: '73px',
                            left: '520px',
                            top: '515px'
                        }} />

                        {/* line fourteen */}
                        <div className="dropzone 33" style={{
                            height: '33px',
                            width: '73px',
                            left: '255px',
                            top: '555px'
                        }} />

                        <div className="dropzone 34" style={{
                            height: '30px',
                            width: '70px',
                            left: '425px',
                            top: '555px'
                        }} />

                        <div className="dropzone 35" style={{
                            height: '30px',
                            width: '145px',
                            left: '580px',
                            top: '550px'
                        }} />

                        <div className="dropzone 36" style={{
                            height: '30px',
                            width: '70px',
                            left: '815px',
                            top: '550px'
                        }} />

                        {/* line fifteen */}
                        <div className="dropzone 37" style={{
                            height: '33px',
                            width: '53px',
                            left: '183px',
                            top: '583px'
                        }} />

                        <div className="dropzone 38" style={{
                            height: '33px',
                            width: '135px',
                            left: '240px',
                            top: '587px'
                        }} />

                        <div className="dropzone 39" style={{
                            height: '33px',
                            width: '95px',
                            left: '437px',
                            top: '583px'
                        }} />

                        <div className="dropzone 40" style={{
                            height: '33px',
                            width: '170px',
                            left: '539px',
                            top: '585px'
                        }} />

                        <div className="dropzone 41" style={{
                            height: '33px',
                            width: '42px',
                            left: '715px',
                            top: '580px'
                        }} />

                        {/* line sixteen */}
                        <div className="dropzone 42" style={{
                            height: '33px',
                            width: '170px',
                            left: '586px',
                            top: '675px'
                        }} />

                        {/* line seventeen */}
                        <div className="dropzone 43" style={{
                            height: '40px',
                            width: '105px',
                            left: '960px',
                            top: '735px'
                        }} />

                        {/* line eighteen */}
                        <div className="dropzone 44" style={{
                            height: '33px',
                            width: '160px',
                            left: '115px',
                            top: '778px'
                        }} />

                        <div className="dropzone 45" style={{
                            height: '33px',
                            width: '142px',
                            left: '355px',
                            top: '778px'
                        }} />

                        <div className="dropzone 46" style={{
                            height: '33px',
                            width: '65px',
                            left: '575px',
                            top: '778px'
                        }} />

                        <div className="dropzone 47" style={{
                            height: '33px',
                            width: '80px',
                            left: '690px',
                            top: '778px'
                        }} />

                        <div className="dropzone 48" style={{
                            height: '35px',
                            width: '145px',
                            left: '873px',
                            top: '775px'
                        }} />
                    </div>
                </div>

            </Container>

        );
    }
}

export default withCookies(Demuth);