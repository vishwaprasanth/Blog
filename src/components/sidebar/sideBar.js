import "./sideBar.css";

export default function sideBar() {
  return (
    <div className='sideBar'>
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
        </div>
        <div className="ideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Cinema</li>
            <li className="sideBarListItem">Tech</li>
        </ul>
        </div>

        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
                <i className="sideBarIcon fa-brands fa-square-facebook"></i>
                <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                <i className="sideBarIcon fa-brands fa-square-twitter"></i>
                <i className="sideBarIcon fa-brands fa-square-github"></i>
            </div>
        </div>
        
    </div>
  )
}
