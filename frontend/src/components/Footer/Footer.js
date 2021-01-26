import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React, { Component } from 'react'
import Content from './Content';
import Link from './Link';
import Copyright from './Copyright';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <MDBRow className="text-center text-lg-start p-4" style={{ backgroundColor: 'gray' }}>
                    <MDBCol className="col-lg-6 col-md-12 mb-4 mb-md-0" >
                        <Content />
                    </MDBCol>
                    <MDBCol className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <Link/>
                    </MDBCol>
                    <MDBCol className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <Link/>
                    </MDBCol>
                    
                </MDBRow>
                <Copyright />
            </div>
        )
    }
}
