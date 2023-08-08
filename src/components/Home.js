import React ,{ useState, useEffect }from 'react'
import { NavLink } from 'react-router-dom';
export const Home = () => {
  const [username, setUsername] = useState('');
  const[show,setshow]=useState(false)
  const userHome = async () => {
      try {
          const res = await fetch('/userdata', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const data = await res.json();
          console.log(data);
          setUsername(data.name );
           setshow(true);
          if (!res.status === 200) {
              const err = new Error(res.err);
              throw err;
          }
      } catch (err) {
          console.log(err);
      }
  };

  useEffect(() => {
      userHome();
  }, []);


  return (
  <>
    <section class="homepage" id="home">
      <div class="content">
        <div class="text">
          <p>WELCOME</p>
          <h1>{username}</h1>
         <h2>{show ? 'Happy to see you again': 'we are Mern developer'}</h2>
        </div>
        {show ? <NavLink to="/signup">Get in touch</NavLink>: <NavLink to="/signup">Get connected</NavLink>}
        
      </div>
    </section>
  </>
  )
}
