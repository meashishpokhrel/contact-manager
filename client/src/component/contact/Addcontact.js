import React from "react";

function Addcontact() {
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add new Contact</div>
      <div className="card-body">
        <form>
          <div className="form-group mr-2">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Picture" />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addcontact;
