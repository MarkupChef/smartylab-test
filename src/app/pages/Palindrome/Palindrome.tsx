import { ChangeEvent, useState } from 'react';
import Button from '../../components/UI/Button';
import H1 from '../../components/UI/H1';
import isPalindrome from '../../utils/isPalindrome';

const Brackets = () => {
  const [inputValue, setInputValue] = useState('');
  const [palindromeError, setPalindromeError] = useState<null | boolean>(null);

  const handleArea = (e: ChangeEvent<HTMLInputElement>) => {
    if (palindromeError !== null) {
      setPalindromeError(null);
    }

    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      setPalindromeError(!isPalindrome(inputValue));
    }
  };

  return (
    <div>
      <H1>Palindrome</H1>
      <form onSubmit={handleSubmit}>
        <label>
          Insert string
          <br />
          <input onChange={handleArea} value={inputValue}></input>
        </label>
        <br />
        {inputValue.length > 0 && palindromeError ? (
          <p className={'text-red-500'}>String is not palindrome!</p>
        ) : (
          palindromeError === false && <p className={'text-green-600'}>String is palindrome!</p>
        )}
        <br />
        <Button type={'submit'}>Check</Button>
      </form>
    </div>
  );
};

export default Brackets;
