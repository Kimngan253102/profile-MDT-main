import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
//  HiOutlineCog,
//  HiOutlineDocumentReport,
//  HiOutlineUsers,
} from "react-icons/hi";
import SectionTitle from "../common/SectionTitle";

const Umbrella = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            <SectionTitle
              subtitle="Training"
              title="Track Your Learning Progress"
              description="Stay on top of your learning with an organized dashboard and course progress updates."
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          {/* Automated Reports Card */}
          <div className={`col-lg-4 col-md-6 d-flex`}>
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="image">
                <img
                  src="https://i.pinimg.com/474x/6a/ed/60/6aed600539e3e612d9034c6f8d39d9b3.jpg"
                  alt="Image 1"
                  width={200}
                  height={100}
                />
              </div>
              <div className="feature-content">
                <h3 className="h5">Automated Reports</h3>
                <p className="mb-0">
                  Get weekly reports on your progress and areas of improvement.
                </p>
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3"
              >
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>
              </Link>
            </div>
          </div>

          {/* User Journey Flow Card */}
          <div className={`col-lg-4 col-md-6 d-flex`}>
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/1e/f9/2a/1ef92a1ecc97b2d9040c94f5e8cbf17f.jpg"
                  alt="Image 1"
                  width={200}
                  height={100}
                />
              </div>
              <div className="feature-content">
                <h3 className="h5">Custom Learning Path</h3>
                <p className="mb-0">
                  Create your own learning journey with personalized content
                  paths.
                </p>
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3"
              >
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>
              </Link>
            </div>
          </div>

          {/* Easy Customization Card */}
          <div className={`col-lg-4 col-md-6 d-flex`}>
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="image">
                <img
                  src="https://i.pinimg.com/474x/7c/e8/46/7ce846cea3620ab877e9e872daea369d.jpg"
                  alt="Image 1"
                  width={200}
                  height={100}
                />
              </div>
              <div className="feature-content">
                <h3 className="h5">Easy Customization</h3>
                <p className="mb-0">
                  Customize your learning dashboard and tools to suit your
                  personal needs.
                </p>
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3"
              >
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Umbrella;
