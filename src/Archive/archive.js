import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/dada.css';
import Logo from '../Logos/logo_rect.png'
import ArchiveImg from '../Navigation/archive.png'
import About from '../Navigation/about.png'
import Menu from '../Navigation/menu_bar.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
//import DADA from '../Passwords/dada'



class Archive extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        
        event.preventDefault();

        var password1 = 'whoisrmutt';
        var password2 = 'nonsense';

        if (this.state.value === password1 || this.state.value === password2) {
            this.props.history.push('/clues')
        }
        else {
           alert("Incorrect password.");
        }
    }

    login = () => {

        var password1 = 'whoisrmutt';
        var password2 = 'nonsense';

        if (this.document.getElementbyId("password").value === password1 || this.document.login.pass.value === password2) {
            console.log('Click happened');
           // this.context.router.history.push("/home");
        }
        else {
            window.alert("Incorrect password.");
        }
        console.log('Click happened');
    }

    render() {

        return (
            <Container fluid="true">
                <Image className="menu-bar" src={Menu} />
                <Link to="front">
                    <Image className="header" src={Logo} />
                </Link>

                <ul>
                    <li>
                        <Link to="archive">
                            <Image className="page" src={ArchiveImg} />
                        </Link>
                    </li>
                    <li>
                        <Link to="about">
                            <Image className="page" src={About} />
                        </Link>
                    </li>
                </ul>

            {/* ----------------------------------------------------------------------------- */}

                <div className="password">
                    This page contains confidential information.<br />
                    Please enter the password.<br /><br />

                    <form name="login" style={{ margin: '5px 0px 0px 0px' }} onSubmit={this.handleSubmit}>
                        <input type="text" size="17" value={this.state.value} onChange={this.handleChange} style={{ width: '40%', height: '10%' }} /><br />
                        <input type="submit" value="Submit" style={{ width: '40%', height: '10%', margin: '4px auto 4px auto' }} />
                    </form>
		        </div>
            </Container>

        );
    }
}

export default Archive;