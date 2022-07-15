import React from 'react'

export default function Detail(props){
    return(
        <div class="d-flex">
            <div class="d-flex flex-row my-5 me-5 ms-3 w-auto h-auto">
                <div class="jilid d-flex flex-column position-relative">
                    <div class="elipse"></div>
                    <div class="elipse"></div>
                    <div class="elipse"></div>
                    <div class="elipse"></div>
                    <div class="elipse"></div>
                    <div class="elipse"></div>
                </div>
                <div class="content">
                    <article class="d-flex flex-column my-5 me-5" style={{"margin-left": "100px"}}>
                        <header class="d-flex row justify-content-between">
                            <h1 class="col-md-7 col-12">Task {props.title}</h1>
                            <div class="flex-column col-md-3 col-8">
                                <h4>Deadline:</h4>
                                <p>{props.date}, at 23:59 WIB</p>
                            </div>
                            <i style={{"font-size": "50px","color": "#B4B4B4"}}class="fa-solid fa-star col-md-1 d-none d-md-block justify-content-end" id="bintang"></i>
                        </header>
                        <div class="isi">
                            <div class="detail">
                                <h4>Description:</h4>
                                <p>{props.desc}</p>
                            </div>
                            <div class="ketentuan">
                                <h4>Ketentuan:</h4>
                                <p>{props.requirement}</p>
                            </div>
                        </div>
                        <div class="formUser d-flex flex-column">
                            <h4>Input URL:</h4>
                            <div class="inputan row gap-1">
                                <input type="link" name="Username" class="rounded col-md-7 col-12 border-0" placeholder="Masukkan URL Tugas" style={{"background-color": "#B4B4B4"}}/>
                                <button class="btn btn-secondary col-md-2 col-5 border-0" style={{"background-color": "#B4B4B4", "color": "black"}}>Submit</button>
                                <button class="btn btn-secondary col-md-2 col-5 border-0" style={{"background-color": "#B4B4B4","color": "black;"}}>Mark as done</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}