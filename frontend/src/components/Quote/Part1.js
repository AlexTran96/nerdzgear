import React, { Component } from 'react'

export default class Part1 extends Component {
    render() {
        return (
            <div>
                <li className="stepper-step stepper-active">
                    <div className="stepper-head">
                        <span className="stepper-head-icon"> 1 </span>
                        <span className="stepper-head-text"> Get Your Quote </span>
                    </div>
                    <div className="stepper-content py-3">
                        <div className="row input-select-quote">
                            <div className="col-12 col-md-4 mb-4">
                                <select className="select">
                                    <option value="1">Graphics Cards</option>
                                    <option value="2">Power Supply</option>
                                    <option value="3">CPU</option>
                                    <option value="4">Hardware Sets</option>
                                    <option value="5">Accessories</option>
                                </select>
                                <label className="form-label select-label">Device type</label>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <select className="select">
                                    <option value="1">Graphics Cards</option>
                                    <option value="2">Power Supply</option>
                                    <option value="3">CPU</option>
                                    <option value="4">Hardware Sets</option>
                                    <option value="5">Accessories</option>
                                </select>
                                <label className="form-label select-label">Device type</label>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <select className="select">
                                    <option value="1">Graphics Cards</option>
                                    <option value="2">Power Supply</option>
                                    <option value="3">CPU</option>
                                    <option value="4">Hardware Sets</option>
                                    <option value="5">Accessories</option>
                                </select>
                                <label className="form-label select-label">Device type</label>
                            </div>
                        </div>
                        <div className="row">
                            <p className="note quote-info mx-2">
                                <strong>Your Quote:</strong> Please select your device
                                    </p>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}
