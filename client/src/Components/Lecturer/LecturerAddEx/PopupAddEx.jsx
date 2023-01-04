import React from "react";
import './PopupAddEx.css'


function Popup(props) {
    return (props.trigger) ? (
            <div className="popupAddHW">
                <div className="popupAddHW-inner">
                {props.children}
                </div>
            </div>
    ) : "";

}

export default Popup