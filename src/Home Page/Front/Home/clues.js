//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Pen from '../../../folder_elements/pen/pen_bak.png'
import RrosePhoto from '../../../Puzzles/cacodylic_eye/rrose_images/r_rose_thumbnail.png'
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

        if (window.innerWidth >= 1400) { //larges screen size
            if (window.innerHeight >= 1080) { //larges screen size
                newWidth = 1440;
            }
            else if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;

            }
            else { //smallest screen size
                newWidth = 1000;
            }
        }
        else if (window.innerWidth >= 1024) { //medium screen size
            if (window.innerHeight >= 800) { //medium screen size
                newWidth = 1100;

            }
            else if (window.innerHeight >= 720) { //smallest screen size
                newWidth = 1000;
            }
            else {
                newWidth = 855;
            }

        }
        else { //smallest screen size
            newWidth = 745;
        }

        // if (window.innerHeight >= 1400) { //larges screen size
        //     newWidth = 1230;
        // }
        // else if (window.innerHeight >= 1024) { //medium screen size
        //     newWidth = 970;

        // }
        // else if (window.innerHeight >= 722) { //smallest screen size
        //     newWidth = 1015;
        // }

        for (var i = 0; i < folders.length; i++) {
            document.getElementsByClassName("folder-scale")[i].style.width = newWidth + "px";
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


                <div className="folder center">
                    <Image src={Pen} className="pen" />
                    <Image id="Folder" src={Folder1} className="folder-scale" />

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