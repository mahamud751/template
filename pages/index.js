import React from "react";

const index = () => {
  return (
    <div>
      <div id="page_wrapper">
        {/* Header Section Start */}
        <header
          className="creative-header fixed-bg-secondary nav-on-banner"
          style={{
            background: "rgb(250,253,255)",
            background:
              "linear-gradient(90deg, rgba(250,253,255,1) 0%, rgba(255,255,255,1) 18%, rgba(255,11,11,1) 100%)",
          }}
        >
          <div className="secondary-nav-leftside nav-leftpush-overlay sm-mx-none">
            <nav className="navbar navbar-expand-lg nav-general nav-primary-hover nav-down-line-active">
              <button
                type="button"
                className="push-nav-toggle y-center border-0"
              >
                <span className="navbar-toggler-icon flaticon-menu flat-small text-primary" />
              </button>
              <div className="collapse navbar-collapse navbar-slide-push transation-this bg-white shadow-sm">
                <span className="slide-nav-close">
                  <i className="flaticon-cancel flat-mini text-secondary" />
                </span>
                <ul className="navbar-nav w-100">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="index.html">
                          Landing Page
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-classic.html">
                          Classic Demo
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate.html"
                        >
                          Corporate One
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate-2.html"
                        >
                          Corporate Two
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate-3.html"
                        >
                          Corporate Three
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate-4.html"
                        >
                          Corporate Four
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate-5.html"
                        >
                          Corporate Five
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-corporate-6.html"
                        >
                          Corporate Six
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">
                      Features
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Sliders
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="default-slider.html"
                            >
                              Default Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="corporate-slider-3.html"
                            >
                              Corporate Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="interactive-slider.html"
                            >
                              Interactive Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="dynamic-slider.html"
                            >
                              Dynamic Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="construction-slider.html"
                            >
                              Construction Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="beauty-slider.html"
                            >
                              Beauty Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="medical-slider.html"
                            >
                              Medical Slider
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="furniture-slider.html"
                            >
                              Furniture Slider
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Header Styles
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="default-header.html"
                            >
                              Default Header
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="ecommerce-header.html"
                            >
                              E-Commerce Header
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="transparent-header.html"
                            >
                              Transparent Header
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="transparent-header-modern.html"
                            >
                              Transparent Modern
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="classic-header.html"
                            >
                              Classic Header
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Page Banner
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="page-banner-simple.html"
                            >
                              Page Banner Simple
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="page-banner-image.html"
                            >
                              Page Banner Image
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Thumbnails
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="simple-thumb.html"
                            >
                              Simple Thumb
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="thumb-classic.html"
                            >
                              Classic Thumb
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="timeline-thumb.html"
                            >
                              Timeline Thumb
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="thumb-zoomer.html"
                            >
                              Thumb Zoomer
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="thumb-modern-border.html"
                            >
                              Thumb Modern Border
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">
                      Portfolio
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Single Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-single-slider-layout.html"
                            >
                              Slider Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-single-gallery-layout.html"
                            >
                              Gallery Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-single-left-sidebar.html"
                            >
                              Left Sidebar Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-single-right-sidebar.html"
                            >
                              Right Sidebar Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-single-fullwide-slider.html"
                            >
                              Full Wide Slider
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Grid Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-col-2.html"
                            >
                              2 Column Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-col-3.html"
                            >
                              3 Column Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-col-4.html"
                            >
                              4 Column Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-fullwidth.html"
                            >
                              Fullwidth Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Sidebar Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-left-sidebar-3.html"
                            >
                              Left Sidebar 3 Grid
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-left-sidebar-2.html"
                            >
                              Left Sidebar 2 Grid
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-right-sidebar-3.html"
                            >
                              Right Sidebar 3 Grid
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-right-sidebar-2.html"
                            >
                              Right Sidebar 2 Grid
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Filter Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-filter-col-2.html"
                            >
                              2 Column Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-filter-col-3.html"
                            >
                              3 Column Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="portfolio-filter-col-4.html"
                            >
                              4 Column Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Shop Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-full-width.html"
                            >
                              Full Width
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Product Details
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-single-left-sidebar.html"
                            >
                              Left Sidebar Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-single-right-sidebar.html"
                            >
                              Right Sidebar Layout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-single-full-width.html"
                            >
                              Shop Full Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="shop-full-4-column.html"
                        >
                          4 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="shop-full-3-column.html"
                        >
                          3 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="shop-full-2-column.html"
                        >
                          2 Column
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="cart.html">
                          Cart Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Grid Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-grid-3-column.html"
                            >
                              3 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-grid-4-column.html"
                            >
                              4 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-grid-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-grid-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          List Layouts
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-list-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-list-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle dropdown-item" href="#">
                          Single Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-single-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-single-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-4 mb-3">
                  <ul>
                    <li className="mb-4">
                      <strong className="font-mini text-light">PHONE:</strong>
                      <br />
                      <span className="text-dark">
                        (+1) 000 991 8830, <br />
                        (+800) 8001-8588
                      </span>
                    </li>
                    <li className="mb-4">
                      <strong className="font-mini text-light">EMAIL:</strong>
                      <br />
                      <span className="text-dark">
                        Info@patron.com, <br />
                        support@patron.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="main-nav py-2 px-5 sm-px-0">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav className="navbar navbar-expand-lg nav-white nav-primary-hover nav-line-active py-2">
                    <a className="navbar-brand" href="#">
                      Tech Park
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon flaticon-menu flat-small text-primary" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown mega-dropdown">
                          <a className="nav-link dropdown-toggle" href="#">
                            Home
                          </a>
                          <ul className="dropdown-menu mega-dropdown-menu">
                            <li className="mega-container">
                              <div className="row">
                                <div className="col-lg-3">
                                  <ul>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index.html"
                                      >
                                        Landing Page
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-classic.html"
                                      >
                                        Classic Demo
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-agency.html"
                                      >
                                        Agency
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-digital-agency.html"
                                      >
                                        Digital Agency
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-digital-marketer.html"
                                      >
                                        Digital Marketer{" "}
                                        <span className="text-primary">
                                          (New)
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-app.html"
                                      >
                                        App
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <ul>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate.html"
                                      >
                                        Corporate One
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate-2.html"
                                      >
                                        Corporate Two
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate-3.html"
                                      >
                                        Corporate Three
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate-4.html"
                                      >
                                        Corporate Four
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate-5.html"
                                      >
                                        Corporate Five
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-corporate-6.html"
                                      >
                                        Corporate Six
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <ul>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-beauty.html"
                                      >
                                        Beauty
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-blog.html"
                                      >
                                        Blog
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-construction.html"
                                      >
                                        Construction
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-creative.html"
                                      >
                                        Creative
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-finance.html"
                                      >
                                        Finance{" "}
                                        <span className="text-primary">
                                          (New)
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-furniture.html"
                                      >
                                        Furniture
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <ul>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-law.html"
                                      >
                                        Law
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-medical.html"
                                      >
                                        Medical
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-organic.html"
                                      >
                                        Organic
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-personal-blog.html"
                                      >
                                        Personal Blog
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-security.html"
                                      >
                                        Security
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="index-startup-agency.html"
                                      >
                                        Startup Agency
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="categories/digital-agency/about.html"
                          >
                            About
                          </a>
                        </li>

                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">
                            Portfolio
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Single Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-single-slider-layout.html"
                                  >
                                    Slider Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-single-gallery-layout.html"
                                  >
                                    Gallery Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-single-left-sidebar.html"
                                  >
                                    Left Sidebar Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-single-right-sidebar.html"
                                  >
                                    Right Sidebar Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-single-fullwide-slider.html"
                                  >
                                    Full Wide Slider
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Grid Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-col-2.html"
                                  >
                                    2 Column Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-col-3.html"
                                  >
                                    3 Column Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-col-4.html"
                                  >
                                    4 Column Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-fullwidth.html"
                                  >
                                    Fullwidth Layout
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Sidebar Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-left-sidebar-3.html"
                                  >
                                    Left Sidebar 3 Grid
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-left-sidebar-2.html"
                                  >
                                    Left Sidebar 2 Grid
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-right-sidebar-3.html"
                                  >
                                    Right Sidebar 3 Grid
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-right-sidebar-2.html"
                                  >
                                    Right Sidebar 2 Grid
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Filter Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-filter-col-2.html"
                                  >
                                    2 Column Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-filter-col-3.html"
                                  >
                                    3 Column Layout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="portfolio-filter-col-4.html"
                                  >
                                    4 Column Layout
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Grid Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-grid-3-column.html"
                                  >
                                    3 Column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-grid-4-column.html"
                                  >
                                    4 Column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-grid-left-sidebar.html"
                                  >
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-grid-right-sidebar.html"
                                  >
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                List Layouts
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-list-left-sidebar.html"
                                  >
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-list-right-sidebar.html"
                                  >
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href="#"
                              >
                                Single Blog
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-single-left-sidebar.html"
                                  >
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="blog-single-right-sidebar.html"
                                  >
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <a href="#" className="ms-2 btn btn-primary sm-mx-none">
                        Contact Us
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* digital agency Section End */}
        <div className="full-row bg-secondary pb-0">
          <div
            className="slider sm-bg-img-none max-md-py-15"
            style={{
              background: "rgb(250,253,255)",
              background:
                "linear-gradient(90deg, rgba(250,253,255,1) 0%, rgba(255,255,255,1) 18%, rgba(255,11,11,1) 100%)",

              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "calc(100% - 5%) center",
              padding: "200px 0",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <span className="tagline mb-2 d-block text-dark">
                    Tech Park, A digital Education Center
                  </span>
                  <h1 className="mb-30 text-primary">
                    Learn about specific computer skills and IT topics
                  </h1>
                  <div className="text-extra1 mb-30">
                    <p>
                      Training and development helps companies gain and retain
                      top talent, increase job satisfaction and morale, improve
                      productivity and earn more profit. Additionally,
                      businesses that have actively interested and dedicated
                      employees see 41 percent lower absenteeism rates, and 17
                      percent higher productivity
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary btn-large">
                    Get A Quote{" "}
                    <i className="fas fa-long-arrow-alt-right ms-1" />
                  </a>
                </div>
                <div className="col-lg-5 col-md-5">
                  <img
                    src="https://i.ibb.co/syBJ1dC/young-couple-sitting-on-the-floor-and-reading-books.png"
                    alt="header"
                    className="img-fluid"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      backgroundPosition: "calc(100% - 5%) center",
                      padding: "100px 0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* digital agency Section End */}
        {/* About Section Start */}
        <div style={{ marginTop: -423, position: "relative" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,133.3C672,149,768,235,864,229.3C960,224,1056,128,1152,85.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className="full-row sm-bg-img-none half-gray"
          style={{
            backgroundImage: "url(assets/images/clipart/8.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40%",
            backgroundPosition: "15% center",
          }}
        >
          {/* About Section End */}
          {/* Partner Section Start */}

          {/* Partner Section End */}
          {/* Recent Works Section Start */}
          <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-md- mx-auto text-center">
                  <span className="tagline mb-1 d-block text-primary">
                    Recent Works
                  </span>
                  <h2>Our latest projects</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="project-item mt-5 hover-img-zoom transation">
                    <div className="overflow-hidden transation img-area">
                      <img
                        src="https://i.pinimg.com/564x/1e/f3/e9/1ef3e9da85ab67069b54d38943572a83.jpg"
                        alt="portfolio"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="h4 mb-2 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        Education App
                      </a>
                      <a
                        href="#"
                        className="mt-1 btn-link text-general hover-text-primary hover-underline-none secondary-border-bottom"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="project-item mt-5 hover-img-zoom transation">
                    <div className="overflow-hidden transation img-area">
                      <img
                        src="https://img.freepik.com/premium-vector/woman-taking-care-plants_23-2148203373.jpg?w=826"
                        alt="portfolio"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="h4 mb-2 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        Smart App
                      </a>
                      <a
                        href="#"
                        className="mt-1 btn-link text-general hover-text-primary hover-underline-none secondary-border-bottom"
                      >
                        Business, Software, App
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="project-item mt-5 hover-img-zoom transation">
                    <div className="overflow-hidden transation img-area">
                      <img
                        src="https://img.freepik.com/free-vector/influencer-recording-new-video_23-2148533130.jpg?w=740&t=st=1665816896~exp=1665817496~hmac=432e760f13a3d48c6144e92f1956c536ef13271cd1d62ce268bc6cce24106a95"
                        alt="portfolio"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="h4 mb-2 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        UX Research
                      </a>
                      <a
                        href="#"
                        className="mt-1 btn-link text-general hover-text-primary hover-underline-none secondary-border-bottom"
                      >
                        Timer, Technology
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="project-item mt-5 hover-img-zoom transation">
                    <div className="overflow-hidden transation img-area">
                      <img
                        src="https://i0.wp.com/mass-analytics.com/wp-content/uploads/2021/05/Use-Cases-Image.png?resize=1080%2C980&ssl=1"
                        alt="portfolio"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="h4 mb-2 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        =Digital App
                      </a>
                      <a
                        href="#"
                        className="mt-1 btn-link text-general hover-text-primary hover-underline-none secondary-border-bottom"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Works Section End */}
          {/* Meetings Section Start */}
          <div className="full-row bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-1024x586.png"
                    alt="portfolio"
                  />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <span className="tagline mb-1 d-block text-primary">
                    Meetings
                  </span>
                  <h2 className="mb-40">New idea generate</h2>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="full-row bg-gray pt-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-1 order-lg-2">
                  <img
                    src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?w=1380&t=st=1665817771~exp=1665818371~hmac=50c5a899387f0f4cb45b62f9bf1c7a5348f55683cfb10de0ddfcdd1c66bb8728"
                    alt="portfolio"
                  />
                </div>
                <div className="col-lg-5 order-lg-1">
                  <span className="tagline mb-1 d-block text-primary">
                    Collaborate
                  </span>
                  <h2 className="mb-40">
                    Customer review about out training center
                  </h2>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Meetings Section End */}
          {/* Pricing Plan Section Start */}
          <div className="full-row bg-secondary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <span className="tagline mb-2 d-block text-primary text-center">
                    Pricing Plan
                  </span>
                  <h2 className="text-center mb-5">Pricing</h2>
                </div>
              </div>
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div className="col mb-sm-30">
                  <div className="bg-white hover-bg-primary p-5 rounded hover-text-white pricing-table-classic transation-this">
                    <div className="text-center">
                      <h5 className="font-weight-normal change-text-white text-general mb-3">
                        Basic
                      </h5>
                      <span className="h2 text-primary change-text-white">
                        $29.99
                      </span>
                      <br />
                      <span className="change-text-white pb-3 d-block font-weight-light">
                        Per month
                      </span>
                    </div>
                    <hr className="change-bg-white" />
                    <ul className="list-style-tick tick-extra2 pt-3 change-text-white">
                      <li>Awesome Features included</li>
                      <li>Secure Platform</li>
                      <li>Unlimited bandwidth service</li>
                      <li>24/7 Reliable Support</li>
                      <li>Woocomerce builder</li>
                      <li>100 GB free hosting domain</li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-primary w-100 transation-this mt-4"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="col mb-sm-30">
                  <div className="bg-white hover-bg-primary p-5 rounded hover-text-white pricing-table-classic transation-this">
                    <div className="text-center">
                      <h4 className="font-weight-normal change-text-white text-general mb-3">
                        Premium
                      </h4>
                      <span className="h2 text-primary change-text-white">
                        $49.99
                      </span>
                      <br />
                      <span className="change-text-white pb-3 d-block font-weight-light">
                        Per month
                      </span>
                    </div>
                    <hr className="change-bg-white" />
                    <ul className="list-style-tick tick-extra2 pt-3 change-text-white">
                      <li>Awesome Features included</li>
                      <li>Secure Platform</li>
                      <li>Unlimited bandwidth service</li>
                      <li>24/7 Reliable Support</li>
                      <li>Woocomerce builder</li>
                      <li>100 GB free hosting domain</li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-primary w-100 transation-this mt-4"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="col mb-sm-30">
                  <div className="bg-white hover-bg-primary p-5 rounded hover-text-white pricing-table-classic transation-this">
                    <div className="text-center">
                      <h4 className="font-weight-normal change-text-white text-general mb-3">
                        Enterprise
                      </h4>
                      <span className="h2 text-primary change-text-white">
                        $69.99
                      </span>
                      <br />
                      <span className="change-text-white pb-3 d-block font-weight-light">
                        Per month
                      </span>
                    </div>
                    <hr className="change-bg-white" />
                    <ul className="list-style-tick tick-extra2 pt-3 change-text-white">
                      <li>Awesome Features included</li>
                      <li>Secure Platform</li>
                      <li>Unlimited bandwidth service</li>
                      <li>24/7 Reliable Support</li>
                      <li>Woocomerce builder</li>
                      <li>100 GB free hosting domain</li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-primary w-100 transation-this mt-4"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Plan Section End */}
          {/* Testimonial Section Start */}
          <div className="full-row half-gray">
            <div className="container z-index-9 position-relative">
              <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <span className="tagline mb-1 d-block text-primary">
                    Testimonial
                  </span>
                  <h2 className="mb-40">What people say</h2>
                  <div className="owl-carousel single-carousel testimonial-classic owl-dot-disable">
                    <div className="item">
                      <p>
                        “content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                      </p>
                      <div className="d-flex mt-5">
                        <img
                          className="rounded-circle float-start box-70px"
                          src="assets/images/team/1.png"
                          alt="medical template"
                        />
                        <div className="ps-3">
                          <h6 className="text-dark my-1">Nathan Hirsch</h6>
                          <span className="font-weight-light">
                            Director of Pathao
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        “content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        Content here, content making it look like readable
                        English. Many desktop.”
                      </p>
                      <div className="d-flex mt-5">
                        <img
                          className="rounded-circle float-start box-70px"
                          src="assets/images/team/1.png"
                          alt="medical template"
                        />
                        <div className="ps-3">
                          <h6 className="text-dark my-1">Nathan Hirsch</h6>
                          <span className="font-weight-light">
                            Director of Pathao
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        “content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        Content here, content here, making it look like readable
                        English. Many desktop.”
                      </p>
                      <div className="d-flex mt-5">
                        <img
                          className="rounded-circle float-start box-70px"
                          src="assets/images/team/1.png"
                          alt="medical template"
                        />
                        <div className="ps-3">
                          <h6 className="text-dark my-1">Nathan Hirsch</h6>
                          <span className="font-weight-light">
                            Director of Pathao
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-2">
                  <span className="tagline mb-1 d-block text-primary">FAQ</span>
                  <h2 className="mb-40">Have any questions?</h2>
                  <div className="bb-accordion ac-single-show accordion-plus-left">
                    <div className="ac-card">
                      <a
                        className="ac-toggle d-block py-2 text-dark font-medium higlight-font active"
                        href="#"
                      >
                        Website and Mobile App Design
                      </a>
                      <div
                        className="ac-collapse show"
                        style={{ display: "block" }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </p>
                      </div>
                    </div>
                    <div className="ac-card">
                      <a
                        className="ac-toggle d-block py-2 text-dark font-medium higlight-font"
                        href="#"
                      >
                        Motion Graphics and Animation
                      </a>
                      <div className="ac-collapse">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </p>
                      </div>
                    </div>
                    <div className="ac-card">
                      <a
                        className="ac-toggle d-block py-2 text-dark font-medium higlight-font"
                        href="#"
                      >
                        User Experience and Brand Strategy
                      </a>
                      <div className="ac-collapse">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Section Start */}
          {/* Blog Section Start */}
          <div className="full-row bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <span className="tagline mb-2 d-block text-primary text-center">
                    Blog
                  </span>
                  <h2 className="text-center mb-5">Recent News</h2>
                </div>
              </div>
              <div className="row row-cols-md-3 row-cols-1">
                <div className="col">
                  <div className="bolg-item hover-img-zoom transation">
                    <div className="overflow-hidden transation post-thumbnail">
                      <img
                        src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="portfolio"
                        style={{ height: "570px" }}
                      />
                    </div>
                    <div className="my-4">
                      <a
                        href="#"
                        className="btn-link text-primary hover-underline-none secondary-border-bottom"
                      >
                        Technology
                      </a>
                      <a
                        href="#"
                        className="h4 mt-3 mb-0 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        Top 10 Mobile Applications to grow your Business.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bolg-item hover-img-zoom transation">
                    <div className="overflow-hidden transation post-thumbnail">
                      <img
                        src="https://images.unsplash.com/photo-1566853024045-ccf08017f7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                        alt="portfolio"
                      />
                    </div>
                    <div className="my-4">
                      <a
                        href="#"
                        className="btn-link text-primary hover-underline-none secondary-border-bottom"
                      >
                        Business
                      </a>
                      <a
                        href="#"
                        className="h4 mt-3 mb-0 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        Top 10 Mobile Applications to grow your Business.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bolg-item hover-img-zoom transation">
                    <div className="overflow-hidden transation post-thumbnail">
                      <img
                        src="https://images.unsplash.com/photo-1637839780129-c64ed378421f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="portfolio"
                      />
                    </div>
                    <div className="my-4">
                      <a
                        href="#"
                        className="btn-link text-primary hover-underline-none secondary-border-bottom"
                      >
                        Corporate
                      </a>
                      <a
                        href="#"
                        className="h4 mt-3 mb-0 text-dark hover-text-primary hover-underline-none d-block"
                      >
                        Top 10 Mobile Applications to grow your Business.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Section End */}
          {/* Subscribe Section Start */}
          <div className="full-row bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span className="tagline mb-3 d-block text-uppercase text-white">
                    Subscribe
                  </span>
                  <h2 className="mb-30 text-white">Let’s work together</h2>
                  <div className="text-extra3 mb-5">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducin
                      ditiis praesentium voluptatum deleniti.
                    </p>
                  </div>
                  <form action="#" className="subscribe-form position-relative">
                    <input
                      className="form-control bg-transparent height-50 placeholder-extra3 mb-0 text-white"
                      type="text"
                      placeholder="Enter your email here"
                      aria-label="Address"
                    />
                    <button
                      className="btn btn-white text-primary"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="col-lg-7">
                  <div className="position-absolute clipart-3" />
                </div>
              </div>
            </div>
          </div>
          {/* Subscribe Section End */}
          {/* Footer Section Start */}
          <footer className="full-row pb-3 transation">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget mb-5">
                    <h3 className="widget-title mb-4">About</h3>
                    <p>
                      Training and development are a top employee benefit,
                      encouraging a sense of importance and belonging among
                      staff. Companies that can tout training and development
                      opportunities as a perk have the following advantages.
                    </p>
                    <div className="footer-widget media-widget-round-white-primary-shadow mt-3">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget contact-widget mb-5">
                    <h3 className="widget-title mb-4">Contact</h3>
                    <ul>
                      <li>Address: Texas,Usa</li>
                      <li>Email: example@gmail.com</li>
                      <li>Call: +8801789999751</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-nav mb-5">
                    <h3 className="widget-title mb-4">Quick Links</h3>
                    <ul>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Legal/policy</a>
                      </li>
                      <li>
                        <a href="#">career</a>
                      </li>
                      <li>
                        <a href="#">other sertvices</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget post-widget mb-5">
                    <h3 className="widget-title mb-4">Office Hours</h3>
                    <ul>
                      <li>Mon - Thur: 9:00am - 6:00pm</li>
                      <li> Fri: 8:00am - 1:00pm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Footer Section End */}
          {/* Copyright Section Start */}
          <div className="copyright text-default pb-3">
            <div className="container">
              <hr className="mt-0" />
              <div className="row">
                <div className="col-sm-6">
                  <span>© 2022 Tech It. All rights reserved.</span>
                </div>
                <div className="col-sm-6">
                  <span className="float-sm-right">
                    Made with love by Tech It
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright Section End */}
          {/* Scroll to top */}
          <a href="#" className="bg-primary text-white" id="scroll">
            <i className="fa fa-angle-up" />
          </a>
          {/* End Scroll To top */}
        </div>
      </div>
    </div>
  );
};

export default index;
