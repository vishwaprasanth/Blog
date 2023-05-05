import "./singlePost.css";

export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            className="singlePostImg"
            src="https://images.pexels.com/photos/2434590/pexels-photo-2434590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
        </div>
    </div>
  )
}
