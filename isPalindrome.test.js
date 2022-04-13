const isPalindrome = require("./isPalindrome");

// Given / when / then

describe("Given the funnction isPalindrome", () => {
  describe("When it recieves the text 'Ana'", () => {
    test("Then it should return true", () => {
      const introducedString = "Ana";
      const expctedResult = true;

      const checkTest = isPalindrome(introducedString);

      expect(checkTest).toBe(expctedResult);
    });
  });

  describe("When it recieves the text 'Roma'", () => {
    test("Then it should return false", () => {
      const introducedString = "Roma";
      const expctedResult = false;

      const checkTest = isPalindrome(introducedString);

      expect(checkTest).toBe(expctedResult);
    });
  });
});
