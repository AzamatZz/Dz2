import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../actions/actions';

const DogsPage = () => {
    const dogImage = useSelector((state) => state.dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch]);

    return (
        <div className="text-center">
            <h2>Random Dogs</h2>
            <Button onClick={() => dispatch(fetchDogs())}>Get a Dog</Button>
            {dogImage && <Image src={dogImage} alt="Random Dog" fluid className="mt-3" />}
        </div>
    );
};

export default DogsPage;
