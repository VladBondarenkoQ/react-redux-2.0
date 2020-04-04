import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../images/0.jpg'



class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }
render() {
  return  <div>

    {  this.props.users.map( u => <div className={s.wrapper} key={u.id}>
      <div className={s.gridAreaA}>
        <div className={s.ava}><img src={userPhoto} /></div>
        <div>{u.followed ? <button className={s.followB} onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button className={s.unfollowB} onClick={() => this.props.follow(u.id)}>Follow</button>}</div>
      </div>

        <div className={s.gridAreaB}>
              <div className={s.fullName}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
        </div>
        <div className={s.gridAreaC}>
              <div>{'u.location.country'},</div>
              <div>{'u.location.city'}</div>
        </div>

      </div> )
    }
      </div>
    }
  }
export default Users
