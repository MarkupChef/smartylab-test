function isPalindrome(str: string): boolean {
  // очищаем строку от пробелов и приводим все символы к нижнему регистру
  const sanitizedStr = str.toLowerCase().replace(/\s/g, '');

  // разбиваем строку на массив, разворачиваем массив и снова объединяем в строку
  const reversedStr = sanitizedStr.split('').reverse().join('');

  // сравниваем строки, если они совпадают возвращаем true
  return sanitizedStr === reversedStr;
}

export default isPalindrome;
