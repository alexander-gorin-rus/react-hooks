import React, {useEffect, useState} from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('');

  return {
    bind: { value, onChange },
    value,
    clear  
  }
}

const useCustomHook = () => {
    const input = useInput('');


    useLogger(input.value);


    return (
        <div>
          <input type="text" {...input.bind}/>
          <button className='btn btn-warning' onClick={() => input.clear()}>Clear</button>
          <hr />
          <h1>{input.value} </h1>
        </div>
    )
};

export default useCustomHook;
