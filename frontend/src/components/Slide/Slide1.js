import React, { Component } from 'react'

export default class Slide1 extends Component {
    render() {
        return (
            <div className="bg-image ripple" data-mdb-ripple-color="light">
                <img src="img/buy-btn.jpg" className="w-100" />
                <a href="https://store.nerdgearz.com">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <h1 className="text-white mb-0">BUY</h1>
                            <h2 className="text-white mb-0">SMART</h2>
                        </div>
                    </div>
                    <div className="hover-overlay">
                        <div
                            className="mask"
                            style={{}}>
                            {/* style="background: linear-gradient(
                                            45deg,
                                            rgba(29, 236, 197, 0.5),
                                            rgba(91, 14, 214, 0.5) 100%
                                            );"> */}
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <h1 className="text-white mb-0">BUY</h1>
                                <h2 className="text-white mb-0">SMART</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
