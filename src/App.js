import './App.css';
import { Brand, Navbar, Register } from './components';
import { Home, WhatIsGpt3, Feature, Possibility, Blog, Footer } from './pages';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Home />
            <Brand />
            <WhatIsGpt3 />
            <Feature />
            <Possibility />
            <Register />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
