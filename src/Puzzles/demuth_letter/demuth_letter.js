//React Imports
import React, { Component } from 'react';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import DL_under from './demuth_letter_under.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";



const correctList = getCorrect();
var currList = intializeArray();

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
    var currTextPos = currList.indexOf(text);
    var temp = "";

    if (currTextPos !== position) {
        temp = currList[position];
        currList[position] = text;
        currList[currTextPos] = temp;
    }

    if (checkList()) {
        puzzleSolved();
    }
}

//Function that displays text if the array is correct
function puzzleSolved() {
    alert("TODO: add Kieran words");
}

//Function that checks to see if the currect list is in the correct order
function checkList() {
    var allCorrect = true;

    for (let i = 0; i < correctList.length; i++) {
        if (currList[i] !== correctList[i]) {
            allCorrect = false;
            break;
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
    render() {

        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The other letter</title>
                </Helmet>

                {/* Dropzones Container */}
                <div>
                    {/* line one */}
                    <div className="dropzone 0" style={{
                        height: '19px',
                        width: '66px',
                        left: '239px',
                        top: '293px',
                    }} />

                    {/* line two */}
                    <div className="dropzone 1" style={{
                        height: '10px',
                        width: '52px',
                        left: '525px',
                        top: '316px',
                    }} />

                    {/* line three */}
                    <div className="dropzone 2" style={{
                        height: '19px',
                        width: '39px',
                        left: '452px',
                        top: '342px',
                    }} />

                    <div className="dropzone 3" style={{
                        height: '19px',
                        width: '80px',
                        left: '715px',
                        top: '340px',
                    }} />

                    <div className="dropzone 4" style={{
                        height: '19px',
                        width: '43px',
                        left: '841px',
                        top: '340px',
                    }} />

                    {/* line four */}
                    <div className="dropzone 5" style={{
                        height: ' 0px',
                        width: '30px',
                        left: '467px',
                        top: '371px',
                    }} />

                    <div className="dropzone 6" style={{
                        height: ' 0px',
                        width: '40px',
                        left: '516px',
                        top: '371px',
                    }} />

                    <div className="dropzone 7" style={{
                        height: ' 0px',
                        width: '37px',
                        left: '578px',
                        top: '370px',
                    }} />

                    {/* line five */}
                    <div className="dropzone 8" style={{
                        height: '19px',
                        width: '52px',
                        left: '242px',
                        top: '415px',
                    }} />

                    {/* line six */}
                    <div className="dropzone 9" style={{
                        height: '19px',
                        width: '29px',
                        left: '329px',
                        top: '440px',
                    }} />

                    <div className="dropzone 10" style={{
                        height: '19px',
                        width: '10px',
                        left: '398px',
                        top: '440px',
                    }} />

                    <div className="dropzone 11" style={{
                        height: '19px',
                        width: '50px',
                        left: '445px',
                        top: '440px',
                    }} />

                    <div className="dropzone 12" style={{
                        height: '19px',
                        width: '10px',
                        left: '641px',
                        top: '440px',
                    }} />

                    <div className="dropzone 13" style={{
                        height: '19px',
                        width: '40px',
                        left: '670px',
                        top: '440px',
                    }} />

                    <div className="dropzone 14" style={{
                        height: '10px',
                        width: '50px',
                        left: '725px',
                        top: '441px',
                    }} />

                    {/* line seven */}
                    <div className="dropzone 15" style={{
                        height: '19px',
                        width: '70px',
                        left: '940px',
                        top: '464px',
                    }} />

                    {/* line eight */}
                    <div className="dropzone 16" style={{
                        height: '19px',
                        width: '95px',
                        left: '202px',
                        top: '489px',
                    }} />

                    {/* line nine */}
                    <div className="dropzone 17" style={{
                        height: '19px',
                        width: '255px',
                        left: '268px',
                        top: '518px',
                    }} />

                    {/* line ten */}
                    <div className="dropzone 18" style={{
                        height: '10px',
                        width: '155px',
                        left: '330px',
                        top: '545px',
                    }} />

                    <div className="dropzone 19" style={{
                        height: '10px',
                        width: '27px',
                        left: '826px',
                        top: '540px',
                    }} />

                    <div className="dropzone 20" style={{
                        height: '10px',
                        width: '60px',
                        left: '880px',
                        top: '546px',
                    }} />

                    {/* line eleven */}
                    <div className="dropzone 21" style={{
                        height: '10px',
                        width: '10px',
                        left: '200px',
                        top: '565px',
                    }} />

                    <div className="dropzone 22" style={{
                        height: '10px',
                        width: '10px',
                        left: '243px',
                        top: '567px',
                    }} />

                    <div className="dropzone 23" style={{
                        height: '10px',
                        width: '27px',
                        left: '660px',
                        top: '564px',
                    }} />

                    <div className="dropzone 24" style={{
                        height: '10px',
                        width: '41px',
                        left: '697px',
                        top: '564px',
                    }} />

                    <div className="dropzone 25" style={{
                        height: '10px',
                        width: '129px',
                        left: '748px',
                        top: '564px',
                    }} />

                    {/* line twelve */}
                    <div className="dropzone 26" style={{
                        height: '10px',
                        width: '37px',
                        left: '575px',
                        top: '590px',
                    }} />

                    <div className="dropzone 27" style={{
                        height: '10px',
                        width: '62px',
                        left: '625px',
                        top: '595px',
                    }} />

                    <div className="dropzone 28" style={{
                        height: '10px',
                        width: '152px',
                        left: '700px',
                        top: '593px',
                    }} />

                    <div className="dropzone 29" style={{
                        height: '10px',
                        width: '66px',
                        left: '913px',
                        top: '588px',
                    }} />

                    {/* line thirteen */}
                    <div className="dropzone 30" style={{
                        height: '10px',
                        width: '43px',
                        left: '400px',
                        top: '617px',
                    }} />

                    <div className="dropzone 31" style={{
                        height: '10px',
                        width: '58px',
                        left: '450px',
                        top: '617px',
                    }} />

                    <div className="dropzone 32" style={{
                        height: '10px',
                        width: '50px',
                        left: '515px',
                        top: '617px',
                    }} />

                    {/* line fourteen */}
                    <div className="dropzone 33" style={{
                        height: '10px',
                        width: '40px',
                        left: '315px',
                        top: '645px',
                    }} />

                    <div className="dropzone 34" style={{
                        height: '10px',
                        width: '40px',
                        left: '440px',
                        top: '645px',
                    }} />

                    <div className="dropzone 35" style={{
                        height: '10px',
                        width: '110px',
                        left: '562px',
                        top: '643px',
                    }} />

                    <div className="dropzone 36" style={{
                        height: '10px',
                        width: '54px',
                        left: '738px',
                        top: '640px',
                    }} />

                    {/* line fourteen */}
                    <div className="dropzone 37" style={{
                        height: '13px',
                        width: '40px',
                        left: '254px',
                        top: '670px',
                    }} />

                    <div className="dropzone 38" style={{
                        height: '10px',
                        width: '92px',
                        left: '302px',
                        top: '673px',
                    }} />

                    <div className="dropzone 39" style={{
                        height: '10px',
                        width: '68px',
                        left: '450px',
                        top: '671px',
                    }} />

                    <div className="dropzone 40" style={{
                        height: '10px',
                        width: '124px',
                        left: '529px',
                        top: '671px',
                    }} />

                    <div className="dropzone 41" style={{
                        height: '10px',
                        width: '28px',
                        left: '662px',
                        top: '665px',
                    }} />

                    {/* line fifteen */}
                    <div className="dropzone 42" style={{
                        height: '24px',
                        width: '77px',
                        left: '563px',
                        top: '738px',
                    }} />

                    {/* line sixteen */}
                    <div className="dropzone 43" style={{
                        height: '24px',
                        width: '75px',
                        left: '850px',
                        top: '790px',
                    }} />

                    {/* line seventeen */}
                    <div className="dropzone 44" style={{
                        height: '24px',
                        width: '105px',
                        left: '786px',
                        top: '815px',
                    }} />

                    <div className="dropzone 45" style={{
                        height: '24px',
                        width: '57px',
                        left: '645px',
                        top: '817px',
                    }} />

                    <div className="dropzone 46" style={{
                        height: '10px',
                        width: '56px',
                        left: '550px',
                        top: '816px',
                    }} />

                    <div className="dropzone 47" style={{
                        height: '24px',
                        width: '104px',
                        left: '388px',
                        top: '815px',
                    }} />

                    <div className="dropzone 48" style={{
                        height: '24px',
                        width: '94px',
                        left: '210px',
                        top: '820px',
                    }} />

                </div>

                {/* Dragables Containe */}
                <div>
                    {/* First Row */}

                    <div className="draggable box" style={{ fontSize: '14px' }}>
                        {/* <Image src={DL_2} /> */}
                        1917
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_1} /> */}
                        8th
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_14} /> */}
                        Demuth
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_3} /> */}
                        A
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_20} /> */}
                        grand
                    </div>

                    <div className="draggable box" style={{ fontSize: '17px' }}>
                        {/* <Image src={DL_15} /> */}
                        do anything
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_10} /> */}
                        co
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_9} /> */}
                        central
                    </div>

                    <div className="draggable box" style={{ fontSize: '14px' }}>
                        {/* <Image src={DL_21} /> */}
                        henry
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_8} /> */}
                        ce
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_19} /> */}
                        fou
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_13} /> */}
                        dear
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_7} /> */}
                        bre
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_4} /> */}
                        appreciate
                    </div>

                    {/* Second Row */}

                    <div className="draggable box">
                        {/* <Image src={DL_5} /> */}
                        article
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_11} /> */}
                        columbus
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_17} /> */}
                        ew
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_22} /> */}
                        independents
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_16} /> */}
                        duchamp
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_6} /> */}
                        avenue
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_12} /> */}
                        day
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_28} /> */}
                        lptu
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_24} /> */}
                        it
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_25} /> */}
                        ittee
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_26} /> */}
                        ity
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_47} /> */}
                        you
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_27} /> */}
                        j
                    </div>


                    {/* Third Row */}

                    <div className="draggable box">
                        {/* <Image src={DL_29} /> */}
                        Marcel
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_30} /> */}
                        move
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_46} /> */}
                        you
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_45} /> */}
                        y
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_44} /> */}
                        would
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_43} /> */}
                        the
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_31} /> */}
                        mutt
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_33} /> */}
                        of
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_32} /> */}
                        next
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_42} /> */}
                        the
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_18} /> */}
                        exhibition
                    </div>


                    {/* Fourth Row */}

                    <div className="draggable box">
                        {/* <Image src={DL_41} /> */}
                        that
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_34} /> */}
                        ork
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_38} /> */}
                        schuvler
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_36} /> */}
                        s
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_39} /> */}
                        super
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_40} /> */}
                        tain
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_35} /> */}
                        rich
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_37} /> */}
                        salon
                    </div>

                    <div className="draggable box" style={{ fontSize: '20px' }}>
                        {/* <Image src={DL_23} /> */}
                        it was not exhibited
                    </div>

                    <div className="draggable box">
                        {/* <Image src={DL_48} /> */}
                        independents
                    </div>

                </div>

                <div></div>

                {/* Base Letter */}
                <Image src={DL_under} style={{ marginTop: '3%', paddingLeft: '100px', paddingTop: '29px', paddingBottom: '150px' }} />



            </Container>

        );
    }
}

export default Demuth;