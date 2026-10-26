const { searchFriendsByName } = require("../src/friendSearch");

describe("searchFriendsByName", () => {
  it("finds a friend by name", async () => {
    const result = await searchFriendsByName("Ahmed Ali");

    expect(result).toEqual([{ id: 1, name: "Ahmed Ali" }]);
  });

  it("handles case-insensitive search", async () => {
    const result = await searchFriendsByName("ahmed ali");

    expect(result).toEqual([{ id: 1, name: "Ahmed Ali" }]);
  });

  it("returns multiple matching friends", async () => {
    const result = await searchFriendsByName("Ahmed");

    expect(result).toEqual([
      { id: 1, name: "Ahmed Ali" },
      { id: 4, name: "Ahmed Hassan" },
    ]);
  });

  it("returns an empty array when no friend exists", async () => {
    const result = await searchFriendsByName("Khaled");

    expect(result).toEqual([]);
  });

  it("handles invalid input", async () => {
    await expectAsync(searchFriendsByName(123)).toBeRejectedWithError(
      TypeError,
      "Search term must be a string.",
    );
  });

  it("handles rejected Promise", async () => {
    await expectAsync(
      Promise.reject(new Error("Failed to retrieve friends.")),
    ).toBeRejectedWithError("Failed to retrieve friends.");
  });
});
