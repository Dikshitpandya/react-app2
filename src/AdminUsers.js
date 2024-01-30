import AdminMenu from "./AdminMenu";
export default function AdminUsers() {
    return(<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
      <AdminMenu />
      <div className="layout-page">
       
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="fw-bold py-1 mb-1" />
                {/* <a href="admin-add-category.html" class="btn btn-primary">Add category</a> */}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header">Customers/Users</h5>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th width="10%">Srno</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th width="10%">Orders</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>abc@gmail.com</td>
                            <td>1234567890</td>
                            <td>
                              <a href="admin-orders.html" title="click to see this users orders"><i className="bx bxs-box bx-lg mb-2" /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Basic Bootstrap Table */}
          </div>
        </div>
      </div>
    </div>
  </div>);
}