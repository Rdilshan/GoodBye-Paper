// import React from "react";
import '../assets/Home/css/bootstrap.min.css';
import '../assets/Home/css/flex-slider.css';
import '../assets/Home/css/font-awesome.css';
import '../assets/Home/css/templatemo-softy-pinko.css';
import Image from '../assets/images/about.jpg';

function Home() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  {/* <img src={logo} alt="" /> */}
                </a>

                <ul className="nav">
                  <li>
                    <a href="#" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features">About</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href='/login'>Login</a>
                  </li>
                  <li>
                    <a href="#">SignUp</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span className="text-white">Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1 className="font-weight-bold">
                  Every tool you need <strong>to work with PDFs </strong>in one
                  place
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        {/* <img src={feature} alt="" /> */}
                      </i>
                    </div>
                    <h5 className="features-title">Secure Sharing pdf</h5>
                    <p>
                      Ensure the safety of your documents with secure sharing
                      options.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        {/* <img src="alt=" " /> */}
                      </i>
                    </div>
                    <h5 className="features-title">Adding Watermark to pdf</h5>
                    <p>
                      Add a watermark to your PDFs for branding or security
                      purposes.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <img src="" alt="" />
                      </i>
                    </div>
                    <h5 className="features-title">Searching Pdf</h5>
                    <p>
                      Easily search through your PDF documents for specific
                      content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section padding-top-70 padding-bottom-0"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
               src={Image}
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div className="left-heading">
                <h2 className="section-title">Let’s discuss about Us</h2>
              </div>
              <div className="left-text">
                <p>
                  Certainly! Here's a simplified version of the content: "Unlock
                  the potential of your PDFs effortlessly with our suite of
                  tools. Whether you need to merge, split, compress, convert,
                  rotate, unlock, or add watermarks to your PDFs, our tools make
                  it simple and hassle-free. And the best part? They're all 100%
                  FREE!"
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section colored" id="pricing-plans">
        <div className="container">
         
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Packages</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>
         

          <div className="row">
         
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Starter</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">14.50</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">60 GB space</li>
                    <li className="active">600 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li>15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
           
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
            >
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title">Premium</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">21.50</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">120 GB space</li>
                    <li className="active">1200 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li className="active">15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
           
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Advanced</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">42.00</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">250 GB space</li>
                    <li className="active">5000 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li className="active">15-minute support</li>
                    <li className="active">Unlimited Emails</li>
                    <li className="active">24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="contact" id="contact-us">
        <div className="container">
      
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title connect">Talk To Us</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text connect">
                <p>
                  Maecenas pellentesque ante faucibus lectus vulputate
                  sollicitudin. Cras feugiat hendrerit semper.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="margin-bottom-30 info">Keep in touch</h5>
              <div className="contact-text">
                <p>
                123 Main Street, Cityville, State, Country
            <br />
            Zip Code: 10260
                </p>
                <p>
                Have a question or inquiry? Feel free to reach out to us via email at example@example.com or give us a call at +1234567890.
                </p>
              </div>
            </div>
           
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                        //   required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                        //   required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                        //   rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                        //   required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">
                 COPYRIGHT © 2024 gByepapaer 
              </p>
            </div>
          </div>
        </div>
      </footer>
      
    {/* </div> */}

      

     
      </>
  );
}

export default Home;
