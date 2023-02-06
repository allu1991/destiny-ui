import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import backgroundImg from './images/background-blur-bg2.webp';

function App() {

    return (
        <div className="App">

            <CustomCursor />
            
            <Header />

            <img className='main-bg-img' src={backgroundImg} alt="" />

            <main className='app-main'>
                <MainContent />
            </main>
            
            <Footer />

        </div>
    );
}

export default App;
