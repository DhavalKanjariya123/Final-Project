import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap'
// import {ExportToExcel} from './ExportToExcel'

function Data() {

    const [data, setData] = useState(0);
    const fileName = "myfile";

    useEffect(() => {
        axios.get(" http://localhost:4000/taskform")
            .then((res) => {
                setData(res.data)
            })
    }, [])




    return (
        <>

            <center className='data-bg pt-5'>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Date</th>

                        </tr>
                    </thead>

                    {data && data.map((item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{item.taskdetail}</td>
                                        <td>{item.taskdate}</td>

                                    </tr>
                                </tbody>

                            </>
                        )
                    })

                    }
                </table>
            </center>
            {/* <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button> */}
            <center>

            </center>
        </>
    )

}



export default Data;
