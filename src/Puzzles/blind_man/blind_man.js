//React Imports
import React, { Component } from 'react';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import Cover from "./blind_man_images/cover.jpg"
import Page2 from "./blind_man_images/2.jpg"
import Page3 from "./blind_man_images/3.jpg"
import Page4 from "./blind_man_images/4.jpg"
import Page5 from "./blind_man_images/5.jpg"
import Page6 from "./blind_man_images/6.jpg"
import Page7 from "./blind_man_images/7.jpg"
import Page8 from "./blind_man_images/8.jpg"
import Page9 from "./blind_man_images/9.jpg"
import Page10 from "./blind_man_images/10.jpg"
import Page11 from "./blind_man_images/11.jpg"
import Page12 from "./blind_man_images/12.jpg"
import Page13 from "./blind_man_images/13.jpg"
import Page14 from "./blind_man_images/14.jpg"
import Page15 from "./blind_man_images/15.jpg"
import Back from "./blind_man_images/back.jpg"



//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";



//Draggable function
interact('.draggable').draggable({
    modifiers: [
        interact.modifiers.restrict({
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
        })
    ],
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
        // pushInList(event.relatedTarget.textContent, event.target.classList[1])

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    }

})

//Function that swaps the position of two objects and checks to see if the current list is correct
// function pushInList(text, position) {
//     var currTextPos = currList.indexOf(text);
//     var temp = "";

//     if (currTextPos !== position) {
//         temp = currList[position];
//         currList[position] = text;
//         currList[currTextPos] = temp;
//     }

//     if (checkList()) {
//         puzzleSolved();
//     }
// }

//Function that displays text if the array is correct
function puzzleSolved() {
    alert("TODO: add Kieran words");
}

//Function that checks to see if the currect list is in the correct order
// function checkList() {
//     var allCorrect = true;

//     for (let i = 0; i < correctList.length; i++) {
//         if (currList[i] !== correctList[i]) {
//             allCorrect = false;
//             break;
//         }
//     }

//     return allCorrect;
// }

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

class Blind_Man extends Component {
    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Such vision!</title>
                </Helmet>

                <Image src={Cover} className="resize draggable" />
                <Image src={Page2} className="resize draggable" />
                <Image src={Page3} className="resize draggable" />
                <Image src={Page4} className="resize draggable" />
                <Image src={Page5} className="resize draggable" />
                <Image src={Page6} className="resize draggable" />
                <Image src={Page7} className="resize draggable" />
                <Image src={Page8} className="resize draggable" />
                <Image src={Page9} className="resize draggable" />
                <Image src={Page10} className="resize draggable" />
                <Image src={Page11} className="resize draggable" />
                <Image src={Page12} className="resize draggable" />
                <Image src={Page13} className="resize draggable" />
                <Image src={Page14} className="resize draggable" />
                <Image src={Page15} className="resize draggable" />
                <Image src={Back} className="resize draggable" />


            </Container>

        );
    }
}

export default Blind_Man;