import '../scss/Header.scss'

function Header() {
    return (
        <header className='intro'>
            <h1 className='hello'>Hello <span title='Hi..' className='emoji'></span></h1>
            <h2 className='tag-line'>
                I'm <span className='name'>Nazir Bahrul Ulum</span>, a front-end web developer focused on building beautiful websites and awesome <span className='emoji'></span>
            </h2>
            <h3 className='email'>Get in touch <span className='emoji'></span> <a className='link-email' href='mailto:nazirbachrululum@gmail.com'>nazirbachrululum@gmail.com</a> </h3>
        </header>
    )
}

export default Header