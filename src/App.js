import React, { useRef, useState } from 'react';
import ClassCounter from './components/classCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App(){
    const[posts, setPosts] = useState([
      {id:1, title: 'Javascript', body: 'Description'},
      {id:2, title: 'Javascript', body: 'Description'},
      {id:3, title: 'Javascript', body: 'Description'},
    ])
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('');

    const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
        id:Date.now().
        title,
        body
      }
      setPosts([...posts, newPost])
     
    }

return(
  <div className='App'>
    <form>
      <MyInput
       value={title}
       onChahge={e => setTitle(e.target.value)}
       type="text"
       placeholder='Название поста'
       />
      <MyInput 
      value={body}
      onChahge={e => setBody(e.target.value)}
      type="text" 
      placeholder='Описание поста'
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про Javascipt"/>
  </div>
);
}

export default App;

