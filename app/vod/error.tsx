"use client"

import React from 'react'
import HeaderVod from './components/headerVod'

export default function ErrorVod() {
    return (
        <React.Fragment>
            <HeaderVod />
            <div className='container'>
                <h2>Something went wrong!</h2>
                <a href='/vod' className='btn btn-dark my-3'>Back to Home</a>
            </div>
        </React.Fragment>
    )
}
