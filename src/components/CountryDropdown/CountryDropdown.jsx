import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { getCountries } from '../../api';
import styles from './CountryDropdown.module.css';

const CountryDropdown = ({handleCountryChange}) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setFetchedCountries(await getCountries());
        }
       
       fetchApi();
    }, [setFetchedCountries]);

    return(
        <div className={styles.CountryDropdownContainer}>
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option>Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryDropdown;