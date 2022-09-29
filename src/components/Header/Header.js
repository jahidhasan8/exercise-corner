

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = () => {

    // icon addded on title
    return (
        <div className='header'>
            <h2 className='title-text'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Easy Exercise corner </h2>

            <p>
                <b>
                    Energy is for Everyone <br />
                    Believe in the power of a motivating group exercise community.

                </b>
            </p>
        </div>
    );
};

export default Header;