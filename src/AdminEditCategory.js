import AdminMenu from "./AdminMenu";
export default function AdminEditCategory() {
  return (
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <AdminMenu />
      <div className="layout-page">

        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="fw-bold py-1 mb-1">Category</h4>
                <a href="admin-category.html" className="btn btn-primary">Back</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header">Edit category</h5>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="inputTitle" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputPhoto" className="form-label">Photo</label>
                        <input type="file" className="form-control" id="inputPhoto" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Is Live</label>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="isLive" id="yes" defaultValue="yes" required />
                          <label className="form-check-label" htmlFor="yes">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="isLive" id="no" defaultValue="no" required />
                          <label className="form-check-label" htmlFor="no">
                            No
                          </label>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                        <button type="reset" className="btn btn-secondary">Clear all</button>
                      </div>
                    </form>
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