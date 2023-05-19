function checkBrackets(str: string): boolean {
  const stack: string[] = [];
  const openingBrackets = ['"', "'", '(', '{', '['];
  const closingBrackets = ['"', "'", ')', '}', ']'];

  for (const char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const openingBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== openingBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export default checkBrackets;
