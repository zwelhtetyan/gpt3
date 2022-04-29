import './App.css';
import Brand from './components/brand/Brand';
import Navbar from './components/navbar/Navbar';
import { Home, WhatIsGpt3, Feature, Possibility } from './pages';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Home />
            <Brand />
            <WhatIsGpt3 />
            <Feature />
            <Possibility />
        </div>
    );
};

export default App;
