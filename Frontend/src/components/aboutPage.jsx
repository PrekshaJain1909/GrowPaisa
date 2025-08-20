import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

export default function AboutMain() {
  const [flag1, setFlag1] = useState([true, true, true]);
  const [flag2, setFlag2] = useState([true, true, true]);

  function handleClick1(index) {
    setFlag1(prev => prev.map((item, i) => (i === index ? !item : item)));
  }

  function handleClick2(index) {
    setFlag2(prev => prev.map((item, i) => (i === index ? !item : item)));
  }

  const sectionStyle = {
    backgroundColor: "#F2F9F8",
    color: "#004d40",
    padding: "3rem 1rem"
  };

  const cardTextStyle = {
    color: "#4e4e4e"
  };

  const First = () => (
    <section style={sectionStyle}>
      <h2 className="text-center fs-2 fw-semibold mb-3 mt-5 pt-5">
        We pioneered the discount broking model in India.
      </h2>
      <h3 className="text-center fs-4 fw-semibold">
        Now, we are breaking ground with our technology.
      </h3>
    </section>
  );

  const Second = () => (
    <section style={{ ...sectionStyle, backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 mb-4">
            <p style={cardTextStyle}>
              We started on 15th August 2010 with a mission to eliminate the
              cost, support, and tech barriers for Indian investors. GrowPaisa
              is a blend of “Grow” and “Paisa”, reflecting our mission to help
              India grow financially.
            </p>
            <p style={cardTextStyle}>
              Today, GrowPaisa is trusted by over 1 crore+ users, executing
              millions of trades daily and powering Indian retail markets.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p style={cardTextStyle}>
              We run free education initiatives and empower traders via our
              transparent platforms. Our fintech incubator{" "}
              <a href="https://rainmatter.com/" style={{ color: "#00bfa5" }}>
                Rainmatter
              </a>{" "}
              supports startups helping Indian markets grow.
            </p>
            <p style={cardTextStyle}>
              Stay updated on our{" "}
              <a
                href="https://zerodha.com/z-connect/"
                style={{ color: "#00bfa5" }}
              >
                blog
              </a>{" "}
              and{" "}
              <Link to="https://zerodha.com/media" style={{ color: "#00bfa5" }}>
                media coverage
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const Third = () => (
    <section style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-5 mb-4">
            <img
              src="./images/preksha.jpg"
              alt="Founder"
              className="rounded-circle img-fluid"
              style={{ maxWidth: "250px", height: "auto", objectFit: "cover" }}
            />
            <h4 className="mt-3">Nithin Kamath</h4>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">People</h2>
            <p style={cardTextStyle}>
              Nithin started GrowPaisa to tackle the barriers he faced as a
              trader. Today, he leads one of India’s most influential brokerage
              firms.
            </p>
            <p style={cardTextStyle}>
              He serves on SEBI’s advisory boards and continues to shape policy
              and innovation in Indian markets.
            </p>
            <p style={cardTextStyle}>In his downtime, he plays basketball.</p>
            <p>
              Connect on{" "}
              <a href="https://nithinkamath.me/" style={{ color: "#00bfa5" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a
                href="https://tradingqna.com/u/nithin/summary"
                style={{ color: "#00bfa5" }}
              >
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="https://x.com/Nithin0dha" style={{ color: "#00bfa5" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const TeamCard = ({ name, role, bio, show, toggle, img }) => (
    <div className="col-sm-12 col-md-6 col-lg-4 text-center my-4">
      <img
        src={img}
        alt={name}
        className="rounded-circle img-fluid"
        style={{ maxWidth: "200px", height: "auto" }}
      />
      <h5 className="mt-3">{name}</h5>
      <p className="text-muted">{role}</p>
      <span
        onClick={toggle}
        style={{ cursor: "pointer", color: "#00bfa5" }}
      >
        Bio {show ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" />}
      </span>
      {!show && <p className="mt-2 text-muted">{bio}</p>}
    </div>
  );

  const Fourth1 = () => (
    <section style={sectionStyle}>
      <div className="container">
        <div className="row">
          <TeamCard
            name="Nikhil Kamath"
            role="Co-founder & CFO"
            show={flag1[0]}
            toggle={() => handleClick1(0)}
            bio="Heads financial planning at GrowPaisa. An avid reader and chess enthusiast."
            img="./images/preksha.jpg"
          />
          <TeamCard
            name="Dr. Kailash Nadh"
            role="CTO"
            show={flag1[1]}
            toggle={() => handleClick1(1)}
            bio="PhD in AI, leads tech development. Writes code daily since his teens."
            img="./images/preksha.jpg"
          />
          <TeamCard
            name="Sanjay Nair"
            role="Head - Execution"
            show={flag1[2]}
            toggle={() => handleClick1(2)}
            bio="Over 20 years in broking, manages GrowPaisa's trade execution."
            img="./images/preksha.jpg"
          />
        </div>
      </div>
    </section>
  );

  const Fourth2 = () => (
    <section style={{ ...sectionStyle, backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row">
          <TeamCard
            name="Kiran Nambiar"
            role="Head - Compliance"
            show={flag2[0]}
            toggle={() => handleClick2(0)}
            bio="CA with 15+ years in compliance and risk management."
            img="./images/preksha.jpg"
          />
          <TeamCard
            name="Shrikant Bhide"
            role="Head - Data"
            show={flag2[1]}
            toggle={() => handleClick2(1)}
            bio="Expert in analytics, University of Texas alumnus."
            img="./images/preksha.jpg"
          />
          <TeamCard
            name="Rajesh Narayanan"
            role="Head - Product"
            show={flag2[2]}
            toggle={() => handleClick2(2)}
            bio="15+ years in product and customer experience."
            img="./images/preksha.jpg"
          />
        </div>
      </div>
    </section>
  );

  const Fourth3 = () => (
    <section style={sectionStyle}>
      <p className="text-center fs-6 text-muted">
        More team members coming soon...
      </p>
    </section>
  );

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#F2F9F8" }}>
      <First />
      <Second />
      <Third />
      <Fourth1 />
      <Fourth2 />
      <Fourth3 />
      <Footer />
    </div>
  );
}
