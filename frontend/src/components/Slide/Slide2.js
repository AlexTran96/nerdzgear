import React, { Component } from 'react'

export default class Slide2 extends Component {
    render() {
        return (
            <div className="bg-image ripple" data-mdb-ripple-color="light">
                <img src="img/sell-btn.jpg" className="w-100" />
                <a href="#startnow">
                    <div
                        className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <h1 className="text-white mb-0">SELL</h1>
                            <h2 className="text-white mb-0">FAST</h2>
                        </div>
                    </div>
                    <div className="hover-overlay">
                        <div
                            className="mask"
                            style={{}}
                            // style="background: linear-gradient(
                            // 45deg,
                            // rgba(29, 236, 197, 0.5),
                            // rgba(91, 14, 214, 0.5) 100%
                            // );"
                            >
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <h1 className="text-white mb-0">SELL</h1>
                                <h2 className="text-white mb-0">FAST</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
