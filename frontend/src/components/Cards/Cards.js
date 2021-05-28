import Card from '../Card/Card';
import './Cards.styles.css'

function Cards({ posts }) {
  return <div className='card-list'>
      {posts.map((post) => (
          <Card post={post} key={post.postID}/>
      ))}
  </div>;
}

export default Cards;
