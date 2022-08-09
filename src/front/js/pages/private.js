import React from "react";

const Private = () => {
    return (
        <>
            {
                localStorage.length > 0 ?
                    <div className=" justify-content-center">
                        <div> You have logged in! </div>
                    </div> :
                    <div>Access denied. Please, Log in</div>
            }
        </>
    )
}

export default Private;