import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Stylesheets/dada.css';
import RRose from '../../Puzzles/r_rose_puzzle/r_rose_part_2/r_rose_thumbnail.png'
import Notes from '../../folder_elements/notes.png'
import Background from '../../folder_elements/wooden.png'
import Folder from '../../folder_elements/folders.png'
import Pen from '../../folder_elements/pen/pen_bak.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Popup from "reactjs-popup";




class Clues extends Component {


   render() {

       return (
            
            <Container fluid='true' style={{ backgroundImage: `url(${Background}`, height: 'auto' }}>
               <Image src={Folder} className="folder" />
               <Image src={Notes} className="notes" />
               <div className="written">
                   <Link to="letter">The Letter</Link>
               </div>  
                
                
                
                <Popup style={{ background: 'transparent', border: 'none' }}
                            trigger={<Image src={Pen}
                            className="pen" />} modal >
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