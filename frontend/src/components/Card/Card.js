import './Card.styles.css';

function Card({ post }) {
  return (
      <div className='card-container'>
        <div className='card-outer'>
            <div className='likes-container'>
                <p className='likes'>{post.postLikes}</p>
            </div>
            <div className='card'>
                <div className='info-container'>
                    <p className="sub info">{post.postSub}</p>
                    <p className="author info">Posted by u/{post.postAuthor}</p>
                    <p className="date info">{post.postDate}</p>
                </div>
                <div className="title-container">
                    <h3 className="title">{post.postTitle}</h3>
                    <div className="flair-container">
                        <span className="flair">{post.postFlair}</span>
                    </div>
                </div>
                <div className="content-container">
                    <p>{post.postContent}</p>
                    {post.postType === "Image" &&
                    <div className='image-container'>
                        <img className='image' src={post.postImage} alt="" />
                        <div className='sfi-button'>see full image</div>
                    </div>
                    }
                </div>
            </div>
        </div>
      </div>
  );
}

export default Card;
