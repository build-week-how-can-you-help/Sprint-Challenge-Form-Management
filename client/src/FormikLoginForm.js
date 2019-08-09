import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


function LoginForm({ values, errors, touched, isSubmitting, handleSubmit, status }) {
  const [users, setUsers] = useState([])
  // console.log('users up',users);
  // console.log('status up',status);

// 2: {name: "Collard Greens with Kimchi", course: "Side", technique
  useEffect(() => {
    if (status) {
      setUsers(status);
    }
  }, [status]);
function myFunction(arr) {
   // console.log(arr[0])
let dat = ' '
    arr.map((item,ix) => (
     dat = dat + item +  (( ix === arr.length-1) ? '' : ', ')
    )
         )
return  dat
        }
  return (
    <div>
    <Form >
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button type='submit' disabled={isSubmitting}>Submit</button>

    </Form>

 {/* 2: {name: "Collard Greens with Kimchi", course: "Side", technique */}
{users.map(user => (
  <div style={{textAlign: 'left',marginLeft: '20%', border: 'medium solid black',width: '500px'}} key={user.name}>
  <ul>{user.name}</ul>
  <li style={{marginLeft: '20%',width: '500px'}}> Course: {user.course}</li>
  <li style={{marginLeft: '20%',width: '500px'}}> Technique: {user.technique}</li>
Ingredients:
{myFunction(user.ingredients)}
  </div>

))}
</div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2,"username not valid")
      .required("username is required"),
    password: Yup.string()
      .min(2, "Password must be 2 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    if (values.username === "alreadytaken@atb.dev") {
      setErrors({ username: "That username is already taken" });
    } else {
// console.log('values are',values)
    axios
      // https://reqres.in/api/users
      .post("http://localhost:5000/api/register", values)
      // .post("https://yourdatabaseurlgoeshere.com", values)
      .then(res => {
        // setStatus(res.data);
        // console.log(res.data); // Data was created successfully and logs to console
 // //////////////////////
 axios
 // https://reqres.in/api/users
 .get("http://localhost:5000/api/restricted/data")
 // .post("https://yourdatabaseurlgoeshere.com", values)
 .then(res => {
   setStatus(res.data);
//   console.log('from get',res.data); // Data was created successfully and logs to console

// http://localhost:5000/api/restricted/data

   // console.log('status',status); // Data was created successfully and logs to console
     // resetForm();
     setSubmitting(false);
   })
   .catch(err => {
     console.log('get',err); // There was an error creating the data and logs to console
     setSubmitting(false);
   });
 // /////////////////////
 // http://localhost:5000/api/restricted/data

        // console.log('status',status); // Data was created successfully and logs to console
          // resetForm();
          setSubmitting(false);
        })
        .catch('post',err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default FormikLoginForm;
