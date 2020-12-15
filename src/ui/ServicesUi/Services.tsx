import React, { useState } from 'react'
import './Services.sass'
import serv1 from '../../assets/serv1.png'
import serv2 from '../../assets/serv2.png'
import serv3 from '../../assets/serv3.png'
import Service from './ServiceUi/Service'

const Services: React.FC = () => {

    const [servicesData, setServicesData] = useState([
        { id: 0, img: serv1, headerText: 'Заказная разработка приложений', text: 'Наши знания, экспертиза и опыт в различных направлениях позволяют нам создавать решения, которые выводят бизнес наших клиентов на новый уровень.' },
        { id: 1, img: serv2, headerText: 'Консалтинг и оптимизация', text: 'Мы следим за тенденциями развития цифровых технологий и понимаем специфику различных отраслей. Мы поможем вам найти оптимальный путь от задачи к желаемому результату. Мы консультируем по вопросам, важным для вашей сферы бизнеса, и предоставляем рекомендации о внедрении передовых технологий для оптимизации управленческих решений.' },
        { id: 2, img: serv3, headerText: 'Техническая поддержка и сопровождение', text: 'Мы оказываем профессиональную техническую поддержку и сопровождение вашего проекта.' }
    ])

    return (
        <div className="services">
            {servicesData.map(el => {
                return (
                    <Service
                        img={el.img}
                        headerText={el.headerText}
                        text={el.text}
                    />
                )
            })}
        </div>
    )
}

export default Services

