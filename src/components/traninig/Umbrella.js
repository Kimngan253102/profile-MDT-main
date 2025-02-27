import React from "react";
//import Link from "next/link";
//import { BsArrowRight } from "react-icons/bs";
import //  HiOutlineCog,
//  HiOutlineDocumentReport,
// HiOutlineUsers,
"react-icons/hi";
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
            {bgDark ? (
              <SectionTitle
                subtitle="Training"
                title="Track Your Learning Progress"
                description="Monitor your learning journey and stay motivated with your course completion progress."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Training"
                title="Track Your Learning Progress"
                description="Stay on top of your learning with an organized dashboard and course progress updates."
                centerAlign
              />
            )}

            <div className="course-progress">
              <div className="course-card">
                <div className="course-title">Foundations of Mindfulness</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "25%" }}></div>
                </div>
                <div className="course-details">5/30 completed</div>
              </div>

              <div className="course-card">
                <div className="course-title">Statistics with SAS</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "03%" }}></div>
                </div>
                <div className="course-details">1/40 completed</div>
              </div>

              <div className="course-card">
                <div className="course-title">Cloud Computing Basics</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "03%" }}></div>
                </div>
                <div className="course-details">Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Umbrella;
