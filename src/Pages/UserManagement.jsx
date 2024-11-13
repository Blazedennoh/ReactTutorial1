import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header/Header";
import { openPreloader,closePreloader } from "../Redux/Features/PreLoaderSlice";
import { useSelector,useDispatch } from "react-redux";
import Preloader from "../Preloader/Preloader";
const UserManagement = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  const resetCounter=()=>{
    setCounter(0);
  }
 
  const navigate = useNavigate()
  const [todos, setTodos] = useState([]);

  const dynamicUsers = JSON.parse(localStorage.getItem("users")) || []
  const isAuthenticated = !!localStorage.getItem("token");
  console.log(isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }
  const navItems = [
    'HOME',
    'USERS',
    'ALUMNI',
    'ABOUT'
   



  ]


  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const data= await response.json();
      setTodos(data);
    }
    fetchTodos()
  }, []);
  
  return (
    <div className="flex flex-col h-screen w-full  items-center">
      <Header name="elon musk"  navItems={navItems} increaseCounter={increaseCounter} 
      decreaseCounter={decreaseCounter} 
      counter={counter}  />
      <div>

        <p className="text-[4rem] text-counter ">{counter}</p>
      </div>
      <div className="w-full px-[2%]">
        <table className="w-[100%] mx-auto border border-neutral-300">
          <thead className="bg-black text-white">
            <tr>
              <td className="py-[0.5rem] px-[1rem]">First Name</td>
              <td className="py-[0.5rem] px-[1rem]">Last Name</td>
              <td className="py-[0.5rem] px-[1rem]">Email</td>
              <td className="py-[0.5rem] px-[1rem]">Edit</td>
              <td className="py-[0.5rem] px-[1rem]">Delete</td>
            </tr>
          </thead>
          <tbody>
            {dynamicUsers?.map((user, index) => (
              <tr className="border-b border-neutral-300" key={index}>
                <td className="py-[0.5rem] px-[1rem]">{user.FName}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.LName}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.email}</td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-green-500 text-white px-[1rem] py-[0.5rem]">
                    Edit
                  </button>
                </td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-red-500 text-white px-[1rem] py-[0.5rem]">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full">
          <th>
            <tr>USER ID</tr>
            <tr>ID</tr>
            <tr>TITLE</tr>
          </th>
        </table>
        <Link to="/" className="text-blue-500" onClick={handleLogout}>Logout?</Link>
      </div>
      {/* <Preloader/> */}
    </div>
    
  );
};

export default UserManagement;
