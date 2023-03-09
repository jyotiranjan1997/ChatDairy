import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { signup } from "../../Redux/Auth/authAction";
import Swal from "sweetalert2";
const initialState = {
  name: "",
  email: "",
  dateOfBirth: "",
  password: "",
};

export default function Signup({ setPage }) {
  const [formData, setFormdata] = useState(initialState);
  const { loading, auth, error } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const signUp_auth = () => {
    if (!loading) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      } else if (auth) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup Successfully !",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => setPage(true));
      }
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.dateOfBirth == "" ||
      formData.password == ""
    ) {
      Swal.fire("Please Fill all Details");
    } else {
      await dispatch(signup(formData));
    }
  };
  
  useEffect(() => {
    signUp_auth();
  }, [loading]);
  return (
    <div class="form-container sign-up-container">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div class="social-container">
          {/* <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a> */}
        </div>
        <span>or use your email for registration</span>
        <input
          class="Input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          class="Input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          class="Input"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          type="date"
          placeholder="Date "
        />
        <input
          class="Input"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button class="btn_sign" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
