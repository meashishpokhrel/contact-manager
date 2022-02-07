import React from 'react';
import {useSelector} from "react-redux"
import Avatar from "react-avatar"

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
      <th>Edit</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
      {
          contacts.map((contact) => (
            <tr>
            <th scope="row">{contact.id}</th>
            <td><Avatar src="https://www.w3schools.com/howto/img_avatar.png" size="38" round={true} /> {contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>ktm</td>
            <td>
                <div className='custom-control custom-checbox'>
                    <input type = "checkbox" className='custom-control-input' />
                    <label className='custom-control-label'></label>
                </div>
            </td>
            <td>
                <a href="#">
                <span className='material-icons'>edit</span>
                </a>
                </td>
            <td>
                <a href="#">
                <span className='material-icons'>delete</span>
                </a>
                </td>
            </tr>
          ))
   
    }
  </tbody>
</table>
      )
}

export default Contact;
