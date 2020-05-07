//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//Image Imports
import Background from '../../../folder_elements/wooden.png'
import Folder from '../../../folder_elements/folder_note.png'
import Pen from '../../../folder_elements/pen/pen_bak.png'

//Web Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Popup from "reactjs-popup";
import { Helmet } from "react-helmet";



class Clues extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const { cookies } = this.props;
        return (

            <Container fluid='true'
                style={{ backgroundImage: `url(${Background}`, height: 'auto', position: 'relative' }}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dada - Home</title>
                </Helmet>

                <div className="folder">
                    <Image src={Folder} />
                    <div className="written" style={{ paddingTop: '55px' }}>
                        <Link to="the-letter">The Letter</Link> <br />
                        {cookies.get('TheLetterChildren') && <Link to="sia-catalogue">SIA Catlogue</Link>} <br />
                        {cookies.get('TheLetterChildren') && <Link to="cacodylate-eye">Cacodylic Eye</Link>} <br />
                        
                        {cookies.get('TheCacodylicEyeChildren') && <Link to="rrose">Rrose</Link>} <br />
                        
                        {cookies.get('RroseChildren') && <Link to="blind-man">The Blind Man</Link>} <br />
                        {cookies.get('RroseChildren') && <Link to="elsa-photo">Elsa Photo</Link>} <br />
                        
                        {cookies.get('TissuePaperChildren') && <Link to="demuth-letter">Demuth Letter</Link>} <br />
                        {cookies.get('TissuePaperChildren') && <Link to="verese">Verese</Link>} <br />

                        {cookies.get('DemuthLetterChildren') && <Link to="phone-number">Phone Number</Link>} <br />

                        {cookies.get('SIACatalogChildren') && <Link to="mott-catalog">Mott Catalog</Link>} <br />

                        {cookies.get('ElasPhotoChildren') && <Link to="god">God</Link>} <br />

                        {cookies.get('GodChildren') && <Link to="godII">God II</Link>} <br />

                        {cookies.get('BlindManChildren') && <Link to="o-marcel">O Marcel</Link>} <br />
                        {cookies.get('BlindManChildren') && <Link to="o-marcel">O Marcel</Link>} <br />
                        {cookies.get('BlindManChildren') && <Link to="background-image">Background Image</Link>} <br />

                        {cookies.get('MottCatalogChildren') && <Link to="corkboard">Corkboard</Link>} <br />
                    </div>
                </div>

                <Popup style={{ background: 'transparent', border: 'none' }}
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
                </Popup>


            </Container>
        );
    }
}

export default withCookies(Clues);