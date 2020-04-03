import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import interact from 'interactjs'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import '../../Stylesheets/index.css';
import Background from '../../folder_elements/wooden.png'
import DL_under from './demuth_letter_under.png'
import DL_21 from './demuth_letter_overlays/henry.png'
import DL_2 from './demuth_letter_overlays/1917.png'
import DL_7 from './demuth_letter_overlays/bro.png'
import DL_6 from './demuth_letter_overlays/avenue.png'
import DL_1 from './demuth_letter_overlays/8th.png'
import DL_17 from './demuth_letter_overlays/ew.png'
import DL_34 from './demuth_letter_overlays/ork.png'
import DL_26 from './demuth_letter_overlays/ity.png'
import DL_13 from './demuth_letter_overlays/dear.png'
import DL_8 from './demuth_letter_overlays/ce.png'
import DL_36 from './demuth_letter_overlays/s.png'
import DL_28 from './demuth_letter_overlays/lptu.png'
import DL_3 from './demuth_letter_overlays/a.png'
import DL_19 from './demuth_letter_overlays/fou.png'
import DL_40 from './demuth_letter_overlays/tain.png'
import DL_20 from './demuth_letter_overlays/grand.png'
import DL_9 from './demuth_letter_overlays/central.png'
import DL_23 from './demuth_letter_overlays/it_was_not_exhibited.png'
import DL_22 from './demuth_letter_overlays/independents.png'
import DL_10 from './demuth_letter_overlays/co.png'
import DL_25 from './demuth_letter_overlays/itteo.png'
import DL_27 from './demuth_letter_overlays/J.png'
import DL_45 from './demuth_letter_overlays/y.png'
import DL_33 from './demuth_letter_overlays/of.png'
import DL_42 from './demuth_letter_overlays/the.png'
import DL_18 from './demuth_letter_overlays/exhibition.png'
import DL_39 from './demuth_letter_overlays/super.png'
import DL_37 from './demuth_letter_overlays/salon.png'
import DL_43 from './demuth_letter_overlays/the2.png'
import DL_32 from './demuth_letter_overlays/next.png'
import DL_30 from './demuth_letter_overlays/move.png'
import DL_46 from './demuth_letter_overlays/you.png'
import DL_41 from './demuth_letter_overlays/that.png'
import DL_12 from './demuth_letter_overlays/day.png'
import DL_5 from './demuth_letter_overlays/article.png'
import DL_44 from './demuth_letter_overlays/would.png'
import DL_4 from './demuth_letter_overlays/appreciate.png'
import DL_24 from './demuth_letter_overlays/it.png'
import DL_14 from './demuth_letter_overlays/demuth.png'
import DL_29 from './demuth_letter_overlays/marcel.png'
import DL_16 from './demuth_letter_overlays/duchamp.png'
import DL_11 from './demuth_letter_overlays/columbus.png'
import DL_35 from './demuth_letter_overlays/rich.png'
import DL_31 from './demuth_letter_overlays/mutt.png'
import DL_38 from './demuth_letter_overlays/schuvler.png'
import DL_15 from './demuth_letter_overlays/do_anything.png'
import DL_47 from './demuth_letter_overlays/you2.png'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Draggable from 'react-draggable';
import Position from '../../Passwords/PositionObserver.js'
import { withContentRect } from 'react-measure'
import Measure from 'react-measure'


class Pos {
    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
    }
}


function generatePositions() {
    let array = [];
    let value = -100;
    for (let i = 0; i < 15; i++) {
        value = value + 100;
        array[i] = value;
    }

    return array;
}

const position = { x: 0, y: 0 }

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
            //console.log("Pos: " + event.pageX + ", " + event.y0)
        }
    }
})

interact('.dropzone').dropzone({
    accept: '.draggable',
    overlap: 0.50,

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
        console.log(event.relatedTarget.classList)
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        console.log(event.relatedTarget.classList)
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        console.log(event.relatedTarget.classList)
    },
    ondrop: function (event) {
        console.log(event.relatedTarget.classList)
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        console.log(event.relatedTarget.classList)
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

class Demuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deltaPosition: {
                x: 0, y: 0
            },
            
           // constPos: this.generateHash(),
            genStartPos: generatePositions()
        };
    }

    generateHash() {
        var hash = {};

        hash["DL_2"] = new Pos(this.genStartPos[0], 0);
        hash["DL_1"] = new Pos(this.genStartPos[1], 0);
        hash["DL_14"] = new Pos(this.genStartPos[2] - 20, 0);
        hash["DL_3"] = new Pos(this.genStartPos[3], 0);
        hash["DL_20"] = new Pos(this.genStartPos[4] - 20, 0);
        hash["DL_15"] = new Pos(this.genStartPos[5] - 20, 0);
        hash["DL_10"] = new Pos(this.genStartPos[6], 0);
        hash["DL_9"] = new Pos(this.genStartPos[7] - 10, 0);
        hash["DL_21"] = new Pos(this.genStartPos[8], 0);
        hash["DL_8"] = new Pos(this.genStartPos[9], 0);
        hash["DL_19"] = new Pos(this.genStartPos[10], 0);
        hash["DL_13"] = new Pos(this.genStartPos[11], 0);
        hash["DL_7"] = new Pos(this.genStartPos[12], 0);
        hash["DL_4"] = new Pos(this.genStartPos[13], 0);

        hash["DL_5"] = new Pos(this.genStartPos[0], 70);
        hash["DL_11"] = new Pos(this.genStartPos[1], 70);
        hash["DL_17"] = new Pos(this.genStartPos[2] + 20, 70);
        hash["DL_22"] = new Pos(this.genStartPos[3] + 10, 70);
        hash["DL_16"] = new Pos(this.genStartPos[5], 70);
        hash["DL_6"] = new Pos(this.genStartPos[6], 70);
        hash["DL_12"] = new Pos(this.genStartPos[7], 70);
        hash["DL_28"] = new Pos(this.genStartPos[8], 70);
        hash["DL_24"] = new Pos(this.genStartPos[9], 70);
        hash["DL_25"] = new Pos(this.genStartPos[10], 70);
        hash["DL_26"] = new Pos(this.genStartPos[11], 70);
        hash["DL_47"] = new Pos(this.genStartPos[12], 70);
        hash["DL_27"] = new Pos(this.genStartPos[13], 70);

        hash["DL_29"] = new Pos(this.genStartPos[0], 140);
        hash["DL_30"] = new Pos(this.genStartPos[1], 140);
        hash["DL_46"] = new Pos(this.genStartPos[2], 140);
        hash["DL_45"] = new Pos(this.genStartPos[3], 140);
        hash["DL_44"] = new Pos(this.genStartPos[5], 140);
        hash["DL_43"] = new Pos(this.genStartPos[5], 140);
        hash["DL_31"] = new Pos(this.genStartPos[6], 140);
        hash["DL_33"] = new Pos(this.genStartPos[7], 140);
        hash["DL_32"] = new Pos(this.genStartPos[8], 140);
        hash["DL_42"] = new Pos(this.genStartPos[9], 140);
        hash["DL_18"] = new Pos(this.genStartPos[10], 140);

        hash["DL_41"] = new Pos(this.genStartPos[0], 210);
        hash["DL_34"] = new Pos(this.genStartPos[1], 210);
        hash["DL_38"] = new Pos(this.genStartPos[7] - 20, 210);
        hash["DL_36"] = new Pos(this.genStartPos[3], 210);
        hash["DL_39"] = new Pos(this.genStartPos[4], 210);
        hash["DL_40"] = new Pos(this.genStartPos[5], 210);
        hash["DL_35"] = new Pos(this.genStartPos[6], 210);
        hash["DL_37"] = new Pos(this.genStartPos[2], 210);
        hash["DL_23"] = new Pos(this.genStartPos[8], 210);

        return hash;
    }

    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>

                {/* First Row */}

                <div className="demuth-box" style={{
                    left: '250px', top: '412px'
                }}></div>

                <div className="draggable box"> <Image src={DL_2} /> </div>
                <div className="draggable box"> <Image src={DL_2} /> </div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>

                <div className="dropzone" style={{
                    height: '12px', width: '70px',
                    left: '720px', top: '445px'
                }}></div>

                <div className="dropzone" style={{
                    height: '15px',
                    width: '35px',
                    left: '579px',
                    top: '473px'
                }}></div>

                <div className="dropzone" style={{
                    height: '10px', width: '35px',
                    left: '517px', top: '472px'
                }}></div>

                <div className="dropzone" style={{
                    height: '5px',
                    width: '37px',
                    left: '452px',
                    top: '447px'
                }}></div>

                <div className="dropzone" style={{
                    height: '0px',
                    width: '22px',
                    left: '469px',
                    top: '471px',
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>
                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '240px', top: '390px'
                }}></div>

                <div className="dropzone" style={{
                    height: '30px', width: '65px',
                    left: '509px', top: '429px'
                }}></div>

                {/* <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[0],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_2} />
                    </div>
                </Draggable> */}

                <Draggable onDrag={this.handleDrag}>
                    <div>
                        <Image src={DL_1} />
                        <div>x: {this.state.deltaPosition.x.toFixed(0)},
                        y: {this.state.deltaPosition.y.toFixed(0)}</div>
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[2],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_14} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[3],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_3} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[4],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_20} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[5],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_15} style={{ width: '106px', height: '20px' }} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[6],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_10} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[7],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_9} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{
                    x: this.state.genStartPos[8],
                    y: 0
                }}>
                    <div className="box">
                        <Image src={DL_21} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[9], y: 0 }}>
                    <div className="box">
                        <Image src={DL_8} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[10], y: 0 }}>
                    <div className="box">
                        <Image src={DL_19} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[11], y: 0 }}>
                    <div className="box">
                        <Image src={DL_13} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[12], y: 0 }}>
                    <div className="box">
                        <Image src={DL_7} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[13], y: 0 }}>
                    <div className="box">
                        <Image src={DL_4} />
                    </div>
                </Draggable>

                {/* Second Row */}

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[0], y: 70 }}>
                    <div className="box">
                        <Image src={DL_5} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[1], y: 70 }}>
                    <div className="box">
                        <Image src={DL_11} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[2] + 20, y: 70 }}>
                    <div className="box">
                        <Image src={DL_17} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[3] + 10, y: 70 }}>
                    <div className="box">
                        <Image src={DL_22} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[5], y: 70 }}>
                    <div className="box">
                        <Image src={DL_16} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[6], y: 70 }}>
                    <div className="box">
                        <Image src={DL_6} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[7], y: 70 }}>
                    <div className="box">
                        <Image src={DL_12} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[8], y: 70 }}>
                    <div className="box">
                        <Image src={DL_28} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[9], y: 70 }}>
                    <div className="box">
                        <Image src={DL_24} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[10], y: 70 }}>
                    <div className="box">
                        <Image src={DL_25} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[11], y: 70 }}>
                    <div className="box">
                        <Image src={DL_26} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[12], y: 70 }}>
                    <div className="box">
                        <Image src={DL_47} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[13], y: 70 }}>
                    <div className="box">
                        <Image src={DL_27} />
                    </div>
                </Draggable>


                {/* Third Row */}

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[0], y: 140 }}>
                    <div className="box">
                        <Image src={DL_29} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[1], y: 140 }}>
                    <div className="box">
                        <Image src={DL_30} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[2], y: 140 }}>
                    <div className="box">
                        <Image src={DL_46} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[3], y: 140 }}>
                    <div className="box">

                        <Image src={DL_45} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[4], y: 140 }}>
                    <div className="box">
                        <Image src={DL_44} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[5], y: 140 }}>
                    <div className="box">
                        <Image src={DL_43} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[6], y: 140 }}>
                    <div className="box">
                        <Image src={DL_31} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[7], y: 140 }}>
                    <div className="box">
                        <Image src={DL_33} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[8], y: 140 }}>
                    <div className="box">
                        <Image src={DL_32} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[9], y: 140 }}>
                    <div className="box">
                        <Image src={DL_42} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[10], y: 140 }}>
                    <div className="box">
                        <Image src={DL_18} />
                    </div>
                </Draggable>


                {/* Fourth Row */}

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[0], y: 210 }}>
                    <div className="box">
                        <Image src={DL_41} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[1], y: 210 }}>
                    <div className="box">
                        <Image src={DL_34} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[7] - 20, y: 210 }}>
                    <div className="box">
                        <Image src={DL_38} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[3], y: 210 }}>
                    <div className="box">
                        <Image src={DL_36} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[4], y: 210 }}>
                    <div className="box">
                        <Image src={DL_39} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[5], y: 210 }}>
                    <div className="box">
                        <Image src={DL_40} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[6], y: 210 }}>
                    <div className="box">
                        <Image src={DL_35} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[2], y: 210 }}>
                    <div className="box">
                        <Image src={DL_37} />
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag} defaultPosition={{ x: this.state.genStartPos[8], y: 210 }}>
                    <div className="box">
                        <Image src={DL_23} />
                    </div>
                </Draggable>

                <div></div>

                {/* Base Letter */}
                <Image src={DL_under} style={{ marginTop: '3%', paddingLeft: '100px', paddingTop: '250px', paddingBottom: '150px' }} />

            </Container>

        );
    }
}

export default Demuth;