import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import Background from '../../folder_elements/wooden.png'
import DL_under from './demuth_letter_under.png'
import DL_1 from './demuth_letter_overlays/8th.png'
import DL_2 from './demuth_letter_overlays/1917.png'
import DL_3 from './demuth_letter_overlays/a.png'
import DL_4 from './demuth_letter_overlays/appreciate.png'
import DL_5 from './demuth_letter_overlays/article.png'
import DL_6 from './demuth_letter_overlays/avenue.png'
import DL_7 from './demuth_letter_overlays/bro.png'
import DL_8 from './demuth_letter_overlays/ce.png'
import DL_9 from './demuth_letter_overlays/central.png'
import DL_10 from './demuth_letter_overlays/co.png'
import DL_11 from './demuth_letter_overlays/columbus.png'
import DL_12 from './demuth_letter_overlays/day.png'
import DL_13 from './demuth_letter_overlays/dear.png'
import DL_14 from './demuth_letter_overlays/demuth.png'
import DL_15 from './demuth_letter_overlays/do_anything.png'
import DL_16 from './demuth_letter_overlays/duchamp.png'
import DL_17 from './demuth_letter_overlays/ew.png'
import DL_18 from './demuth_letter_overlays/exhibition.png'
import DL_19 from './demuth_letter_overlays/fou.png'
import DL_20 from './demuth_letter_overlays/grand.png'
import DL_21 from './demuth_letter_overlays/henry.png'
import DL_22 from './demuth_letter_overlays/independents.png'
import DL_23 from './demuth_letter_overlays/it_was_not_exhibited.png'
import DL_24 from './demuth_letter_overlays/it.png'
import DL_25 from './demuth_letter_overlays/itteo.png'
import DL_26 from './demuth_letter_overlays/ity.png'
import DL_27 from './demuth_letter_overlays/J.png'
import DL_28 from './demuth_letter_overlays/lptu.png'
import DL_29 from './demuth_letter_overlays/marcel.png'
import DL_30 from './demuth_letter_overlays/move.png'
import DL_31 from './demuth_letter_overlays/mutt.png'
import DL_32 from './demuth_letter_overlays/next.png'
import DL_33 from './demuth_letter_overlays/of.png'
import DL_34 from './demuth_letter_overlays/ork.png'
import DL_35 from './demuth_letter_overlays/rich.png'
import DL_36 from './demuth_letter_overlays/s.png'
import DL_37 from './demuth_letter_overlays/salon.png'
import DL_38 from './demuth_letter_overlays/schuvler.png'
import DL_39 from './demuth_letter_overlays/super.png'
import DL_40 from './demuth_letter_overlays/tain.png'
import DL_41 from './demuth_letter_overlays/that.png'
import DL_42 from './demuth_letter_overlays/the.png'
import DL_43 from './demuth_letter_overlays/the2.png'
import DL_44 from './demuth_letter_overlays/would.png'
import DL_45 from './demuth_letter_overlays/y.png'
import DL_46 from './demuth_letter_overlays/you.png'
import DL_47 from './demuth_letter_overlays/you2.png'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Draggable from 'react-draggable';



class Demuth extends Component {

        constructor(props) {
            super(props);
            
            this.state = {
                deltaPosition: {
                    x: 0, y: 0
                }
            };
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
         const { deltaPosition } = this.state;
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
            
                <Image src={DL_under} style={{ marginTop: '3%' }} />
                <Draggable onDrag={this.handleDrag}>
                    <div>
                        <div>I track my deltas</div>
                        <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div> 
                    </div>
                </Draggable>

                <Draggable onDrag={this.handleDrag}>
                    <div>
                        <Image src={DL_1} />
                        <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
                    </div>
                </Draggable>

                {/* Draggable Items */}
                 <Image src={DL_7} /> <Image src={DL_13} /> <Image src={DL_19} />
                <Image src={DL_2} /> <Image src={DL_8} /> <Image src={DL_14} /> <Image src={DL_20} />
                <Image src={DL_3} /> <Image src={DL_9} /> <Image src={DL_15} style={{ width: '106px', height: '20px'}} /> <Image src={DL_21} />
                <Image src={DL_4} /> <Image src={DL_10} /> <Image src={DL_16} /> <Image src={DL_22} />
                <Image src={DL_5} /> <Image src={DL_11} /> <Image src={DL_17} /> <Image src={DL_23} />
                <Image src={DL_6} /> <Image src={DL_12} /> <Image src={DL_18} /> <Image src={DL_24} />
                <Image src={DL_25} /> <Image src={DL_26} /> <Image src={DL_27} /> <Image src={DL_28} />
                <Image src={DL_29} /> <Image src={DL_30} /> <Image src={DL_31} /> <Image src={DL_32} />
                <Image src={DL_33} /> <Image src={DL_34} /> <Image src={DL_35} /> <Image src={DL_36} />
                <Image src={DL_37} /> <Image src={DL_38} /> <Image src={DL_39} /> <Image src={DL_40} />
                <Image src={DL_41} /> <Image src={DL_42} /> <Image src={DL_43} /> <Image src={DL_44} />
                <Image src={DL_45} /> <Image src={DL_46} /> <Image src={DL_47} />

 
            </Container>

        );
    }
}

export default Demuth;