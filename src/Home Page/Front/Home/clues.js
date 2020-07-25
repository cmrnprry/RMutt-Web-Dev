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
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet";

//Puzzle order
const order = ["The Letter", "Tissue Paper", "Demuth Letter", "Phonebook", "SIA Catalog", "Elsa", "God", "God II", "Blind Man", "Mott Catalog"];

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
var currFolder = img1;

//Unsolved
const imgUS1 = require('../../../folder_elements/notes/arletter_1.png');
const imgUS2 = require('../../../folder_elements/notes/tissue_paper_1.png');
const imgUS3 = require('../../../folder_elements/notes/demuth_1.png');
const imgUS4 = require('../../../folder_elements/notes/phonebook_1.png');
const imgUS5 = require('../../../folder_elements/notes/sia_1.png');
const imgUS6 = require('../../../folder_elements/notes/elsa_1.png');
const imgUS7 = require('../../../folder_elements/notes/god_1.png');
const imgUS8 = require('../../../folder_elements/notes/god2_1.png');
const imgUS9 = require('../../../folder_elements/notes/blind_man_1.png');
const imgUS10 = require('../../../folder_elements/notes/mott_1.png');
var currUS = imgUS1;

//Solved
const imgS1 = require('../../../folder_elements/notes/arletter_2.png');
const imgS2 = require('../../../folder_elements/notes/tissue_paper_2.png');
const imgS3 = require('../../../folder_elements/notes/demuth_2.png');
const imgS4 = require('../../../folder_elements/notes/phonebook_2.png');
const imgS5 = require('../../../folder_elements/notes/sia_2.png');
const imgS6 = require('../../../folder_elements/notes/elsa_2.png');
const imgS7 = require('../../../folder_elements/notes/god_2.png');
const imgS8 = require('../../../folder_elements/notes/god2_2.png');
const imgS9 = require('../../../folder_elements/notes/blind_man_2.png');
const imgS10 = require('../../../folder_elements/notes/mott_2.png');
var currS = imgS1;


var tabBuffer = 0;

var showRightTabs = [false, false, false, false, false, false, false, false, false, false, false];
var showLeftTabs = [true, true, true, true, true, true, true, true, true, true, true];

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
function setTitle(size, left, top) {
    document.getElementById("Title").style.left = (document.getElementById("Folder").getBoundingClientRect().right
        - document.getElementById("Envelope").getBoundingClientRect().x + left) + "px";
    document.getElementById("Title").style.top = document.getElementById("Folder").getBoundingClientRect().y + top + "px";
    document.getElementById("Title").style.fontSize = size + "px";
}

//Set Clickable Tabs
function setTabs(tabHeight, tabWidth, tab1, tab2, tab3, tabLeft) {
    document.getElementsByClassName("folder-tab")[0].style.height = tabHeight + "px";
    document.getElementsByClassName("folder-tab")[0].style.top =
        document.getElementById("Folder").getBoundingClientRect().y + "px";

    var temp = document.getElementsByClassName("folder-tab")[0].getBoundingClientRect().height;

    for (var i = 0; i < document.getElementsByClassName("folder-tab").length; i++) {
        // var tabWidth = document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().width;
        document.getElementsByClassName("folder-tab")[i].style.width = tabWidth + "px";

        document.getElementsByClassName("folder-tab")[i].style.left =
            (document.getElementById("Folder").getBoundingClientRect().right
                - document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().width - tabLeft) + "px";

        if (i !== 0 && i < 5) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab1 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab")[1].getBoundingClientRect().height;
        }
        else if ((i >= 5 && i < 7) || (i >= 8)) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().height;
        }
        else if (i == 7) {
            document.getElementsByClassName("folder-tab")[i].style.height = tab3 + "px";

            document.getElementsByClassName("folder-tab")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab")[i].getBoundingClientRect().height;
        }
    }

    document.getElementsByClassName("folder-tab-right")[0].style.height = tabHeight + "px";
    document.getElementsByClassName("folder-tab-right")[0].style.top =
        document.getElementById("Folder").getBoundingClientRect().y + "px";

    temp = document.getElementsByClassName("folder-tab-right")[0].getBoundingClientRect().height;

    for (var i = 0; i < document.getElementsByClassName("folder-tab-right").length; i++) {
        document.getElementsByClassName("folder-tab-right")[i].style.width = tabWidth + "px";

        document.getElementsByClassName("folder-tab-right")[i].style.left =
            (document.getElementById("Folder").getBoundingClientRect().x) + "px";

        if (i !== 0 && i < 5) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab1 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab-right")[1].getBoundingClientRect().height;
        }
        else if ((i >= 5 && i < 7) || (i >= 8)) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab2 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab-right")[i].getBoundingClientRect().height;
        }
        else if (i == 7) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = tab3 + "px";

            document.getElementsByClassName("folder-tab-right")[i].style.top =
                document.getElementById("Folder").getBoundingClientRect().y + temp + "px";

            temp += document.getElementsByClassName("folder-tab-right")[i].getBoundingClientRect().height;
        }
    }
}

function setUnsolved(Uwidth, Uleft, Utop) {
    document.getElementById("Unsolved").style.left = (document.getElementById("Folder").getBoundingClientRect().left - Uleft) + "px";
    document.getElementById("Unsolved").style.top = document.getElementById("Folder").getBoundingClientRect().y - Utop + "px";
    document.getElementById("Unsolved").style.width = Uwidth + "px";

    document.getElementById("Solved").style.left = (document.getElementById("Folder").getBoundingClientRect().left - Uleft) + "px";
    document.getElementById("Solved").style.top = document.getElementById("Folder").getBoundingClientRect().y - Utop + 300 + "px";
    document.getElementById("Solved").style.width = Uwidth + "px";
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
            folderList: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
            unsolvedList: [imgUS1, imgUS2, imgUS3, imgUS4, imgUS5, imgUS6, imgUS7, imgUS8, imgUS9, imgUS10],
            solvedList: [imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8, imgS9, imgS10],
            isUnlocked: [open, closed],
        };

        this.resizeWindow = this.resizeWindow.bind(this);
    }

    componentDidMount() {
        document.body.style.removeProperty("background");
        window.addEventListener("resize", this.resizeWindow);
        this.resizeWindow();
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
        var size, tleft, tTop = 0;

        //set teh unsolved image
        var Uwidth, Uleft, Utop = 0;

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
                tleft = 225;
                tTop = 80;

                //tabBuffer Tabs
                tabBuffer = 25;
                tabHeight = 128;
                tabWidth = 54;
                tab1 = 87;
                tab2 = 100;
                tab3 = 85;
            }
            else if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;
                document.getElementById("Note").style.width = "475px";
                document.getElementById("Pen").style.width = "55px";

                //Set Envelope
                eWidth = 500;
                eleft = 525;
                eTop = -130;

                //Set the Title
                size = 85;
                tleft = 355;
                tTop = 80;

                //Setting Tabs
                tabBuffer = 17;
                tabHeight = 95;
                tabWidth = 43;
                tab1 = 67;
                tab2 = 73;
                tab3 = 75;
            }
            else { //smallest screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "430px";
                document.getElementById("Pen").style.width = "50px";

                //Set Envelope
                eWidth = 450;
                eleft = 480;
                eTop = -150;

                //Set the Title
                size = 75;
                tleft = 370;
                tTop = 75;

                //Set the Unsolved
                Uwidth = 420;
                Uleft = -60;
                Utop = -50;

                //Setting Tabs
                tabBuffer = 14;
                tabHeight = 85;
                tabWidth = 43;
                tab1 = 60;
                tab2 = 75;
                tab3 = 45;
            }
        }
        else if (window.innerWidth >= 1024) { //medium screen size
            if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;
                document.getElementById("Note").style.width = "475px";
                document.getElementById("Pen").style.width = "55px";

                //Set Envelope
                eWidth = 500;
                eleft = 525;
                eTop = -130;

                //Set the Title
                size = 85;
                tleft = 355;
                tTop = 80;

                //Setting Tabs
                tabBuffer = 17;
                tabHeight = 95;
                tabWidth = 43;
                tab1 = 67;
                tab2 = 73;
                tab3 = 75;
            }
            else if (window.innerHeight >= 720) { //smallest screen size
                newWidth = 1000;
                document.getElementById("Note").style.width = "430px";
                document.getElementById("Pen").style.width = "50px";

                //Set Envelope
                eWidth = 450;
                eleft = 480;
                eTop = -150;

                //Set the Title
                size = 75;
                tleft = 410;
                tTop = 75;

                //Setting Tabs
                tabBuffer = 14;
                tabHeight = 85;
                tabWidth = 43;
                tab1 = 60;
                tab2 = 75;
                tab3 = 45;
            }
            else {
                newWidth = 855;
                document.getElementById("Note").style.width = "365px";
                document.getElementById("Pen").style.width = "43px";

                //Set Envelope
                eWidth = 415;
                eleft = 425;
                eTop = -150;

                //Set the Title
                size = 60;
                tleft = 220;
                tTop = 75;

                //Setting Tabs
                tabBuffer = 12;
                tabHeight = 70;
                tabWidth = 35;
                tab1 = 50;
                tab2 = 60;
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
            eTop = -125;

            //Set the Title
            size = 55;
            tleft = 200;
            tTop = 70;

            //Setting Tabs
            tabBuffer = 10;
            tabHeight = 60;
            tabWidth = 35;
            tab1 = 45;
            tab2 = 50;
            tab3 = 50;
        }

        for (var i = 0; i < folders.length; i++) {
            document.getElementsByClassName("folder-scale")[i].style.width = newWidth + "px";
        }

        SetPages();
        setTabs(tabHeight, tabWidth, tab1, tab2, tab3, tabBuffer);
        setEnvelope(eWidth, eleft, eTop);
        setTitle(size, tleft, tTop);
        setUnsolved(Uwidth, Uleft, Utop);
    }

    //Check if a puzzle is unlocked or not
    CheckPuzzle(folder) {
        const { cookies } = this.props;

        //default will be the first puzzle
        switch (folder) {
            case 2:
                if (cookies.get('TheLetterChildren')) {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    if (cookies.get('TissuePaperChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 3:
                if (cookies.get('TissuePaperChildren')) {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    if (cookies.get('DemuthLetterChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 4:
                if (cookies.get('DemuthLetterChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('PhonebookChildren')) { document.getElementById("Solved").setAttribute('src', this.state.solvedList[1]); }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 5:
                if (cookies.get('PhonebookChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('SIACatalogChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 6:
                if (cookies.get('SIACatalogChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('ElsaChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 7:
                if (cookies.get('ElsaChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('GodChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 8:
                if (cookies.get('GodChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('GodIIChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 9:
                if (cookies.get('GodIIChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('BlindManChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            case 10:
                if (cookies.get('BlindManChildren')) {
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    document.getElementById("Solved").setAttribute('src', "none");
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                    if (cookies.get('MottCatalogrChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                    }
                }
                else {
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[1]);
                    document.getElementById("Unsolved").setAttribute('src', "none");
                    document.getElementById("Solved").setAttribute('src', "none");
                }
                break;
            default:
                document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);
                document.getElementById("Solved").setAttribute('src', "none");
                document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                
                if (cookies.get('TheLetterChildren')) { document.getElementById("Solved").setAttribute('src', this.state.solvedList[0]); }
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
            this.CheckPuzzle(folder);
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
                        <Image id="Pen" src={Pen} className="pen" />
                        <Image id="Unsolved" src={ARLetter1} className="unsolved" />
                        <Image id="Solved" src={ARLetter2} className="unsolved" />

                        {/* Right Side */}
                    
                        <div id="Title" className="written">
                            The Letter
                        </div>
                        <Image id="Envelope" src={Open} className="envelope" />
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

                        {/* { showLeftTabs[0] && <div id="TabOne" className="folder-tab" onClick={() => this.ChangeFolder(1)} />}
                        { showLeftTabs[1] && <div id="TabTwo" className="folder-tab" onClick={() => this.ChangeFolder(2)} />}
                        { showLeftTabs[2] && <div id="TabThree" className="folder-tab" onClick={() => this.ChangeFolder(3)} />}
                        { showLeftTabs[3] && <div id="TabFour" className="folder-tab" onClick={() => this.ChangeFolder(4)} />}
                        { showLeftTabs[4] && <div id="TabFive" className="folder-tab" onClick={() => this.ChangeFolder(5)} />}
                        { showLeftTabs[5] && <div id="TabSix" className="folder-tab" onClick={() => this.ChangeFolder(6)} />}
                        { showLeftTabs[6] && <div id="TabSeven" className="folder-tab" onClick={() => this.ChangeFolder(7)} />}
                        { showLeftTabs[7] && <div id="TabEight" className="folder-tab" onClick={() => this.ChangeFolder(8)} />}
                        { showLeftTabs[8] && <div id="TabNine" className="folder-tab" onClick={() => this.ChangeFolder(9)} />}
                        { showLeftTabs[9] && <div id="TabTen" className="folder-tab" onClick={() => this.ChangeFolder(10)} />}

                        { showRightTabs[0] && <div id="TabOneRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(1)} />}
                        { showRightTabs[1] && <div id="TabTwoRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(2)} />}
                        { showRightTabs[2] && <div id="TabThreeRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(3)} />}
                        { showRightTabs[3] && <div id="TabFourRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(4)} />}
                        { showRightTabs[4] && <div id="TabFiveRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(5)} />}
                        { showRightTabs[5] && <div id="TabSixRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(6)} />}
                        { showRightTabs[6] && <div id="TabSevenRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(7)} />}
                        { showRightTabs[7] && <div id="TabEightRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(8)} />}
                        { showRightTabs[8] && <div id="TabNineRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(9)} />}
                        { showRightTabs[9] && <div id="TabTenRight" className="folder-tab-right" onClick={() => this.ChangeFolderRight(10)} />} */}
                    </div>
                </div>


                {/* <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={<Image src={Pen} className="pen" />} modal >
                    {close => (
                        <div className="password">
                            Report your findings
                            <br />
                            <form name="login" style={{ margin: '5px 0px 0px 0px' }} >
                                <input type="text" size="17" style={{ width: '40%', height: '10%' }} /><br />
                                <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                            </form>

                           click outside to escape window
                        </div>
                    )}
                </Popup> */}


            </Container>
        );
    }
}

export default withCookies(Clues);