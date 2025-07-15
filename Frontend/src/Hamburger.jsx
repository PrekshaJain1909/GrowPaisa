import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HamburgerMenu.css";

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
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const products = [
    {
      name: "GrowTrade",
      desc: "Advanced trading platform",
      img: "/images/kite.png",
    },
    {
      name: "GrowBack",
      desc: "Account insights dashboard",
      img: "/images/console.png",
    },
    {
      name: "GrowAPI",
      desc: "Developer APIs",
      img: "/images/kiteconnect.png",
    },
    {
      name: "GrowInvest",
      desc: "Mutual funds & NPS",
      img: "/images/coin.png",
    },
  ];

  const tools = [
    {
      title: "Tools",
      items: [
        "Brokerage Calculator",
        "Margin Estimator",
        "SIP Planner",
        "Loan Calculator",
      ],
    },
    {
      title: "Updates",
      items: ["Grow Blog", "Market Bulletins", "IPOs & News", "Event Calendar"],
    },
  ];

  const education = [
    {
      img: "/images/growAcademy.png",
      label: "Grow Academy",
    },
    {
      img: "/images/qna.jpg",
      label: "Community Q&A",
    },
  ];

  return (
    <div className="navbar">
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content p-4" ref={modalRef}>

            <h4 className="mb-4 fw-bold text-center">Explore GrowPaisa</h4>

            {/* Products */}
            <div className="container">
              <div className="row text-center mb-4">
                {products.map((item, idx) => (
                  <div className="col-6 col-md-3 mb-3 product-item" key={idx}>
                    <img src={item.img} alt={item.name} height="40"/>
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tools & Education */}
              <div className="row text-start ms-3">
                {tools.map((section, idx) => (
                  <div className="col-md-4 mb-3" key={idx}>
                    <h6 className="fw-bold">{section.title}</h6>
                    <ul className="list-unstyled small">
                      {section.items.map((tool, i) => (
                        <li key={i} className="mb-2">{tool}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Education Section */}
                <div className="col-md-4 mb-3">
                  <h6 className="fw-bold">Education</h6>
                  {education.map((edu, idx) => (
                    <div className="d-flex align-items-center gap-3 mt-2 education-icons" key={idx}>
                      <img src={edu.img} alt={edu.label}  width={"40px"} height={"30px"} />
                      <span>{edu.label}</span>
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
