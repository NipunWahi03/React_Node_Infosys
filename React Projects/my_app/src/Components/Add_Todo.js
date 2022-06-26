import React from 'react'
import { useState } from 'react'

export default function Add_Todo({ insert_item }) {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title === '' || description === '') {
            alert("Your Title or Description can not be empty");
        }
        else {
            insert_item(title, description)
            setTitle("")
            setdescription("")
        }
    }

    return (
        <div>
            <h3 className="text-center mb-3 " style={{ marginTop: 60 }}>Create your New Todos</h3>
            <form onSubmit={submit}>
                <div className="form-group  mb-2 mt-4">
                    <label htmlFor="title">Enter your Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your Todo Title" />
                </div>
                <div className="form-group mt-2 mb-2">
                    <label htmlFor="Description">Enter your Todo Description</label>
                    <input type="text" className="form-control" id="Description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter your Todo Description" />
                </div>
                <div className="form-group mt-2 mb-2">
                    <button type="submit" className="btn btn-success w-100">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
