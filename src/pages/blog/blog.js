import React, {Fragment} from 'react';

function Blog() {
    return (
        <Fragment>
            <div style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img src="/assets/img/mem.gif" alt="img" style={{marginTop: "30px"}} />
                <p>Under development</p>
            </div>
        </Fragment>
    );
}

export default Blog;
