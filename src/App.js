import React from 'react';
import {useState} from 'react';
import data from './data.json';
import  './App.css';
import Table from'react-bootstrap/Table';

const App = () => {
  const[search,setSearch]= useState('');
   console.log(search)

return (
  <div>
    <header/>
    < div className='Container'>
    <h5>Sample</h5>
    <center>
    <input type ="text" placeholder="Search..." className='search' onChange={(e)=> setSearch(e.target.value)} /></center></div><br/>
      <Table stripped bordered hover>
        <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>gender</th>
          <th>Location</th>
          </tr>
          </thead>
       <tbody> 
        {data
        .filter((item) => {
          return search.toLowerCase() === '' 
          ? item
          :item.name.toLowerCase().includes(search);
        }) 
        .map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.location}</td>
        </tr>
        ))}
    </tbody>
      </Table>
    </div>
);
};
export default App;





