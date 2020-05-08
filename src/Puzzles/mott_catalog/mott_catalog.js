//React Imports
import React, { Component } from 'react';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import DL1_under from './pages/mott_catalog_page1.png'
import DL2_under from './pages/mott_catalog_page2.png'
import DL3_under from './pages/mott_catalog_page3.png'
import toilet1 from './toilet/toilet1.png'
import toilet2 from './toilet/toilet2.png'
import toilet3 from './toilet/toilet3.png'
import toilet4 from './toilet/toilet4.png'
import toilet5 from './toilet/toilet5.png'
import toilet6 from './toilet/toilet6.png'
import toilet7 from './toilet/toilet7.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

const correctList = getCorrect();
var currList = intializeArray();

//starting order of list
function intializeArray() {
    let array = [];

    array[0] = "toilet1";
    array[1] = "toilet2";
    array[3] = "toilet4";
    array[4] = "toilet5";
    array[5] = "toilet6";
    array[6] = "toilet7";

    return array;

}

//correct list of vars
function getCorrect() {
    let array = [];

    array[0] = "toilet1";
    array[1] = "toilet2";
    array[2] = "toilet3";
    array[3] = "toilet4";
    array[4] = "toilet5";
    array[5] = "toilet6";
    array[6] = "toilet7";

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
        pushInList(event.relatedTarget.classList[0], event.target.classList[1])

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    }

})

// text is the object being placed on 2the letter, and postion is the place in the list
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
        puzzleSolved();
    }
}

function puzzleSolved() {
    alert("TODO: add Kieran words");
}

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



class Mott extends Component {
    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Mott Catalog</title>
                </Helmet>

                {/* dropzones */}
                <div>
                    {/* line one */}
                    <div className="dropzone 0" style={{
                        height: '310px',
                        width: '250px',
                        left: '435px',
                        top: '1675px',
                    }} />

                    {/* line two */}
                    <div className="dropzone 1" style={{
                        height: '236px',
                        width: '257px',
                        left: '398px',
                        top: '270px',
                    }} />

                    {/* line three */}
                    <div className="dropzone 2" style={{
                        height: '315px',
                        width: '288px',
                        left: '78px',
                        top: '605px',
                    }} />

                    <div className="dropzone 3" style={{
                        height: '237px',
                        width: '273px',
                        left: '78px',
                        top: '270px',
                    }} />

                    <div className="dropzone 4" style={{
                        height: '300px',
                        width: '265px',
                        left: '801px',
                        top: '585px',
                    }} />

                    {/* line four */}
                    <div className="dropzone 5" style={{
                        height: ' 300px',
                        width: '254px',
                        left: '1113px',
                        top: '585px',
                    }} />


                </div>

                {/* dragables */}
                <div className="0 draggable toliet-pos" style={{
                    left: '0px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_2} /> */}
                    < Image src={toilet1} style={{ maxWidth: '100%', width: '200px' }} />
                </div>

                <div className="1 draggable toliet-pos" style={{
                    left: '220px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_1} /> */}
                    < Image src={toilet2} style={{ maxWidth: '100%' }} />
                </div >

                <div className="2 draggable toliet-pos" style={{
                    left: '445px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_14} /> */}
                    < Image src={toilet3} style={{ maxWidth: '100%' }} />
                </div >
                <div className="3 draggable toliet-pos" style={{
                    left: '645px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_2} /> */}
                    < Image src={toilet4} style={{ maxWidth: '100%' }} />
                </div >

                <div className="4 draggable toliet-pos" style={{
                    left: '845px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_1} /> */}
                    < Image src={toilet5} style={{ maxWidth: '100%' }} />
                </div >

                <div className="5 draggable toliet-pos" style={{
                    left: '1045px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_14} /> */}
                    < Image src={toilet6} style={{ maxWidth: '100%' }} />
                </div >
                <div className="6 draggable toliet-pos" style={{
                    left: '1245px',
                    top: '0px'
                }} >
                    {/* <Image src={DL_14} /> */}
                    < Image src={toilet7} style={{ maxWidth: '100%' }} />
                </div >


                <div></div>

                {/* Base Letter */}
                <Image src={DL1_under} style={{ width: '700px', maxWidth: '100%', marginTop: '10%', paddingLeft: '50px', paddingTop: '30px', paddingBottom: '150px' }} />
                <Image src={DL2_under} style={{ width: '700px', maxWidth: '100%', marginTop: '10%', paddingLeft: '50px', paddingTop: '30px', paddingBottom: '150px' }} />
                <Image src={DL3_under} style={{ width: '700px', maxWidth: '100%', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '150px' }} />

            </Container >

        );
    }
}

export default Mott;