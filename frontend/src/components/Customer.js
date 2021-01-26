import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <section id="our-customer">
                <div class="container my-5">
                    <h1 class="display-5"><i class="far fa-comments"></i> Our Customers</h1>
                    <hr class="mb-5" />
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <figure>
                                <blockquote class="blockquote">
                                    <div
                                        class="avatar w-100 white d-flex justify-content-center align-items-center"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                            class="img-fluid rounded-circle z-depth-1"
                                        />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.
                                    </p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Alan Turing <cite title="Source Title">from Marysville, OH</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-12 col-md-4">
                            <figure>
                                <blockquote class="blockquote">
                                    <div
                                        class="avatar w-100 white d-flex justify-content-center align-items-center"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg"
                                            class="img-fluid rounded-circle z-depth-1"
                                        />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.
                                    </p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Joanna Thompson <cite title="Source Title">from Sante Fe, OH</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-12 col-md-4">
                            <figure>
                                <blockquote class="blockquote">
                                    <div
                                        class="avatar w-100 white d-flex justify-content-center align-items-center"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                            class="img-fluid rounded-circle z-depth-1"
                                        />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.
                                    </p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Billy Turner <cite title="Source Title">from Oxnard, CA</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
