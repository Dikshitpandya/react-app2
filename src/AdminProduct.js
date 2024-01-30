import AdminMenu from "./AdminMenu";
export default function AdminProduct() {
    return(<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
     <AdminMenu />
      <div className="layout-page">
      
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="fw-bold py-1 mb-1">Products</h4>
                <a href="admin-add-product.html" className="btn btn-primary">Add product</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header">Existing Product</h5>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Sr no</th>
                            <th>Name <br /> Category</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody className="top-text">
                          <tr>
                            <td>1</td>
                            <td>IPhone 
                              <br />
                              <b className="text-danger">(Mobile)</b>
                            </td>
                            <td>125000 
                              <br />
                              <h6 className="bg-info p-1 mt-2 text-white">(not live)</h6>
                            </td>
                            <td>
                              <img src="https://picsum.photos/100?random=1" className="img-fluid" />
                            </td>
                            <td width="22%">
                              <a href="admin-edit-product.html"><i className="bx bx-pencil mb-2 bx-lg" /></a>
                              <a href> <i className="bx bx-trash bx-lg mb-2" /></a>
                              <a href> <i className="bx bx-detail bx-lg mb-2" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>IPad
                              <br />
                              <b className="text-danger">(Mobile)</b>
                            </td>
                            <td>55000</td>
                            <td>
                              <img src="https://picsum.photos/100?random=2" className="img-fluid" />
                            </td>
                            <td width="22%">
                              <a href="admin-edit-product.html"><i className="bx bx-pencil mb-2 bx-lg" /></a>
                              <a href> <i className="bx bx-trash bx-lg mb-2" /></a>
                              <a href="admin-view-product-detail.html"> <i className="bx bx-detail bx-lg mb-2" /></a>
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