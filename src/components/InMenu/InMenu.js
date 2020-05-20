import React, {Fragment, useState} from 'react'
import styless from "./InMenu.module.sass";

function InMenu() {
    const [opened, setOpened] = useState(false);

    function handler() {
        setOpened(!opened);
    }

    return (
        <Fragment>
            <div className={styless.Block}>
                <div className={styless.ButtonBlock} style={opened ? {backgroundColor: "#fff"} : {animation: "radial-pulse 1s infinite"}}>
                    <img onClick={handler} src="./assets/img/in.png" alt="img" />
                </div>
                <div className={styless.Card} style={opened ? {right: "1%"} : {right: "-30%"}}>
                    <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="denfedweb"><a className="LI-simple-link" href='https://md.linkedin.com/in/denfedweb/en-us?trk=profile-badge'>Denis Fedorovici</a></div>
                </div>
            </div>
        </Fragment>
    )
}

export default InMenu;
