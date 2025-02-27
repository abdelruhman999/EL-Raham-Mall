import React from 'react';
import { useState, useEffect } from 'react';
import { sendRequest } from '../calls/request';

function useRequest(reqConfig, dependency = []) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        sendRequest(reqConfig)
            .then(responseData => setData(responseData))
            .catch(err => setError(err))
            .finally(() => setLoading(false)); // Set loading to false after request completion

    }, dependency);

    return {
        loading,
        data,
        error
    };
}

export default useRequest;
