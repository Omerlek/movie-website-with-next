import { API_KEY } from '@/app/data/secret';
import React from 'react'
import VodItem from './vodItem';

export default async function VodList(props: any) {

    const searchQ = props.searchParams?.s || "lego";
    const url = `https://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    const vod_ar = data.Search;


    if (!vod_ar) {
        return (
            <div className='container'>
                <h1>No results found</h1>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <h1>List of Shows:</h1>
                <div className='row'>
                    {vod_ar.map((item: any) => {
                        return (
                            <VodItem key={item.imdbID} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}