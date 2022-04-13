const isPalindrome = require("./isPalindrome");

// Given / when / then

describe("Given the funnction isPalindrome", () => {
  // describe("When it recieves an empty string", () => {
  //   test("Then it should throw the error 'Text not provided'", () => {
  //     const emptyString = "";

  //     const chechIfEmpty = isPalindrome(emptyString);

  //     expect(chechIfEmpty).toThrow("Text not provided");
  //   });
  // });

  describe("When it recieves the text 'Ana'", () => {
    test("Then it should return true", () => {
      const introducedString = "Ana";
      const expctedResult = true;

      const checkTest = isPalindrome(introducedString);

      expect(checkTest).toBe(expctedResult);
    });
  });
});
