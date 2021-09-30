//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import Sticky from "../../../Logos/logo_sqr.png"

//Image Imports
import IntroLetter from '../../../folder_elements/WhoIsRMutt_Sticker.png'
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
var currS = imgS1;

var solvedPuzzles = [];
var showRightTabs = [false, false, false, false, false, false, false, false, false, false, false, false];
var showLeftTabs = [true, true, true, true, true, true, true, true, true, true, true, true];
var currentTab = 1;


//Set Clickable Tabs
function setTabsLeft() {
    var temp = document.getElementsByClassName("folder-tab")[0].getBoundingClientRect().bottom;
    console.log("temp: " + temp)
    for (var i = 1; i < document.getElementsByClassName("folder-tab").length; i++) {
        document.getElementsByClassName("folder-tab")[i].style.top = temp + "%";
        document.getElementsByClassName("folder-tab")[i].style.height = "8%";
        temp += 8;
        
        if (i == 1) {
            document.getElementsByClassName("folder-tab")[i].style.top = "13%";
            document.getElementsByClassName("folder-tab")[i].style.height = "7%";
            temp = 20;
        }
        else if (i == 5) {
            document.getElementsByClassName("folder-tab")[i].style.height = "7%";
            temp = 51;
        }
        else {
            //resetting the top
            console.log("tab height" + i + ": " + temp)

        }        
    }
}

function setTabsRight() {
    var temp = document.getElementsByClassName("folder-tab-right")[0].getBoundingClientRect().bottom;
    
    for (var i = 1; i < document.getElementsByClassName("folder-tab").length; i++) {
        
        document.getElementsByClassName("folder-tab-right")[i].style.top = temp + "%";
        document.getElementsByClassName("folder-tab-right")[i].style.height = "8%";
        temp += 8;
        
        if (i == 1) {
            document.getElementsByClassName("folder-tab-right")[i].style.top = "13%";
            document.getElementsByClassName("folder-tab-right")[i].style.height = "7%";
            temp = 20;
        }
        else if (i == 5) {
            document.getElementsByClassName("folder-tab-right")[i].style.height = "7%";
            temp = 51;
        }
        else {
            //resetting the top
            console.log("tab height" + i + ": " + temp)

        }        
    }
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
            passwordValue: '',
        };

        this.handleChange = this.handleChange.bind(this)
        this.CheckPassword = this.CheckPassword.bind(this);
        this.resizeWindow = this.setWindow.bind(this);
    }

    componentDidMount() {
        const { cookies } = this.props;
        document.body.style.overflow = "scroll";

        document.body.style.removeProperty("background");
        window.addEventListener("resize", this.setWindow);
        this.setWindow();

        this.ChangeFolder(cookies.get('currentTab', currentTab));
        this.CheckPuzzle(cookies.get('currentTab', currentTab));
    }

    //So the program always has the correct width and height of window
    setWindow() {
        setTabsLeft();
        setTabsRight();
    }

    //Check if a puzzle is unlocked or not
    CheckPuzzle(folder) {
        const { cookies } = this.props;
        console.log("checking")

        currentTab = folder;
        folder = parseInt(folder)

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
                document.getElementById("GlobeRight").style.display = "none";
                break;
            case 4:
                if (cookies.get('SiaCatalogChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";


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
                        document.getElementById("GlobeLink").setAttribute('href', 'https://www.latimes.com/archives/la-xpm-1986-10-05-tm-4275-story.html');
                        document.getElementById("GlobeRight").style.display = "block";
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
                    document.getElementById("GlobeRight").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
                break;
            case 5:
                if (cookies.get('BlindManChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('MinaLoyChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://mina-loy.com/');
                        document.getElementById("GlobeRight").style.display = "block";
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
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
                break;
            case 6:
                if (cookies.get('MinaLoyChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('TissuePaperChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://thereaderwiki.com/en/Louise_Var%C3%A8se');
                        document.getElementById("GlobeRight").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
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
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("Solved").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                break;
            case 7:
                if (cookies.get('TissuePaperChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('PhonebookChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("Camera").style.display = "block";

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
                    document.getElementById("Camera").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";

                //Turn on the pen and camera
                document.getElementById("GlobeRight").style.display = "none";
                break;
            case 8:
                if (cookies.get('PhonebookChildren')) {
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
                        document.getElementById("GlobeLink").setAttribute('href', 'https://www.theartnewspaper.com/comment/did-marcel-duchamp-steal-elsa-s-urinal');
                        document.getElementById("GlobeRight").style.display = "block";
                        document.getElementById("Camera").style.display = "block";

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
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";


                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
                break;
            case 9:
                if (cookies.get('ElsaChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('RroseChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://www.theartstory.org/blog/exclusive-modernism-baroness-elsa-von-freytag-loringhoven-and-marcel-duchamp/');
                        document.getElementById("GlobeRight").style.display = "block";
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
                    document.getElementById("Camera").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                document.getElementById("Pen").style.display = "block";
               
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
                break;
            case 11:
                if (cookies.get('MottCatalogChildren')) {

                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

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
                        document.getElementById("Camera").style.display = "block";

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
                    document.getElementById("Camera").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";
                break;
            case 12:
                if (cookies.get('GodChildren')) {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

                    //open the envelope and show the unsolved
                    document.getElementById("Unsolved").setAttribute('src', this.state.unsolvedList[folder - 1]);
                    document.getElementById("Unsolved").style.display = "block";
                    document.getElementById("Envelope").setAttribute('src', this.state.isUnlocked[0]);

                    //If this puzzle has been solved
                    if (cookies.get('GodIIChildren')) {
                        document.getElementById("Solved").setAttribute('src', this.state.solvedList[folder - 1]);
                        document.getElementById("Solved").style.display = "block";
                        document.getElementById("GlobeLink").setAttribute('href', 'https://mitpress.mit.edu/books/baroness-elsa');
                        document.getElementById("GlobeRight").style.display = "block";
                        document.getElementById("Camera").style.display = "block";
                        document.getElementById("Outro").style.display = "block";
                        

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
                    document.getElementById("GlobeRight").style.display = "none";
                    document.getElementById("Camera").style.display = "none";

                    //set link inactive
                    document.getElementById("Link").classList.add('inactiveLink');
                    document.getElementById("Link-Envelope").classList.add('inactiveLink');
                }

                //Turn off the pen for non-password puzzles
                document.getElementById("Pen").style.display = "block";
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

                //Turn on the pen and camera
                document.getElementById("GlobeRight").style.display = "none";
                

                //once the puzzle has been solved turn on and set the solved image
                if (cookies.get('TheLetterChildren')) {
                    document.getElementById("Solved").setAttribute('src', this.state.solvedList[0]);
                    document.getElementById("Solved").style.display = "block";
                    document.getElementById("Camera").style.display = "block";
                }
                else {
                    //Set the Solved image to but turned off
                    document.getElementById("Solved").style.display = "none";
                    document.getElementById("Camera").style.display = "none";
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
            if (input === "amie") {
                cookies.set('TheLetterChildren');
                solvedPuzzles.push("TheLetter");
                correct = true
            }
        }
        else if (currentTab === 3) {
            if (input === "nominaldues") {
                cookies.set('SiaCatalogChildren');
                solvedPuzzles.push("SiaCatalog");
                correct = true
            }
        }
        else if (currentTab === 2) {
            if (input === "thesuperindependents" || input === "salondesrefusees" || input === "salondesrefusées") {
                cookies.set('DemuthLetterChildren');
                solvedPuzzles.push("DemuthLetter");
                correct = true
            }
        }
        else if (currentTab === 7) {
            if (input === "110w88" || input === "louisenorton") {
                cookies.set('PhonebookChildren');
                solvedPuzzles.push("Phonebook");
                correct = true
            }
        }
        else if (currentTab === 6) {
            if (input == "louisevaresenorton" || input == "louisenortonvarese" || input == "louisemccutcheonnorton" || input == "louisenortonmccutcheon" || input == "louisenortonvarèse" || input == "louisevarèsenorton" || input == "louisenorton" || input === "110W88") {
                cookies.set('TissuePaperChildren');
                solvedPuzzles.push("TissuePaper");
                correct = true
            }
        }
        // else if (currentTab === 4) {
        //     if (input === "playtesting") {
        //         cookies.set('BlindManChildren');
        //         solvedPuzzles.push("BlindMan");
        //         correct = true
        //     }
        // }
        else if (currentTab === 5) {
            if (input === "minaloy") {
                solvedPuzzles.push("MinaLoy");
                cookies.set('MinaLoyChildren');
                correct = true
            }
        }
        else if (currentTab === 8) {
            if (input === "godisintheplumbing") {
                cookies.set('ElsaChildren');
                solvedPuzzles.push("Elsa");
                correct = true
            }
        }
        else if (currentTab === 9) {
            if (input === "douche" || input === "louisevaresenorton" || input === "aliasmarcelduchampest.1920"
                || input === "rroseselavy") {
                cookies.set('RroseChildren');
                solvedPuzzles.push("Rrose");
                correct = true
            }
        }
        // else if (currentTab === 10) {
        //     if (input === "playtesting") {
        //         cookies.set('MottCatalogChildren');
        //         solvedPuzzles.push("MottCatalog");
        //         correct = true
        //     }
        // }
        else if (currentTab === 11) {
            if (input === 'elsa') {
                cookies.set('GodChildren');
                solvedPuzzles.push("God");
                correct = true
            }
        }
        else if (currentTab === 12) {
            if (input === "pipes") {
                cookies.set('GodIIChildren');
                solvedPuzzles.push("GodII");
                correct = true
                // this.props.history.push('/clues');
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

    render() {
        return (

            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>

                {/* Return to Home */}
                  <a href='/front'>
                    <Image id="ReturnHome" src={Sticky}
                        style={{
                            width: "10%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            zIndex: "9999",
                            margin: "15px",
                            boxShadow: "rgb(0 0 0 / 42%) 5px 5px 10px 5px",
                        }} />
                </a>

                {/* Reopen Letter */}
                <a href='/intro'>
                    <Image src={IntroLetter}
                        style={{
                            width: "10%",
                            position: "absolute",
                            left: "0px",
                            bottom: "0px",
                            zIndex: "9999",
                            margin: "15px",
                            // boxShadow: "rgb(0 0 0 / 42%) 5px 5px 10px 5px",
                        }} />
                </a>

                {/* Reopen Letter */}
                <a href='/outro' >
                    <Image id="Outro" src={Closed}
                        style={{
                            display: 'none',
                            width: "15%",
                            position: "absolute",
                            left: "0px",
                            bottom: "35%",
                            zIndex: "9999",
                            margin: "15px",
                            // boxShadow: "rgb(0 0 0 / 42%) 5px 5px 10px 5px",
                        }} />
                </a>

                <div className="folder-outer" id="Main">
                    <div className="folder-container" id="Main Container">
                        <Image id="Folder" src={Folder1} className='folder-scale '/>
                        
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
                            <Image id="Solved" src={ARLetter2} className="solved"
                                style={{ display: 'none' }} />
                            <Image id="Camera" src={Camera} className="camera" />

                            <a id="GlobeLink" rel="noopener noreferrer" target="_blank" href='/'>
                                <Image id="GlobeRight" src={Globe} className="globe" />
                            </a>

                            <a id="Link" href='/the-letter'>
                                <div id="Title" className="written">
                                    The Letter
                                </div>
                            </a>

                            <a id="Link-Envelope" href='/the-letter'>
                                <Image id="Envelope" src={Open} className="envelope" />
                            </a>
                    
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
                </div>

                {/* Evidence Board */}
                <a href='/evidence-board'>
                    <Image src={Board}
                        style={{
                            width: "13%",
                            position: "relative",
                            float: 'right',
                            right: "0px",
                            bottom: "0px",
                            zIndex: "9999"
                        }} />
                </a>

            </Container>
        );
    }
}

export default withCookies(Clues);