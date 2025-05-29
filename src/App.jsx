import axios from "axios";
import { useState } from "react";

// infoBases
const urlBase = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const dataDefault = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function App() {
  const [newAuthor, setNewAutor] = useState(dataDefault);

  const handleNewAuthor = (e) => {
    // setCheckValue(e.target.checked);
    setNewAutor({
      ...newAuthor,
      [e.target.name]: e.target.value && e.target.checked,
    });
  };

  const hendlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(urlBase, newAuthor)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("form non inviato");
        console.error(err);
      });
  };
  return (
    <>
      <h1 className="p-5 text-center">FORM</h1>
      <div className="container ">
        <form onSubmit={hendlesubmit}>
          <label className="form-label" htmlFor="author">
            Author
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
            Title
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
            Body
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
              checked={newAuthor.public}
              name="public"
              id="checkDefault"
              onChange={handleNewAuthor}
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Public
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
