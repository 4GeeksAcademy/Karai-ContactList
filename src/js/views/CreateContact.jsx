import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const createContact = () => {

    // const { store } = useContext(Context);

    const [ full_name, setFull_Name] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ adress, setAdress ] = useState ("")
    const [ phone, setPhone ] = useState ("")

    return (
        <div className="container">
            <div className='d-flex justify-content-center text-align-center'>
                <h1>Add new contact</h1>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Name</label>
                <input onChange={(e) => setFull_Name(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Mail</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Mail" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Adress</label>
                <input onChange={(e) => setAdress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Adress" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Phone" />
            </div>
            <div className="d-grid gap-2">
                <button onClick={handleContact} className="btn btn-dark" type="button">Save</button>
            </div>
            <Link to='/'>
                <div>
                    <p className="text-muted">or get back to contacts</p>
                </div>
            </Link>
        </div>
    );
};

export default createContact

