import {
    BrowserRouter,
    Routes, //replaces "Switch" used till v5
    Route,
} from "react-router-dom";
//component file
import TestSpringReact from "./components/TestSpringReact"
import LoginPageIndex from "./pages/loginPage/LoginPageIndex"
import DashboardPageIndex from "./pages/dashboard/DashboardPageIndex";
import RegisterPageIndex from "./pages/register/RegisterPageIndex";
import ForgotPswPageIndex from "./pages/forgotpsw/ForgotPswPageIndex";

function App() {
     //<TestSpringReact />
        //<LoginPageIndex />
                //<DashboardPageIndex />
        //<RegisterPageIndex />
        //<ForgotPswPageIndex />
    return (

        <BrowserRouter>
            <Routes>
            <Route index element={<LoginPageIndex />} />
            <Route path="register" element={<RegisterPageIndex/>} />
            <Route path="forgotpsw" element={<ForgotPswPageIndex />} />
            </Routes >
        </BrowserRouter>

    );

} export default App