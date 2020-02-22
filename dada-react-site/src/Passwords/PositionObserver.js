import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/dada.css';
import '../Stylesheets/index.css';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Draggable from 'react-draggable';

class Position extends Component {

    constructor(props) {
        super(props);
        this.id = props.name;

        this.state = {
            deltaPosition: {
                x: 0, y: 0
            },
        };
    }

    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

//      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
//     <div className="box">
//         <div>I track my deltas</div>
//         <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
//     </div>
// </Draggable>



    getPosition() {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x,
                y: y,
            }
        });
    }

    componentDidMount() {
        this.intervalUpdate = setInterval(this.updatePosition, 50);
    }
    componentWillUnmount() {
        clearInterval(this.intervalUpdate);
    }
    updatePosition = () => {
        this.forceUpdate();
    };


    render() {
        const deltaPosition = this.getPosition;
        console.log(deltaPosition);

        return (
            this.props.children(this.id)
        );
    }
}

export default Position;