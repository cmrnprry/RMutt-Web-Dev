//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Back from '../../Navigation/Back.js'

//Image Imports
import Syringe from './rrose_assets/Marvel_Syringe.png'
import Rotorelief from './rrose_assets/Rotorelief.png'
import Rrose_Img from './rrose_assets/RRose.png'
import Rrose_Do from './rrose_assets/Rrose_Do_Shit.png'
import Rrose_Name from './rrose_assets/Rrose_name.png'
import Poem from './rrose_assets/RRose_Selavy_Poem.png'

//Web Imports
import interact from 'interactjs'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet";
import Popup from 'reactjs-popup';



function SetPages() {
    //middle of screen
    var middle = window.innerWidth / 2;
    var middleH = window.innerHeight / 2;
    //set the folder


    //in the center
    document.getElementById("Name").style.left = (middle - (document.getElementById("Name").getBoundingClientRect().width) / 2) + "px";
    document.getElementById("Name").style.top = (middleH - 100) + "px";
    document.getElementById("Name").style.width = 500 + "px";


    //above syringe
    document.getElementById("Do").style.left = (middle - (document.getElementById("Do").getBoundingClientRect().width) / 2) + 60 + "px";
    document.getElementById("Do").style.bottom = document.getElementById("Name").getBoundingClientRect().y + 150 + "px";
    document.getElementById("Do").style.width = 300 + "px";


    //to the left and down
    document.getElementById("Syringe").style.left = document.getElementById("Name").getBoundingClientRect().x
        - document.getElementById("Name").getBoundingClientRect().width + 250 + "px";
    document.getElementById("Syringe").style.top = document.getElementById("Name").getBoundingClientRect().y + 175 + "px";
    // document.getElementById("Syringe").style.width = 450 + "px";

    //above syringe
    document.getElementById("Poem").style.left = document.getElementById("Name").getBoundingClientRect().x - 350 + "px";
    document.getElementById("Poem").style.bottom = document.getElementById("Name").getBoundingClientRect().y + "px";
    document.getElementById("Poem").style.width = 300 + "px";

    document.getElementById("Rrose").style.right = document.getElementById("Name").getBoundingClientRect().x
        - document.getElementById("Name").getBoundingClientRect().width + "px";
    document.getElementById("Rrose").style.bottom = document.getElementById("Name").getBoundingClientRect().y + "px";
    document.getElementById("Rrose").style.width = 300 + "px";

    document.getElementById("Relief").style.right = document.getElementById("Name").getBoundingClientRect().x
        - 175 + "px";
    document.getElementById("Relief").style.top = document.getElementById("Name").getBoundingClientRect().y + 150 + "px";
    document.getElementById("Relief").style.width = 300 + "px";

}

class Rrose extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Sets the listener
    componentDidMount() {
        if (this.state.width > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }

        SetPages();

        //listener for window resize
        window.addEventListener('resize', this.resizeWindow);
    }

    resizeWindow() {
        if (this.state.width > 1300) {
            document.body.style.overflowX = "hidden";
        }
        else {
            document.body.style.overflowX = "scroll";
        }

        SetPages();

    }


    handleSubmit(event) {

        const { cookies } = this.props;

        var input = document.getElementById("Input").value.toLowerCase();
        console.log(input);
        if (input == "douche") {
            cookies.set('RroseChildren');
            this.props.history.push('/clues');
        }
    }

    render() {

        return (
            <Container fluid='true'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>A Rrose by Any Other Name</title>
                </Helmet>

                <Back />


                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={<Image id="Name" src={Rrose_Name} className="resize-rrose pointer" />} modal >
                    {close => (
                        <div className="password">
                            Report your findings
                            <br />
                            <form name="login" style={{ margin: '5px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                                <input id="Input" type="text" size="17" style={{ width: '40%', height: '10%' }} /><br />
                                <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                            </form>

                           click outside to escape window
                        </div>
                    )}
                </Popup>



                <Image id="Syringe" src={Syringe} className="resize-rrose" />
                <Image id="Relief" src={Rotorelief} className="resize-rrose" />
                <Image id="Do" src={Rrose_Do} className="resize-rrose" />
                <Image id="Rrose" src={Rrose_Img} className="resize-rrose" />
                <Image id="Poem" src={Poem} className="resize-rrose" />

            </Container >

        );
    }
}

export default withCookies(Rrose);