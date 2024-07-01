import React from "react";
import "./Provide.css";
import ServiceImg from "../../assets/services.jpg";
import { Link } from "react-router-dom";

const Provide = () => {
  return (
    <div className="container provide">
      <div className="provide_container">
        <div className="provide_headingcontents">
          <h1 className="provide_header">What We Provide</h1>
          <p className="provide_headertext">
            From classic cuts to trendy styles, our barbershop and salon offers
            a wide range of men's grooming services.
          </p>
        </div>

        <div className="providings">
          <div className="providings_left">
            <div className="providings_lefttop">
              <span className="providings_lefttop_heading">
                <h1>HAIRCUT</h1>
              </span>
              <p className="providings_lefttop_para">
                A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam
                duis pharetra faucibus ultrices volutpat quisque.
              </p>
            </div>

            <div className="providings_leftbottom">
              <span className="providings_leftbottom_heading">
                <h1>MOUSTACHE</h1>
              </span>
              <p className="providings_leftbottom_para">
                A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam
                duis pharetra faucibus ultrices volutpat quisque.
              </p>
            </div>
          </div>

          <div>
            <img width={300} height={450} src={ServiceImg} alt="image" />
          </div>

          <div className="providings_right">
            <div className="providings_righttop">
              <span className="providings_righttop_heading">
                <h1>SHAVE</h1>
              </span>
              <p className="providings_righttop_para">
                A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam
                duis pharetra faucibus ultrices volutpat quisque.
              </p>
            </div>

            <div className="providings_rightbottom">
              <span className="providings_rightbottom_heading">
                <h1>STACKING</h1>
              </span>
              <p className="providings_rightbottom_para">
                A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam
                duis pharetra faucibus ultrices volutpat quisque.
              </p>
            </div>
          </div>
        </div>
        <Link className="provide_button" to="/service">
          View Services
        </Link>
      </div>
    </div>
  );
};

export default Provide;
