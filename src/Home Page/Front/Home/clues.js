//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Pen from '../../../folder_elements/pen/pen_bak.png'
import RrosePhoto from '../../../Puzzles/cacodylic_eye/rrose_images/r_rose_thumbnail.png'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet";



class Clues extends Component {
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
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeWindow);
    }

    //So the program always has the correct width and height of window
    resizeWindow() {
        console.log("here")
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const { cookies } = this.props;
        return (

            <Container fluid='true'
                className="wooden-background" style={{ overflowX: 'hidden', minHeight: this.state.height, minWidth: this.state.width }}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>


                <div className="folder">
                    <Image src={Pen} className="pen" />

                    {/* Links to puzzles */}
                    <div className="written" style={{ paddingTop: '55px' }}>
                        <Link to="the-letter">The Letter</Link> <br />
                        {/* {cookies.get('TheLetterChildren') && <Link to="sia-catalogue">SIA Catlogue</Link>} <br /> */}
                        {cookies.get('TheLetterChildren') && <Link to="cacodylate-eye">Cacodylic Eye</Link>} <br />

                        {cookies.get('TheCacodylicEyeChildren') && <Link to="rrose">Rrose</Link>} <br />

                        {cookies.get('RroseChildren') && <Link to="blind-man">The Blind Man</Link>} <br />
                        {/* {cookies.get('RroseChildren') && <Link to="elsa-photo">Elsa Photo</Link>} <br /> */}

                        {cookies.get('TissuePaperChildren') && <Link to="demuth-letter">Demuth Letter</Link>} <br />
                        {/* {cookies.get('TissuePaperChildren') && <Link to="verese">Verese</Link>} <br /> */}

                        {/* {cookies.get('DemuthLetterChildren') && <Link to="phone-number">Phone Number</Link>} <br /> */}

                        {/* {cookies.get('SIACatalogChildren') && <Link to="mott-catalog">Mott Catalog</Link>} <br /> */}
                        {cookies.get('TissuePaperChildren') && <Link to="mott-catalog">Mott Catalog</Link>} <br />


                        {cookies.get('ElasPhotoChildren') && <Link to="god">God</Link>} <br />

                        {cookies.get('GodChildren') && <Link to="godII">God II</Link>} <br />

                        {/* {cookies.get('BlindManChildren') && <Link to="o-marcel">O Marcel</Link>} <br /> */}
                        {cookies.get('BlindManChildren') && <Link to="tissue-paper">Tissue Paper</Link>} <br />
                        {/* {cookies.get('BlindManChildren') && <Link to="background-image">Background Image</Link>} <br /> */}

                        {/* {cookies.get('MottCatalogChildren') && <Link to="corkboard">Corkboard</Link>} <br /> */}
                    </div>

                    {/* Artifacts */}
                        <div className="written-2">Secrets</div>
                        {cookies.get('RroseArtifact') && <Image className="artifact-rose" src={RrosePhoto} />}
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