import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';



const ReactCompoentLifecycle = () => {

    const [count, setCount ] = useState<number>(0);

    // Merge of componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log('This is mounted or updated.');
    });


    // Equivalent of componentDidMount
    useEffect(() => {
        console.log('This is mounted only not updated.');
    }, []);

    // Merge of componentDidMount and componentDidUpdate but only for given dependency
    useEffect(() => {
        console.log('This is mounted or count state updated.');
    }, [count]);

    // Equivalent of componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('This is unmounted.');
        };
    }, []);

    return (
        <>
            <p>React Compoent Lifecycle show case</p>
            <Button onClick={() => setCount( (p) => p++ )}></Button>
        </>
    );

};

export default ReactCompoentLifecycle;