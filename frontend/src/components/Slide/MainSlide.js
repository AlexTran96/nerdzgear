import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import React, { Component } from 'react'
import Slide1 from './Slide1';
import Slide2 from './Slide2';

export default class MainSlide extends Component {
    render() {
        return (
            <section id="navtwopages" class="py-5">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="col-6">
                            <Slide1/>
                        </MDBCol>
                        <MDBCol className="col-6">
                            <Slide2/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}
