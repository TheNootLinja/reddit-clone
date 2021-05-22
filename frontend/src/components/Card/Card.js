import './Card.styles.css';

function Card({ post }) {
  return (
    <div className="card">
      <p className="sub">{post.postSub}</p>
      <p className="author">u/{post.postAuthor}</p>
      <p className="date">{post.postDate}</p>
      <h3 className="title">{post.postTitle}</h3>
      <div className="flair-container">
        <span className="flair">{post.postFlair}</span>
      </div>
      <div className="content-container">
        <p>{post.postContent}</p>
      </div>
    </div>
  );
}

export default Card;
