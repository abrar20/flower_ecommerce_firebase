import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
export default function AuthWrapper({headline1,headline2,path, children}) {
    return (
        <div className="authWrapper">
            <div className="container">
            {headline1 && headline2 && (<div>
                <h2 className="headline1">{headline1}</h2>
            <Link to={path}><h2 className="headline2">{headline2}</h2></Link>
            </div>
            )}
            <div className="wrap">
                
                <div className="children">
                {children && children}
                </div>

            </div>
            </div>
        </div>
    )
}
