//TZV DATA
import { BASE_USERS_URL } from "../shared/UsersUrl";
import MyUser from '../entities/MyUser';

const USERS_API = `${BASE_USERS_URL}/api/?results=15`

const fetchUsers = () => {
    return fetch(USERS_API)
        .then((rawUsers) => rawUsers.json())
        .then((users) => {
            return users.results.map(({ name, picture, email, dob }) => {
                return new MyUser(name.first, name.last, picture.thumbnail, email, dob.date);
            })
        });
}

export default fetchUsers;

