import React from "react";

function home1() {
  return (
    <div className="container-fluid home1">
      <div className="row ">
        <div className="d-flex justify-content-between mt-4">
          <div>
            <h2>Overview</h2>
          </div>
          <div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="btncheck1"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-primary bg-primary text-black"
                for="btncheck1"
              >
                Add Funds
                <i class="bi bi-plus-circle ms-3"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 container-fluid">
        <div class="col-lg-8 ">
          <div class="row md pp">
            <div class="col">
              <img
                src="/images/demo1.PNG"
                class="img-fluid "
                // style={{ height: "42vh", width: "100%" }}
                alt="..."
              ></img>
            </div>
            <div class="col">
              <img
                src="/images/demo2.PNG"
                class="img-fluid"
                // style={{ height: "42vh", width: "100%" }}
                alt="..."
              ></img>
            </div>
          </div>
          <div className="row bg-white mt-4 container">
            <div className="text-start mt-3">
              <h4>Referrer</h4>
            </div>
            <div style={{overflowX:'scroll'}}>
            <table class="table">
              <thead>
                <tr className="bg-light">
                  <th scope="col">Location</th>
                  <th scope="col">Views</th>
                  <th scope="col">Sales</th>
                  <th scope="col">Conversion</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">google.com</th>
                  <td>3746</td>
                  <td>752</td>
                  <td>43%</td>
                  <td>$19,291</td>
                </tr>
                <tr>
                  <th scope="row">facebook.com</th>
                  <td>8126</td>
                  <td>728</td>
                  <td>32%</td>
                  <td>$17,638</td>
                </tr>
                <tr>
                  <th scope="row">twitter.com</th>
                  <td>8836</td>
                  <td>694</td>
                  <td>28%</td>
                  <td>$16,218</td>
                </tr>
                <tr>
                  <th scope="row">Direct,Email,IM</th>
                  <td>1173</td>
                  <td>645</td>
                  <td>24%</td>
                  <td>$14,421</td>
                </tr>
                <tr>
                  <th scope="row">Linkedin.com</th>
                  <td>2739</td>
                  <td>539</td>
                  <td>20%</td>
                  <td>$12,370</td>
                </tr>
                <tr>
                  <th scope="row">instagram.com</th>
                  <td>2739</td>
                  <td>539</td>
                  <td>20%</td>
                  <td>$12,370</td>
                </tr>
                <tr>
                  <a className="text-primary">Show More</a>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-first order-md-last pp">
          <div className="row bg-white">
            <div>
              <img
                src="/images/demo3.jpeg"
                class="rounded-circle mb-2 mt-2"
                style={{ width: "130px" }}
                alt="Avatar"
              />
              <a href="/#">
                <span className="check-mar1">!</span>
              </a>
            </div>

            <h5 class="mb-1">
              <strong>Nick Herasimenka</strong>
            </h5>
            <p class="text-muted">United States</p>
            <div className="d-flex an">
              <div>
                <i class="bi bi-twitter text-muted ms-2"></i>
              </div>
              <div>
                <i class="bi bi-facebook text-muted ms-2"></i>
              </div>
              <div>
                <i class="bi bi-linkedin text-muted ms-2"></i>
              </div>
              <div>
                <i class="bi bi-whatsapp text-muted ms-2"></i>
              </div>
            </div>
            <div className="pd">
              <hr></hr>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h6 className="text-muted">Our Users</h6>
              </div>
              <div>
                <i class="bi bi-three-dots-vertical text-muted"></i>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <img
                  src="/images/demo4.jpeg"
                  class="rounded-circle"
                  height="60"
                  alt="Avatar"
                  loading="lazy"
                />
                <div>
                  <h5 className="mx-2 mt-1">Drew Jamed</h5>
                  <p className="text-start ms-3">United States</p>
                </div>
                <div>
                  <p className="text-muted mt-4 ah">Mobile:9500463059</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <img
                  src="/images/demo4.jpeg"
                  class="rounded-circle"
                  height="60"
                  alt="Avatar"
                  loading="lazy"
                />
                <div>
                  <h5 className=" mx-2 mt-1">Bavid Kames</h5>
                  <p className="text-start ms-3">United States</p>
                </div>
                <div>
                  <p className="text-muted mt-4 ah">Mobile:9500463059</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <img
                  src="/images/demo4.jpeg"
                  class="rounded-circle"
                  height="60"
                  alt="Avatar"
                  loading="lazy"
                />
                <div>
                  <h5 className=" mx-2 mt-1">Lawed Emes</h5>
                  <p className="text-start ms-3">United States</p>
                </div>
                <div>
                  <p className="text-muted mt-4 ah">Mobile:9500463059</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 pp ">
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="text-muted">Product Video</h6>
                </div>
                <div>
                  <i class="bi bi-three-dots-vertical text-muted"></i>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/demo7.png"
                class="img-fluid "
                // style={{ height: "42vh", width: "100%" }}
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home1;
