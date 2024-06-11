import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle]=useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {title, description };
      const response = await fetch("http://localhost:8000/api/issues/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Issue List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
  <input
    type="text"
    className="form-control mr-2"  
    placeholder="Title"
    value={title}
    onChange={e => setTitle(e.target.value)}
  />
  <input
    type="text"
    className="form-control mr-2" 
    placeholder="Description"
    value={description}
    onChange={e => setDescription(e.target.value)}
  />
  <button className="btn btn-outline-primary">Add</button>
</form>

    </Fragment>
  );
};

export default InputTodo;
