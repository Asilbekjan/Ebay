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
    <div className='container'>
        <div className="grid grid-cols-12 gap-5">
        {
        (searchs.length > 0) ?
          <>
            {
              searchs.map((a, i) => {
                return (
                  <div className='col-span-3 ' key={i}>
                      <div className="card p-3 bg-slate-50 rounded-xl hover:shadow-2xl hover:w-[400px] hover:origin-top-right">
                        <img className='w-[300px] h-[200px]' src={a.thumbnail} alt={a.title} />
                        <p className='text-[20px] font-[600]'>{a.title}</p>
                        <p className='text-[10px] text-[black]/50'>{a.brand}</p>
                        <p>{a.rating}</p>
                        <button className='btn bg-blue-500 text-white px-3 rounded-xl py-1'>Batafsil</button>
                      </div>
                  </div>
                )
              })
            }
          </>
          :
          <>
            loading
          </>
      }
        </div>
    </div>
  )
}
