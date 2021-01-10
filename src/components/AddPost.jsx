import { useState, Fragment } from 'react';
import Posts from './Posts';

const AddPost = ({ handleAdd, posts, deletePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = (e) => {
    e.preventDefault();

    handleAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Fragment>
      <form onSubmit={addPost}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <input
            type='text'
            className='form-control'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          disabled={title.length === 0 || content.length === 0}
          className='btn btn-success'
        >
          Add
        </button>
      </form>

      <Posts deletePost={deletePost} posts={posts} />
    </Fragment>
  );
};

export default AddPost;
