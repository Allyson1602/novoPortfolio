import { Main } from "components/common/main/main.component";
import Contact from "components/pages/contact/contact.component";
import Home from "components/pages/home/home.component";
import Portfolio from "components/pages/portfolio/portfolio.component";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default Router;
