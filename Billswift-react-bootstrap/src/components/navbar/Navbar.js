import React from 'react'

const Navbar= (props) => {
    const {title} = props;
  return (

    
      
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">{title}</a>
        
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
           
          </ul>
          
        </div>
      </nav>

   
    
  )
}


Navbar.defaultProps = {
    title: "Billswift"
}

export default Navbar;