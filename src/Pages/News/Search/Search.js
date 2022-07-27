import React, {useState} from 'react'
import './Search.css'
import data from '../Data.js'
import Test from '../Images/Test.jpg'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi"

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container-fluid search">
            <div className="button-search">
                <div className="row">
                    <div className="col-2 col-md-1">
                        <BiSearch className='icon-search'></BiSearch>
                    </div>
                    <div className="col-10 col-md-11">
                        <input id="searchInput" className="input-search" type="text" placeholder="Search News" onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}></input>
                    </div>
                </div>
            </div>
            <div className="template_container">
                <div className="container-fluid" >
                    <div className="row">
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
                                    <div className='news-search' key={val.id}>
                                        <div className="col-12 images-search">
                                            <img src={Test} alt="" className="image-search"></img>
                                        </div>
                                        <div className="col-12">
                                            <h1>{val.judul}</h1>
                                        </div>
                                        <div className="col-12">
                                            <p className="detail-search">{val.detail}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-sm-6">
                                                <p className="tanggal-search">{val.tanggal}</p>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <Link to={`/news/${val.judul}`} className="link-search">
                                                    <p className="read-search">Read more {'>'}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;