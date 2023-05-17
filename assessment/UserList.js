import React from 'react';
import { ScrollView } from 'react-native';
import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  return (
    <ScrollView>
      {users.map((user, index) => (
        <UserListItem key={index} user={user} />
      ))}
    </ScrollView>
  );
};

export default UserList;
