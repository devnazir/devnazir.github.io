import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Navigation.scss'

function Navigation() {
    const ulRef = useRef()
    const hiddenList = () => {
        ulRef.current.classList.remove('show-list')
    }

    return (
        <nav>
            <Hamburger ulRef={ulRef} />
            <ul ref={ulRef}>
                <li onClick={hiddenList}><Link to='/'>Homepage</Link></li>
                <li onClick={hiddenList}><Link to='/projects'>Project</Link></li>
                <li onClick={hiddenList}><Link to='/about'>About Me</Link></li>
            </ul>
            <ChangeMode />
        </nav>
    )
}

function Hamburger({ ulRef  }) {
    const showList = () => {
        ulRef.current.classList.toggle('show-list')
    }

    return (
        <div className="hamburger" onClick={showList}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

function ChangeMode() {
    const refCheckbox = useRef()

    useEffect(() => {
        if (localStorage.getItem('mode')) {
            document.body.classList.add('night')
            refCheckbox.current.checked = true
        }
    }, [])

    const changeMode = () => {
        if (refCheckbox.current.checked) {
            document.body.classList.add('night')
            localStorage.setItem('mode', 'night')
        } else {
            document.body.classList.remove('night')
            localStorage.removeItem('mode')
        }
    }

    return (
        <div className="mode">
            <input type="checkbox" id="mode" ref={refCheckbox} onClick={changeMode} />
            <label htmlFor="mode" className='choose-mode'></label>
        </div>
    )
}

export default Navigation
