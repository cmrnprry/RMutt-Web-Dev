//React Imports
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import Reward from './rrose_images/r_rose_reward.png'
import Edited from './rrose_images/r_rose_edited.png'
import Original from './rrose_images/r_rose_original.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";

class Cacodylate extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = this.props;

        this.state = {
            hidePuzzle: false,
            showReward: false,
            value: '',
        };

        cookies.set('hidePuzzle', false);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //A funcion meant to hide the puzzle and show the reward when called
    hidePuzzleComponent() {
        const { cookies } = this.props;
        cookies.remove('hidePuzzle', false);
        cookies.set('showReward', true);
    }

    //Handles the change event
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //Handles the submit event
    handleSubmit(event) {
        const { cookies } = this.props;

        event.preventDefault();

        var password = 'alias marcel duchamp';

        if (this.state.value.toLowerCase() === password) {
            cookies.set('TheCacodylicEyeChildren');
            cookies.set('RroseChildren');
            cookies.set('RroseArtifact');
            this.props.history.push('/clues')
        }
        else {
            alert("Incorrect password.");
        }
    }


    render() {
        const { cookies } = this.props;
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, backgroundSize: 'auto', height: '100%', position: 'relative' }}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                <div className="click-box" onClick={() => this.hidePuzzleComponent()} />

                {/* container for the images. If the 'hidePuzzle' bool is set to true, the two images are hidden. If the showReward is set to true, it shows the reward image */}
                <div>
                    {cookies.get('hidePuzzle') && <Image src={Original} className="original-rose" />}

                    {cookies.get('hidePuzzle') && <Image src={Edited} className="edited-rose" />}

                    {cookies.get('showReward', true) && <Image src={Reward} className="reward-rose" />}
                </div>


                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={
                        <div>
                            {cookies.get('showReward') && <div className="click-box2" />}
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

export default withCookies(Cacodylate);