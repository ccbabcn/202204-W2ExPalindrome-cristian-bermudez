const isPalindrome = require("./isPalindrome");

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

  describe("When it recieves an empty text", () => {
    test("Then it should throw the error 'Text not provided'", () => {
      const noText = "";
      const expctedResult = "Text not provided";

      const result = () => {
        isPalindrome(noText);
      };

      expect(result).toThrow(expctedResult);
    });
  });
});
