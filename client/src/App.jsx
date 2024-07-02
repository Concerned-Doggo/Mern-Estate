import { BrowserRouter, Routes, Route } from "react-router-dom"
import {About, Home, SignIn, SignUp, Profile, CreateListing} from './Pages';
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-listing" element={<CreateListing />} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
