import React from 'react'

function sidebar() {
  return (
    <div className="sidebar">
      <div className="ab">
        <h2>A C M E</h2>
        <h4 className="ac">
          <i class="bi bi-pentagon"></i> <a className="ms-3"></a>Home
        </h4>
        <h4 className="">
          <i class="bi bi text-white av"></i>
          <i class="bi bi-dash-square"></i> <a className="ms-3"></a> Dashboard
        </h4>
        <h4 className="mt-5">
          <i class="bi bi-caret-down-square"></i> <a className="ms-3"></a>Inbox
        </h4>
        <h4 className="mt-5">
          <i class="bi bi-card-text"></i> <a className="ms-3"></a> Products
        </h4>
        <h4 className="mt-5">
          <i class="bi bi-gear"></i> <a className="ms-3"></a> Admin
        </h4>
      </div>
    </div>
  );
}

export default sidebar
