import React, { Component } from 'react';
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import '../../Stylesheets/index.css';
import '../../Stylesheets/louise_norton.css';

// Images
import Background from '../../folder_elements/wooden.png'
import Under from './louise_norton_under.png'
import Insrtuctions from './louise_norton_instructions.png'
import Image1 from './louise_norton_overlays/1.PNG'
import Image2 from './louise_norton_overlays/2.PNG'
import Image3 from './louise_norton_overlays/3.PNG'
import Image4 from './louise_norton_overlays/4.png'


var element = document.getElementById('.draggable-2');
var x = 0; var y = 0;

interact('.draggable-2').draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.createSnapGrid({ x: 5, y: 5 })
                ],
                range: Infinity,
                relativePoints: [
                    { x: 0, y: 0 },   // snap relative to the element's top-left,
                ]
            }),
        ],
        inertia: true
})
    .on('dragmove', function (event) {
        x += event.dx
        y += event.dy

        event.target.style.webkitTransform =
            event.target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'
        
    })

interact('.dropzone-2').dropzone({
    accept: '.draggable-2',
    overlap: .5,

    // var draggableElement = event.relatedTarget
    // var dropzoneElement = event.target

    ondropactivate: function (event) {
        // add active dropzone feedback
        if (event.relatedTarget.classList[1] == event.target.classList[1])
        {
            event.target.classList.add('drop-active-2')
        }
       
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        if (event.relatedTarget.classList[1] == event.target.classList[1])
        {
            dropzoneElement.classList.add('drop-target-2')
            draggableElement.classList.add('can-drop-2')
        }
       

    },
    ondragleave: function (event) {
        // remove the drop feedback style
        if (event.relatedTarget.classList[1] == event.target.classList[1])
        {
            event.target.classList.remove('drop-target-2')
            event.relatedTarget.classList.remove('can-drop-2')
        }
        
    },
    ondrop: function (event) {

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        if (event.relatedTarget.classList[1] == event.target.classList[1])
        {
            event.target.classList.remove('drop-active-2')
            event.target.classList.remove('drop-target-2')
            event.relatedTarget.classList.remove('can-drop-2')
        }
        
    }

})

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

class LN_Puzzle extends Component {

    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Layers and Layers</title>
                </Helmet>

                <Image src={Under} style={{ width: '50vw' }} />
                <Image src={Insrtuctions} style={{ width: '30vw', padding: '20px', textAlign: 'center' }} />
                
                {/* Dropzones */}
                <div className="dropzone-2 1" style={{
                    height: '75px',
                    width: '160px',
                    left: '450px',
                    top: '410px',
                }} />

                 <div className="dropzone-2 2" style={{
                    height: '500px',
                    width: '110px',
                    left: '65px',
                    top: '10px',
                }} />

                <div className="dropzone-2 3" style={{
                    height: '250px',
                    width: '80px',
                    left: '600px',
                    top: '10px',
                }} />
                {/*
                <div className="dropzone-2 3" style={{
                    height: '100px',
                    width: '100px',
                    left: '480px',
                    top: '100px',
                }} /> */}


                {/* Draggables */}
                <Image className="draggable-2 1" src={Image1} style={{ width: '30vw' }} />
                <Image className="draggable-2 2" src={Image2} style={{ width: '26vw' }} />
                <Image className="draggable-2 3" src={Image3} style={{ width: '37vw' }} />
                <Image className="draggable-2 4" src={Image4} style={{ width: '30vw' }} />
               
            </Container>

        );
    }
}

export default LN_Puzzle;