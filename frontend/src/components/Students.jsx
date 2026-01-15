import React, { useEffect, useState } from 'react'
import axios from "axios"
import axiosInstance from './axiosInstance'

function Students() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  async function handleAddData(e) {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/add", { name, course });
      fetchData();
      alert(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axiosInstance.get("/api/data");
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
      setStudents([]);
    }
  }

  return (
    <div>
      <form onSubmit={handleAddData}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={course} onChange={e => setCourse(e.target.value)} />
        <button type="submit">Add Data</button>
      </form>

      {Array.isArray(students) &&
        students.map(std => (
          <div key={std._id}>
            <h3>{std.name}</h3>
            <h4>{std.course}</h4>
          </div>
        ))}
    </div>
  );
}


export default Students