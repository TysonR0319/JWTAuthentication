import React from "react";

const Private = () => {
    return (
        <>
            {
                localStorage.length > 0 ?
                    <div className=" justify-content-center">
                        <div> You have access to the private view. Please, Click Button</div>
                        <button type="button" className="btn btn-info">Private View</button>
                    </div> :
                    <div>Access denied. Please, Log in</div>
            }
        </>
    )
}

export default Private;