import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AllBooks from "./components/pages/AllBooks/AllBooks";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all" element={<AllBooks />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;