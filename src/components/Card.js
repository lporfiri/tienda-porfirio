import React from 'react'


function Card ({title,imageSRC}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSRC} alt="" />
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quidem voluptate consectetur laboriosam consequatur perferendis aspernatur! Sint assumenda sit modi, molestias temporibus blanditiis iure voluptates rem explicabo. Temporibus, voluptates optio.</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                    Go!
                </a>
            </div>
        </div>
    )
}

export default Card
