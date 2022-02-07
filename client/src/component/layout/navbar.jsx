import React from 'react';

const Navbar = () => {
  return(
      <nav className='nabar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'> 
        <div className="container">
            <a href="#" className="navbar-brand"> Contact Manager </a>
                <div>
                    <a href="#" className="btn btn-light ml-auto">
                        Add Contacts
                    </a>
                </div>
        </div>
      </nav>

      )
};

export default Navbar;

