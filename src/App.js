import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Hero from "./Components/Hero";
// import HeadlineCards from "./Components/HeadlineCards";
// import Food from "./Components/Food";
// import Category from "./Components/Category";

import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import Order from "./Components/Order";
import Favorites from "./Components/Favorites";
import Wallet from "./Components/Wallet";
import Help from "./Components/Help";
import Promotions from "./Components/Promotions";
import Invite from "./Components/Invite";
import ForgotPassword from "./Components/ForgotPassword";
import NotFound from "./Components/NotFound";
import Cart from "./Components/Cart";
import ResetPassword from "./Components/Reset";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/hero" element={<Hero />} />
        <Route path="/headlineCards" element={<HeadlineCards />} />
        <Route path="/food" element={<Food />} />
        <Route path="/category" element={<Category />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<Order />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/help" element={<Help />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dataNotFound" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

      </Routes>
    </Router>
  );
};

export default App;
