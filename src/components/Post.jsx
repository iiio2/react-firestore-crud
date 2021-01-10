import { Link } from 'react-router-dom';

const Post = ({ posts, deletePost }) => {
  return (
    <div className='container'>
      {posts.map((post) => (
        <div className='card my-2 px-2' key={post.id}>
          <Link to={`/edit/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <p className='lead'>{post.content}</p>
          <button
            onClick={() => deletePost(post.id)}
            className='btn btn-danger btn-sm'
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
