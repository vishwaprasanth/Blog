import "./settings.css";
import Sidebar from "../../components/sidebar/sideBar"

export default function settings() {
  return (
    <div className="settings">
       <div className="settingsWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update your account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                src="https://images.pexels.com/photos/7302162/pexels-photo-7302162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Vishwa Prasanth"/>
            <label>Email</label>
            <input type="email" placeholder="VIshwaprasanth1411@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">
            Update
            </button>
            
        </form>
       </div>
        <Sidebar />
    </div>
  )
}
