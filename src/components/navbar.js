import React from "react";

function navbar() {

  const openMenu = (e) => {
    e.preventDefault();
    document.body.classList.toggle("expand-menu");
    };
    
  return (
    <div className="navbar">
      <div>
        <i class="bi bi-list ms-3 qa"  onClick={openMenu}></i>
        <i class="bi bi-search ms-5 qb" >
          <i className="ms-3">Search transaction, invoice or help</i>
        </i>
      </div>
      <div className="d-flex">
        <div>
          <a href="/#">
            <span className="check-mar">.</span>
          </a>
          <span class="bi bi-bell aq" style={{ fontSize: "30px" }}></span>
        </div>
        <div className="ms-3">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                John Doe
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/Action">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Another action">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Something else here">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ms-3">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    class="rounded-circle"
                    height="30"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/My profile">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
