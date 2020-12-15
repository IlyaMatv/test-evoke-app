import React, { useState } from 'react'
import './Content.sass'
import WorkItem from './Content/WorkItem/WorkItem';
import net from '../../assets/net.png'
import azure from '../../assets/azure.png'
import o365 from '../../assets/o365.png'
import sharepoint from '../../assets/sharepoint.png'
import umbraco from '../../assets/umbraco.png'


const Content: React.FC = () => {

    const [dataContent, setDataContent] = useState([
        { id: 0, name: '.NET', img: net, text: 'EVOKE Systems is focused on enterprise and mobile software development. We also provide IT consulting and integration services.' },
        { id: 1, name: 'Azure', img: azure, text: 'Also, we offer creative services (UI/UX) for web and mobile applications (Windows Phone, iOS, Android)' },
        { id: 2, name: 'SharePoint', img: sharepoint, text: 'Main expertise of EVOKE Systems is custom applications development on SharePoint (SharePoint Online, O356, SharePoint 2010/2013), and ASP.NET platforms' },
        { id: 3, name: 'Office 365', img: o365, text: 'EVOKE (www.evokenewyork.com) is our headquarter company and main partner, it successfully works on a global IT services market from 2005 year.' },
        { id: 4, name: 'Umbraco', img: umbraco, text: 'Umbraco is the leading open source Microsoft ASP.NET CMS.' }
    ])

    return (
        <div className="content">
            {dataContent.map(el => {
                return (
                    <WorkItem
                        key={el.id}
                        name={el.name}
                        img={el.img}
                        text={el.text}
                    />
                )
            })}
        </div>
    )
}

export default Content