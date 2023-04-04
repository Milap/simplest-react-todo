import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Alert from './components/Alert';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
    const [alert, setAlert] = useState(null);

    const appTitle = "Simplest ToDo";
    const title = "Add New Todo";

    // Alert function to show alert messages
    const showAlert = (msg, type) => {
        setAlert({
            msg: msg,
            type: type
        });

        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

    return (
        <>
            <Nav appTitle={appTitle} showAlert={showAlert} />
            <Alert alert={alert} />
            <div className='container my-4 col-md-4 text-left'>
                <Routes>
                    <Route index element={<Todo title={title} showAlert={showAlert} />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;