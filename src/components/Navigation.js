import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Navigation.scss'

function Navigation() {
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
        <nav>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/projects'>Project</Link></li>
                <li><Link to='/about'>About Me</Link></li>
            </ul>

            <div className="mode">
                <input type="checkbox" id="mode" ref={refCheckbox} onClick={changeMode} />
                <label htmlFor="mode" className='choose-mode'></label>
            </div>
        </nav>
    )
}

export default Navigation
