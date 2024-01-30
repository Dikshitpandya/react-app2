import AdminMenu from "./AdminMenu";
export default function AdminOrders() {
    return(<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
     <AdminMenu />
      <div className="layout-page">
        
        <div className="content-wrapper">
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
                  <h5 className="card-header">Orders</h5>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th width="5%">ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th width="5%">View</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="align-text-top">
                            <td>100</td>
                            <td>Fri 26-jan-2024</td>
                            <td>Confirmed</td>
                            <td>78222</td>
                            <td>
                              Ankit Patel <br />
                              105, Eva - surbhi, <br />
                              opp Aksharwadi <br />
                              Bhavnagar - 364001
                            </td>
                            <td>
                              <a href="admin-orders-detail.html" title="click to see this  orders details"><i className="bx bxs-box bx-lg mb-2" /></a>
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