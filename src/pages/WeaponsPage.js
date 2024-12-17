import React, { useEffect } from 'react';
import {Button, Image} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {fetchWeapons} from '../actions/actions';

const WeaponsPage = () => {
    const weapons = useSelector((state) => state.weapons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeapons());
    }, [dispatch]);

    return (
        <div className="text-center">
            <h2>Weapons</h2>
            <Button onClick={() => dispatch(fetchWeapons())}>Get Weapons</Button>
            {weapons && <Image src={weapons} alt="Random Weapons" fluid className="mt-3" />}
        </div>
    );

};

export default WeaponsPage