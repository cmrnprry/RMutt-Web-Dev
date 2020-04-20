//React Imports
import React, { Component } from 'react';

//Image Imports
import Background from '../../folder_elements/wooden.png'
import letter from './ar_letter_elements/ar_letter.jpg'
import letter_red from './ar_letter_elements/ar_letter_red.jpg'

//Web Imports
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Helmet from 'react-helmet'
import Popup from "reactjs-popup";



class AR_Letter extends Component {

    render() {

        return (

            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The spark that started the fire</title>
                </Helmet>

                <Popup style={{ background: 'transparent', border: 'none' }}
                    trigger={<Image src={letter} className='ar-letter' />} modal >
                    {close => (
                        <div style={{ backgroundImage: `url(${Background}`, border: 'none' }}>
                            <p className='text'>Click outside to escape window</p>
                            <Image src={letter_red} className="red-letter" />
                        </div>
                    )}
                </Popup>

            </Container>
        );
    }
}

export default AR_Letter;