import React, { useEffect } from 'react';
import {Button, Image} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCities} from '../actions/actions';

const CitiesPage = () => {
    const cities = useSelector((state) => state.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    return (
        <div className="text-center">
            <h2>List of Cities</h2>
            <Button onClick={() => dispatch(fetchCities())}>Get Cities</Button>
            {cities && <Image src={cities} alt="Random Cities" fluid className="mt-3" />}
        </div>
    );

};

export default CitiesPage;
