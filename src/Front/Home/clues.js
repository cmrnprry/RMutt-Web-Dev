//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream:src/Front/Home/clues.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import Background from '../../folder_elements/wooden.png'
import Folder from '../../folder_elements/folder_note.png'
import Pen from '../../folder_elements/pen/pen_bak.png'
=======

//Image Imports
import Background from '../../../folder_elements/wooden.png'
import Folder from '../../../folder_elements/folder_note.png'
import Pen from '../../../folder_elements/pen/pen_bak.png'

//Web Imports
>>>>>>> Stashed changes:src/Home Page/Front/Home/clues.js
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Popup from "reactjs-popup";
import { Helmet} from "react-helmet";



class Clues extends Component {

   render() {

       return (
            
           <Container fluid='true'
               style={{ backgroundImage: `url(${Background}`, height: 'auto', position: 'relative' }}>
               
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>Dada - Home</title>
               </Helmet>

               <div className="folder">
                   <Image src={Folder} /> 
                    <div className="written">
                        <Link to="the-letter">The Letter</Link>
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

export default Clues;