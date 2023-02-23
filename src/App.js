import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

function App() {

    const theme = "dark";
    const title = "Add Your Todo:";

    return (
        <>
            <Nav theme={theme} />
            <Todo title={title} />
        </>
    );
}

export default App;
