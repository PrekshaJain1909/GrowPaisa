import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaCalculator, FaChartLine, FaBook, FaNewspaper, FaGraduationCap, FaQuestionCircle, FaTh } from "react-icons/fa";
import "./HamburgerMenu.css";
import { FaCubes } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const products = [
    {
      name: "GrowTrade",
      desc: "Advanced trading platform",
      icon: <FaChartLine size={24} className="text-success" />,
    },
    {
      name: "GrowBack",
      desc: "Account insights dashboard",
      icon: <FaBook size={24} className="text-success" />,
    },
    {
      name: "GrowAPI",
      desc: "Developer APIs",
      icon: <FaCalculator size={24} className="text-success" />,
    },
    {
      name: "GrowInvest",
      desc: "Mutual funds & NPS",
      icon: <FaGraduationCap size={24} className="text-success" />,
    },
  ];

  const tools = [
    {
      title: "Tools",
      items: [
        { name: "Brokerage Calculator", icon: <FaCalculator size={16} /> },
        { name: "Margin Estimator", icon: <FaChartLine size={16} /> },
        { name: "SIP Planner", icon: <FaBook size={16} /> },
        { name: "Loan Calculator", icon: <FaCalculator size={16} /> },
      ],
    },
    {
      title: "Updates",
      items: [
        { name: "Grow Blog", icon: <FaNewspaper size={16} /> },
        { name: "Market Bulletins", icon: <FaChartLine size={16} /> },
        { name: "IPOs & News", icon: <FaNewspaper size={16} /> },
        { name: "Event Calendar", icon: <FaBook size={16} /> },
      ],
    },
  ];

  const education = [
    {
      icon: <FaGraduationCap size={20} className="text-success" />,
      label: "Grow Academy",
    },
    {
      icon: <FaQuestionCircle size={20} className="text-success" />,
      label: "Community Q&A",
    },
  ];

  return (
    <div className="navbar">
      {/* Changed from FaBars to FaTh (grid icon) */}
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        <FaCubes size={20} />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content p-4" ref={modalRef}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0 fw-bold text-success">Explore GrowPaisa</h4>
              <button 
                className="close-btn" 
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Products */}
            <div className="container">
              <div className="row text-center mb-4">
                {products.map((item, idx) => (
                  <div className="col-6 col-md-3 mb-3 product-item" key={idx}>
                    <div className="icon-wrapper mb-2">
                      {item.icon}
                    </div>
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tools & Education */}
              <div className="row">
                {tools.map((section, idx) => (
                  <div className="col-md-4 mb-4" key={idx}>
                    <h6 className="fw-bold text-success mb-3">{section.title}</h6>
                    <ul className="list-unstyled">
                      {section.items.map((tool, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <span className="me-2 text-muted">{tool.icon}</span>
                          <a href="#" className="text-dark text-decoration-none">{tool.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Education Section */}
                <div className="col-md-4">
                  <h6 className="fw-bold text-success mb-3">Education</h6>
                  {education.map((edu, idx) => (
                    <div className="d-flex align-items-center gap-3 mb-3 education-item" key={idx}>
                      <div className="icon-wrapper-sm">
                        {edu.icon}
                      </div>
                      <span className="fw-medium">{edu.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;