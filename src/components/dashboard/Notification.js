import React, { Component } from 'react';
import moment from 'moment'
const Notifications = (props) =>{
    const {notifications}=props
    return(
        <div className='section'>
            <div class='card z-depth-1'>
                <div className='card-content'>
                    <span className='card-title'>Notifications</span>
                    <ul className='notification'>
                        {notifications&&notifications.map((item)=>{
                            return(
                                <li key={item.id}>
                                    <span className='pink-text'>{item.user} </span>
                                    <span >{item.content}  </span>
                                    <span className='grey-text note-date'>{moment(item.time.toDate()).fromNow()}</span>
                                </li>
                            )

                        })}
                    </ul>
                </div>
            </div>
           
        </div>
    )
}
export default Notifications