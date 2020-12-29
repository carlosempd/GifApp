import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'NEW']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <p>Enter a term to search the related Gifs. </p> 

            <AddCategory setCategory={ setCategories }/>
            <hr/>

            

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}
