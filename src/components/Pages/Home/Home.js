import React from 'react'
import Cockpit from "../../Common/Cockpit/Cockpit";

const Home = () => {
    const links = [
        {
            text: 'Linked In',
            href: 'https://www.linkedin.com/in/peteramdavidson'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Peter-NZ'
        },
        {
            text: 'MySpace',
            href: '#'
        }
    ];
    return (
        <Cockpit
      title="Peter Davidson"
      subTitle="FRONT-END WEB DEVELOPER"
      links={links}
    ></Cockpit>
    )
}

export default Home
