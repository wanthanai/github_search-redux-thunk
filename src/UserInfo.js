const UserInfo = (props) => {

    // console.log(props);

    return(
        <div className="user-info">
            <div className="avatar">
                <img src={props.user.avatar_url} alt="avatar"/>
            </div>
            <div className="content">
                <h1>{props.user.name}</h1>
                <p>
                    <strong>Bio: 
                        {props.user.bio}
                    </strong>
                </p>
                <p>
                    <strong>location: 
                        {props.user.location}
                    </strong>
                </p>
                <p>
                    <strong>followers: 
                        {props.user.followers}
                    </strong>
                </p>
                <p>
                    <strong>following: 
                        {props.user.following}
                    </strong>
                </p>
            </div>
        </div>
    )
}

export default UserInfo;