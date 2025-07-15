import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-4" style={{ backgroundColor: "#0f3d2e" }}>
      <div className="container-fluid px-5">
        <div className="row">

          {/* Logo & Socials */}
          <div className="col-md-3 mb-4">
            <img
              src="/images/growpaisaLogo.png"
              alt="GrowPaisa"
              style={{ height: "45px" }}
              className="mb-3"
            />
            <p className="mb-1 small">© 2010 - 2025, GrowPaisa Fintech Pvt. Ltd.</p>
            <p className="small text-light">All rights reserved.</p>

            {/* Social Icons (4 + 3) */}
            <div className="mt-3">
              <div className="d-flex gap-3 mb-3">
                <a href="https://x.com/growpaisa" className="text-light"><i className="fab fa-x-twitter"></i></a>
                <a href="https://facebook.com/growpaisa" className="text-light"><i className="fab fa-facebook"></i></a>
                <a href="https://instagram.com/growpaisa" className="text-light"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/company/growpaisa" className="text-light"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <div className="d-flex gap-3">
                <a href="https://youtube.com/@growpaisa" className="text-light"><i className="fab fa-youtube"></i></a>
                <a href="https://wa.me/growpaisa" className="text-light"><i className="fab fa-whatsapp"></i></a>
                <a href="https://t.me/growpaisa" className="text-light"><i className="fab fa-telegram"></i></a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4 ps-5">
            <h6 className="text-white fw-bold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/product" className="text-light text-decoration-none">Products</Link></li>
              <li className="mb-2"><Link to="/pricing" className="text-light text-decoration-none">Pricing</Link></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Referral Program</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Open Source</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Press</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">GrowPaisa Cares</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4 ps-5">
            <h6 className="text-white fw-bold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/support" className="text-light text-decoration-none">Contact Us</Link></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Downloads</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Charges List</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Complaint Status</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3 mb-4 ps-5">
            <h6 className="text-white fw-bold mb-3">Account</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Open an Account</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Fund Transfer</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="pt-4 border-top border-secondary small text-light mt-4">
          <p>
            GrowPaisa Fintech Pvt. Ltd. is a registered member of NSE, BSE, and MCX.
            Depository participant with CDSL/NSDL. Refer{" "}
            <a href="https://smartodr.in/login" className="text-decoration-none text-white">Smart ODR</a>{" "}
            or{" "}
            <Link to="/support" className="text-decoration-none text-white">raise a ticket</Link>.
          </p>
          <p>
            Investments in the securities market are subject to market risks. Read all documents before investing.
            GrowPaisa does not offer stock tips or advisory services.
          </p>

          {/* Bottom Links */}
          <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
            <a href="#" className="text-light text-decoration-none">NSE</a>
            <a href="#" className="text-light text-decoration-none">BSE</a>
            <a href="#" className="text-light text-decoration-none">MCX</a>
            <a href="#" className="text-light text-decoration-none">Terms & Conditions</a>
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none">Disclosure</a>
            <a href="#" className="text-light text-decoration-none">Investor Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
