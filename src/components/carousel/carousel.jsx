import React, { Component } from "react";
import "../../_custom.scss";

class Carousel extends Component {
    render() {
        var { images } = this.props;
        var { carouselId } = this.props;
        var { carouselIdTarget } = this.props;
        debugger
        return (
            <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {images.map((item, index) => (
                        <li type="button" data-bs-target={carouselIdTarget} data-bs-slide-to={index} className={`${index == 0 ? 'active' : ''}`} aria-current="true" aria-label={`Slide ${index}`}></li>
                    ))}
                </div>
                <div className="carousel-inner">
                    {images.map((item, index) => (<div className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                        <img src={item.url} className="d-block w-100" alt="..." />
                    </div>))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={carouselIdTarget} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={carouselIdTarget} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        );
    }
}

export default Carousel;
