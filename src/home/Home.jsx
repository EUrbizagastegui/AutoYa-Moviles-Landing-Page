import Navbar from '../components/navbar/Navbar'
import QuienesSomos from '../sections/quienes-somos/QuienesSomos'
import Mision from '../sections/mision/Mision'
import Vision from '../sections/vision/Vision'
import Footer from '../components/footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-navbar'>
                <Navbar />
            </div>
            <div id='quienes-somos' className='home-quienes-somos'>
                <QuienesSomos />
            </div>
            <div id='mision' className='home-mision'>
                <Mision />
            </div>
            <div id='vision' className='home-vision'>
                <Vision />
            </div>
            <div className='home-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home
