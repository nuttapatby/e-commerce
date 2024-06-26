import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../Hooks/useFetch'

const List = ({subCats, maxPrice, sort , catId}) => {

    const {data,loading,error} = useFetch(
        `/products?populate=*&[filters][catagories][id]=${catId}${subCats.map(
            (item) => `&[filters][sub_catagories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );   

    return (
        <div className='list'>
            {error
                ? console.log(error)
                :loading
                ? "Loading"
                : data?.map(item=> <Card  item={item} key={item.id} />
            )}
        </div>
    )
}

export default List