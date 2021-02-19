//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import Sticky from "../../../Logos/logo_sqr.png"
import Question from "../../../folder_elements/hints/sticky_closed.png"
import One from "../../../folder_elements/hints/sticky_I.png"
import Eight from "../../../folder_elements/hints/sticky_VIII.png"
import Eleven from "../../../folder_elements/hints/sticky_XI.png"


//Image Imports
import Board from '../../../Corkboard/pushpin.png'
import Pen from '../../../folder_elements/pen/pen_bak.png'
import Note from '../../../folder_elements/notes.png'
import Camera from '../../../folder_elements/Camera Icon.png'
import Globe from '../../../folder_elements/GlobeRubberStamp.png'
import Open from '../../../folder_elements/envelopes/envelode_opened.png'
import Closed from '../../../folder_elements/envelopes/envelope_closed.png'
import Folder1 from '../../../folder_elements/folder_pages/folder_1.png'
import Folder2 from '../../../folder_elements/folder_pages/folder_2.png'
import Folder3 from '../../../folder_elements/folder_pages/folder_3.png'
import Folder4 from '../../../folder_elements/folder_pages/folder_4.png'
import Folder5 from '../../../folder_elements/folder_pages/folder_5.png'
import Folder6 from '../../../folder_elements/folder_pages/folder_6.png'
import Folder7 from '../../../folder_elements/folder_pages/folder_7.png'
import Folder8 from '../../../folder_elements/folder_pages/folder_8.png'
import Folder9 from '../../../folder_elements/folder_pages/folder_9.png'
import Folder10 from '../../../folder_elements/folder_pages/folder_10.png'

import ARLetter1 from '../../../folder_elements/notes/arletter_1.png'
import ARLetter2 from '../../../folder_elements/notes/arletter_2.png'
import BlineMan1 from '../../../folder_elements/notes/blind_man_1.png'
import BlineMan2 from '../../../folder_elements/notes/blind_man_2.png'
import Demuth1 from '../../../folder_elements/notes/demuth_1.png'
import Demuth2 from '../../../folder_elements/notes/demuth_2.png'
import Elsa1 from '../../../folder_elements/notes/elsa_1.png'
import Elsa2 from '../../../folder_elements/notes/elsa_2.png'
import God1 from '../../../folder_elements/notes/god_1.png'
import God2 from '../../../folder_elements/notes/god_2.png'
import GodII1 from '../../../folder_elements/notes/god2_1.png'
import GodII2 from '../../../folder_elements/notes/god2_2.png'
import Mott1 from '../../../folder_elements/notes/mott_1.png'
import Mott2 from '../../../folder_elements/notes/mott_2.png'
import PhoneBook1 from '../../../folder_elements/notes/phonebook_1.png'
import PhoneBook2 from '../../../folder_elements/notes/phonebook_2.png'
import SIA1 from '../../../folder_elements/notes/sia_1.png'
import SIA2 from '../../../folder_elements/notes/sia_2.png'
import TissuePaper1 from '../../../folder_elements/notes/tissue_paper_1.png'
import TissuePaper2 from '../../../folder_elements/notes/tissue_paper_2.png'


//Web Imports
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet";
import Popup from 'reactjs-popup';

//Puzzle order
const order = ["The Letter", "The Other Letter", "Independent?", "Blind Man?", "A Friend of Louise?", "Who Remains?", "What Rings True?", "The Future", "RRose By Any Other Name", "Plumb the Depths", "God or Goddess?", "His or Hers?",];

//Enevelope
const open = require('../../../folder_elements/envelopes/envelode_opened.png');
const closed = require('../../../folder_elements/envelopes/envelope_closed.png');

//different folders
const img1 = require('../../../folder_elements/folder_pages/folder_1.png');
const img2 = require('../../../folder_elements/folder_pages/folder_2.png');
const img3 = require('../../../folder_elements/folder_pages/folder_3.png');
const img4 = require('../../../folder_elements/folder_pages/folder_4.png');
const img5 = require('../../../folder_elements/folder_pages/folder_5.png');
const img6 = require('../../../folder_elements/folder_pages/folder_6.png');
const img7 = require('../../../folder_elements/folder_pages/folder_7.png');
const img8 = require('../../../folder_elements/folder_pages/folder_8.png');
const img9 = require('../../../folder_elements/folder_pages/folder_9.png');
const img10 = require('../../../folder_elements/folder_pages/folder_10.png');
const img11 = require('../../../folder_elements/folder_pages/folder_11.png');
const img12 = require('../../../folder_elements/folder_pages/folder_12.png');
var currFolder = img1;

//Unsolved
const imgUS1 = require('../../../folder_elements/notes/arletter_1.png');
const imgUS2 = require('../../../folder_elements/notes/demuth_1.png');
const imgUS3 = require('../../../folder_elements/notes/sia_1.png');
const imgUS4 = require('../../../folder_elements/notes/blind_man_1.png');
const imgUS5 = require('../../../folder_elements/notes/mina_loy_1.png');
const imgUS6 = require('../../../folder_elements/notes/tissue_paper_1.png');
const imgUS7 = require('../../../folder_elements/notes/phonebook_1.png');
const imgUS8 = require('../../../folder_elements/notes/elsa_1.png');
const imgUS9 = require('../../../folder_elements/notes/rrose_1.png');
const imgUS10 = require('../../../folder_elements/notes/mott_1.png');
const imgUS11 = require('../../../folder_elements/notes/god_1.png');
const imgUS12 = require('../../../folder_elements/notes/god2_1.png');

var currUS = imgUS1;

//Solved
const imgS1 = require('../../../folder_elements/notes/arletter_2.png');
const imgS2 = require('../../../folder_elements/notes/demuth_2.png');
const imgS3 = require('../../../folder_elements/notes/sia_2.png');
const imgS4 = require('../../../folder_elements/notes/blind_man_2.png');
const imgS5 = require('../../../folder_elements/notes/mina_loy_2.png');
const imgS6 = require('../../../folder_elements/notes/tissue_paper_2.png');
const imgS7 = require('../../../folder_elements/notes/phonebook_2.png');
const imgS8 = require('../../../folder_elements/notes/elsa_2.png');
const imgS9 = require('../../../folder_elements/notes/rrose_2.png');
const imgS10 = require('../../../folder_elements/notes/mott_2.png');
const imgS11 = require('../../../folder_elements/notes/god_2.png');
const imgS12 = require('../../../folder_elements/notes/god2_2.png');

//sticky
const closedQ = require('../../../folder_elements/hints/sticky_closed.png')
const sticky1 = require('../../../folder_elements/hints/sticky_I.png')
const sticky8 = require('../../../folder_elements/hints/sticky_VIII.png')
const sticky11 = require('../../../folder_elements/hints/sticky_XI.png')
var hintOpen = false;

var currS = imgS1;


var tabBuffer = 0;

var solvedPuzzles = [];
var showRightTabs = [false, false, false, false, false, false, false, false, false, false, false, false];
var showLeftTabs = [true, true, true, true, true, true, true, true, true, true, true, true];
var currentTab = 1;
//globe and camera elements
var globeWidth, globeleft, globeRight, globeTop = 0;
var cameraWidth, cameraleft, cameraTop = 0;

function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;
    //set the folder

    document.getElementById("Folder").style.left = (middle - (document.getElementById("Folder").getBoundingClientRect().width) / 2) + "px";


    //Set the Note Page
    document.getElementById("Note").style.left = document.getElementById("Folder").getBoundingClientRect().x + 50 + "px";
    document.getElementById("Note").style.top = document.getElementById("Folder").getBoundingClientRect().y + 20 + "px";

    //Set the Note Page
    document.getElementById("Pen").style.left = document.getElementById("Folder").getBoundingClientRect().x + 37 + "px";
    document.getElementById("Pen").style.top = document.getElementById("Folder").getBoundingClientRect().y + 20 + "px";

}

//Set Envelope
function setEnvelope(eWidth, eleft, eTop) {
    document.getElementById("Envelope").style.left = (document.getElementById("Folder").getBoundingClientRect().right - eleft) + "px";
    document.getElementById("Envelope").style.top = document.getElementById("Folder").getBoundingClientRect().y - eTop + "px";
    document.getElementById("Envelope").style.width = eWidth + "px";
}

//Set Title
function setTitle(size, left, top, width, height) {
    document.getElementById("Title").style.left = (document.getElementById("Folder").getBoundingClientRect().right
        - left) + "px";
    document.getElementById("Title").style.top = document.getElementById("Folder").getBoundingClientRect().y + top + "px";
    document.getElementById("Title").style.fontSize = size + "px";
    document.getElementById("Title").style.width = width + "px";
    document.getElementById("Title").style.height = height + "px";
}

//Set Clickable Tabs
function setTabs(tabHeight, tabWidth, tab1, tab2, tab3, tabLeft) {
    document.getElementsByClassName("folder-tab")[0].style.height = tabHeight + "px";
    document.getElementsByClassName("folder-tab")[0].style.top =
        document.getElementById("Folder").getBoundingClientRect().y + "px";
    document.getElementsByClassName("folder-tab")[0].style.width = tabWidth + "px";
    document.getElementsByClassName("folder-tab")[0].style.left =
        (document.getElementById("Folder").getBoundingClientRect().right
            - document.getElementsByClassName("folder-tab")[0].getBoundingClientRect().width - tabLeft) + "px";

    var temp = document.getElementsByClassName("folder-tab")[0].getBoundingClientRect().height;

    for (var i = 1; i < document.getElementsByClassName("folder-tab").length; i++) {
        //width and left don't change
        document.getElementsByClassName("folder-tab")[i].style.width = tabWidth + "px";

        document.getElementsByClassName("folder-tab")[i].style.left =
            (document.getElementById("Folder").getBoundingClientRect().right
                - document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().width - tabLeft) + "px";

        //setting the height
        document.getElementsByClassName("folder-tab")[i].style.height = tab1 + "px";

        //resetting the top
        document.getElementsByClassName("folder-tab")[i].style.top =
            document.getElementById("Folder").getBoundingClientRect().y + temp + "px";


        if (i < 3) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab1 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (i === 3) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab1 + 17 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if ((i >= 4 && i <= 9)) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (i === 12) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab3 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }

        temp += document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().height;
    }

    document.getElementsByClassName("folder-tab-right")[0].style.height = tabHeight + "px";
    document.getElementsByClassName("folder-tab-right")[0].style.top =
        document.getElementById("Folder").getBoundingClientRect().y + "px";
    document.getElementsByClassName("folder-tab-right")[0].style.width = tabWidth + "px";
    document.getElementsByClassName("folder-tab-right")[0].style.left =
        (document.getElementById("Folder").getBoundingClientRect().x) + "px";

    temp = document.getElementsByClassName("folder-tab-right")[0].getBoundingClientRect().height;

    for (var ii = 1; ii < document.getElementsByClassName("folder-tab-right").length; ii++) {
        //width and left don't change
        document.getElementsByClassName("folder-tab-right")[ii].style.width = tabWidth + "px";

        document.getElementsByClassName("folder-tab-right")[ii].style.left =
            (document.getElementById("Folder").getBoundingClientRect().x) + "px";

        //setting the height
        document.getElementsByClassName("folder-tab-right")[ii].style.height = tab1 + "px";

        //resetting the top
        document.getElementsByClassName("folder-tab-right")[ii].style.top =
            document.getElementById("Folder").getBoundingClientRect().y + temp + "px";


        if (ii < 3) {
            document.getElementsByClassName("folder-tab-right")[ii].style.height = tab1 + "px";

            document.getElementsByClassName("folder-tab-right")[ii].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (ii === 3) {
            document.getElementsByClassName("folder-tab-right")[ii].style.height = tab1 + 17 + "px";

            document.getElementsByClassName("folder-tab-right")[ii].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if ((ii >= 4 && ii <= 9)) {
            document.getElementsByClassName("folder-tab-right")[ii].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab-right")[ii].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (ii === 12) {
            document.getElementsByClassName("folder-tab-right")[ii].style.height = tab3 + "px";

            document.getElementsByClassName("folder-tab-right")[ii].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }

        temp += document.getElementsByClassName("folder-tab-right")[ii].getBoundingClientRect().height;
    }

    // for (var i = 0; i < document.getElementsByClassName("folder-tab-right").length; i++) {
    //     document.getElementsByClassName("folder-tab-right")[i].style.width = tabWidth + "px";

    //     document.getElementsByClassName("folder-tab-right")[i].style.left =
    //         (document.getElementById("Folder").getBoundingClientRect().x) + "px";

    //     if (i !== 0 && i < 5) {
    //         document.getElementsByClassName("folder-tab-right")[i].style.height = tab1 + "px";

    //         document.getElementsByClassName("folder-tab-right")[i].style.top =
    //             document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

    //         temp += document.getElementsByClassName("folder-tab-right")[1].getBoundingClientRect().height;
    //     }
    //     else if ((i >= 5 && i < 7) || (i >= 8)) {
    //         document.getElementsByClassName("folder-tab-right")[i].style.height = tab2 + "px";

    //         document.getElementsByClassName("folder-tab-right")[i].style.top =
    //             document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

    //         temp += document.getElementsByClassName("folder-tab-right")[i].getBoundingClientRect().height;
    //     }
    //     else if (i===7) {
    //         document.getElementsByClassName("folder-tab-right")[i].style.height = tab3 + "px";

    //         document.getElementsByClassName("folder-tab-right")[i].style.top =
    //             document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

    //         temp += document.getElementsByClassName("folder-tab-right")[i].getBoundingClientRect().height;
    //     }
    // }
}

function setNoteItems(itemWidth, itemHeight, itemLeft) {
    document.getElementById("Unsolved").style.left = (document.getElementById("Note").getBoundingClientRect().left) + itemLeft + "px";
    document.getElementById("Unsolved").style.top = document.getElementById("Note").getBoundingClientRect().y + 40 + "px";
    document.getElementById("Unsolved").style.width = itemWidth + "px";

    document.getElementById("Solved").style.left = (document.getElementById("Note").getBoundingClientRect().left + itemLeft) + "px";
    document.getElementById("Solved").style.top = document.getElementById("Note").getBoundingClientRect().y + itemHeight + "px";
    document.getElementById("Solved").style.width = itemWidth + "px";

    //set camera & Globe left
    document.getElementById("Camera").style.left = (document.getElementById("Note").getBoundingClientRect().left + itemLeft) + "px";
    document.getElementById("Globe").style.left = (document.getElementById("Note").getBoundingClientRect().left + itemLeft) + "px";
    document.getElementById("GlobeRight").style.right = (document.getElementById("Note").getBoundingClientRect().right + itemLeft) + "px";


}

function setCamera(width, top) {
    console.log(document.getElementById("Solved").getBoundingClientRect().left)
    document.getElementById("Camera").style.top = top + "px";
    document.getElementById("Camera").style.width = width + "px";
}

function setGlobe(width, left, top) {
    // document.getElementById("Globe").style.left = left + "px";
    document.getElementById("Globe").style.top = top + "px";
    document.getElementById("Globe").style.width = width + "px";

    document.getElementById("GlobeRight").style.top = top + 45 + "px";
    document.getElementById("GlobeRight").style.width = width + "px";

}


class Clues extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            hints: [closedQ, sticky1, sticky8, sticky11],
            folderList: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
            unsolvedList: [imgUS1, imgUS2, imgUS3, imgUS4, imgUS5, imgUS6, imgUS7, imgUS8, imgUS9, imgUS10, imgUS11, imgUS12],
            solvedList: [imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8, imgS9, imgS10, imgS11, imgS12],
            isUnlocked: [open, closed],
            passwordValue: '',
        };

        this.handleChange = this.handleChange.bind(this)
        this.CheckPassword = this.CheckPassword.bind(this);
        this.resizeWindow = this.resizeWindow.bind(this);
        this.OpenHint = this.OpenHint.bind(this);
    }

    componentDidMount() {
        const { cookies } = this.props;
        console.log("mount");

        document.body.style.removeProperty("background");
        window.addEventListener("resize", this.resizeWindow);
        this.resizeWindow();

        this.ChangeFolder(cookies.get('currentTab', currentTab));
        this.CheckPuzzle(cookies.get('currentTab', currentTab));
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        console.log("height: " + window.innerHeight)
        console.log("width: " + window.innerWidth)
        var folders = document.getElementsByClassName("folder-scale");
        var newWidth = 970;

        //Tab variables
        var tabHeight, tabWidth, tab1, tab2, tab3 = 0;

        //envelpe variables
        var eWidth, eleft, eTop = 0;

        //title vars
        var size, tleft, tTop, tHeight, tWdth = 0;

        //set teh unsolved image
        var itemWidth, itemHeight, itemLeft = 0;



        if (window.innerWidth >= 1400) { //larges screen size
            if (window.innerHeight >= 1080) { //larges screen size
                newWidth = 1440;
                document.getElementById("Note").style.width = "645px";
                document.getElementById("Pen").style.width = "75px";

                //Set Envelope
                eWidth = 650;
                eleft = 700;
                eTop = -250;

                //Set the Title
                size = 100;
                tleft = 645
                tTop = 80;
                tHeight = 100;
                tWdth = 550;

                //Set the Note Items
                itemWidth = 545;
                itemHeight = 430;
                itemLeft = 70;

                //tabBuffer Tabs
                tabBuffer = 15;
                tabHeight = 120;
                tabWidth = 60;
                tab1 = 70;
                tab2 = 80;
                tab3 = 85;

                //Set Camera
                cameraWidth = 190;
                cameraTop = 780;

                //Set Globe
                globeWidth = 140;
                globeTop = 760;

            }
            else if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;
                document.getElementById("Note").style.width = "475px";
                document.getElementById("Pen").style.width = "55px";

                //Set Envelope
                eWidth = 500;
                eleft = 525;
                eTop = -250;

                //Set the Title
                size = 75;
                tleft = 490;
                tTop = 80;
                tHeight = 100;
                tWdth = 420;

                //Set the Note Items
                itemWidth = 445;
                itemHeight = 330;
                itemLeft = 25;

                //Setting Tabs
                tabBuffer = 10;
                tabHeight = 90;
                tabWidth = 43;
                tab1 = 53;
                tab2 = 60;
                tab3 = 75;

                //Set Camera
                cameraWidth = 130;
                cameraTop = 595;

                //Set Globe
                globeWidth = 100;
                globeTop = 595;
            }
            else { //smallest screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "430px";
                document.getElementById("Pen").style.width = "50px";

                //Set Envelope
                eWidth = 450;
                eleft = 480;
                eTop = -250;

                //Set the Title
                size = 70;
                tleft = 450;
                tTop = 80;
                tHeight = 100;
                tWdth = 390;

                //Set the Note Items
                itemWidth = 400;
                itemHeight = 330;
                itemLeft = 15;

                //Setting Tabs
                tabBuffer = 10;
                tabHeight = 80;
                tabWidth = 43;
                tab1 = 47;
                tab2 = 55;
                tab3 = 75;

                cameraWidth = 100;
                cameraTop = 555;

                //Set Globe
                globeWidth = 100;
                globeTop = 525;
            }
        }
        else if (window.innerWidth >= 1024) { //medium screen size
            if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "435px";
                document.getElementById("Pen").style.width = "55px";

                //Set Envelope
                eWidth = 480;
                eleft = 500;
                eTop = -230;

                //Set the Title
                size = 70;
                tleft = 450;
                tTop = 80;
                tHeight = 125;
                tWdth = 390;
                document.getElementById("Title").style.lineHeight = "4.5vw";

                //Set the Note Items
                itemWidth = 410;
                itemHeight = 330;
                itemLeft = 20;


                //Setting Tabs
                tabBuffer = 10;
                tabHeight = 80;
                tabWidth = 43;
                tab1 = 47;
                tab2 = 55;
                tab3 = 75;

                cameraWidth = 100;
                cameraTop = 555;

                //Set Globe
                globeWidth = 100;
                globeTop = 555;
            }
            else if (window.innerHeight >= 720) { //smallest screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "430px";
                document.getElementById("Pen").style.width = "50px";

                //Set Envelope
                eWidth = 450;
                eleft = 480;
                eTop = -260;

                //Set the Title
                size = 70;
                tleft = 450;
                tTop = 80;
                tHeight = 100;
                tWdth = 390;

                //Set the Note Items
                itemWidth = 400;
                itemHeight = 330;
                itemLeft = 15;
                document.getElementById("Title").style.lineHeight = "4.5vw";


                //Setting Tabs
                tabBuffer = 10;
                tabHeight = 80;
                tabWidth = 43;
                tab1 = 47;
                tab2 = 55;
                tab3 = 75;

                cameraWidth = 100;
                cameraTop = 555;

                //Set Globe
                globeWidth = 100;
                globeTop = 525;
            }
            else {
                newWidth = 855;
                document.getElementById("Note").style.width = "365px";
                document.getElementById("Pen").style.width = "43px";

                //Set Envelope
                eWidth = 405;
                eleft = 425;
                eTop = -220;

                //Set the Title
                size = 60;
                tleft = 385;
                tTop = 40;
                tHeight = 100;
                tWdth = 340;

                //Set the Note Items
                itemWidth = 350;
                itemHeight = 275;
                itemLeft = 15;
                document.getElementById("Title").style.lineHeight = "4.5vw";

                //Setting Tabs
                tabBuffer = 12;
                tabHeight = 65;
                tabWidth = 35;
                tab1 = 40;
                tab2 = 47;
                tab3 = 50;

                //Set Camera
                cameraWidth = 100;
                cameraTop = 455;

                //Set Globe
                globeWidth = 100;
                globeTop = 425;
            }
        }
        else { //smallest screen size
            newWidth = 745;
            document.getElementById("Note").style.width = "310px";
            document.getElementById("Pen").style.width = "36px";

            //Set Envelope
            eWidth = 300;
            eleft = 350;
            eTop = -225;

            //Set the Title
            size = 55;
            tleft = 335;
            tTop = 40;
            tHeight = 100;
            tWdth = 290;

            //Set the Note Items
            itemWidth = 300;
            itemHeight = 225;
            itemLeft = 10;
            document.getElementById("Title").style.lineHeight = "4.5vw";

            //Setting Tabs
            tabBuffer = 10;
            tabHeight = 55;
            tabWidth = 30;
            tab1 = 35;
            tab2 = 40;
            tab3 = 60;

            //Set Camera
            cameraWidth = 100;
            cameraTop = 400;

            //Set Globe
            globeWidth = 80;
            globeTop = 350;
        }

        for (var i = 0; i < folders.length; i++) {
            document.getElementsByClassName("folder-scale")[i].style.width = newWidth + "px";
        }

        SetPages();
        setTabs(tabHeight, tabWidth, tab1, tab2, tab3, tabBuffer);
        setEnvelope(eWidth, eleft, eTop);
        setTitle(size, tleft, tTop, tWdth, tHeight);
        setNoteItems(itemWidth, itemHeight, itemLeft);
        setGlobe(globeWidth, globeTop);
        setCamera(cameraWidth, cameraTop);
    }

    //Check if a puzzle is unlocked or not
    CheckPuzzle(folder) {
        const { cookies } = this.props;
        console.log("checking")

        currentTab = folder;
        folder = parseInt(folder)

        //default will be the first puzzle
        document.getElementById("Hint").style.display = 'none';

        switch (folder) {
            case 2:
                if (cookies.get('TheLetterChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('DemuthLetterChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/the-other-letter');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/the-other-letter');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("Globe").style.display = "none";
                document.getElementById("GlobeRight").style.display = "none";

                break;
            case 3:
                if (cookies.get('DemuthLetterChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('SiaCatalogChildren')) {
                        console.log("here");
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("Camera").style.display = "block";

                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/independent');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/independent');

                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("Globe").style.display = "none";
                document.getElementById("GlobeRight").style.display = "none";
                break;
            case 4:
                if (cookies.get('SiaCatalogChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('BlindManChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";

                        //Turn on the pen and camera
                        document.getElementById("Camera").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/blind-man');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/blind-man');

                    //Turn on the pen for password puzzles
                    document.getElementById("Pen").style.display = "block";
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Globe").style.display = "none";
                break;
            case 5:
                if (cookies.get('BlindManChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('MinaLoyChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://mina-loy.com/');
                        document.getElementById("Globe").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/friend-of-louise');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/friend-of-louise');

                    //Turn on the pen for password puzzles
                    document.getElementById("Pen").style.display = "block";
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";

                break;
            case 6:
                if (cookies.get('MinaLoyChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";


                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('TissuePaperChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://thereaderwiki.com/en/Louise_Var%C3%A8se');
                        document.getElementById("Globe").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/who-remains');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/who-remains');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            case 7:
                if (cookies.get('TissuePaperChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('PhonebookChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/what-rings');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/what-rings');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("Globe").style.display = "none";
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            case 8:
                if (cookies.get('PhonebookChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";
                    document.getElementById("Hint").style.display = 'block';



                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('ElsaChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://www.theartnewspaper.com/comment/did-marcel-duchamp-steal-elsa-s-urinal');
                        document.getElementById("Globe").style.display = "block";

                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/the-future');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/the-future');

                    //Turn on the pen for password puzzles
                    document.getElementById("Pen").style.display = "block";
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            case 9:
                if (cookies.get('ElsaChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('RroseChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/rrose');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/rrose');

                    //Turn on the pen for password puzzles
                    document.getElementById("Pen").style.display = "block";
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
                //Turn on the pen and camera
                document.getElementById("Globe").style.display = "none";
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            case 10:
                //if the previous puzzle has been solved
                if (cookies.get('RroseChildren')) {

                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('MottCatalogChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";

                        //Turn on the pen and camera
                        document.getElementById("GlobeLink").setAttribute('href', 'https://www.academia.edu/23704928/Introduction_to_Duchamps_Urinal_The_Facts_Behind_the_Fa%C3%A7ade');
                        document.getElementById("GlobeRight").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/plumb-the-depths');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/plumb-the-depths');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Set camera and globe
                document.getElementById("Globe").style.display = "none";
                break;
            case 11:
                if (cookies.get('MottCatalogChildren')) {

                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Hint").style.display = 'block';



                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('GodChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";

                        document.getElementById("GlobeLink").setAttribute('href', 'https://sinclairnj.blogs.rutgers.edu/2018/07/richard-mutt/');
                        document.getElementById("GlobeRight").style.display = "block";

                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/god-or-goddess');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/god-or-goddess');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";


                //Set camera and globe                
                document.getElementById("Globe").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            case 12:
                if (cookies.get('GodChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('GodIIChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://mitpress.mit.edu/books/baroness-elsa');
                        document.getElementById("Globe").style.display = "block";

                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/his-or-hers');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/his-or-hers');
                }
                else {
                    //if the puzzle is not unlocked set evelope to locked
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);

                    //turn off reward
                    document.getElementById("Unsolved").style.display = "none";
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Globe").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Set globe and camera
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";
                break;
            default:
                //Set envelope to unlocked
                document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                document.getElementById("Hint").style.display = 'block';
                
                //Set the unsolved image to be th ecorrect image
                document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                document.getElementById("Unsolved").style.display = "block";


                //Make sure the clickable link is turned on and set the correct link
                document.getElementById("Link").classList.remove('inactiveLink');
                document.getElementById("Link").setAttribute('href', '/the-letter');

                document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                document.getElementById("Link-Envelope").setAttribute('href', '/the-letter');

                //Turn on the pen for password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("Globe").style.display = "none";
                document.getElementById("GlobeRight").style.display = "none";
                document.getElementById("Camera").style.display = "none";

                //once the puzzle has been solved turn on and set the solved image
                if (cookies.get('TheLetterChildren')) {
                    document.getElementById("Solved").setAttribute('src', this.state.solvedList[0]);
                    document.getElementById("Solved").style.display = "block";
                }
                else {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                }
                break;
        }
    }

    //Left Tabs
    ChangeFolder(folder) {
        const { cookies } = this.props;
        const Tab = document.getElementById("Tab" + (folder));
        folder = parseInt(folder);

        if (showLeftTabs[folder - 1] === true && currFolder !== this.state.folderList[folder - 1]) {
            currFolder = this.state.folderList[folder - 1];
            document.getElementById("Folder").setAttribute('src', this.state.folderList[folder - 1]);

            for (var i = 0; i < folder - 1; i++) {
                showLeftTabs[i] = false;
                showRightTabs[i] = true;
                console.log((i) + " " + showRightTabs[i])

                var tab = document.getElementById("Tab" + (i + 1));
                var tabRight = document.getElementById("Tab" + (i + 1) + "Right");

                if (showLeftTabs[i] === false && tab.classList.contains("pointer")) {
                    tab.classList.remove("pointer")
                }

                if (showRightTabs[i] === true && !tabRight.classList.contains("pointer")) {
                    tabRight.classList.add("pointer")
                }
            }

            Tab.classList.remove("pointer");

            document.getElementById("Title").innerHTML = order[folder - 1];
            cookies.set('currentTab', folder)

            //globe and camera elements
            setGlobe(globeWidth, globeleft, globeTop);
            setCamera(cameraWidth, cameraleft, cameraTop);

            this.CheckPuzzle(folder);
        }
    }

    ChangeFolderRight(folder) {
        const { cookies } = this.props;
        folder = parseInt(folder);

        console.log("folder: " + folder)
        console.log(showRightTabs[0])


        if (showRightTabs[folder - 1] === true && currFolder !== this.state.folderList[folder - 1]) {

            currFolder = this.state.folderList[folder - 1];
            document.getElementById("Folder").setAttribute('src', this.state.folderList[folder - 1]);

            for (var i = (folder - 1); i < 12; i++) {
                if (showRightTabs[i] === true) {
                    showLeftTabs[i] = true;
                    showRightTabs[i] = false;
                }
                else {
                    showRightTabs[i] = false;
                }

                var tab = document.getElementById("Tab" + (i + 1));
                var tabRight = document.getElementById("Tab" + (i + 1) + "Right");

                if (showLeftTabs[i] === true && !tab.classList.contains("pointer")) {
                    tab.classList.add("pointer")
                }

                if (showRightTabs[i] === false && tabRight.classList.contains("pointer")) {
                    tabRight.classList.remove("pointer")
                }

            }

            document.getElementById("Title").innerHTML = order[folder - 1];
            console.log("clicked-right: " + folder);
            cookies.set('currentTab', folder)

            setGlobe(globeWidth, globeleft, globeTop);
            setCamera(cameraWidth, cameraleft, cameraTop);

            this.CheckPuzzle(folder);
        }
    }

    handleChange(event) {
        this.setState({ passwordValue: event.target.value });
    }

    CheckPassword(event) {
        const { cookies } = this.props;

        var correct = false;
        var pass = this.state.passwordValue.toLowerCase();
        pass = pass.split(" ").join("");
        const input = pass.trim();

        currentTab = parseInt(currentTab);

        //if the letter is open
        if (currentTab === 1) {
            console.log(input === "playtesting")
            if (input === "amie" || input === "playtesting") {
                cookies.set('TheLetterChildren');
                solvedPuzzles.push("TheLetter");
                correct = true
            }
        }
        else if (currentTab === 3) {
            if (input === "nominaldues" || input === "playtesting") {
                cookies.set('SiaCatalogChildren');
                solvedPuzzles.push("SiaCatalog");
                correct = true
            }
        }
        else if (currentTab === 2) {
            if (input === "thesuperindependents" || input === "salondesrefuses" || input === "salondesrefusés" || input === "playtesting") {
                cookies.set('DemuthLetterChildren');
                solvedPuzzles.push("DemuthLetter");
                correct = true
            }
        }
        else if (currentTab === 7) {
            if (input === "110W88" || input === "louisenorton") {
                cookies.set('PhonebookChildren');
                solvedPuzzles.push("Phonebook");
                correct = true
            }
        }
        else if (currentTab === 6) {
            if (input == "louisevaresenorton" || input == "louisenortonvarese" || input == "louisemccutcheonnorton" || input == "louisenortonmccutcheon" || input == "louisenortonvarèse" || input == "louisevarèsenorton" || input == "louisenorton" || input === "playtesting") {
                cookies.set('TissuePaperChildren');
                solvedPuzzles.push("TissuePaper");
                correct = true
            }
        }
        else if (currentTab === 4) {
            if (input === "playtesting") {
                cookies.set('BlindManChildren');
                solvedPuzzles.push("BlindMan");
                correct = true
            }
        }
        else if (currentTab === 5) {
            if (input === "playtesting" || input === "minaloy") {
                solvedPuzzles.push("MinaLoy");
                cookies.set('MinaLoyChildren');
                correct = true
            }
        }
        else if (currentTab === 8) {
            if (input === "godisintheplumbing" || input === "playtesting") {
                cookies.set('ElsaChildren');
                solvedPuzzles.push("Elsa");
                correct = true
            }
        }
        else if (currentTab === 9) {
            if (input === "douche" || input === "louisevaresenorton" || input === "aliasmarcelduchampest.1920"
                || input === "rroseselavy" || input === "playtesting") {
                cookies.set('RroseChildren');
                solvedPuzzles.push("Rrose");
                correct = true
            }
        }
        else if (currentTab === 10) {
            if (input === "playtesting") {
                cookies.set('MottCatalogChildren');
                solvedPuzzles.push("MottCatalog");
                correct = true
            }
        }
        else if (currentTab === 11) {
            if (input === 'elsa' || input === "playtesting") {
                cookies.set('GodChildren');
                solvedPuzzles.push("God");
                correct = true
            }
        }
        else if (currentTab === 12) {
            if (input === "playtesting" || input === "pipes") {
                cookies.set('GodIIChildren');
                solvedPuzzles.push("GodII");
                correct = true
                this.props.history.push('/outro');
            }
        }

        if (correct === false) {
            event.preventDefault();
            alert("Bad password: " + input)
            return;
        }

        if (localStorage.getItem("SolvedPuzzle") !== null) {
            var puzzle = JSON.parse(localStorage.getItem("SolvedPuzzle"));
            puzzle.push(solvedPuzzles[0]);
            solvedPuzzles = puzzle;
            solvedPuzzles = this.removeDups();
        }

        localStorage.setItem("SolvedPuzzle", JSON.stringify(solvedPuzzles));
    }

    removeDups() {
        return solvedPuzzles.filter((value, index) => solvedPuzzles.indexOf(value) === index);
    }

    OpenHint() {
        currentTab = parseInt(currentTab);
        var img = document.getElementById("Hint");

        if (hintOpen)
        {
            img.setAttribute('src', this.state.hints[0])
        }
        else {
            switch (currentTab)
            {
                case 1:
                    img.setAttribute('src', this.state.hints[1])
                    break;
                case 8:
                    img.setAttribute('src', this.state.hints[2])
                    break;
                case 11:
                    img.setAttribute('src', this.state.hints[3])
                    break;
                default:
                    img.setAttribute('src', this.state.hints[0])
                    break;
            }
        }

        hintOpen = !hintOpen;
    }

    render() {
        return (

            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>

                {/* Return to Home */}
                  <a href='/front'>
                    <Image src={Sticky}
                        style={{
                            width: "10%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: "9999",
                            padding: "15px"
                        }} />
                </a>

                {/* Evidence Board */}
                <a href='/evidence-board'>
                    <Image src={Board}
                        style={{
                            width: "15%",
                            position: "absolute",
                            right: "0px",
                            bottom: "0px",
                            zIndex: "9999"
                        }} />
                </a>

                {/* Hint */}
                <Image id="Hint" src={Question}
                    style={{
                        width: "15%",
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        zIndex: "9999",
                        padding: "15px"
                    }}
                    onClick={this.OpenHint}
                />

                <div className="folder">
                    <Image id="Folder" src={Folder1} className="folder-scale" />

                    <div id="Folder Elements">
                        {/* Left Side */}
                        <Image id="Note" src={Note} className="note" />

                        <Popup style={{ background: 'transparent', border: 'none' }}
                            trigger={<Image id="Pen" src={Pen} className="pen pointer" />} modal >
                            {close => (
                                <div className="password">
                                    Report your findings
                                    <br />
                                    <form name="login"
                                        style={{ margin: '5px 0px 0px 0px' }}
                                        onSubmit={this.CheckPassword}>
                                        <input type="text" size="17"
                                            value={this.state.passwordValue}
                                            onChange={this.handleChange}
                                            style={{ width: '40%', height: '10%' }} /><br />
                                        <input type="submit" value="Submit"
                                            style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                                    </form>

                           click outside to escape window
                                </div>
                            )}
                        </Popup>

                        <Image id="Unsolved" src={ARLetter1} className="unsolved" />
                        <Image id="Solved" src={ARLetter2} className="unsolved"
                            style={{ display: 'none' }} />
                        <Image id="Camera" src={Camera} className="unsolved" />

                        <a id="GlobeLink" rel="noopener noreferrer" target="_blank" href='/'>
                            <Image id="Globe" src={Globe} className="unsolved" />
                            <Image id="GlobeRight" src={Globe} className="unsolved" />
                        </a>

                        <a id="Link" href='/the-letter'>
                            <div id="Title" className="written">
                                The Letter
                            </div>
                        </a>

                        <a id="Link-Envelope" href='/the-letter'>
                            <Image id="Envelope" src={Open} className="envelope" />
                        </a>
                    </div>

                    <div id="Tabs">

                        <div id="Tab1" className="folder-tab" onClick={() => this.ChangeFolder(1)} />
                        <div id="Tab2" className="folder-tab pointer" onClick={() => this.ChangeFolder(2)} />
                        <div id="Tab3" className="folder-tab pointer" onClick={() => this.ChangeFolder(3)} />
                        <div id="Tab4" className="folder-tab pointer" onClick={() => this.ChangeFolder(4)} />
                        <div id="Tab5" className="folder-tab pointer" onClick={() => this.ChangeFolder(5)} />
                        <div id="Tab6" className="folder-tab pointer" onClick={() => this.ChangeFolder(6)} />
                        <div id="Tab7" className="folder-tab pointer" onClick={() => this.ChangeFolder(7)} />
                        <div id="Tab8" className="folder-tab pointer" onClick={() => this.ChangeFolder(8)} />
                        <div id="Tab9" className="folder-tab pointer" onClick={() => this.ChangeFolder(9)} />
                        <div id="Tab10" className="folder-tab pointer" onClick={() => this.ChangeFolder(10)} />
                        <div id="Tab11" className="folder-tab pointer" onClick={() => this.ChangeFolder(11)} />
                        <div id="Tab12" className="folder-tab pointer" onClick={() => this.ChangeFolder(12)} />

                        <div id="Tab1Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(1)} />
                        <div id="Tab2Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(2)} />
                        <div id="Tab3Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(3)} />
                        <div id="Tab4Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(4)} />
                        <div id="Tab5Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(5)} />
                        <div id="Tab6Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(6)} />
                        <div id="Tab7Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(7)} />
                        <div id="Tab8Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(8)} />
                        <div id="Tab9Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(9)} />
                        <div id="Tab10Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(10)} />
                        <div id="Tab11Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(11)} />
                        <div id="Tab12Right" className="folder-tab-right" onClick={() => this.ChangeFolderRight(12)} />
                    </div>
                </div>


            </Container>
        );
    }
}

export default withCookies(Clues);