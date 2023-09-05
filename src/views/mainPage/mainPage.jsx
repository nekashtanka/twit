import NewPost from './../../components/modules/newPost/newPost';
import Post from './../../components/modules/post/post';
import './s_mainPage.scss';
import { useEffect, useState } from 'react';
import { isLoggedIn } from "./../../API/bd/session";
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../API/bd/fireBase';
import { getAuth } from 'firebase/auth';
import Button from '../../components/UI/button/button';

const MainPage = () => {
  const navigate = useNavigate()
  const [postsData, setPostsData] = useState([])
  const [newPost, setNewPost] = useState(false)

  async function fetchData() {
    setPostsData(await getPosts())
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    
    // eslint-disable-next-line
    const auth = getAuth();

    fetchData()
  }, [navigate, newPost]);

  return (
    <div className='wrapper_main_page'>
      {newPost ? <NewPost setNewPost={setNewPost} index={postsData.length}/> : <Button text='Новый пост' onClick={() => setNewPost(true)} />}
      {postsData.map(elem => {
        return (
          <div key={elem.id}>
            <Post text={elem.data.text} user={elem.data.user} />
          </div>
        )
      })}
    </div>
  )
}

export default MainPage