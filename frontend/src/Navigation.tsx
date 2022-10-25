import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AllBooks from "./components/pages/AllBooks/AllBooks";
import Login from "./components/pages/Login/Login";
import RegistrationPage from "./components/pages/Registration/Registration";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all" element={<AllBooks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<RegistrationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;