import { BrowserRouter as Router, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "./firebase.js";
import './App.css';
import Dash from "./dash.jsx"
import { useEffect } from 'react';
import Shop from './Shop.jsx';
import Listing from './Listing.jsx';
import BookCar from './BookCar.jsx';

function App() {

  /* const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/dash",
      element: <Dash/>
    },
    {
      path:"/shop",
      element: <Shop/>
    },
    {
      path:"/*",
      element: <h1>404 bro</h1>
    },
  ]) */

  return(
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/car_listing/:id" element={<Listing />} />
        <Route path="/book_car" element={<BookCar />} />
        <Route path="/*" element={<h1 style={{textAlign:"center"}}>Yep! That's a 404</h1>} />
      </Routes>
  )
  
}

function Home1() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/shop");
  }, []);
}

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      if (user) {
        navigate("/dash");
      }

    })
  },[])

  const handleLogin = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const promise = await signInWithEmailAndPassword(auth, email, password);
      console.log(promise);
      navigate("/dash");
    }
    catch (error) {
      console.log(error.message);
    }

  }

    const handleSignup = async(e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get("name");
      const email = form.get("email");
      const password = form.get("password");
  
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName:name})
        console.log("User Created with name ", auth.currentUser.displayName);
        navigate("/dash");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            console.error("This email is already registered. Please log in.");
        } else {
            console.error("Error:", error.message);
        }
      }
  }

  return(
    <>
      <h1> Login with email </h1>
      <form onSubmit={(e) => handleLogin(e)}>
        
        <label htmlFor="email">Email:</label>
        <input type='email' name='email'/> <br/>
        <label htmlFor="password">Password:</label>
        <input type='password' name='password'/> <br/> 
        <button type='submit'>Submit</button>    

      </form>

      <h1> Signup with email </h1>
      <form onSubmit={(e) => handleSignup(e)}>
        
        <label htmlFor="name">Name:</label>
        <input type='text' name='name'/> <br/>
        <label htmlFor="email">Email:</label>
        <input type='email' name='email'/> <br/>
        <label htmlFor="password">Password:</label>
        <input type='password' name='password'/> <br/>
        <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default App
