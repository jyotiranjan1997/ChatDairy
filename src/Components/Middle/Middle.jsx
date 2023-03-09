import styles from "./home.module.css";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Caraousel } from "../Caraousel/Caraousel";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import SingleChat from "./SingleChat";
import { useNavigate } from "react-router-dom";
import { PickerOverlay } from "filestack-react";
import { Button } from "@chakra-ui/react";
import Swal from "sweetalert2";
import Post from "../Post/Post";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  image_url: "",
  title: "",
  tags: "",
  containt: "",
};

const get_data = async (token) => {
  return await axios.get(
    "https://chartdiarybackend-production.up.railway.app/post",
    {
      headers: {
        "Content-type": "application/json",
        Auth: `Bearer ${token}`,
      },
    }
  );
};

export default function Middle({ handlePage }) {
  const [isPickup, setPickup] = useState(false);
  const [image_url, setImage] = useState("");
  const [post, setPost] = useState([]);
  const { authToken } = useSelector((store) => store.authLogin);
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/chart");
  };

  const handlePickup = (e) => {
    e.preventDefault();
    setPickup(!isPickup);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.image_url = image_url;

    if (!data.image_url || !data.title) {
      window.alert("please fil");
    } else {
      console.log(data);
    }
  };

  const get_posts = async () => {
    try {
      let res = await get_data(authToken.user_token);
      setPost(res.data.posts);
    } catch (err) {}
  };

  useEffect(() => {
    get_posts();
  },[])

  return (
    <div className={styles.middle}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <div onClick={handlePage}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-full w-20"
              alt="Avatar"
            />
          </div>
          <div>
            <CircumIcon name="bell_on" />
          </div>
          <div onClick={handleClick}>
            <CircumIcon name="chat_2" />
          </div>
        </div>
      </div>
      <div>
        <Caraousel ele={[1, 2, 3, 4]} />
      </div>

      <div>
        <div className={styles.imageUploder}>
          <form
            onSubmit={handleSubmit}
            className="bg-blue-100 shadow-md rounded lg:w-2/5 mt-10px  w-full flex-colo py-6 px-4"
          >
            <input
              placeholder="Enter Post Title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <input
              placeholder="Write About Post"
              name="containt"
              value={data.containt}
              onChange={handleChange}
            />
            <input
              placeholder="Tags"
              name="tags"
              value={data.tags}
              onChange={handleChange}
            />

            {isPickup && (
              <PickerOverlay
                apikey={"AXwxB2tFnRvSuBN35HzvXz"}
                onSuccess={(res) => console.log(res)}
                onUploadDone={(res) => setImage(res.filesUploaded[0].url)}
              />
            )}
            {image_url ? (
              <img src={image_url} alt="post_image" />
            ) : (
              <button
                onClick={handlePickup}
                className="w-full text-lg  border-dashed h-12 border-2 border-teal-300 text-grey-300"
              >
                select image
              </button>
            )}

            <div>
              <button type="submit">Add Post</button>
            </div>
          </form>
          <div className={styles.Post}>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
