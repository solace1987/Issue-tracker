function Profile(props){
    return(
        <div class="issue-login bg-blue-400 w-full h-full">
            <h2>{props.Values.name}'s Profile</h2>
            <hr></hr>

            <div>
              <div><h2>Name</h2></div><div>{props.Values.name}</div>
              <div><h2>Email</h2></div><div>{props.Values.email}</div>
              <div><h2>Badge</h2></div><div>{props.Values.role}</div>
              <div>Department<h2></h2></div><div>{props.Values.department}</div>
              <div>Date of Registration<h2></h2></div><div>{props.Values.created}</div>
            </div>
            <hr></hr>

            <button>Edit Profile</button>

        </div>


    )
}

export default Profile;