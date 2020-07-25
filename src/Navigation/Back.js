//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Import
import BackImage from '../folder_elements/back_button.png'
import BackImage2 from '../folder_elements/back_button_v2.png'
import BackImage3 from '../folder_elements/back_button_v3.png'

//Web Imports
import Image from 'react-bootstrap/Image'

class Back extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.resizeWindow = this.resizeWindow.bind(this);
        this.setChildren = this.setChildren.bind(this);
    }

    //Sets the listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        this.setState({ width: window.innerHeight, height: window.innerHeight });
    }

    setChildren() {
        const { cookies } = this.props;

        cookies.set('TheLetterChildren', "show");
        this.props.history.push('/clues');

    }

    render() {

        return (
            <div className="sticky">
                <Link to="clues">
                    <Image src={BackImage2} style={{
                       // width: '100%'
                    }} />
                </Link>
            </div>
        );
    }
}

export default withCookies(Back);