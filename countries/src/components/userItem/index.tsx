import type React from "react";
import type { User } from "../../types";
import "./styles.css";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className="user-list-item">
      <div className="user-info">
        <span className="user-info-label">Name:</span>
        <span className="user-name">
          {user.name.first} {user.name.last}
        </span>
        <span className="user-info-label">Gender:</span>
        <span className="user-gender">{user.gender}</span>
        <span className="user-info-label">Location:</span>
        <span className="user-location">
          {user.location.city}, {user.location.state}
        </span>
        <span className="user-info-label">Registered:</span>
        <span className="user-registered">
          {new Date(user.registered.date).toLocaleDateString()}
        </span>
      </div>
    </li>
  );
};

export default UserItem;
