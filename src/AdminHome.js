import AdminMenu from "./AdminMenu";
export default function AdminHome()
{
    return (<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <AdminMenu />
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
        {/* / Navbar */}
        {/* Content wrapper */}
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
                  <h5 className="card-header">Dashboard</h5>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="admin/assets/img/icons/unicons/chart-success.png" className="rounded" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="fw-semibold d-block mb-1">daily orders</span>
                              <h3 className="card-title mb-2">10</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="admin/assets/img/icons/unicons/chart-success.png" className="rounded" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="fw-semibold d-block mb-1">weekly orders</span>
                              <h3 className="card-title mb-2">10</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="admin/assets/img/icons/unicons/chart-success.png" className="rounded" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="fw-semibold d-block mb-1">Monthly orders</span>
                              <h3 className="card-title mb-2">10</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="admin/assets/img/icons/unicons/chart-success.png" className="rounded" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="fw-semibold d-block mb-1">Yearly orders</span>
                              <h3 className="card-title mb-2">10</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-lg-4 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                              <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                <div className="card-title">
                                  <h5 className="text-nowrap mb-2 text-primary">Categories</h5>
                                </div>
                                <div className="mt-sm-auto">
                                  <h3 className="mb-0">18</h3>
                                </div>
                              </div>
                              <div id="profileReportChart" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                              <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                <div className="card-title">
                                  <h5 className="text-nowrap mb-2 text-danger">Products</h5>
                                </div>
                                <div className="mt-sm-auto">
                                  <h3 className="mb-0">300</h3>
                                </div>
                              </div>
                              <div id="profileReportChart" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                              <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                <div className="card-title">
                                  <h5 className="text-nowrap mb-2 text-success">Users</h5>
                                </div>
                                <div className="mt-sm-auto">
                                  <h3 className="mb-0">270000</h3>
                                </div>
                              </div>
                              <div id="profileReportChart" />
                            </div>
                          </div>
                        </div>
                      </div>
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
  </div>
  );
}