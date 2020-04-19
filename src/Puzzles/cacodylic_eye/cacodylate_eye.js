import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/cacodylate.css';
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

import Background from '../../folder_elements/wooden.png'
import Reward from './rrose_images/r_rose_reward.png'
import Edited from './rrose_images/r_rose_edited.png'
import Original from './rrose_images/r_rose_original.jpg'

class Cacodylate extends Component {
    constructor() {
        super();
        this.state = {
            hidePuzzle: false,
            showReward: false,
            value: '',
        };
        this.hidePuzzleComponent = this.hidePuzzleComponent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hidePuzzleComponent()
    {
        this.setState({ hidePuzzle: true });
        this.setState({ showReward: true });

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();

        var password = 'alias marcel duchamp';

        if (this.state.value.toLowerCase() === password) {
            this.props.history.push('/clues')
        }
        else {
            alert("Incorrect password.");
        }
    }

    login = () => {

        var password = 'alias marcel duchamp';


        if (this.document.getElementbyId("password").value === password) {
            console.log('Click happened');
            // this.context.router.history.push("/home");
        }
        else {
            window.alert("Incorrect password.");
        }
        console.log('Click happened');
    }


    render() {
        const { hidePuzzle, showReward } = this.state;
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, backgroundSize: 'auto', height: '100%', position: 'relative'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                <div className="click-box" onClick={() => this.hidePuzzleComponent()} />

                <div>
                    {!hidePuzzle && <Image src={Original} className="original-rose" />}

                    {!hidePuzzle && <Image src={Edited} className="edited-rose" />}

                    {showReward && <Image src={Reward} className="reward-rose" />}
                </div>
            
                
                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={
                        <div>
                            {showReward && <div className="click-box2" />}
                        </div>
                    } modal >
                    {close => (
                        <div className="password">
                            Report your findings
                            <br />
                            <form name="login" style={{ margin: '5px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                                <input type="text" size="17" value={this.state.value} onChange={this.handleChange} style={{ width: '40%', height: '10%' }} /><br />
                                <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                            </form>

                           click outside to escape window
                        </div>
                    )}
                </Popup>

            </Container>
        );
    }
}

export default Cacodylate;