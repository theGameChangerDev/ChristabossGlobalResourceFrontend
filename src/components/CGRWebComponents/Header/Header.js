import React from 'react'
/*import { Div } from './HeaderElements'*/
import classes from './Header.module.css';
import {Link} from 'react-router-dom'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import {  faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'*/






function Header() {
    return(
       <header className={classes.pageheader}>
           <div className={classes.container}>
                <span className={classes.phoneContact}>
                    <span className={classes.headerContact}>
                       +234 810 551 7626, +234 905 722 6965
                    </span>
                    <span className={classes.headerEmail}>
                        <Link to="/christabossglobal@yahoo.com">info@christabossglobal@yahoo.com
                        </Link>
                    </span>
                </span>
            </div>
        </header>
    )
    
}

export default Header
