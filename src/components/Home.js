import React, { useEffect, useState } from 'react'
import './home.css'
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Home = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    const getusers = async () => {
        const response = await fetch('https://demo.jobsoid.com/api/v1/jobs');
        setUsers(await response.json());
    }

    useEffect(() => {
        getusers();
    }, [])

    return (
        <div className="container">
            <br />
            <div className="jumbotron">
                <div className="input-group">
                    <input type="search" className="form-control" id="" placeholder="Search for Job" />
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-link jobSearchTermButton" id="searchTermButton-4"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <input className="form-control list" list="datalistOption" id="exampleDataList" placeholder="Department" />
                    <datalist id="datalistOption" >
                        <option value="Content & design" />
                        <option value="Development" />
                        <option value="Project Management" />
                        <option value="Quality Assurance" />
                    </datalist>
                    <input className="form-control list" list="datalist" id="exampleDataList" placeholder="Location" />
                    <datalist id="datalist" >
                        <option value="Verna Goa" />
                        <option value="Pune" />
                    </datalist>
                    <input className="form-control list" list="datalistOptions" id="exampleDataList" placeholder="Function" />
                    <datalist id="datalistOptions" >
                        <option value="Information Technology" />
                        <option value="Marketing" />
                        <option value="Product Management" />
                        <option value="Quality Assurance" />
                    </datalist>
                </div>
            </div>
            <div className="jumbotron d-flex justify-content-between">
                <div className="d-flex justify-content-between p-0 m-0 filter">
                    <div className=" d-flex m-0 p-0 justify-content-between">
                        <p className="">Development</p>
                        <button type="button" className=" btn btn-link btn-search-cancel searhTermClear"><i class="glyphicon glyphicon-remove"></i></button>
                    </div>
                    <div class="filter d-flex m-0 p-0 justify-content-between">
                        <p className="">Verna,Goa</p>
                        <button type="button" className=" btn btn-link btn-search-cancel searhTermClear"><i class="glyphicon glyphicon-remove"></i></button>
                    </div>
                </div>
                <div className="clear">
                    <p className="clear">Clear All</p>
                </div>
            </div>
            <div>
                <h2><b>Development</b></h2>
                <div className="progress"></div>
                <br />
                {
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                <h3><b>{user.industry}</b></h3>
                                <div className="d-flex justify-content-between">
                                    <div className="right d-flex m-1 p-1">
                                        <h4 className="m-0 p-3"><ApartmentIcon />{user.company}</h4>
                                        <h4 className="m-0 p-3"><LocationOnIcon />{user.location.city},{user.location.state}</h4>
                                        <h5 className="m-2 p-3 fullTime"><b>Full Time</b></h5>
                                    </div>
                                    <div className="left d-flex">
                                        <h4 className="m-0 p-3 apply">
                                            <a className="text-decoration-none" href={user.applyUrl}>Apply</a>
                                        </h4>
                                        <h4 className="m-0 p-4"><b>
                                            <a className="text-decoration-none view" href={user.hostedUrl}>View</a>
                                        </b></h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home
