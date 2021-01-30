import React from 'react';
const UserRow = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.article_ids.length}</td>
        </tr>
    );
}
 
export default UserRow;