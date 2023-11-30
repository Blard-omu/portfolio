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
                <div className="img-container">
                  <img src={ME} alt="me" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, sed enim? Distinctio consequatur iste veritatis, magnam
                  quasi in facilis reprehenderit.
                </p>
                <b>Blard: </b>
                <em>Software Developer</em>
              </div>
              <div className="carousel-item">
                <div className="img-container">
                  <img src={ME2} alt="me" />
                </div>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, sed enim? Distinctio consequatur iste veritatis, magnam
                  quasi in facilis reprehenderit.
                </p>
                <b>John: </b>
                <em>CEO Pause Point</em>
              </div>
              <div className="carousel-item">
                <div className="img-container">
                  <img src={ME} alt="me" />
                </div>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, sed enim? Distinctio consequatur iste veritatis, magnam
                  quasi in facilis reprehenderit.
                </p>
                <b>Bob: </b>
                <em>Product Manager</em>
              </div>
            </div>
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          {/* <FiChevronsRight /> */}
          <FiChevronsDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
