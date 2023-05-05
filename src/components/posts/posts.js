import "./posts.css"

export default function posts() {
  return (
    <div className="posts">
        <img
        className="postsImg"
        src="https://images.pexels.com/photos/7869562/pexels-photo-7869562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
        />
        <div className="postsInfo">
            <div className="postsCats">
                <span className="postsCat">Music</span>
                <span className="postsCat">Life</span>
            </div>

            <span className="postsTitle">
                lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postsDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
    </div>
  )
}
