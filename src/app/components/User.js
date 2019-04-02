import React from 'react';
import emailHider from './../../services/emailHider'

class User extends React.Component {
    
    render() {
        const { name, surname, image, email, birthday } = this.props.user;
        return (

            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={image} alt="" className="circle" />
                    <span className="title">{`${name} ${surname}`}</span>
                    <p><i className="fas fa-envelope"></i> {emailHider(email)}<br />
                        <i className="fas fa-birthday-cake"> </i>{birthday}
                    </p>
                </li>
            </ul>

        );
    }
}

export default User