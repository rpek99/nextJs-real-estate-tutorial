import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ae77d886e6msh34f85b2bff571b2p1ce3efjsn194bf13a7b58'
        }
    });
    
    return data;
}
