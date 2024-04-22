import './Navbar.css'

const Navbar = () => {
    const slideToSection = (section) => {
        const element = document.getElementById(section)
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='navbar'>
            <div className='navbar-start'>
                <img src="/assets/images/logoAutoYa.png" alt="logo de autoya" style={{ maxHeight: '50px', marginBlock: '5px' }} />
            </div>
            <div className='navbar-end'>
                <button className='primary-button' onClick={() => slideToSection('quienes-somos')}>Quienes somos</button>
                <button className='primary-button' onClick={() => slideToSection('mision')}>Misión</button>
                <button className='primary-button' onClick={() => slideToSection('vision')}>Visión</button>
            </div>
        </div>
    )
}

export default Navbar
