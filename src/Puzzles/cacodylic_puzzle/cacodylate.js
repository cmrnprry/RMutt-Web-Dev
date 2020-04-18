//React Imports
import React, { Component } from 'react';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import Reward from './cacodylic_images/r_rose_reward.png'
import Edited from './cacodylic_images/r_rose_edited.png'
import Original from './cacodylic_images/r_rose_original.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

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

    //A funcion meant to hide the puzzle and show the reward when called
    hidePuzzleComponent()
    {
        this.setState({ hidePuzzle: true });
        this.setState({ showReward: true });
    }

    //Handles the change event
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //Handles the submit event
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


    render() {
        const { hidePuzzle, showReward } = this.state;
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, backgroundSize: 'auto', height: '100%', position: 'relative' }}>
                
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                <div className="click-box" onClick={() => this.hidePuzzleComponent()} />

                {/* container for the images. If the 'hidePuzzle' bool is set to true, the two images are hidden. If the showReward is set to true, it shows the reward image */}
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