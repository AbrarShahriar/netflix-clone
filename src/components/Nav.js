import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, setShow] = useState(false)

    useEffect(() => {
       
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && `nav__bg`}`}>
            <img className='nav__logo' src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="logo"/>
            
            <img className='nav__avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar"/>
        </div>
    )
}

export default Nav
