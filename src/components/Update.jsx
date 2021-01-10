import { useState, useEffect } from 'react';
import { db } from '../firebase/init';

const UpdatePost = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const getPost = async () => {
    const docRef = await db
      .collection('posts')
      .doc(props.match.params.id)
      .get();

    const post = docRef.data();

    setTitle(post.title);
    setContent(post.content);
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = async (e) => {
    e.preventDefault();

    await db.collection('posts').doc(props.match.params.id).update({
      title,
      content,
    });
    setTitle('');
    setContent('');

    props.history.push('/');
    //console.log(title, content);
  };

  if (!title) return <p className='lead container'>Loading...</p>;

  return (
    <form onSubmit={update}>
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
        className='btn btn-dark'
      >
        Update
      </button>
    </form>
  );
};

export default UpdatePost;
