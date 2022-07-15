import React, {useState} from 'react'
import './Search.css'
import data from '../Data.json'
import Test from '../Images/Test.jpg'
import {Link} from 'react-router-dom'
import {BiSearch} from "react-icons/bi"

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="search">
                <div className="button">
                    <BiSearch className='icon'></BiSearch>
                    <input id="searchInput" type="text" placeholder="Search News" onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}></input>
                </div>
                <div className="template_container">
                    {
                        data
                        .filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (val.judul.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="container" key={val.id}>
                                    <div className="row">
                                        <div className='col-6'>
                                            <div className='test'>
                                                <img src={Test} alt="" className="image"></img>
                                                <h1>{val.judul}</h1>
                                                <p className="detailSearch">{val.detail}</p>
                                                <p className="tanggalSearch">{val.tanggal}</p>
                                                <Link to={'/val/${val._id}'} className="linkSearch">
                                                    <p className="readSearch">Read more {'>'}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Search;