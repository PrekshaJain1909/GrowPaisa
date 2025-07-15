import React, { useState } from "react";
import "./signupPage.css";
import Footer from "../footer";
import SignupForm from "./signupForm";
import SigninForm from "./signinForm";

const colors = {
  primary: "#0f766e",
  primaryLight: "#6ee7b7",
  secondary: "#047857",
  background: "#f0fdfa",
  textDark: "#064e3b",
  buttonHover: "#065f46",
  cardShadow: "rgba(0,0,0,0.1)",
};

const Benefits = () => (
  <section className="section">
    <div className="container">
      <h2 className="title">Benefits of opening a GrowPaisa Demat Account</h2>
      <div className="card-grid">
        <div className="card">
          <div className="icon-circle" aria-label="Money bag emoji">💰</div>
          <h4 className="card-title">Zero Brokerage Fees</h4>
          <p className="card-desc">Trade equities and mutual funds with zero brokerage charges, saving more on your investments.</p>
        </div>
        <div className="card">
          <div className="icon-circle" aria-label="Chart emoji">📈</div>
          <h4 className="card-title">Intuitive Trading Platform</h4>
          <p className="card-desc">Experience a clean, simple, and powerful trading interface designed for everyone.</p>
        </div>
        <div className="card">
          <div className="icon-circle" aria-label="Lock emoji">🔒</div>
          <h4 className="card-title">No Hidden Charges</h4>
          <p className="card-desc">Transparent pricing with no gimmicks, spam, or intrusive notifications.</p>
        </div>
        <div className="card">
          <div className="icon-circle" aria-label="Globe emoji">🌐</div>
          <h4 className="card-title">Access to GrowPaisa Ecosystem</h4>
          <p className="card-desc">Get free access to a suite of GrowPaisa partner products and services.</p>
        </div>
      </div>
    </div>
  </section>
);

const ExploreAccount = () => {
  const accounts = [
    { icon: "🧑‍💼", title: "Individual Account", description: "Invest in stocks, mutual funds, and derivatives seamlessly." },
    { icon: "👨‍👩‍👧‍👦", title: "Family Account", description: "Secure your family’s financial future with tax-efficient investments." },
    { icon: "🌏", title: "NRI Account", description: "Invest internationally with ease and confidence." },
    { icon: "🧒", title: "Minor Account", description: "Start early and teach kids the value of investing." },
    { icon: "🏢", title: "Corporate Account", description: "Manage your business finances and investments effortlessly." },
  ];

  return (
    <section className="section white">
      <div className="container">
        <h2 className="title">Explore Account Types</h2>
        <div className="card-grid">
          {accounts.map(({ icon, title, description }, idx) => (
            <div className="card" key={idx}>
              <div className="icon-circle" aria-label={`${title} icon`}>{icon}</div>
              <h4 className="card-title">{title}</h4>
              <p className="card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestmentOption = () => {
  const items = [
    { title: "Stocks", description: "Trade in all exchange-listed securities easily.", imgSrc: "https://img.icons8.com/ios-filled/100/0f766e/stock.png" },
    { title: "Mutual Funds", description: "Invest commission-free in direct mutual funds.", imgSrc: "https://img.icons8.com/ios-filled/100/0f766e/fund.png" },
    { title: "IPO", description: "Apply for IPOs instantly using UPI.", imgSrc: "https://img.icons8.com/ios-filled/100/0f766e/ipo.png" },
    { title: "Futures & Options", description: "Hedge risks through simplified F&O trading.", imgSrc: "https://img.icons8.com/ios-filled/100/0f766e/contract.png" },
  ];

  return (
    <section className="section background">
      <div className="container">
        <h2 className="title">Investment Options</h2>
        <div className="card-grid">
          {items.map(({ title, description, imgSrc }, idx) => (
            <div className="card center" key={idx}>
              <img src={imgSrc} alt={`${title} icon`} className="investment-icon" />
              <h4 className="card-title">{title}</h4>
              <p className="card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenAccount = ({ onSignupClick,onSigninClick}) => (
  <section className="header-section">
    <div className="container">
      <h1 className="header-title">Open your GrowPaisa account today</h1>
      <p className="header-subtitle">
        Start your investment journey with zero brokerage and easy-to-use tools.
      </p>
      <button className="signup-btn" onClick={onSignupClick}>Sign up</button>
      <button className="signup-btn ms-3" onClick={onSigninClick}>Sign In</button>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is a GrowPaisa account?",
      answer: "A GrowPaisa account is your gateway to digital investing, combining demat and trading accounts for seamless transactions.",
    },
    {
      question: "What documents are required?",
      answer: (
        <ul>
          <li>PAN Card</li>
          <li>Aadhaar Card (linked to your phone)</li>
          <li>Cancelled cheque or bank statement</li>
          <li>Income proof (for Futures & Options trading)</li>
        </ul>
      ),
    },
    {
      question: "Is account opening free?",
      answer: "Yes, account opening on GrowPaisa is completely free.",
    },
    {
      question: "Are there any maintenance charges?",
      answer: "BSDA holders pay zero charges if holdings are below ₹4,00,000; others pay ₹300/year + GST.",
    },
    {
      question: "Can I open without a bank account?",
      answer: (
        <>
          <p>You must have a bank account in your name to open a demat account.</p>
          <p>UPI verification can simplify the process, but if it fails, you’ll need to provide bank proof documents.</p>
        </>
      ),
    },
  ];

  return (
    <section className="section background">
      <div className="container">
        <h2 className="title">Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const SignupPage = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showSigninForm, setShowSigninForm] = useState(false);

 return (
  <div className="page-wrapper">
    <OpenAccount
      onSignupClick={() => setShowSignupForm(true)}
      onSigninClick={() => setShowSigninForm(true)}
    />
    <Benefits />
    <ExploreAccount />
    <InvestmentOption />
    <FAQ />

    {showSignupForm && (
      <div className="signup-modal-backdrop">
        <SignupForm onClose={() => setShowSignupForm(false)} />
      </div>
    )}

    {showSigninForm && (
      <div className="signin-modal-backdrop">
        <SigninForm onClose={() => setShowSigninForm(false)} />
      </div>
    )}

    <Footer />
  </div>
);

};

export default SignupPage;
