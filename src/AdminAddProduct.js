import AdminMenu from "./AdminMenu";
export default function AdminAddProduct() {
   return (<div className="layout-wrapper layout-content-navbar">
   <div className="layout-container">
     <AdminMenu />
     <div className="layout-page">
       {/* Navbar */}
       {/* / Navbar */}
       {/* Content wrapper */}
       <div className="content-wrapper">
         {/* Content */}
         <div className="container-xxl flex-grow-1 container-p-y">
           <div className="row mb-3">
             <div className="col-12 d-flex justify-content-between">
               <h4 className="fw-bold py-1 mb-1">Products</h4>
               <a href="admin-product.html" className="btn btn-primary">back</a>
             </div>
           </div>
           <div className="row">
             <div className="col-12">
               <div className="card">
                 <h5 className="card-header">
                   Add new product
                 </h5>
                 <div className="card-body">
                   <form action>
                     <div className="row">
                       <div className="col-lg-4 pt-2">
                         <div className="form-floating mb-3">
                           <input type="text" className="form-control" id="name" placeholder="name" />
                           <label htmlFor="name">Name</label>
                         </div>
                       </div>
                       <div className="col-lg-4 pt-2">
                         <div className="form-floating mb-3">
                           <input type="number" className="form-control" id="price" placeholder="price" />
                           <label htmlFor="price">Price</label>
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <label htmlFor="formFile" className="form-label">Select photo</label>
                         <input className="form-control" type="file" id="formFile" />
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-lg-4">
                         <div className="form-floating mb-3">
                           <input type="number" className="form-control" id="stock" placeholder="available quantity for sell" />
                           <label htmlFor="stock">Stock</label>
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-floating mb-3">
                           <input type="text" className="form-control" id="size" placeholder="Product Size" />
                           <label htmlFor="size">Size</label>
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-floating mb-3">
                           <input type="number" className="form-control" id="weight" placeholder="Weight" />
                           <label htmlFor="stock">Weight</label>
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-lg-4">
                         <select className="form-select" aria-label="Default select">
                           <option selected>Select Category</option>
                           <option value={1}>One</option>
                           <option value={2}>Two</option>
                           <option value={3}>Three</option>
                         </select>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-floating">
                           <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{"height":"100px"}} defaultValue={""} />
                           <label htmlFor="floatingTextarea">Comments</label>
                         </div>
                       </div>
                       <div className="col-lg-4">
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
                     </div>
                     <div className="row">
                       <div className="col-12 text-end">
                         <button type="submit" className="btn btn-primary">Save changes</button>
                         <button type="reset" className="btn btn-secondary">Clear all</button>
                       </div>
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