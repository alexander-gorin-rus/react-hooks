import React, {useState, useEffect} from 'react';

const useEffectPage = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos]= useState({
        x:0, y: 0
    })

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }
 
    //useEffect hook is used for rendering components
    //The render depends on changes of state or states
    //In this example, this page will be rerendered if type state is changed
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json));

        //In order to clean useEffect, it's good to use anonymous function 
        return () => {
            console.log('useEffect hook was cleaned')
        }
    },[type]);

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    },[]);


    return (
        <div>
            <h1>Resource: {type}</h1>

            <button onClick={() => setType('user')}>Users</button>
            <button onClick={() => setType('todos')}>Todo</button>
            <button onClick={() => setType('posts')}>Posts</button>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
};

export default useEffectPage;
