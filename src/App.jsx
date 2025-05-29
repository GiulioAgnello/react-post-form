import axios from "axios";
import { useState } from "react";

// infoBases
const urlBase = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const dataDefault = [
  {
    aithor: "grs",
    title: "gsr",
    body: "grsg",
  },
];

export default function App() {
  const [newAuthor, setNewAutor] = useState(dataDefault);

  const handleNewAuthor = (e) => {
    setNewAutor({ ...newAuthor, [e.target.name]: e.target.value });
  };

  const hendlesubmit = (e) => {
    e.preventDefault();
    axios.put(dataDefault, newAuthor).then((res) => {
      console.log(res);
    });
    console.log(newAuthor);
  };
  return (
    <>
      <h1 className="p-5 text-center">FORM</h1>
      <div className="container ">
        <form onSubmit={hendlesubmit}>
          <label className="form-label" htmlFor="author">
            author
          </label>
          <input
            className="form-control"
            id="author "
            type="text"
            name="author"
            onChange={handleNewAuthor}
            required
          />
          <label className="form-label" htmlFor="title ">
            title
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            name="title"
            onChange={handleNewAuthor}
            required
          />
          <label className="form-label" htmlFor="body ">
            body
          </label>
          <input
            className="form-control"
            id="body "
            type="text"
            name="body"
            onChange={handleNewAuthor}
            required
          />
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              public
            </label>
          </div>

          <div className="d-flex justify-content-center m-3">
            <button className="btn btn-primary">invia</button>
          </div>
        </form>
      </div>
    </>
  );
}
