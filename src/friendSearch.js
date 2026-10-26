const friends = [
  { id: 1, name: "Ahmed Ali" },
  { id: 2, name: "Mohamed Hassan" },
  { id: 3, name: "Sara Mohamed" },
  { id: 4, name: "Ahmed Hassan" },
];

const getFriends = () => Promise.resolve(friends);

async function searchFriendsByName(searchTerm) {
  if (typeof searchTerm !== "string") {
    throw new TypeError("Search term must be a string.");
  }

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  if (!normalizedSearchTerm) {
    return [];
  }

  const friendsList = await getFriends();

  return friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(normalizedSearchTerm)
  );
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    searchFriendsByName,
  };
}

if (typeof window !== "undefined") {
  window.searchFriendsByName = searchFriendsByName;
}