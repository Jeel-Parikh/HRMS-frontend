// src/components/filter.
import React, { useState, useMemo, useEffect } from "react";
import PropTypes from 'prop-types';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import { apiservice } from "service/apiservice";
import { USERS } from 'service/url_helper'

function Attendance() {
    const [users, setUser] = useState();

    let data;
    useEffect(() => {
        
        console.log("In Use Effect",localStorage.getItem('token'));
        apiservice.callServiceGet(USERS)
          .then((user) => {

            console.log("Users are",user.data.result);
            setUser(user.data.result)
          })
          .catch((e) => { console.log(e) })
    
      });
    
    let user = localStorage.getItem('user');
    console.log("current user is",user);
    console.log("Users is ",users);

    // const [users, setUsers] = useState();
    const columns = useMemo(
        () => [
            {
                Header: "#",
                Cell: () => {
                    return <input type="checkbox" />;
                },
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Designation',
                accessor: 'designation'
            },
            {
                Header:'email address',
                accessor:'email'
            }
        ],
        []
    );

     data = [
        {
            "name": "horn-od926",
            "designation": "admin",
            "email":"a@b.com"
        },
        {
            "name": "heart-nff6w",
            "designation": 'employee',
            "email":'b@a.com'

        },
        // {
        //     "firstName": "minute-yri12",
        //     "lastName": "fairies-iutct",
        //     "age": 7,
        //     "visits": 77,
        //     "progress": 39,
        //     "status": "single"
        // },
        // {
        //     "firstName": "degree-jx4h0",
        //     "lastName": "man-u2y40",
        //     "age": 27,
        //     "visits": 54,
        //     "progress": 92,
        //     "status": "relationship"
        // },
        // {
        //     "firstName": "horn-od926",
        //     "lastName": "selection-gsykp",
        //     "age": 22,
        //     "visits": 20,
        //     "progress": 39,
        //     "status": "single"
        // },
        // {
        //     "firstName": "heart-nff6w",
        //     "lastName": "information-nyp92",
        //     "age": 16,
        //     "visits": 98,
        //     "progress": 40,
        //     "status": "complicated"
        // },
        // {
        //     "firstName": "minute-yri12",
        //     "lastName": "fairies-iutct",
        //     "age": 7,
        //     "visits": 77,
        //     "progress": 39,
        //     "status": "single"
        // },
        // {
        //     "firstName": "degree-jx4h0",
        //     "lastName": "man-u2y40",
        //     "age": 27,
        //     "visits": 54,
        //     "progress": 92,
        //     "status": "relationship"
        // },
        // {
        //     "firstName": "horn-od926",
        //     "lastName": "selection-gsykp",
        //     "age": 22,
        //     "visits": 20,
        //     "progress": 39,
        //     "status": "single"
        // },
        // {
        //     "firstName": "heart-nff6w",
        //     "lastName": "information-nyp92",
        //     "age": 16,
        //     "visits": 98,
        //     "progress": 40,
        //     "status": "complicated"
        // },
        // {
        //     "firstName": "minute-yri12",
        //     "lastName": "fairies-iutct",
        //     "age": 7,
        //     "visits": 77,
        //     "progress": 39,
        //     "status": "single"
        // },
        // {
        //     "firstName": "degree-jx4h0",
        //     "lastName": "man-u2y40",
        //     "age": 27,
        //     "visits": 54,
        //     "progress": 92,
        //     "status": "relationship"
        // }
    ];
    // data = users;


    //meta title
    document.title = "Attendance | HRMS";
    // useEffect(() => {
    //     console.log(localStorage.getItem('token'));
    //     apiservice.callServiceGet(USERS)
    //         .then((user) => {
    //             console.log(user.data.result);
    //             setUsers(user.data.result)
    //         })
    //         .catch((e) => { console.log(e) })

    // }, [])


    return (
        <div className="page-content">
            <div className="container-fluid">
                <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
                {/* <Table columns={columns} data={data} /> */}
            
                <TableContainer
                    columns={columns}
                    data={users}
                    isGlobalFilter={true}
                    isAddOptions={true}
                    customPageSize={10}
                    className="custom-header-css"
                />
            </div>
        </div>
    );
}
Attendance.propTypes = {
    preGlobalFilteredRows: PropTypes.any,

};


export default Attendance;