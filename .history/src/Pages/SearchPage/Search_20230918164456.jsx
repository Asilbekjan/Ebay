import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiEbay from '../../services/api/api'

export default function Search() {
  const [searchs,setSe]=
  const params = useParams()
  let search = params.search

  const searchproducts = async () => {
    let res = await apiEbay.searchproducts(search)
    console.log(res.data.products);
    console.log("ishladi");
  }
  useEffect(() => {
    searchproducts()
  }, [])

  return (
    <div>

    </div>
  )
}
