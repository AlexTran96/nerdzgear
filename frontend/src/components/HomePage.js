import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react'
import Quote from './Quote/Quote';
import Steps from './Steps';
import Slides from './Slide/MainSlide';
import Questions from './Questions/Questions';
import Customer from './Customer';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Quote/>
                <Steps/>
                <Slides/>
                <Questions/>
                <Customer/>
            </>
        )
    }
}
