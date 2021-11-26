import axios from "axios";

// create a axios instance
export const userRequest = axios.create({
  baseURL: "http://192.168.0.120:3001/",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});


// create a student
// fetch api
export const create_student_with_fetch = async (name) => {
  return fetch("http://192.168.0.120:3001/students", {
    body: `{"name": "${name}"}`,
    headers: { "content-type": "application/json" },
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

// axios api 
export const create_student_with_axios = async (name) => {
  return userRequest
    .post("/students", { name: name })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      return data;
    });
};


// read students
// fetch api
export const read_student_with_fetch = async () => {
  return fetch("http://192.168.0.120:3001/students")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

// axios api
export const read_student_with_axios = async () => {
  return userRequest
    .get("/students")
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      return data;
    });
};


// update sutdent
// fetch api
export const update_student_with_fetch = async (id, name) => {
  return fetch(`http://192.168.0.120:3001/students/${id}`, {
    body: `{"name": "${name}"}`,
    headers: { "content-type": "application/json" },
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

// axios api
export const update_student_with_axios = async (id, name) => {
  return userRequest
    .put(`/students/${id}`, { name: name })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      return data;
    });
};


// delete sutdent
// fetch api
export const delete_student_with_fetch = async (id) => {
  return fetch(`http://192.168.0.120:3001/students/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

// axios api
export const delete_student_with_axios = async (id) => {
  return userRequest
    .delete(`/students/${id}`)
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      return data;
    });
};
