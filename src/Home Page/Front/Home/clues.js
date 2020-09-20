//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Pen from '../../../folder_elements/pen/pen_bak.png'
import Note from '../../../folder_elements/notes.png'
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
const order = ["The Letter", "SIA Catalog", "Demuth Letter", "Phonebook", "Tissue Paper", "Blind Man", "Mina Loy", "Elsa", "RRose", "Mott Catalog", "God", "God II",];

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
const imgUS2 = require('../../../folder_elements/notes/sia_1.png');
const imgUS3 = require('../../../folder_elements/notes/demuth_1.png');
const imgUS4 = require('../../../folder_elements/notes/phonebook_1.png');
const imgUS5 = require('../../../folder_elements/notes/tissue_paper_1.png');
const imgUS6 = require('../../../folder_elements/notes/blind_man_1.png');
const imgUS7 = require('../../../folder_elements/notes/mina_loy_1.png');
const imgUS8 = require('../../../folder_elements/notes/elsa_1.png');
const imgUS9 = require('../../../folder_elements/notes/rrose_1.png');
const imgUS10 = require('../../../folder_elements/notes/mott_1.png');
const imgUS11 = require('../../../folder_elements/notes/god_1.png');
const imgUS12 = require('../../../folder_elements/notes/god2_1.png');

var currUS = imgUS1;

//Solved
const imgS1 = require('../../../folder_elements/notes/arletter_2.png');
const imgS2 = require('../../../folder_elements/notes/sia_2.png');
const imgS3 = require('../../../folder_elements/notes/demuth_2.png');
const imgS4 = require('../../../folder_elements/notes/phonebook_2.png');
const imgS5 = require('../../../folder_elements/notes/tissue_paper_2.png');
const imgS6 = require('../../../folder_elements/notes/blind_man_2.png');
const imgS7 = require('../../../folder_elements/notes/mina_loy_2.png');
const imgS8 = require('../../../folder_elements/notes/elsa_2.png');
const imgS9 = require('../../../folder_elements/notes/rrose_2.png');
const imgS10 = require('../../../folder_elements/notes/mott_2.png');
const imgS11 = require('../../../folder_elements/notes/god_2.png');
const imgS12 = require('../../../folder_elements/notes/god2_2.png');

var currS = imgS1;


var tabBuffer = 0;

var showRightTabs = [false, false, false, false, false, false, false, false, false, false, false, false];
var showLeftTabs = [true, true, true, true, true, true, true, true, true, true, true, true];
var tissePasswords = ["louise varese norton", "louise norton varese", "louise mccutcheon norton", "louise norton mccutcheon", "louise norton varèse", "louise varèse norton"];
var currentTab = 1;

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
        else if (i == 3) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab1 + 17 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if ((i >= 4 && i <= 9)) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (i == 12) {
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

    for (var i = 1; i < document.getElementsByClassName("folder-tab-right").length; i++) {
        //width and left don't change
        document.getElementsByClassName("folder-tab-right")[i].style.width = tabWidth + "px";

        document.getElementsByClassName("folder-tab-right")[i].style.left =
            (document.getElementById("Folder").getBoundingClientRect().x) + "px";

        //setting the height
        document.getElementsByClassName("folder-tab-right")[i].style.height = tab1 + "px";

        //resetting the top
        document.getElementsByClassName("folder-tab-right")[i].style.top =
            document.getElementById("Folder").getBoundingClientRect().y + temp + "px";


        if (i < 3) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab1 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (i == 3) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab1 + 17 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if ((i >= 4 && i <= 9)) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }
        else if (i == 12) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab3 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";
        }

        temp += document.getElementsByClassName("folder-tab-right")[i].getBoundingClientRect().height;
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
    //     else if (i == 7) {
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
            folderList: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
            unsolvedList: [imgUS1, imgUS2, imgUS3, imgUS4, imgUS5, imgUS6, imgUS7, imgUS8, imgUS9, imgUS10, imgUS11, imgUS12],
            solvedList: [imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8, imgS9, imgS10, imgS11, imgS12],
            isUnlocked: [open, closed],
        };

        this.CheckPassword = this.CheckPassword.bind(this);
        this.resizeWindow = this.resizeWindow.bind(this);
    }

    componentDidMount() {
        document.body.style.removeProperty("background");
        window.addEventListener("resize", this.resizeWindow);
        this.resizeWindow();
        this.CheckPuzzle(1);
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
                eTop = -225;

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
            }
            else if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;
                document.getElementById("Note").style.width = "475px";
                document.getElementById("Pen").style.width = "55px";

                //Set Envelope
                eWidth = 500;
                eleft = 525;
                eTop = -230;

                //Set the Title
                size = 95;
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
                size = 90;
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
                size = 90;
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
            }
            else if (window.innerHeight >= 720) { //smallest screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "430px";
                document.getElementById("Pen").style.width = "50px";

                //Set Envelope
                eWidth = 450;
                eleft = 480;
                eTop = -250;

                //Set the Title
                size = 90;
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
            }
            else {
                newWidth = 855;
                document.getElementById("Note").style.width = "365px";
                document.getElementById("Pen").style.width = "43px";

                //Set Envelope
                eWidth = 415;
                eleft = 425;
                eTop = -175;

                //Set the Title
                size = 70;
                tleft = 385;
                tTop = 65;
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
            }
        }
        else { //smallest screen size
            newWidth = 745;
            document.getElementById("Note").style.width = "310px";
            document.getElementById("Pen").style.width = "36px";

            //Set Envelope
            eWidth = 350;
            eleft = 370;
            eTop = -150;

            //Set the Title
            size = 70;
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
        }

        for (var i = 0; i < folders.length; i++) {
            document.getElementsByClassName("folder-scale")[i].style.width = newWidth + "px";
        }

        SetPages();
        setTabs(tabHeight, tabWidth, tab1, tab2, tab3, tabBuffer);
        setEnvelope(eWidth, eleft, eTop);
        setTitle(size, tleft, tTop, tWdth, tHeight);
        setNoteItems(itemWidth, itemHeight, itemLeft);
    }

    //Check if a puzzle is unlocked or not
    CheckPuzzle(folder) {
        const { cookies } = this.props;
        currentTab = folder;

        //default will be the first puzzle
        switch (folder) {
            case 2:
                if (cookies.get('TheLetterChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('SiaCatalogChildren')) {
                        console.log("here");
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/sia-catalog');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/sia-catalog');

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
                document.getElementById("Pen").style.display = "none";
                break;
            case 3:
                if (cookies.get('SiaCatalogChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('DemuthLetterChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/demuth-letter');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/demuth-letter');
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
                document.getElementById("Pen").style.display = "none";

                break;
            case 4:
                if (cookies.get('DemuthLetterChildren')) {

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
                    document.getElementById("Link").setAttribute('href', '/phonebook');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/phonebook');

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


                break;
            case 5:
                if (cookies.get('PhonebookChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('TissuePaperChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/tissue-paper');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/tissue-paper');

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

                break;
            case 6:
                if (cookies.get('TissuePaperChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('BlindManChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/blind-man');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/blind-man');
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
                document.getElementById("Pen").style.display = "none";

                break;
            case 7:
                if (cookies.get('BlindManChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('MinaLoyChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/mina-loy');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/mina-loy');
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
                document.getElementById("Pen").style.display = "none";

                break;
            case 8:
                if (cookies.get('MinaLoyChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('ElsaChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/elsa');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/elsa');

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
                break;
            case 10:
                //if the previous puzzle has been solved
                if (cookies.get('RroseChildren')) {

                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('MottCatalogChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/mott-catalog');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/mott-catalog');
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
                document.getElementById("Pen").style.display = "none";
                break;
            case 11:
                if (cookies.get('MottCatalogChildren')) {

                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('GodCatalogChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/god');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/god');
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
                document.getElementById("Pen").style.display = "none";
                break;
            case 12:
                if (cookies.get('GodCatalogChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('GodIIChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                    }

                    //Make sure the clickable link is turned on and set the correct link
                    document.getElementById("Link").classList.remove('inactiveLink');
                    document.getElementById("Link").setAttribute('href', '/godII');

                    document.getElementById("Link-Envelope").classList.remove('inactiveLink');
                    document.getElementById("Link-Envelope").setAttribute('href', '/godII');
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
                document.getElementById("Pen").style.display = "none";
                break;
            default:
                //Set envelope to unlocked
                document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

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
        // var img = this.state.folderList[folder - 1];

        if (showLeftTabs[folder - 1] === true && currFolder !== this.state.folderList[folder - 1]) {
            currFolder = this.state.folderList[folder - 1];
            document.getElementById("Folder").setAttribute('src', this.state.folderList[folder - 1]);

            for (var i = 0; i < folder; i++) {
                showLeftTabs[i - 1] = false;
                showRightTabs[i - 1] = true;
            }

            document.getElementById("Title").innerHTML = order[folder - 1];
            this.CheckPuzzle(folder);
            console.log("clicked-left: " + folder);
        }
    }

    ChangeFolderRight(folder) {
        // var img = this.state.folderList[folder - 1];

        if (showRightTabs[folder - 1] === true && currFolder !== this.state.folderList[folder - 1]) {
            currFolder = this.state.folderList[folder - 1];
            document.getElementById("Folder").setAttribute('src', this.state.folderList[folder - 1]);

            for (var i = (folder - 1); i < 10; i++) {
                if (showRightTabs[i] === true) {
                    showLeftTabs[i] = true;
                    showRightTabs[i] = false;
                }
                else {
                    showRightTabs[i] = false;
                }

            }

            document.getElementById("Title").innerHTML = order[folder - 1];
            console.log("clicked-right: " + folder);
            this.CheckPuzzle(folder);
        }
    }

    CheckPassword() {
        const { cookies } = this.props;

        var input = document.getElementById("Input").value.toLowerCase();

        //if the letter is open
        if (currentTab == 1) {
            if (input == "amie") {
                cookies.set('TheLetterChildren');
                window.location.reload();
            }
        }
        else if (currentTab == 5) {
            tissePasswords.forEach(element => {
                if (input == element) {
                    cookies.set('TissuePaperChildren');
                    window.location.reload();
                    return;
                }
            });
        }
        else if (currentTab == 4) {
            if (input == "110W88") {
                cookies.set('PhonebookChildren');
                window.location.reload();
            }
        }
        else if (currentTab == 8) {
            if (input == "god is in the plumbing") {
                cookies.set('ElsaChildren');
                window.location.reload();
            }
        }
        else if (currentTab == 9) {
            if (input == "douche") {
                cookies.set('RroseChildren');
                window.location.reload();
            }
        }


    }

    render() {
        const { cookies } = this.props;
        return (

            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>


                <div className="folder">
                    <Image id="Folder" src={Folder1} className="folder-scale" />

                    <div id="Folder Elements">
                        {/* Left Side */}
                        <Image id="Note" src={Note} className="note" />

                        <Popup style={{ background: 'transparent', border: 'none' }}
                            trigger={<Image id="Pen" src={Pen} className="pen" />} modal >
                            {close => (
                                <div className="password">
                                    Report your findings
                                    <br />
                                    <form name="login" style={{ margin: '5px 0px 0px 0px' }} onSubmit={this.CheckPassword}>
                                        <input id="Input" type="text" size="17" style={{ width: '40%', height: '10%' }} /><br />
                                        <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                                    </form>

                           click outside to escape window
                                </div>
                            )}
                        </Popup>

                        <Image id="Unsolved" src={ARLetter1} className="unsolved" />
                        <Image id="Solved" src={ARLetter2} className="unsolved" />

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

                        <div id="TabOne" className="folder-tab" onClick={() => this.ChangeFolder(1)} />
                        <div id="TabTwo" className="folder-tab" onClick={() => this.ChangeFolder(2)} />
                        <div id="TabThree" className="folder-tab" onClick={() => this.ChangeFolder(3)} />
                        <div id="TabFour" className="folder-tab" onClick={() => this.ChangeFolder(4)} />
                        <div id="TabFive" className="folder-tab" onClick={() => this.ChangeFolder(5)} />
                        <div id="TabSix" className="folder-tab" onClick={() => this.ChangeFolder(6)} />
                        <div id="TabSeven" className="folder-tab" onClick={() => this.ChangeFolder(7)} />
                        <div id="TabEight" className="folder-tab" onClick={() => this.ChangeFolder(8)} />
                        <div id="TabNine" className="folder-tab" onClick={() => this.ChangeFolder(9)} />
                        <div id="TabTen" className="folder-tab" onClick={() => this.ChangeFolder(10)} />
                        <div id="TabEleven" className="folder-tab" onClick={() => this.ChangeFolder(11)} />
                        <div id="TabTwelve" className="folder-tab" onClick={() => this.ChangeFolder(12)} />

                        <div id="TabOneRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(1)} />
                        <div id="TabTwoRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(2)} />
                        <div id="TabThreeRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(3)} />
                        <div id="TabFourRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(4)} />
                        <div id="TabFiveRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(5)} />
                        <div id="TabSixRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(6)} />
                        <div id="TabSevenRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(7)} />
                        <div id="TabEightRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(8)} />
                        <div id="TabNineRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(9)} />
                        <div id="TabTenRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(10)} />
                        <div id="TabEleven" className="folder-tab-right" onClick={() => this.ChangeFolderRight(11)} />
                        <div id="TabTwelve" className="folder-tab-right" onClick={() => this.ChangeFolderRight(12)} />
                    </div>
                </div>


            </Container>
        );
    }
}

export default withCookies(Clues);