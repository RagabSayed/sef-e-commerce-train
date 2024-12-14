import React from 'react';
import mainImag from '../asstes/main-img.png'

export default function Main() {
    return (
        <div className="position-relative">
            <div className="m-2 img-div">
                <img src={mainImag} alt="main-img" className="d-block img-fluid rounded" />
            </div>
            <div className="position-absolute top-50 start-0 text-light mx-5 px-5">
                <h4>Welcome to our stor</h4>
                <p>Welcome to our stor! Discover a wide range of heigh-quality products at competitive prices. Enjoy a seamless shopping axperience with fast delivery and exclusive deals.</p>
            </div>
        </div>
    )
}
