import React, { useState } from 'react'

const App = () =>
{   
    const [fullname,setFullname] = useState({
        fname : '',
        lname : '',
        email : '',
        number : '',
        image : ''
    })
    const [details,setDetails] = useState([])


    const ChangeName = (e) =>
    {
        const value = e.target.value
        const name = e.target.name
            
        setFullname((preVal)=>
            { 
                return{
                ...preVal,
                [name] : value
                }
            })
    }
    const add = () =>
    {   
        fullname.fname && fullname.lname && fullname.email && fullname.number && fullname.image ?
        setDetails([...details,fullname])
        :
        alert("Fields can't be empty!")
        setFullname({
            fname: '',
            lname: '',
            email: '',
            number: '',
            image: '',
        })
    }

    return (
        <>
        <div className="mt-5 container d-flex justify-content-center flex-column">
            <input 
                type='text'
                name='fname'
                placeholder="Enter Your First Name"
                onChange={ChangeName}
                className="p-2 m-3"
                value={fullname.fname}
            />
            <input 
                type='text'
                name='lname'
                placeholder="Enter Your Last Name"
                onChange={ChangeName}
                className="p-2 m-3"
                value={fullname.lname}
            />
            <input 
                type='text'
                name='email'
                placeholder="Enter Your Email"
                onChange={ChangeName}
                className="p-2 m-3"
                value={fullname.email}
            />
            <input 
                type='text'
                name='number'
                placeholder="Enter Your Number"
                onChange={ChangeName}
                className="p-2 m-3"
                value={fullname.number}
            />
            <input 
                type='file'
                name='image'
                onChange={ChangeName}
                className="p-2 m-3"
                value={fullname.image}
            />
            <button className="btn btn-primary" onClick={add}>Submit</button>
        </div>
            <hr/>
            {details.length > 0 &&
            <div className="container">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                   <tr>
                        <td> S.No <td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td> image </td>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {details.map(data,index =>
                        {
                            return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                        <td> {data.image}</td>
                                    </tr>
                                    )
                                })}
                </tbody>
            </table>
            </div>
            }
        </>
    )
}

export default App;
