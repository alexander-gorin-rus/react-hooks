import React, {useState, useMemo, useEffect} from 'react';

//useMemo hook is used when some complex calculations are performed in 
//React component, and these calculations slow down rendering
//In order to prevent low performace of the whole component, it's good to use 
//useMemo in the part of component that slows down performance

const useMemoHook = () => {

    const complexCompute = num => {
        let i = 0;
        // eslint-disable-next-line no-sequences
        while (i < 1000000000) i++ 
            return num * 2
    } 
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    //This is the weakest part of this component,
    //so let's use useMemo here
    //useMemo is caching data and after that the rest parts of component
    //work independently of this weak component
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number]);

    //Another example of useMemo is to use it
    //to prefent component rerendering
    const style = useMemo(() => ({
        color: colored ? 'green' : 'blue'
    }), [colored])

    //useEffect in this case only works if color is changed
    //useMemo prevents this useEffect from action 
    useEffect(() => {
        console.log('Color has been changed')
    }, [style])
    return (
        <div>
            <h1 style={style}>Counted property {computed}</h1>
            <button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)}>Subtract</button>
            <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Change Color</button>
        </div>
    )
  
};

export default useMemoHook;
