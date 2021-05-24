import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  const postList = 
  [
    {
      postTitle: "First Test Post",
      postAuthor: "TheNootLinja",
      postType: "Post",
      postFlair: "Meme",
      postContent: "This is a test of a post to see how the cards look.",
      postImage: null,
      postDate: "04/20/2020",
      postSub: "r/dogecoin",
      postID: Math.random() * 999999,
      postLikes: Math.floor(Math.random() * 1000),
    },
    {
      postTitle: "Second Test Post",
      postAuthor: "TheNootLinja",
      postType: "Image",
      postFlair: "Meme",
      postContent: "This is a test of a post to see how the cards look.",
      postImage: "https://images.pexels.com/photos/843519/pexels-photo-843519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      postDate: "04/20/2020",
      postSub: "r/dogecoin",
      postID: Math.random() * 999999,
      postLikes: Math.floor(Math.random() * 1000),
    },
  ]
  console.log(postList)
  return <div className="App">
    <Header />
    <Cards posts={postList} />
  </div>;
}

export default App;
