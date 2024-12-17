import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../actions/actions';

const CatsPage = () => {
    const catImage = useSelector((state) => state.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCats());
    }, [dispatch]);

    return (
        <div className="text-center">
            <h2>Random Cats</h2>
            <Button onClick={() => dispatch(fetchCats())}>Get Cats</Button>
            {catImage && <Image src={catImage} alt="Random Cats" fluid className="mt-3" />}
        </div>
    );

};

export default CatsPage;
