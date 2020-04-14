import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/cacodylate.css';
import Helmet from 'react-helmet'

import Background from '../../folder_elements/wooden.png'
import Reward from './cacodylic_images/r_rose_reward.png'
import Edited from './cacodylic_images/r_rose_edited.png'
import Original from './cacodylic_images/r_rose_original.jpg'

class Cacodylate extends Component {
    constructor() {
        super();
        this.state = {
            hidePuzzle: false,
            showReward: false,
        };
        this.hidePuzzleComponent = this.hidePuzzleComponent.bind(this);
    }

    hidePuzzleComponent()
    {
        this.setState({ hidePuzzle: true });
        this.setState({ showReward: true });

    }

    render() {
        const { hidePuzzle, showReward } = this.state;
        return (
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, backgroundSize: 'auto', height: '100%', position: 'relative'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Two Cacodylic Eyes</title>
                </Helmet>

                <div className="click-box" style={{
                    left: '910px',
                    top: '278px',
                }} onClick={() => this.hidePuzzleComponent()}></div>

                <div>
                    {!hidePuzzle && <Image src={Original} className="original-rose" />}

                    {!hidePuzzle && <Image src={Edited} className="edited-rose" />}

                    {showReward && <Image src={Reward} className="reward-rose" />}
                </div>
            

            </Container>
        );
    }
}

export default Cacodylate;