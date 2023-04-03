import React, { useState } from 'react'
import '../css/marga.css'
import { useNavigate } from 'react-router-dom';


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export const Marga = (props) => {


    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);

    const navigate = useNavigate();
    return (
        <div id="about">

            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <input
                            style={{ width: "100%" }}
                            value={searchText}
                            onChange={(event) => {
                                setSearchText(event.target.value);
                            }}
                        />
                    </div>
                    <div
                        style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
                    >
                        <button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                // Search
                                const params = {
                                    q: searchText,
                                    format: "json",
                                    addressdetails: 1,
                                    polygon_geojson: 0,
                                };
                                const queryString = new URLSearchParams(params).toString();
                                const requestOptions = {
                                    method: "GET",
                                    redirect: "follow",
                                };
                                fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                                    .then((response) => response.text())
                                    .then((result) => {
                                        console.log(JSON.parse(result));
                                        setListPlace(JSON.parse(result));
                                        navigate("/navigacija")
                                    })
                                    .catch((err) => console.log("err: ", err));
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
                {/* <div>
                    <ul component="nav" aria-label="main mailbox folders">
                        {listPlace.map((item) => {
                            return (
                                <div key={item?.place_id}>
                                    <li>{item?.display_name}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div> */}
            </div>
        </div>

    )
}
