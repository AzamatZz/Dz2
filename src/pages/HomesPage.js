import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomes } from '../actions/actions';

const HomesPage = () => {
    const homeImage = useSelector((state) => state.homes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomes());
    }, [dispatch]);

    return (
        <div className="text-center">
            <h2>Random Homes</h2>
            <Button onClick={() => dispatch(fetchHomes())}>Get a Home</Button>
            {homeImage && <Image src={homeImage} alt="Random Home" fluid className="mt-3" />}
        </div>
    );
};

export default HomesPage;
