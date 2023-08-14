import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ endPoint }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
};