//  Jumboltron
import React from "react";

const Jumboltron = (props) => {
  return (
    <section className="bg-dark py-5 jumboltron">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">{props.title}</h1>
          <p className="lead fw-normal text-white-50 mb-0">{props.subTitle}</p>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center my-3 my-md-5">
            <div className="col-md-8">
              <div className="d-flex align-items-center shadow-sm">
                <div className="form-floating w-100">
                  <input type="text" className="form-control rounded-0 rounded-start" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Search for products</label>
                </div>
                <button className="btn btn-secondary rounded-0 rounded-end p-3"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumboltron;
