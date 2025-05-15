import React from 'react'
const Header = ({ menuList }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img src="https://www.uengage.in/images/addo/logos/logo-5-1741123420.png" width={"150px"} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                menuList.map((item, i) => {
                  return (
                    <li key={i} className="nav-item">
                      <a className="nav-link active text-white" style={{textTransform:"capitalize"}} aria-current="page" href="#">{item.item} </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>

    </div>

  )
}

export default Header
