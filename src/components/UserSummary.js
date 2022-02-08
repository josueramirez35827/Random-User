import { useState } from 'react';

function UserSummary(props) {

  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = event => setShowMore(!showMore);

  // const triggerShowMore = event.target.value; 
  // setShowMore((prevState) => {

  // })

  let userInfo;

  if (props.userData === null) {
    userInfo = <h2>There is no user data</h2>
  } else {
    userInfo = <div>
      <h2>Name: {props.userData.name.first} {props.userData.name.last}</h2>
      <p><h5>Email:</h5>{props.userData.email}</p>
    </div>
  }

  let addUserInfo;
  if (showMore === false) {
    addUserInfo = toggleShowMore
  } else {
    addUserInfo = <div>
      <img src={props.userData.picture.medium} />
      <p><h5>DOB:</h5>{props.userData.dob.date} {props.userData.dob.age}</p>
      <p><h5>Street Number:</h5>{props.userData.location.street.number} {props.userData.location.street.name}</p>
      <p><h5>City:</h5>{props.userData.location.city}</p>
      <p><h5>State:</h5>{props.userData.location.state}</p>
      <p><h5>Country:</h5>{props.userData.location.country}</p>
      <p><h5>postcode:</h5>{props.userData.location.postcode}</p>
      <p><h5>Username:</h5>{props.userData.login.username}</p>
    </div>
  }


  return (
    <div>
      <span>
        <button onClick={toggleShowMore}>
          {showMore ? 'Hide' : 'Show More'}
        </button>
      </span>
      {props.editable ? <div>
        <input
          onChange={props.toggleShowMore}
          type='text'
        />
      </div> : null
      }


      {userInfo}
      {addUserInfo}
    </div>
  )
}

export default UserSummary;