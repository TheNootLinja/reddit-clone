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
      postDate: "04/20/2020",
      postSub: "r/dogecoin",
      postID: Math.random() * 999999,
      postLikes: Math.randon()
    },
  ]
  console.log(postList)
  return <div className="App">
    <Header />
    <Cards posts={postList} />
  </div>;
}

export default App;
