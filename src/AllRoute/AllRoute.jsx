import { Route, Router, Routes } from "react-router-dom";
import Chat from "../Pages/Chat/Chat";
import Chat2 from "../Pages/Chat/Chat2";
import Home from "../Pages/Home/Home";
import Login2 from "../Pages/Login/Login2";
import Profile from "../Pages/Profile/Profile";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export default function AllROute() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute> {<Home />}</PrivateRoute>} />
      <Route path="/login" element={<Login2 />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/chart" element={<PrivateRoute> {<Chat2 />}</PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute> {<Chat />}</PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute> {<Profile />}</PrivateRoute>} />
    </Routes>
  );
}
