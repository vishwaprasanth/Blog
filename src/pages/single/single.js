import "./single.css";
import SideBar from "../../components/sidebar/sideBar"
import SinglePost from "../../components/singlepost/singlePost";


export default function single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  )
}
