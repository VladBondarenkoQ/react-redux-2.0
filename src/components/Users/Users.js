import React from 'react'
import s from './Users.module.css'


const Users = (props) => {
  return  <div>
    {  props.users.map( u => <div className={s.wrapper} key={u.id}>
      <div className={s.gridAreaA}>
        <div className={s.ava}><img src={u.photoUrl} /></div>
        <div>{u.followed ? <button className={s.followB} onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button className={s.unfollowB} onClick={() => props.follow(u.id)}>Follow</button>}</div>
      </div>
      
        <div className={s.gridAreaB}>
              <div className={s.fullName}>{u.fullName}</div>
              <div className={s.status}>{u.status}</div>
        </div>
        <div className={s.gridAreaC}>
              <div>{u.location.country},</div>
              <div>{u.location.city}</div>
        </div>

      </div> )
    }
      </div>
    }
export default Users
