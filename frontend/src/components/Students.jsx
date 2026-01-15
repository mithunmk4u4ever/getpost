import React, { useEffect, useState } from 'react'
import axios from "axios"
import axiosInstance from './axiosInstance'

function Students() {
    const [name,setName]=useState("")
    const [course,setCourse]=useState("")
    const [students,setStudents]=useState([])

    async function handleAddData(e){
        e.preventDefault()
        try {
            const res=await axiosInstance.post("/add",{
                name,course
            })
            fetchData()
            alert(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        try {
            const res=await axiosInstance.get("/data")
            setStudents(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleAddData}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <input type="text" value={course} onChange={e=>setCourse(e.target.value)}/>
            <button type='submit'>Add Data</button>
        </form>
        {
          students &&  students.map(std=>
                <div>
                    <h3>{std.name}</h3>
                    <h4>{std.course}</h4>
                </div>
            )
        }
    </div>
  )
}

export default Students