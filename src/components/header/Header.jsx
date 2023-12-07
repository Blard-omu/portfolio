import React from "react";
import "./header.css";
import CTA from "./Cta";
import ME from "../../assets/blard_profile1.jpeg";
import ME2 from "../../assets/blard_profile2.jpeg";
import Headersocial from "./Headersocials";
import { FiChevronsDown, FiChevronsLeft } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Blard Omu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            MERN
          </button>
          <button type="button" class="btn btn-outline-primary mx-2">
            PYTHON
          </button>
          <button type="button" class="btn btn-outline-primary">
            DJANGO
          </button>
        </div>
        <CTA />
        <Headersocial />

        <div className="ed">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, sed enim? Distinctio consequatur iste veritatis, magnam
                  quasi in facilis reprehenderit"
                </p>
                <div className="img-container d-flex gap-2 align-items-center">
                  <img src={ME} alt="me" />
                  <div className="testify d-flex flex-column justify-content-around align-items-start">
                    <h4>Blard</h4>
                    <i>Software Developer</i>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <p>
                  "Pistinctio consequatur iste veritatis, magnam
                  quasi in facilis reprehenderit"
                </p>

                <div className="img-container d-flex gap-2 align-items-center">
                  <img src={ME2} alt="me" />
                  <div className="testify d-flex flex-column justify-content-around align-items-start">
                    <h4>John</h4>
                    <i>Pause Point Ltd</i>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, sed enim? Distinctio consequatur iste veritatis" 
                </p>

                <div className="img-container d-flex gap-2 align-items-center">
                  <img src={ME} alt="me" />
                  <div className="testify d-flex flex-column justify-content-around align-items-start">
                    <h4>Bob </h4>
                    <i>Product Manager</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#footer" className="scroll__down">
          <FiChevronsDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
