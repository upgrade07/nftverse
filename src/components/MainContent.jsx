import { useState,useEffect } from 'react'

const MainContent = () => {
    const [users,fetchUsers] = useState([])
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            fetchUsers(res)
          })
      }
    
      useEffect(() => {
        getData()
      }, [])
      
        
        return(
            <div className='card-container'>
                {
                    users.map((user)=>{
                        return(
                            <div className='card'>
                                <div>{user.name}</div>
                                <div>{user.username}</div>
                                <div>{user.email}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
        
      
  };
  


export default MainContent