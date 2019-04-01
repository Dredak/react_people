import React from 'react';
import emailHider from './../../services/emailHider'

const UserCard = (props) => {

    const { name, image, email, birthday } = props;
    return (

        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={image} />
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p><i className="fas fa-envelope"></i> {emailHider(email)}<br />
                            <i className="fas fa-birthday-cake"> </i>{birthday}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCard;