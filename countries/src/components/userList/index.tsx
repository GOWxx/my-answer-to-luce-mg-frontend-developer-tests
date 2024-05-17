import UserItem from "../userItem/index";
import type React from "react";
import type { User } from "../../types";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const sortedUsers = users.sort(
    (a, b) =>
      new Date(b.registered.date).getTime() -
      new Date(a.registered.date).getTime()
  );

  return (
    <ul>
      {sortedUsers.map((user) => (
        <UserItem key={user.login.uuid} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
