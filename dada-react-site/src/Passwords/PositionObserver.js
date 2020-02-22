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
    }

    getBound() {
        const component = document.getElementById(this.id);
        if (!component) {
            return {};
        }
        const rect = component.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top + window.scrollY,
            width: rect.width || rect.right - rect.left,
            height: rect.height || rect.bottom - rect.top
        };
    }

    getPosition() {
        const component = document.getElementById(this.id);
        component.measure((width, height, px, py, fx, fy) => {
            const location = {
                fx: fx,
                fy: fy,
                px: px,
                py: py,
                width: width,
                height: height
            }
            console.log(location)
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
        const bound = this.getPosition();
        console.log(bound);

        return (
            this.props.children(this.id)
        );
    }
}

export default Position;