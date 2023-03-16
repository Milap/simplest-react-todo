import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

function App() {
    const appTitle = "Simplest ToDo";

    return (
        <>
            <Nav appTitle={appTitle} />
            <div className='container my-4 col-md-4 text-left'>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;