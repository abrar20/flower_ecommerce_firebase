import React from 'react'
import './Spinner.scss';
export default function Spinner() {
    return (
        <div className="lds-ellipsis">
            <div className="center">
            <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}
