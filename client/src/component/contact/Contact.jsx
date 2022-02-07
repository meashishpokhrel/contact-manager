import React from 'react';
import {useSelector} from "react-redux"

const Contact = () => {
    const contacts = useSelector((state) => state.contacts)
  return(
      <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Favourite</th>
    </tr>
  </thead>
  <tbody>
      {
          contacts.map((contact) => (
            <tr>
            <th scope="row">{contact.id}</th>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>ktm</td>
            <td>
                <div className='custom-control custom-checbox'>
                    <input type = "checkbox" className='custom-control-input' />
                    <label className='custom-control-label'></label>
                </div>
            </td>
            </tr>
          ))
   
    }

    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      )
}

export default Contact;
