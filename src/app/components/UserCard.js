import React from 'react';
import emailHider from './../../services/emailHider'

const UserCard = (props) => {

    const { name, image, email, birthday, gender } = props.user;
    // const color = (() => {
    //     if (gender === "female") {
    //         return "red lighten 5"
    //     }
    // })()
    const color = gender === "female" ? "female-color" : "";

    return (<div className={`card ${color}`}>
        <div className="card-image">
            <img src={image} alt="profile"/>
            <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
            <p><i className="fas fa-envelope"></i>{emailHider(email)}<br />
                <i className="fas fa-birthday-cake"></i>{birthday}</p>
        </div>

    </div>


    )
}

export default UserCard;