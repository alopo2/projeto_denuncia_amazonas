import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes