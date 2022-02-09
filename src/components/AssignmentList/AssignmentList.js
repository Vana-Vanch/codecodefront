import React, { useContext,useEffect } from 'react';
import './../AssignmentList/style.css';
import Announcement from '../Announcement/Announcement';
import { UserContext } from '../../UserContext';
import {useNavigate} from "react-router-dom";


const AssignmentList = () => {
   let navigate = useNavigate();
   const {user,setUser} = useContext(UserContext);

   useEffect(()=>{
      if(checkUser()){
        console.log('authenticated');
      }else{
        navigate('/about')
      }
    })
  
    const checkUser = () =>{
      if(user){
        return true;
      }else{
        return false;
      }
    }

  return <>
  <section className='container'>
        <div className='assignment-container'>
        
            <div className='assignment'>
            {/* <h3>Assignment</h3> */}
                <div className='box'>
                
               <a href="#"> <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
            </p>
                <p>Date: 20.22.22</p>
                </a> </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
                </p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
                <div className='box'>
                <a href="#">
                <h4>Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore esse omnis alias nisi, est deleniti laborum, dignissimos officia dolores ipsum inventore nemo maiores neque non at recusandae ea?
             .</p>
                <p>Date: 20.22.22</p></a>
                </div>
            </div>
           
        </div>
        <div>
                <Announcement />
            </div>
 
  </section>;
</>
};

export default AssignmentList;

