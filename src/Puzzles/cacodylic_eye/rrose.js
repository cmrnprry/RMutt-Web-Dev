//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import BackNav from '../../Navigation/Back.js';


//Web Imports
import Container from 'react-bootstrap/Container'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

class Rrose extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            openP: false,
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Sets the listener
    componentDidMount() {
        // document.body.style.overflowY = "scroll";
        document.body.style.overflow = "hidden";
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

    //Handles the change event
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //Handles the submit event
    handleSubmit() {
        const { cookies } = this.props;

        var password = 'alias marcel duchamp';

        if (this.state.value.toLowerCase() === password) {
            cookies.set('TheCacodylicEyeChildren')
            cookies.set('RroseChildren')
            cookies.set('RroseArtifact')
            this.props.history.push('/clues')
        }
        else {
            alert("Incorrect password.");
        }
    }


    render() {
        return (
            <Container fluid='true' className="wooden-background" style={{ minHeight: this.state.height, minWidth: this.state.width }}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>A Rrose by any other name</title>
                </Helmet>

                <BackNav />

                <div className="reward-rose">
                    <div className="click-box-rrose" onClick={this.openModal} />
                </div>


                <Popup
                    style={{ background: 'transparent', border: 'none' }}
                    open={this.state.open}
                    modal
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="password">
                        Report your findings
                            <br />
                        <form name="login" style={{ margin: '5px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                            <input type="text" size="17" value={this.state.value} onChange={this.handleChange} style={{ width: '40%', height: '10%' }} /><br />
                            <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                        </form>

                           click outside to escape window
                        </div>

                </Popup>

            </Container>
        );
    }
}

export default withCookies(Rrose);