import Post from './Post';

const Posts = ({ posts, deletePost }) => {
  return <Post posts={posts} deletePost={deletePost} />;
};

export default Posts;
