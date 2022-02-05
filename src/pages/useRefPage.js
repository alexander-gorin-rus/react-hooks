import React, {useState, useEffect, useRef} from 'react';

//let renderCount = 1;

const useRefPage = () => {
    //const [renderState, setRenderState] = useState(1);

    const [value, setValue] = useState('initial');
    const renderRef = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('')

    useEffect(() => {
        renderRef.current++
        console.log(inputRef.current.value)
        //renderCount++
    });

    useEffect(() => {
        prevValue.current = value
    },[value])

    const focus = () => inputRef.current.focus()
  return (
      <div>
          <h1>Number of renders is {renderRef.current}</h1>
          <h2>Last State is {prevValue.current}</h2>
          <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
          <button className='btn btn-success' onClick={focus}>Focus</button>
      </div>
  )
};

export default useRefPage;
