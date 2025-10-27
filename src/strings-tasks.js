 
 @param {string} value - The input string to calculate the length of.
 @return {number} - The length of the string.

  @example
    getStringLength('aaaaa') => 5
    getStringLength('b') => 1
    getStringLength('') => 0
    getStringLength() => 0
    getStringLength(null) => 0
    getStringLength(undefined) => 0
 
function getStringLength(value) {
  if (typeof value !== 'string' || value === null || value === undefined) {
    return 0;
  }
  return value.length;
}


 
 
  @param {string} value - The value to check if it's a string.
  @return {boolean} - True if the value is a string, false otherwise.
 
  @example
    isString() => false
    isString(null) => false
    isString([]) => false
    isString({}) => false
    isString('test') => true
    isString(new String('test')) => true
 
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

 
  @param {string} value1 - The first string to concatenate.
  @param {string} value2 - The second string to concatenate.
  @return {string} - The concatenated string.
 
  @example
    concatenateStrings('aa', 'bb') => 'aabb'
    concatenateStrings('aa', '') => 'aa'.
    concatenateStrings('', 'bb') => 'bb'
 
function concatenateStrings(value1, value2) {
  return String(value1 || '') + String(value2 || '');
}


  Returns the first character of the given string.
 
  @param {string} value - The input string to extract the first character from.
  @return {string} - The first character of the string.
 
  @example
    getFirstChar('John Doe') => 'J'
    getFirstChar('cat') => 'c'
    getFirstChar('') => ''
 
function getFirstChar(value) {
  return typeof value === 'string' ? value.charAt(0) : '';
}


 
  @param {string} value - The input string to remove leading and trailing whitespaces from.
  @return {string} - The string with leading and trailing whitespaces removed.
 
  @example
    removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
    removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
    removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

 
  @param {string} value - The input string to remove leading whitespaces from.
  @return {string} - The string with leading whitespaces removed.
 
  @example
    removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
    removeLeadingWhitespaces('cat ') => 'cat '
    removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 
function removeLeadingWhitespaces(value) {
  return value.replace(/^\s+/, '');
}


 
  @param {string} value - The input string to remove trailing whitespaces from.
  @return {string} - The string with trailing whitespaces removed.
 
  @example
    removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
    removeTrailingWhitespaces('cat ') => 'cat'
    removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 
function removeTrailingWhitespaces(value) {
  return value.replace(/\s+$/, '');
}

   
  @param {string} str - The string to repeat.
  @param {number} times - The number of times to repeat the string.
  @return {string} - The result string.
 
  @example
    repeatString('A', 5) => 'AAAAA'
    repeatString('cat', 3) => 'catcatcat'
    repeatString('', 3) => ''
    repeatString('abc', -2) => ''
 
function repeatString(str, times) {
  if (times <= 0) {
    return '';
  }
  return str.repeat(times);
}



   
  @param {string} str - The input string.
  @param {string} value - The substring to remove from the string.
  @return {string} - The string with the first occurrence of the substring removed.
 
  @example
    removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
    removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
    removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) {
    // Подстрока не найдена, возвращаем исходную строку
    return str;
  }
  // Удаляем первую найденную подстроку
  return str.slice(0, index) + str.slice(index + value.length);
}


   
  @param {string} str - The input string.
  @param {string} value - The substring to remove from the string.
  @return {string} - The string with the last occurrence of the substring removed.
 
  @example
    removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
    removeLastOccurrences('I like legends', 'end') => 'I like legs'.
    removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) {
    // Подстрока не найдена, возвращаем исходную строку
    return str;
  }
  // Удаляем последнее найденное вхождение подстроки
  return str.slice(0, index) + str.slice(index + value.length);
}


 
 
  @param {string} str - The input string.
  @return {number} - The sum of character codes of the string.
 
  @example
    sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
    sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
    sumOfCodes('') => 0
    sumOfCodes() => 0
 
function sumOfCodes(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}
 
  @param {string} str - The input string.
  @param {string} substr - The substring to check.
  @return {boolean} - Returns true if str starts with substr, false otherwise.
 
  @example:
    startsWith('Hello World', 'World') => false
    startsWith('Hello World', 'Hello') => true
 
function startsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false;
  }
  return str.slice(0, substr.length) === substr;
}


  @param {string} str - The input string.
  @param {string} substr - The substring to check.
  @return {boolean} - Returns true if str starts with substr, false otherwise.
 
  @example:
    endsWith('Hello World', 'World') => true
    endsWith('Hello World', 'Hello') => false
 
function endsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false;
  }
  return str.slice(-substr.length) === substr;
}


  @param {number} minutes - The number of minutes (non-negative integer).
  @param {number} seconds - The number of seconds (non-negative integer).
  @return {string} - The time string in the "mm:ss" format.
 
  @example
    formatTime(5, 30) => "05:30"
    formatTime(1, 15) => "01:15"
    formatTime(0, 45) => "00:45"
    formatTime(0, 0) => "00:00"
 
function formatTime(minutes, seconds) {
  // Проверка входных данных на неотрицательные целые числа
  if (
    typeof minutes !== 'number' || minutes < 0 || !Number.isInteger(minutes) ||
    typeof seconds !== 'number' || seconds < 0 || !Number.isInteger(seconds)
  ) {
    throw new Error('Minutes and seconds should be non-negative integers.');
  }

  // Добавляем ведущие нули, если число меньше 10
  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');

  return `${mm}:${ss}`;
}


  @param {string} str - The input string.
  @return {string} - The string in reverse order.
 
  @example:
    reverseString('abcdef') => 'fedcba'
    reverseString('12345') => '54321'
 
function reverseString(str) {
  // Используем встроенный метод split, reverse и join
  return str.split('').reverse().join('');
}


  @param {string} str - The input string.
  @return {string} - The string in alphabetical order.
 
  @example:
    orderAlphabetically('webmaster') => 'abeemrstw'
    orderAlphabetically('textbook') => 'bekoottx'
    orderAlphabetically('abc123xyz') => '123abcxyz'
 
function orderAlphabetically(str) {
  // Разделяем строку на массив символов, сортируем его и объединяем обратно в строку
  return str.split('').sort().join('');
}


  @param {string} str - The input string to search within.
  @param {string} substring - The substring to check for in the input string.
  @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 
  @example
    containsSubstring('Hello, World!', 'World') => true
    containsSubstring('JavaScript is Fun', 'Python') => false
    containsSubstring('12345', '34') => true
 
function containsSubstring(str, substring) {
  // Используем метод includes для проверки наличия подстроки
  return str.includes(substring);
}


  @param {string} str - The input string.
  @return {number} - The number of vowels in the string.
 
  @example:
    countVowels('apple')  => 2
    countVowels('banana') => 3
    countVowels('cherry') => 2
    countVowels('aEiOu') => 5
    countVowels('XYZ') => 1
 
function countVowels(str) {
  // Определяем строку всех гласных (включая заглавные)
  const vowels = 'aeiouyAEIOUY';
  let count = 0;

  // Перебираем каждый символ строки
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}


  @param {string} str - The input string.
  @return {boolean} - True if the string is a palindrome, false otherwise.
 
  @example:
    isPalindrome('madam') => true
    isPalindrome('racecar') => true
    isPalindrome('apple') => false
    isPalindrome('No lemon, no melon') => true
 
function isPalindrome(str) {
  // Удаляем всё, что не является буквой или цифрой, и приводим к нижнему регистру
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Проверяем, равна ли строка своему обратному отображению
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}


  @param {string} sentence - The input sentence.
  @returns {string} - The longest word in the sentence.
 
  @example:
    findLongestWord('The quick brown fox') => 'quick'
    findLongestWord('A long and winding road') => 'winding'
    findLongestWord('No words here') => 'words'
 
function findLongestWord(sentence) {
  // Разделяем предложение на слова по пробелам
  const words = sentence.split(' ');
  
  // Изначально предполагаем самое длинное слово как пустую строку
  let longestWord = '';

  // Перебираем все слова
  for (let word of words) {
    // Удаляем возможные знаки препинания в конце слова
    const cleanedWord = word.replace(/[^\w]/g, '');
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }

  return longestWord;
}


  @param {string} str - The input string.
  @return {string} - The string where each word is reversed.
 
  @example:
    reverseWords('Hello World') => 'olleH dlroW'
    reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 
function reverseWords(str) {
  // Разбиваем строку на слова
  const words = str.split(' ');
  
  // Для каждого слова разворачиваем его и собираем обратно в массив
  const reversedWords = words.map(word => {
    // Разворачиваем слово, преобразуя его в массив символов, переворачивая и соединяя обратно
    return word.split('').reverse().join('');
  });
  
  // Объединяем развернутые слова назад в строку
  return reversedWords.join(' ');
}


  @param {string} str - The input string.
  @returns {string} - The string with the case of each character inverted.
 
  @example
    invertCase('Hello, World!') =>  'hELLO, wORLD!'
    invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
    invertCase('12345') => '12345'
 
function invertCase(str) {
  // Разбиваем строку на массив символов
  return str.split('').map(char => {
    // Проверяем, является ли символ буквой в верхнем регистре
    if (char === char.toUpperCase()) {
      // Если да, переводим в нижний регистр
      return char.toLowerCase();
    } else {
      // Иначе — в верхний регистр
      return char.toUpperCase();
    }
  }).join('');
}


  @param {string} firstName - The first name to include in the template.
  @param {string} lastName - The last name to include in the template.
  @return {string} - The formatted string generated from the template.
 
  @example
    getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
    getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 
function getStringFromTemplate(firstName, lastName) {
  throw new Error('Not implemented');
}function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}


  @param {string} value - The input value.
  @return {string} - The name extracted from the template.
 
  @example
    extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
    extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 
function extractNameFromTemplate(value) {
  // Убираем префикс 'Hello, ' и суффикс '!' с помощью slice()
  const startIndex = value.indexOf(', ') + 2; // Начинаем после ', '
  const endIndex = value.lastIndexOf('!'); // Ищем последний восклицательный знак
  return value.slice(startIndex, endIndex);
}


  @param {string} str - The input tag.
  @return {string} - The tag without the first and last angle brackets.
 
  @example
    unbracketTag('<div>') => 'div'
    unbracketTag('<span>') => 'span'
    unbracketTag('<a>') => 'a'
 
function unbracketTag(str) {
  throw new Error('Not implemented');
}function unbracketTag(str) {
  // Используем substring() для удаления первых и последних символов
  return str.substring(1, str.length - 1);
}


  @param {string} str - The input string.
  @return {string[]} - The list of e-mails extracted from the string.
 
  @example
    'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
    => [
       'angus.young@gmail.com',
       'brian.johnson@hotmail.com',
       'bon.scott@yahoo.com'
    ],
    'info@gmail.com' => ['info@gmail.com']
 
function extractEmails(str) {
  // Разделяем строку по точке с запятой, удаляя возможные пробелы
  return str.split(';').map(email => email.trim());
}


  @param {string} str - The input string.
  @return {string} - The ROT13 encoded string.
 
  @example
 
    'hello' => 'uryyb'
    'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
    'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 
 
function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, function(char) {
    const code = char.charCodeAt(0);
    // Для заглавных букв
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    // Для строчных букв
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    // Для остальных символов, возвращаем как есть
    return char;
  });
}


 
  @param {string} value - The card value.
  @return {number} - The zero-based index.
 
  @example
    'A♣' => 0
    '2♣' => 1
    '3♣' => 2
      ...
    'Q♠' => 50
    'K♠' => 51
 
function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  // Разделяем значение на ранг и масть
  const rank = value.slice(0, value.length - 1);
  const suit = value.slice(-1);

  // Находим индекс масти
  const suitIndex = suits.indexOf(suit);
  // Находим индекс ранга
  const rankIndex = ranks.indexOf(rank);

  // Общее индекс
  return suitIndex * ranks.length + rankIndex;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
