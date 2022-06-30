import React, { useState } from 'react';
import ClassCounter from './components/classCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
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

return(
  <div className='App'>
    <form>
      <MyInput type="text" placeholder='Название поста'/>
      <MyInput type="text" placeholder='Описание поста'/>
      <MyButton>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про Javascipt"/>
  </div>
);
}

export default App;

