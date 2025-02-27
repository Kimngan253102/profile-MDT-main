import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
//import { SiSimpleanalytics } from "react-icons/si";
//import { IoGitCompareOutline } from "react-icons/io5";
//import { FaCheckCircle } from "react-icons/fa";
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
            {/* Automated Reports Card */}
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                <span className="fal">
                  <HiOutlineDocumentReport className="h3 text-success" />
                </span>
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

            {/* User Journey Flow Card */}
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                <span className="fal">
                  <HiOutlineUsers className="h3 text-danger" />
                </span>
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

            {/* Easy Customization Card */}
            <div
              className={`feature-card shadow-sm rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                <span className="fal">
                  <HiOutlineCog className="h3 text-warning" />
                </span>
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
