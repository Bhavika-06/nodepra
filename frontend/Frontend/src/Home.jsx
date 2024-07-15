import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/user')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
<div> 
    <div>
        <table>
            <thead>
                <tr>
                    <th> Name</th>
                    <th> ID</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>

                {
                    data.map((student,index)=>{
                        return <tr key={index}>
                            <td>{student.Name}</td>
                            <td>{student.ID}</td>
                            <td>{student.Age}</td>
                            <button>Edit</button>
                            <button>Delete</button>

                        </tr>
                    })
                }
            </tbody>
        </table>
       
     </div> 
        
 </div>
  )
}

export default Home
