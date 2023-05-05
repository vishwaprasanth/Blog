import "./home.css";
import Header from "../../components/header/Header";
import Post from "../../components/post/post";
import SideBar from "../../components/sidebar/sideBar";


export default function home() {
  return (
    <>
      <Header />
      <div className="home">
          <Post />
          <SideBar />
      </div>
      </>
  )
}
