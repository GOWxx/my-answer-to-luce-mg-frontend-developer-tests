import { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import { groupByCountry, sortedCountries } from "../utils";
import CountryList from "../components/countryList";

import type React from "react";
import type { User } from "../types";

const App: React.FC = () => {
  const { users, loading, error } = useFetchUsers();
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string>("All");

  const handleCountryClick = (country: string) => {
    setExpandedCountry((prevCountry) =>
      prevCountry === country ? null : country
    );
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(event.target.value);
  };

  const filteredUsers = (users: User[]): User[] => {
    if (genderFilter === "All") return users;
    return users.filter((user) => user.gender === genderFilter.toLowerCase());
  };

  const groupedUsers = groupByCountry(filteredUsers(users));
  const countries = sortedCountries(groupedUsers);

  return (
    <div className="App">
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div>
            <label>Filter by Gender: </label>
            <select value={genderFilter} onChange={handleGenderChange}>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <CountryList
            countries={countries}
            groupedUsers={groupedUsers}
            expandedCountry={expandedCountry}
            handleCountryClick={handleCountryClick}
          />
        </>
      )}
    </div>
  );
};

export default App;
