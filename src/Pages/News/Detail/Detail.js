import React, { useState, useEffect} from "react";
import Data from '../Data'
import './Detail.css'
import {Link} from 'react-router-dom'
import ICON from './Icon'
import Image from './Image.png'
import {useParams} from "react-router-dom"

function Detail() {
    let { params } = useParams(); 

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-11">
                    <div className="template-detail">
                        <div className="judul-detail">
                            {params}
                        </div>
                        <div className="tanggal-detail">
                            <p>14 April 2022</p>
                        </div>
                        <div>
                            <img src={Image} alt="" className="image-detail"></img>
                        </div>
                        <div className="isi-detail">
                            <p>Hello!
                                <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nisi quis dictum lacinia. Vestibulum maximus elementum mi, vitae congue risus posuere eu. Vestibulum felis dui, dignissim id ex ac, pretium porta ligula. Etiam aliquam quam eget arcu semper, ut congue felis ullamcorper. Quisque vitae orci eu ante mattis commodo vitae id tortor. Nullam a enim accumsan, rhoncus lacus laoreet, dignissim mauris. Mauris blandit, metus in varius dignissim, elit dui tincidunt libero, ut tristique eros dui convallis ante. Fusce in nibh mollis dui semper porta. Etiam dui lectus, rutrum at ante at, tempor sollicitudin leo. Pellentesque vitae feugiat justo.
                                <br></br><br></br>Quisque blandit dictum leo a porta. Proin congue dolor et justo varius feugiat. Etiam in ipsum in erat pretium ornare. Duis dignissim facilisis maximus. Donec hendrerit hendrerit sapien ac vehicula. Morbi mollis pulvinar congue. Sed vestibulum lorem sed tempus ullamcorper. Vestibulum varius sed ipsum id consequat. Vestibulum aliquam nibh eu diam imperdiet placerat. Etiam aliquet purus ac quam consectetur, ut tristique justo pharetra. Integer eu diam vel lectus auctor cursus non sit amet justo. Duis a molestie tortor, eget accumsan lectus. Aliquam rutrum tortor id ligula commodo ultricies.
                                <br></br><br></br>Etiam ornare dui id neque lobortis euismod. Fusce urna mauris, ultrices ultricies aliquam id, accumsan sed sem. Etiam at metus eget nunc interdum tincidunt et nec turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a enim vitae est lacinia finibus. Mauris suscipit ante id eros fermentum pellentesque. Vivamus aliquet dignissim ipsum et accumsan. 
                            </p>
                        </div>
                        <div className="another-detail">
                            <p>ANOTHER NEWS</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1">
                    <div className="contact-detail">
                        {
                            ICON && ICON.map((val) =>
                                <div className="col-1 col-lg-12">
                                    <Link to="/narahubung">
                                        <p>{val.icon}</p>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;