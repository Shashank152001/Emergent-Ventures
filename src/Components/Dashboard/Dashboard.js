import React from 'react'
import { BiBell,BiChevronDown,BiSearch,
BiGridAlt,BiWallet,BiUser,BiCog,BiAbacus} from "react-icons/bi";
import './dashboard.css';
import MyProject from '../Project/project';
import Skill from '../Skills/Skills';
import Timesheet from '../Timesheet/Timesheet';
import Timer from '../Timer/Timer';
import Leaves from '../Leaves/Leaves';
import WFH from '../WFH/Wfh';
import celebalLogo from './celebal.png';

function MyDashBoard() {
  return (
    <section className=' main-container'>
        <div className='wrapper d-flex'>

            {/* left */}
            <div className='nav-top left-sidebar' style={{borderRight:'1px solid #000',height:'100%',position:'fixed'}}>
                <div className='image-container-logo' >
                    <img src={celebalLogo} alt="celebal"/>
                </div>
               <div className='menu-item' style={{marginTop:'2rem'}}>
                  <ul >
                    <li className='li-bg' style={{padding:'1rem 0.9rem',borderLeft:'10px solid #088dda'}}><BiGridAlt style={{marginRight:'10px'}}/>DashBoard</li>
                    <li style={{padding:'1rem 0.9rem'}}><BiWallet style={{marginRight:'10px'}}/>Myleaves</li>
                    <li style={{padding:'1rem 0.9rem'}}><BiUser style={{marginRight:'10px'}}/>Account</li>
                    <li style={{padding:'1rem 0.9rem'}}><BiAbacus style={{marginRight:'10px'}}/>Skills</li>
                    <li style={{padding:'1rem 0.9rem'}}><BiCog style={{marginRight:'10px'}}/>Settings</li>
                  </ul>
               </div>
            </div>

            {/* left end */}

            {/* right */}
            <div className='right-sidebar ' style={{position:'absolute',width:'87%',height:'100%',right:'0'}}>
                <div className='right-top' style={{padding:'0.9rem 0',borderBottom:'1px solid #000',position:'sticky',top:'0',zIndex:'9'}}>
                <div className='right-nav-top-inner d-flex flex-col align-items-center justify-content-end'
                 style={{width:'97%',}}>
                        <div className='input-container position-relative' style={{width:'27%',marginRight:'4rem'}}>
                             <input type="text" placeholder='search'className='position-relative' style={{borderRadius:'10px',height:'34px',width:'100%',padding:'0.4rem 2.8rem',border:'none'}}/>
                             <BiSearch className='position-absolute ' style={{left:'0',top:'10px',marginLeft:'15px'}}/>
                        </div>
                        <div style={{marginRight:'3.4rem'}}>
                            <button style={{padding:"0.4rem 1rem",color:'#fff',border:'none',outline:'none',borderRadius:'6px'}} className="bg-primary">Upload File</button>
                        </div>
                        
                        <div className='d-flex align-items-center justify-content-center shift '>
                            <BiBell style={{fontSize:'1.6rem',marginRight:'0.8rem'}}/>
                            <div className='d-flex  align-items-center right-corner'>
                               <p className='profile-container' style={{marginBottom:'0'}}>
                                <img src='/images/singin.png' alt='profile' style={{width:'30px',height:'30px'}}/>
                               </p>
                               <p className='' style={{marginBottom:'0'}}>
                                 <span style={{paddingLeft:'0.5rem',color:'#000'}}>Andy Lane</span>
                                 <BiChevronDown style={{marginLeft:'0.4rem'}}/>
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-middle-content' style={{overflowY:'auto',overflowX:'hidden',position:'absolute',width:'100%',height:'100vh'}}>
                     <div className='content-inner'>

                     <div class="row gx-3" style={{padding:'0 1rem',marginTop:'1rem'}}>

                                      <div class="col-6">
                                          <Timer/>
                                      </div>

                                      <div class="col-3">
                                          <Leaves/>
                                      </div>

                                      <div class="col-3">
                                          <WFH/>
                                      </div>

                        </div>

                     <div class="row gx-3" style={{padding:'0 1rem'}}>

                        <div class="col-6">
                            <Skill/>
                        </div>
                        
                        <div class="col-6">
                            <Timesheet/>
                        </div>
                        
                    </div>
                     
                     <div class="row gx-1" style={{padding:'0 1rem'}}>

                     <div class="col-12">
                              <MyProject/>
                        </div>
                      
                    </div>

                    </div>
                </div>
            </div>
            {/* right end */}

        </div>
    </section>
  )
}

export default MyDashBoard;