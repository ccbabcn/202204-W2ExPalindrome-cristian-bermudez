const isPalindrome = (text) => {
  const normalizedText = text
    .toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
  const reversedNormalizedText = normalizedText.split("").reverse().join("");

  return normalizedText === reversedNormalizedText;
};

module.exports = isPalindrome;