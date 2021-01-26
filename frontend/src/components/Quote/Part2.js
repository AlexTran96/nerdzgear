import React, { Component } from 'react'

export default class Part2 extends Component {
    render() {
        return (
            <div>
                <li className="stepper-step">
                    <div className="stepper-head">
                        <span className="stepper-head-icon"> 2 </span>
                        <span className="stepper-head-text"> Your Contact </span>
                    </div>
                    <div className="stepper-content py-3">
                        <div className="row input-select-quote">
                            <div className="col-12 col-md-6">
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="firstname" className="form-control" />
                                            <label className="form-label" for="firstname">First name</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="lastname" className="form-control" />
                                            <label className="form-label" for="lastname">Last name</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control" />
                                    <label className="form-label" for="email">Email address</label>
                                </div>

                                {/* Phone Number */}
                                <div className="form-outline mb-4">
                                    <input type="tel" id="typePhone" className="form-control" />
                                    <label className="form-label" for="typePhone">Phone number</label>
                                </div>

                                {/* New Letter */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <div className="row">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="subscribe"
                                            checked
                                        />
                                    </div>
                                    <label className="form-check-label" for="form2Example3">
                                        Subscribe to our newsletter
                                            </label>
                                </div>
                                <button type="submit" class="btn btn-dark btn-block mb-4">Submit</button>
                            </div>
                            <div class="col-12 col-md-6">
                                <p>Dignissim diam quis enim lobortis scelerisque fermentum. Duis ultricies lacus sed turpis. Tristique risus nec feugiat in fermentum. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui ut ornare lectus sit amet est placerat in. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Dui accumsan sit amet nulla. Dignissim convallis aenean et tortor at. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit sed vulputate mi sit amet mauris commodo quis. A cras semper auctor neque vitae.</p>
                            </div>
                        </div>
                    </div>
                </li>

            </div>
        )
    }
}
