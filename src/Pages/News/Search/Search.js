import React from 'react'
import './Search.css'
import { BiSearch } from "react-icons/bi"
import NewsSmall from './News-small'

function Search() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const handleSearch = e => setSearchTerm(e.target.event);

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
                            placeholder="Search News" >
                        </input>
                    </div>
                </div>
            </div>
            <div className="template-container row row-cols-lg-3 row-cols-md-2 rows-cols-1 mx-0 mt-5 px-1">
                <NewsSmall/>
                <NewsSmall/>
                <NewsSmall/>
                <NewsSmall/>
            </div>
        </div>
    )
}

export default Search;