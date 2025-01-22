import React from 'react'
import { Helmet } from "react-helmet";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaDeleteLeft } from "react-icons/fa6";
import { useDeleteDataMutation, useGetDataQuery, usePostDataMutation } from '../app/slices/ShopSlices';
import Swal from 'sweetalert2';

let schema = yup.object().shape({
  name: yup.string().required("Name is Required!"),
  img: yup.string().required("Image is Required!"),
  price: yup.number().required("Price is Required!").positive().integer(),
});

function Add() {
  let { data, isLoading, refetch } = useGetDataQuery()
  let [postData] = usePostDataMutation()
  let [deleteData] = useDeleteDataMutation()

 async function handleDelete(id) {
   await deleteData(id)
   refetch()
  }
  return (
    <div>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <div className="Add">
        <h1>Add Form</h1>
        <Formik
          initialValues={{ name: '', img: '', price: '' }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await postData(values)
            refetch()
            Swal.fire({
              icon: "success",
              title: `${values.name} uğurla əlavə olundu!`,
              showConfirmButton: false,
              timer: 1500
            });
            values.name = '',
              values.img = '',
              values.price = ''

          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="img" placeholder="Enter image" />
              <ErrorMessage name="img" component="div" />

              <Field type="text" name="name" placeholder="Enter name" />
              <ErrorMessage name="name" component="div" />

              <Field type="number" name="price" placeholder="Enter price" />
              <ErrorMessage name="price" component="div" />


              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price($)</th>
            <th>Delete</th>
          </tr>
          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td><img src={item.img} alt="" style={{ width: "150px", height: "150px" }} /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td><button onClick={() => handleDelete(item._id)}><FaDeleteLeft /></button></td>
                </tr>
              ))
            )
          }
        </table>
      </div>
    </div>
  )
}

export default Add
