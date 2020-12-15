import React from 'react'
import './Service.sass'

type ServicePropsType = {
    img: string
    headerText: string
    text: string
}

const Service: React.FC<ServicePropsType> = ({ img, headerText, text }) => {
    return (
        <div className="service-item">
            <div className="service-item__img">
                <img src={img} alt="img" />
            </div>
            <div className="service-item__name">
                {headerText}
            </div>
            <div className="service-item__text">
                {text}
            </div>
        </div>
    )
}

export default Service