import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AllBooks from "./components/pages/AllBooks/AllBooks";
import Login from "./components/pages/Login/Login";
import RegistrationPage from "./components/pages/Registration/Registration";
import Towns from "./components/pages/Towns/Towns";
import Countries from "./components/pages/Countries/Countries";
import Users from "./components/pages/Users/Users";
import Cart from "./components/pages/Cart/Cart";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all" element={<AllBooks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/towns" element={<Towns />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/users" element={<Users />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;