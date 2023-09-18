import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiEbay from '../../services/api/api'

export default function Search() {
  const [searchs, setSearchs] = useState([])

  const params = useParams()
  let search = params.search

  const searchproducts = async () => {
    let res = await apiEbay.searchproducts(search)
    setSearchs(res.data.products);
  }
  useEffect(() => {
    searchproducts()
    console.log(searchs);
  }, [])

  return (
    <div>
      { 
        searchs.length
      }
    </div>
  )
}
