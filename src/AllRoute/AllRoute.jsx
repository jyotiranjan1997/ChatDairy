import { Route, Router, Routes } from "react-router-dom";
import Chat from "../Pages/Chat/Chat";
// import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export default function AllROute() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute> {<Home />}</PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/chart" element={<PrivateRoute> {<Chat />}</PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute> {<Chat />}</PrivateRoute>} />
    </Routes>
  );
}
