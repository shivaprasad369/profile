import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillSkipStartFill } from "react-icons/bs";
export default function Education() {
  return (
    <div id="education" className="bg-[#ebf0f1] text-black md:px-[15%] max-md:px-[5%] py-[2rem]   ">
      <h2 className="text-2xl font-extrabold text-center uppercase text-blue-600">
        My Journey
      </h2>
      <div>
        <div className="md:mt-20 flex flex-col">
          <VerticalTimeline
            className="border-black"
            contentStyle={{ background: "#000" }}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Feb-2024 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineWorkspacePremium/>}
            >
              <h3 className="vertical-timeline-element-title text-white">
                React.js Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle capitalize text-white">
                Unitechno Software Development pvt. ltd
              </h4>
              <p className="text-white">
                Creating secure and responsive web applications. Using a variety
                of technologies such as React.js, Node.js, Express.js, MongoDB,
                and more.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dec-2023 - Feb-2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineWorkspacePremium/>}
            >
              <h3 className="vertical-timeline-element-title">Frontend developer intern</h3>
              <h4 className="vertical-timeline-element-subtitle capitalize">
                Stek innovation pvt. Ltd, hubbali
              </h4>
              <p>
                Creating responsive web applications. Using a variety
                of technologies such as React.js, Material-Ui, Framer-Motion, Next-Ui,
                and more.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - 2023"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<IoSchoolSharp  />}
            >
              <h3 className="vertical-timeline-element-title">
               Master of Science in Computer Science (Data Analytics). 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Master - 74%.
              </h4>
              <p>AI, ML, Data Analysis.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017 - 2020"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<IoSchoolSharp  />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Computer Application.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree - 74%.
              </h4>
              <p>Java, Web development, C, C++.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2015 - 2017"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<IoSchoolSharp  />}
            >
              <h3 className="vertical-timeline-element-title">
                PUC in Science.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                PUC - 64%
              </h4>
              <p>Physics, Math, Bio, Chemistry.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2014 - 2015"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<IoSchoolSharp  />}
            >
              <h3 className="vertical-timeline-element-title">
              Matriculation (10th).
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               70%.
              </h4>
             
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<BsFillSkipStartFill />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
