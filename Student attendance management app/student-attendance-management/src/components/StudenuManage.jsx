import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

function StudentManage() {
  const [data, setData] = useState(0);


  useEffect(() => {
    axios.get("http://localhost:4000/student")
      .then((res) => {
        setData(res.data)

      })
  }, [])



  return (
    <>
      <center>
        <Table className='table-dark table-striped w-75 mt-5'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Present</th>

            </tr>
          </thead>
          {data && data.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{item.stuname}</td>
                    <td>{item.studate}</td>
                    

                    {
                      (item.attend == 'Present') ? <td className='fw-bold' style={{color:"#006400"}} >Present</td> : <td className='fw-bold' style={{color:"#8B0000"}} >Absent</td>
                    }

                    
                  </tr>
                </tbody>
              </>
            )
          }
          )

          }
        </Table>
      </center>







    </>

  )
}

export default StudentManage;
