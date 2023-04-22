import './App.css'
import {Main} from "./components/Main";
import {Hero} from "./components/Hero";
import {Header} from "./components/Header";
import { SideBar} from "./components/SideBar";

function App() {
    return <Main>
        <Header/>
        <Hero/>
        <SideBar/>
    </Main>

}

export default App
