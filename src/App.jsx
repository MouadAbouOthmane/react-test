import './App.css';
import Nav from './navbar/nav'
import Content ,{ Sidebar } from './content'

function App() {

    return (
        <div>
            <Nav />
            <Content position={1} />
            <Sidebar />
        </div>
    )
}



export default App;
