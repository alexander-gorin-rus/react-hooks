import React, {useCallback, useState} from 'react';
import ItemsList from '../components/ItemsList';

const useCallBackHook = () => {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'red': 'green'
    }

    const generateItemsFromApi = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
    }, [count])


  return (
      <div>
          <h1 style={styles}>The number of elements {count}</h1>
          <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Add</button>
          <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
          <ItemsList getItems={generateItemsFromApi} />
      </div>
  )
};

export default useCallBackHook;
