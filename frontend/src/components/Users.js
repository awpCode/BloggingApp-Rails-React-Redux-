import React from 'react';
import {useSelector} from 'react-redux';
import {getUsers} from '../selectors/users';
import UserRow from './UserRow';
const Users = () => {
    const users = useSelector(getUsers);
    return (
        <div className = "container py-4">
        <table className = "table table-dark">
            <thead>
            <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Articles</th>
            </tr></thead>
            <tbody>
        {Object.keys(users).map((key,index) => (<UserRow key = {users[key].id} user = {users[key]} />))}
        </tbody>
        </table>
        </div>
    );
}
 
export default Users;