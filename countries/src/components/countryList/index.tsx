import UserList from "../userList/index";
import type React from "react";
import type { User } from "../../types";
import "./styles.css";

interface CountryListProps {
  countries: string[];
  groupedUsers: { [key: string]: User[] };
  expandedCountry: string | null;
  handleCountryClick: (country: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({
  countries,
  groupedUsers,
  expandedCountry,
  handleCountryClick,
}) => {
  return (
    <ul className="country-list">
      {countries.map((country) => (
        <li
          key={country}
          className={
            expandedCountry === country
              ? "country-list-item expanded-country"
              : "country-list-item"
          }
        >
          <div
            onClick={() => handleCountryClick(country)}
            onKeyPress={(e) => e.key === "Enter" && handleCountryClick(country)}
            tabIndex={0}
            role="button"
          >
            {country} ({groupedUsers[country].length})
          </div>
          {expandedCountry === country && (
            <UserList users={groupedUsers[country]} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
