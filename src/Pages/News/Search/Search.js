import React, { useEffect, useState } from 'react'
import './Search.css'
import { BiSearch } from "react-icons/bi"
import NewsSmall from './News-small'
import { getAllBerita } from '../../../Data/Berita'
import ReactPaginate from "react-paginate";

function Search() {
    const [searchTerm,setsearchTerm] = useState("");
    const allData = getAllBerita(searchTerm).filter(data => data.is_published);
    const pageCount = Math.ceil(allData.length/6);
    const [pageNum,setPageNum] = useState(0);
    const pageHandler = ({selected}) => {
        setPageNum(selected);
    }

    useEffect(()=>{
        setPageNum(0);
    },[searchTerm])

    const showedData = allData.slice(pageNum*6,(pageNum+1)*6);


    return (
        <div className='wrapper-search mt-5 px-2 py-3'>
            <div className="button-search m-auto w-50 mt-3 px-2">
                <div className="row">
                    <div className="col-2 col-md-1">
                        <BiSearch className='icon-search'></BiSearch>
                    </div>
                    <div className="col-10 col-md-11">
                        <input 
                            id="searchInput" 
                            className="input-search" 
                            type="text" 
                            placeholder="Search News" 
                            value={searchTerm}
                            maxLength={52}
                            onChange={e=>setsearchTerm(e.target.value)}>
                        </input>
                    </div>
                </div>
            </div>
            <div className="template-container row row-cols-lg-3 row-cols-md-2 rows-cols-1 mx-0 mt-5 px-1">
                {showedData.map(data => <NewsSmall key={data.id} {...data} />)}
            </div>
            <ReactPaginate 
                pageCount={pageCount}
                containerClassName="news-pagination pagination d-flex justify-content-center"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="page-item active"
                activeLinkClassName='page-link active'
                disabledLinkClassName='page-item disabled'
                onPageChange={pageHandler}
                />
        </div>
    )
}

export default Search;