
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits"
import NonVeg from "./pages/NonVeg"
import Offers from "./pages/Offers"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup  from "./pages/Signup"
import Contact  from "./pages/Contact"
import Biscuit  from "./pages/Biscuit"
import Chip  from "./pages/Chip"
import Detergent  from "./pages/Detergent"
import Oil  from "./pages/Oil"
import Rice  from "./pages/Rice"
import Profile  from "./pages/Profile"


// import other pages also

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Vegetables" element={<Vegetables/>} />
        <Route path="/Fruits" element={<Fruits/>} />
        <Route path="/NonVeg" element={<NonVeg/>} />
        <Route path="/Offers" element={<Offers/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Biscuit" element={<Biscuit/>} />
        <Route path="/Chip" element={<Chip/>} />
        <Route path="/Detergent" element={<Detergent/>} />
        <Route path="/Oil" element={<Oil/>} />
        <Route path="/Rice" element={<Rice/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;