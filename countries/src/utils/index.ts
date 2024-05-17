import type { User } from "../types";

export const groupByCountry = (users: User[]): { [key: string]: User[] } => {
	return users.reduce((acc: { [key: string]: User[] }, user: User) => {
		const country = user.location.country;
		if (!acc[country]) {
			acc[country] = [];
		}
		acc[country].push(user);
		return acc;
	}, {});
};

export const sortedCountries = (groupedUsers: {
	[key: string]: User[];
}): string[] => {
	return Object.keys(groupedUsers).sort(
		(a, b) => groupedUsers[b].length - groupedUsers[a].length,
	);
};
