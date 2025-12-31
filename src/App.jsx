
import { useState } from 'react'
import Card from './components/card.jsx'

import './App.css'

const App = () => {
  const submithandler=(e)=>{
    let daata=[...users,{Username,Email,pictureURL,information}]
    localStorage.setItem('users',JSON.stringify(daata));
    setUsers(daata);
    e.preventDefault();
    console.log(daata);
    setUsername('');
    setEmail('');
    setPictureURL('');
    setInformation('');

  }
  const deletehandler=(index)=>{
    let newusers=[...users];
    newusers.splice(index,1);
    setUsers(newusers);
    localStorage.setItem('users',JSON.stringify(newusers));
  }

 

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [pictureURL, setPictureURL] = useState('');
  const [information, setInformation] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  return (
    <div className='app'>
    <div className="form-container">
      <form  onSubmit={(e)=>{
        submithandler(e)
      }} >
        <input type="text" placeholder="Username" value={Username} onChange={(e)=>{
           setUsername(e.target.value)
        }} />
        <input type="email" placeholder="Email" value={Email} onChange={(e)=>{
           setEmail(e.target.value)
        }} />
        <input type="text" placeholder="picture URL" value={pictureURL} onChange={(e)=>{
           setPictureURL(e.target.value)
        }} />
        <input type="text" placeholder='information' value={information} onChange={(e)=>{
           setInformation(e.target.value)
        }} />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className='card-container'>
       {users.map((user,index)=>(
        <Card key={index} Username={user.Username} Email={user.Email} pictureURL={user.pictureURL} information={user.information} deletehandler={deletehandler} />
       ))}
      </div>
    
      
    </div>
  )
}

export default App
