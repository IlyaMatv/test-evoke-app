import React from 'react'
import './WorkItem.sass'

type WorkItemPropsType = {
    name: string
    img: string
    text: string
}

const WorkItem: React.FC<WorkItemPropsType> = ({ name, img, text }) => {

    return (
        <div className="work-item">
            <div className="work-item__img">
                <img src={img} alt="img" />
            </div>
            <div className="work-item__info">
                <p>
                    {name}
                </p>
                <span>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default WorkItem