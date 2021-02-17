import React from "react";

function Name(props) {
    return (
        <div className="text-center">
            {props.first}  {props.last}
        </div>
    )
}

export default Name;