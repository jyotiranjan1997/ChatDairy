import { useEffect, useState } from "react";
import Signup from "./Signup";
import "./Login2.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import { login } from "../../Redux/Auth/authAction";

const initialState = {
  email: "",
  password: "",
};
export default function Login2() {

  const [page, setPage] = useState(false);
   const { is_loading, is_error, authToken } = useSelector(
     (store) => store.authLogin
   );
   const [formData, setFormdata] = useState(initialState);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormdata({ ...formData, [name]: value });
   };
   const login_auth = () => {
     if (!is_loading) {
       if (is_error) {
         Swal.fire({
           icon: "error",
           title: "Oops...",
           text: is_error,
         });
       } else if (authToken) {
         Swal.fire({
           icon: "success",
           title: "Login Successfully !",
         }).then(() => navigate("/"));
       }
     }
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(formData);
     if (formData.email == "" || formData.password == "") {
       Swal.fire("Please Fill all Details");
     } else {
       await dispatch(login(formData));
     }
   };

   useEffect(() => {
     login_auth();
   }, [is_loading]);


  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");
    if (page) {
      container.classList.remove("right-panel-active");
    }
    
  }, [page]);

  return (
    <div className="containerx">
      <div class="container" id="container">
        <Signup setPage={setPage} />
        {is_loading ? <Loading /> : ""}
        <div class="form-container sign-in-container">
          <form action="#" onSubmit={handleSubmit}  >
            <h1>Sign in</h1>
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
            <span>or use your account</span>
            <input
              class="Input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              class="Input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button class="btn_sign" type="submit" >Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
