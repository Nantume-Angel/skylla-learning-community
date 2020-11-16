function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "http://localhost:3000/admin" },
      { id: 2, url: "http://localhost:3000/trainee" },
      { id: 3, url: "http://localhost:3000/trainer" }
    ];

    const output = [{ id: 1, url: "http://localhost:3000/admin" }];

    expect(filterByTerm(input, "admin")).toEqual(output);
    expect(filterByTerm(input, "Admin")).toEqual(output);
  });
});
