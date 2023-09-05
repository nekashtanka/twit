import NewPost from './../../components/modules/newPost/newPost';
import Post from './../../components/modules/post/post';
import './s_mainPage.scss';
import { useEffect, useState } from 'react';
import { isLoggedIn } from "./../../API/bd/session";
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../API/bd/fireBase';
import { getAuth } from 'firebase/auth';

const MainPage = () => {
  const navigate = useNavigate()
  const [postsData, setPostsData] = useState([])

  async function fetchData() {
    setPostsData(await getPosts())
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    const auth = getAuth();

    fetchData()
  }, [navigate]);

  return (
    <div className='wrapper_main_page'>
      <NewPost />
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