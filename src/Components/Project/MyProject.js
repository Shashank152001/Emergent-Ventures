import React,{useEffect,useState} from 'react';
import profile from './profile.jpg';
import './project.css';
import { AiOutlineDown,AiOutlineSwap } from "react-icons/ai";
import { IoCalendarNumberOutline } from "react-icons/io5";
import NoRecord from './norecord';

const url ='https://6d2e-2409-4088-ae0a-9928-1d9-3b99-5cf5-2ad4.in.ngrok.io/user/get-user-projects';


function MyProject() {
    const[userData,setUserData]  = useState(null);
    useEffect(()=>{
        fetch(url,{
          method:'GET',
          mode:'cors',
          credentials: 'include',
          headers:{
            'Content-Type': 'application/json'
          },
    
        }).then((response)=>{
              return response.json();
        }).then((data)=>{
           console.log(data.data)
          setUserData(data.data);
        })
      },[])
  return (
    <section className='project-container'>

        <div className='project-heading'>
            <div><h1 style={{fontSize:"1.5rem"}}>My Projects</h1></div>
            <div style={{display:'flex'}}>
                <AiOutlineSwap className='rotate-90'/>
                <button className='sort-button' style={{border:'none'}}>Sort<AiOutlineDown className='arrow-down'/></button>
            </div>
        </div>
        <div className='project-content'>
            {userData?
            <table>
                <thead>
                <tr id='table-heading'>
                    <th>Project Name</th>
                    <th>Assigned on</th>
                    <th>To be submitted on</th>
                    <th>Status</th>
                    <th>Team</th>
                    <th>Team Head</th>
                </tr>
                </thead>
                <tbody>
                 {userData.map((info,index)=>( 
                  <tr key={index}>
                    <td>{info.projectName}</td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>{info.assignedOn}</span></td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>{info.completeBy}</span></td>
                    <td>
                        <span className='dot'></span>
                        <span className='status'>{info.status}</span>
                    </td>
                    <td className='team-members' id="team">
                        <p className='image-container'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-2'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-3'>
                            <span className='count-member'>2+</span>
                        </p>
                    </td>
                    <td>
                        <div className='lead'>
                        <p className='image-container ' id="team-lead">
                            <img src={profile} alt="team-member"/>
                        </p>
                         <span className='lead-name' style={{fontSize:'0.8rem'}}>{info.teamHead}</span>
                        </div>
                    </td>
                </tr> 

                // <tr>
                //     <td colSpan='6'>
                //        <NoRecord/>
                //     </td>
                
                // </tr>
                ))}  
                </tbody>
                
                
            </table>
            :
            <NoRecord/>
                 }

        </div>

    </section>
  )

}

export default MyProject;