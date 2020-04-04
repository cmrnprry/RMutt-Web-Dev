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
import DL_48 from './demuth_letter_overlays/independents.png'
import DL_37 from './demuth_letter_overlays/salon.png'
import DL_43 from './demuth_letter_overlays/the2.png'
import DL_32 from './demuth_letter_overlays/next.png'
import DL_30 from './demuth_letter_overlays/move.png'
import DL_46 from './demuth_letter_overlays/you.png'
import DL_47 from './demuth_letter_overlays/you2.png'
import DL_15 from './demuth_letter_overlays/do_anything.png'
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



import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Draggable from 'react-draggable';
import Position from '../../Passwords/PositionObserver.js'
import { withContentRect } from 'react-measure'
import Measure from 'react-measure'


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

    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
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
    }



    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>

                {/* dropzones */}
                <div>

                    {/* line one */}
                    <div className="dropzone" style={{
                        height:'19px',
                        width: '66px',
                        left: '239px',
                        top: '293px',
                    }}/>

                    {/* line two */}
                    <div className="dropzone" style={{
                        height:'10px',
                        width:'52px',
                        left: '525px',
                        top: '316px',
                    }} />

                    {/* line three */}
                    <div className="dropzone" style={{
                        height: '19px',
                        width: '39px',
                        left: '452px',
                        top: '342px',
                    }} />

                    <div className="dropzone" style={{
                        height: '19px',
                        width: '80px',
                        left: '715px',
                        top: '340px',
                    }} />

                    <div className="dropzone" style={{
                        height: '19px',
                        width: '43px',
                        left: '841px',
                        top: '340px',
                    }} />

                    {/* line four */}
                    <div className="dropzone" style={{
                        height:' 0px',
                        width: '30px',
                        left: '467px',
                        top: '371px',
                    }} />

                    <div className="dropzone" style={{
                        height: ' 0px',
                        width:'40px',
                        left: '516px',
                        top: '371px',
                    }} />

                    <div className="dropzone" style={{
                        height: ' 0px',
                        width: '37px',
                        left: '578px',
                        top: '370px',
                    }} />
                
                    {/* line five */}
                    <div className="dropzone" style={{
                        height: '19px',
                        width: '52px',
                        left: '242px',
                        top: '415px',
                    }} />

                    {/* line six */}
                    <div className="dropzone" style={{
                        height:'19px',
                        width:'29px',
                        left: '329px',
                        top: '440px',
                    }} />

                    <div className="dropzone" style={{
                        height: '19px',
                        width: '10px',
                        left: '398px',
                        top: '440px',
                    }} />

                    <div className="dropzone" style={{
                        height:'19px',
                        width:'50px',
                        left: '445px',
                        top: '440px',
                    }} />

                    <div className="dropzone" style={{
                        height: '19px',
                        width: '10px',
                        left: '641px',
                        top: '440px',
                    }} />

                    <div className="dropzone" style={{
                        height: '19px',
                        width: '40px',
                        left: '670px',
                        top: '440px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '50px',
                        left: '725px',
                        top: '441px',
                    }} />

                    {/* line seven */}
                    <div className="dropzone" style={{
                        height: '19px',
                        width: '70px',
                        left: '940px',
                        top: '464px',
                    }} />

                    {/* line eight */}
                    <div className="dropzone" style={{
                        height: '19px',
                        width: '95px',
                        left: '202px',
                        top: '489px',
                    }} />

                    {/* line nine */}
                    <div className="dropzone" style={{
                        height: '19px',
                        width: '255px',
                        left: '268px',
                        top: '518px',
                    }} />

                    {/* line ten */}
                    <div className="dropzone" style={{
                        height: '10px',
                        width: '155px',
                        left: '330px',
                        top: '545px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '27px',
                        left: '826px',
                        top: '540px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '60px',
                        left: '880px',
                        top: '546px',
                    }} />

                    {/* line eleven */}
                    <div className="dropzone" style={{
                        height: '10px',
                        width: '10px',
                        left: '200px',
                        top: '565px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '10px',
                        left: '243px',
                        top: '567px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '27px',
                        left: '660px',
                        top: '564px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '41px',
                        left: '697px',
                        top: '564px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '129px',
                        left: '748px',
                        top: '564px',
                    }} />

                    {/* line twelve */}
                    <div className="dropzone" style={{
                        height: '10px',
                        width: '37px',
                        left: '575px',
                        top: '590px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '62px',
                        left: '625px',
                        top: '595px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '152px',
                        left: '700px',
                        top: '593px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '66px',
                        left: '913px',
                        top: '588px',
                    }} />

                    {/* line thirteen */}
                    <div className="dropzone" style={{
                        height: '10px',
                        width: '43px',
                        left: '400px',
                        top: '617px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '58px',
                        left: '450px',
                        top: '617px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '50px',
                        left: '515px',
                        top: '617px',
                    }} />

                    {/* line fourteen */}
                    <div className="dropzone" style={{
                        height: '10px',
                        width: '40px',
                        left: '315px',
                        top: '645px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '40px',
                        left: '440px',
                        top: '645px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '110px',
                        left: '562px',
                        top: '643px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '54px',
                        left: '738px',
                        top: '640px',
                    }} />

                    {/* line fourteen */}
                    <div className="dropzone" style={{
                        height: '13px',
                        width: '40px',
                        left: '254px',
                        top: '670px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '92px',
                        left: '302px',
                        top: '673px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '68px',
                        left: '450px',
                        top: '671px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '124px',
                        left: '529px',
                        top: '671px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '28px',
                        left: '662px',
                        top: '665px',
                    }} />

                    {/* line fifteen */}
                    <div className="dropzone" style={{
                        height: '24px',
                        width: '77px',
                        left: '563px',
                        top: '738px',
                    }} />

                    {/* line sixteen */}
                    <div className="dropzone" style={{
                        height: '24px',
                        width: '75px',
                        left: '850px',
                        top: '790px',
                    }} />

                    {/* line seventeen */}
                    <div className="dropzone" style={{
                        height: '24px',
                        width: '105px',
                        left: '786px',
                        top: '815px',
                    }} />

                    <div className="dropzone" style={{
                        height: '24px',
                        width: '57px',
                        left: '645px',
                        top: '817px',
                    }} />

                    <div className="dropzone" style={{
                        height: '10px',
                        width: '56px',
                        left: '550px',
                        top: '816px',
                    }} />

                    <div className="dropzone" style={{
                        height: '24px',
                        width: '104px',
                        left: '388px',
                        top: '815px',
                    }} />

                    <div className="dropzone" style={{
                        height: '24px',
                        width: '94px',
                        left: '210px',
                        top: '820px',
                    }} />
                        
                </div>

                

                {/* dragables */}

                <div></div>

                <div>
                {/* First Row */}

                    <div className="draggable box">
                        <Image src={DL_2} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_1} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_14} />
                    </div>


                    <div className="draggable box">
                        <Image src={DL_3} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_20} />
                    </div>

                    <div className="draggable box" style={{ width: '106px', height: '20px'}}>
                        <Image src={DL_15} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_10} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_9} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_21} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_8} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_19} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_13} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_7} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_4} />
                    </div>

                    {/* Second Row */}

                    <div className="draggable box">
                        <Image src={DL_5} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_11} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_17} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_22} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_16} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_6} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_12} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_28} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_24} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_25} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_26} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_47} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_27} />
                    </div>


                    {/* Third Row */}

                    <div className="draggable box">
                        <Image src={DL_29} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_30} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_46} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_45} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_44} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_43} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_31} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_33} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_32} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_42} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_18} />
                    </div>


                    {/* Fourth Row */}

                    <div className="draggable box">
                        <Image src={DL_41} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_34} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_38} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_36} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_39} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_40} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_35} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_37} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_23} />
                    </div>

                    <div className="draggable box">
                        <Image src={DL_48} />
                    </div>
                
                </div>

                <div></div>

                {/* Base Letter */}
                <Image src={DL_under} style={{ marginTop: '3%', paddingLeft: '100px', paddingTop: '36px', paddingBottom: '150px' }} />

                    

            </Container>

        );
    }
}

export default Demuth;