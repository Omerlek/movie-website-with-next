
import React from 'react'
import { API_KEY } from '@/app/data/secret';
import InfoBtn from './infoBtn';

export default async function VodInfo(props: any) {
    const { id } = props.params;
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    return (
        <div className='container text-center col-md-9'>
            <img src={data.Poster} alt={data.Title} className='col-3 my-3' />
            <h2 className='center'>{data.Title}</h2>
            <div><strong>Runtime:</strong> {data.Runtime}</div>
            <div><strong>Rating:</strong> {data.imdbRating}</div>
            <div><strong>Genre:</strong> {data.Genre}</div>
            <p>
                <strong>Plot:</strong> {data.Plot}
            </p>
            <InfoBtn />
        </div>

    )
}
