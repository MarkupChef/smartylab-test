import { ChangeEvent, useState } from 'react';
import Button from '../../components/UI/Button';
import H1 from '../../components/UI/H1';
import checkBrackets from '../../utils/checkBrackets';

const Brackets = () => {
  const [areaValue, setAreaValue] = useState('');
  const [errorBrackets, setErrorBrackets] = useState<null | boolean>(null);

  const handleArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (errorBrackets !== null) {
      setErrorBrackets(null);
    }

    setAreaValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (areaValue) {
      setErrorBrackets(!checkBrackets(areaValue));
    }
  };

  return (
    <div>
      <H1>Brackets</H1>
      <form onSubmit={handleSubmit}>
        <label>
          Insert string
          <br />
          <textarea onChange={handleArea} value={areaValue}></textarea>
        </label>
        <br />
        {areaValue.length > 0 && errorBrackets ? (
          <p className={'text-red-500'}>Unclosed brackets!</p>
        ) : (
          errorBrackets === false && <p className={'text-green-600'}>All brackets are closed!</p>
        )}
        <br />
        <Button type={'submit'}>Check</Button>
      </form>
    </div>
  );
};

export default Brackets;
