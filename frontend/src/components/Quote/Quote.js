import { MDBContainer, MDBStepper } from 'mdbreact';
import React, { Component } from 'react'
import Offer from './Part1';
import Info from './Part2';

export default class Quote extends Component {
    render() {
        return (
            <>
                <section className="pt-5" style={{ backgroundImage: `url('img/bg.jpg')` }}>
                    <MDBContainer className="py-5">
                        <h1 className="display-4 text-center">We Buy Your Old Gears</h1>
                        <p className="text-center">The process is fast, the service is free. It's time to make money off that old gears, simple and easy.</p>
                        <hr className="my-5" />
                        <ul className="stepper" data-mdb-stepper="stepper" data-mdb-stepper-type="vertical">
                            <Offer />
                            <Info />
                        </ul>
                    </MDBContainer>
                </section>
            </>

        )
    }
}
