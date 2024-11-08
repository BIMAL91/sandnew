import React from 'react';


const Header = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="An impressive and flawless site template that includes various UI elements and countless features, attractive ready-made blocks and rich pages, basically everything you need to create a unique and professional website."
  />
  <meta
    name="keywords"
    content="Tailwind CSS, business, corporate, creative, gulp, marketing, minimal, modern, multipurpose, one page, responsive, saas, sass, seo, startup, html5 template, site template"
  />
  <meta name="author" content="elemis" />
  <title>Sandbox - Modern &amp; Multipurpose Tailwind CSS Template</title>
  {/* google fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="shortcut icon" href="./assets/img/favicon.png" />
  <link
    rel="stylesheet"
    type="text/css"
    href="./assets/fonts/unicons/unicons.css"
  />
  <link rel="stylesheet" href="./assets/css/plugins.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <link rel="stylesheet" href="./assets/css/colors/purple.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .navbar.navbar-light.fixed .btn:not(.btn-expand):not(.btn-gradient) {\n    background: #747ed1 !important;\n    border-color: #747ed1 !important;\n    color: #ffffff !important;\n}\n    .accordion-wrapper .card-header button{\n      color: #747ed1;\n    }\n      @media (min-width: 992px){\n      .navbar-expand-lg.navbar-light .dropdown:not(.dropdown-submenu)>.dropdown-toggle:after {\n          color: #747ed1;\n      }\n      }\n      @media (max-width: 991.98px){\n      .navbar-expand-lg .navbar-collapse .dropdown-toggle:after {\n        color: #ffffff !important;\n      }\n  }\n  "
    }}
  />
  <div className="grow shrink-0">
    <header className="relative wrapper !bg-[#f2f3fb]">
      <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-dark">
        <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
            <a href="./index.html">
              <img
                className="logo-dark"
                src="./assets/img/logo-purple.png"
                srcSet="./assets/img/logo-purple@2x.png 2x"
                alt="image"
              />
              <img
                className="logo-light"
                src="./assets/img/logo-light.png"
                srcSet="./assets/img/logo-light@2x.png 2x"
                alt="image"
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
              <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                Sandbox
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Demos
                  </a>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content mega-menu-scroll">
                      <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-10px] lg:mx-[-10px] xl:mt-[-10px] lg:mt-[-10px] !pl-0 list-none">
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo1.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi1.jpg"
                                srcSet="./assets/img/demos/mi1@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 1</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo2.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="assets/img/demos/mi2.jpg"
                                srcSet="./assets/img/demos/mi2@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 2</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo3.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi3.jpg"
                                srcSet="./assets/img/demos/mi3@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 3</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo4.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi4.jpg"
                                srcSet="./assets/img/demos/mi4@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 4</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo5.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi5.jpg"
                                srcSet="./assets/img/demos/mi5@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 5</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo6.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi6.jpg"
                                srcSet="./assets/img/demos/mi6@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 6</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo7.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi7.jpg"
                                srcSet="./assets/img/demos/mi7@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 7</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo8.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi8.jpg"
                                srcSet="./assets/img/demos/mi8@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 8</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo9.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi9.jpg"
                                srcSet="./assets/img/demos/mi9@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 9</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo10.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi10.jpg"
                                srcSet="./assets/img/demos/mi10@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 10</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo11.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi11.jpg"
                                srcSet="./assets/img/demos/mi11@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 11</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo12.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi12.jpg"
                                srcSet="./assets/img/demos/mi12@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 12</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo13.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi13.jpg"
                                srcSet="./assets/img/demos/mi13@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 13</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo14.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi14.jpg"
                                srcSet="./assets/img/demos/mi14@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 14</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo15.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi15.jpg"
                                srcSet="./assets/img/demos/mi15@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 15</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo16.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi16.jpg"
                                srcSet="./assets/img/demos/mi16@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 16</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo17.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi17.jpg"
                                srcSet="./assets/img/demos/mi17@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 17</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo18.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi18.jpg"
                                srcSet="./assets/img/demos/mi18@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 18</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo19.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi19.jpg"
                                srcSet="./assets/img/demos/mi19@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 19</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo20.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi20.jpg"
                                srcSet="./assets/img/demos/mi20@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 20</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo21.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi21.jpg"
                                srcSet="./assets/img/demos/mi21@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 21</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo22.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi22.jpg"
                                srcSet="./assets/img/demos/mi22@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 22</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo23.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi23.jpg"
                                srcSet="./assets/img/demos/mi23@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 23</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo24.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi24.jpg"
                                srcSet="./assets/img/demos/mi24@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 24</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo25.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi25.jpg"
                                srcSet="./assets/img/demos/mi25@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 25</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo26.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi26.jpg"
                                srcSet="./assets/img/demos/mi26@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 26</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo27.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi27.jpg"
                                srcSet="./assets/img/demos/mi27@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 27</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo28.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi28.jpg"
                                srcSet="./assets/img/demos/mi28@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 28</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo29.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi29.jpg"
                                srcSet="./assets/img/demos/mi29@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 29</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo30.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi30.jpg"
                                srcSet="./assets/img/demos/mi30@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 30</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo31.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi31.jpg"
                                srcSet="./assets/img/demos/mi31@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 31</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo32.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi32.jpg"
                                srcSet="./assets/img/demos/mi32@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 32</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo33.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi33.jpg"
                                srcSet="./assets/img/demos/mi33@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 33</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo34.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi34.jpg"
                                srcSet="./assets/img/demos/mi34@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 34</span>
                          </a>
                        </li>
                      </ul>
                      {/*/.row */}
                      <span className="hidden xl:flex lg:flex">
                        <i className="uil uil-direction before:content-['\ea93']" />
                        <strong>Scroll to view more</strong>
                      </span>
                    </li>
                    {/*/.mega-menu-content*/}
                  </ul>
                  {/*/.dropdown-menu */}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./services.html"
                          >
                            Services I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./services2.html"
                          >
                            Services II
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./about.html"
                          >
                            About I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./about2.html"
                          >
                            About II
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./shop.html"
                          >
                            Shop I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./shop2.html"
                          >
                            Shop II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./shop-product.html"
                          >
                            Product Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./shop-cart.html"
                          >
                            Shopping Cart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./shop-checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Contact
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./contact.html"
                          >
                            Contact I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./contact2.html"
                          >
                            Contact II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./contact3.html"
                          >
                            Contact III
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Career
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./career.html"
                          >
                            Job Listing I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./career2.html"
                          >
                            Job Listing II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./career-job.html"
                          >
                            Job Description
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Utility
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./404.html"
                          >
                            404 Not Found
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./page-loader.html"
                          >
                            Page Loader
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./signin.html"
                          >
                            Sign In I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./signin2.html"
                          >
                            Sign In II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./signup.html"
                          >
                            Sign Up I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./signup2.html"
                          >
                            Sign Up II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./terms.html"
                          >
                            Terms
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5]"
                        href="./pricing.html"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5]"
                        href="./onepage.html"
                      >
                        One Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Projects
                  </a>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header !text-[#a07cc5]">
                          Project Pages
                        </h6>
                        <ul className="pl-0 list-none">
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./projects.html"
                            >
                              Projects I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./projects2.html"
                            >
                              Projects II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./projects3.html"
                            >
                              Projects III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./projects4.html"
                            >
                              Projects IV
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* /.column */}
                      <div>
                        <h6 className="dropdown-header !text-[#a07cc5]">
                          Single Projects
                        </h6>
                        <ul className="pl-0 list-none">
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./single-project.html"
                            >
                              Single Project I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./single-project2.html"
                            >
                              Single Project II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./single-project3.html"
                            >
                              Single Project III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#a07cc5]"
                              href="./single-project4.html"
                            >
                              Single Project IV
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* /.column */}
                    </div>
                    {/* /auto-column */}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5]"
                        href="./blog.html"
                      >
                        Blog without Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5]"
                        href="./blog2.html"
                      >
                        Blog with Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5]"
                        href="./blog3.html"
                      >
                        Blog with Left Sidebar
                      </a>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#a07cc5] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Blog Posts
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./blog-post.html"
                          >
                            Post without Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./blog-post2.html"
                          >
                            Post with Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#a07cc5]"
                            href="./blog-post3.html"
                          >
                            Post with Left Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Blocks
                  </a>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content">
                      <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-15px] lg:mx-[-15px] xl:mt-[-20px] lg:mt-[-20px] !pl-0 list-none">
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/about.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block1.svg"
                                alt="image"
                              />
                            </div>
                            <span>About</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/blog.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block2.svg"
                                alt="image"
                              />
                            </div>
                            <span>Blog</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/call-to-action.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block3.svg"
                                alt="image"
                              />
                            </div>
                            <span>Call to Action</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/clients.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block4.svg"
                                alt="image"
                              />
                            </div>
                            <span>Clients</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/contact.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block5.svg"
                                alt="image"
                              />
                            </div>
                            <span>Contact</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/facts.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block6.svg"
                                alt="image"
                              />
                            </div>
                            <span>Facts</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/faq.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block7.svg"
                                alt="image"
                              />
                            </div>
                            <span>FAQ</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/features.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block8.svg"
                                alt="image"
                              />
                            </div>
                            <span>Features</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/footer.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block9.svg"
                                alt="image"
                              />
                            </div>
                            <span>Footer</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/hero.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block10.svg"
                                alt="image"
                              />
                            </div>
                            <span>Hero</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/misc.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block17.svg"
                                alt="image"
                              />
                            </div>
                            <span>Misc</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/navbar.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block11.svg"
                                alt="image"
                              />
                            </div>
                            <span>Navbar</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/portfolio.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block12.svg"
                                alt="image"
                              />
                            </div>
                            <span>Portfolio</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/pricing.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block13.svg"
                                alt="image"
                              />
                            </div>
                            <span>Pricing</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/process.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block14.svg"
                                alt="image"
                              />
                            </div>
                            <span>Process</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/team.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block15.svg"
                                alt="image"
                              />
                            </div>
                            <span>Team</span>
                          </a>
                        </li>
                        <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]">
                          <a
                            className="dropdown-item"
                            href="./docs/blocks/testimonials.html"
                          >
                            <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                              <img
                                className="rounded-none"
                                src="./assets/img/demos/block16.svg"
                                alt="image"
                              />
                            </div>
                            <span>Testimonials</span>
                          </a>
                        </li>
                      </ul>
                      {/*/.row */}
                    </li>
                    {/*/.mega-menu-content*/}
                  </ul>
                  {/*/.dropdown-menu */}
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle  font-bold !tracking-[-0.01rem]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Documentation
                  </a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="mega-menu-content">
                      <div className="flex flex-wrap mx-0 xl:mx-[-7.5px] lg:mx-[-7.5px]">
                        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] max-w-full">
                          <h6 className="dropdown-header !text-[#a07cc5]">
                            Usage
                          </h6>
                          <ul className="pl-0 list-none  xl:columns-2 lg:columns-2  xl:pb-1 lg:pb-1">
                            <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/index.html"
                              >
                                Get Started
                              </a>
                            </li>
                            <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/forms.html"
                              >
                                Forms
                              </a>
                            </li>
                            <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/faq.html"
                              >
                                FAQ
                              </a>
                            </li>
                            <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/changelog.html"
                              >
                                Changelog
                              </a>
                            </li>
                            <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/credits.html"
                              >
                                Credits
                              </a>
                            </li>
                          </ul>
                          <h6 className="dropdown-header !text-[#a07cc5] xl:!mt-6 lg:!mt-6">
                            Styleguide
                          </h6>
                          <ul className="pl-0 list-none  xl:columns-2 lg:columns-2 ">
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/colors.html"
                              >
                                Colors
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/fonts.html"
                              >
                                Fonts
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/icons-svg.html"
                              >
                                SVG Icons
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/icons-font.html"
                              >
                                Font Icons
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/illustrations.html"
                              >
                                Illustrations
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/backgrounds.html"
                              >
                                Backgrounds
                              </a>
                            </li>
                            <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/styleguide/misc.html"
                              >
                                Misc
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*/column */}
                        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:border-l-[rgba(164,174,198,0.2)] xl:border-l xl:border-solid lg:border-l-[rgba(164,174,198,0.2)] lg:border-l lg:border-solid">
                          <h6 className="dropdown-header !text-[#a07cc5]">
                            Elements
                          </h6>
                          <ul className="pl-0 list-none  xl:columns-3 lg:columns-3 ">
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/accordion.html"
                              >
                                Accordion
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/alerts.html"
                              >
                                Alerts
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/animations.html"
                              >
                                Animations
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/avatars.html"
                              >
                                Avatars
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/background.html"
                              >
                                Background
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/badges.html"
                              >
                                Badges
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/buttons.html"
                              >
                                Buttons
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/card.html"
                              >
                                Card
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/carousel.html"
                              >
                                Carousel
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/dividers.html"
                              >
                                Dividers
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/form-elements.html"
                              >
                                Form Elements
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/image-hover.html"
                              >
                                Image Hover
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/image-mask.html"
                              >
                                Image Mask
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/lightbox.html"
                              >
                                Lightbox
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/player.html"
                              >
                                Media Player
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/modal.html"
                              >
                                Modal
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/pagination.html"
                              >
                                Pagination
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/progressbar.html"
                              >
                                Progressbar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/shadows.html"
                              >
                                Shadows
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/shapes.html"
                              >
                                Shapes
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/tables.html"
                              >
                                Tables
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/tabs.html"
                              >
                                Tabs
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/text-animations.html"
                              >
                                Text Animations
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/text-highlight.html"
                              >
                                Text Highlight
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/tiles.html"
                              >
                                Tiles
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/tooltips-popovers.html"
                              >
                                Tooltips &amp; Popovers
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item hover:!text-[#a07cc5]"
                                href="./docs/elements/typography.html"
                              >
                                Typography
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*/column */}
                      </div>
                      {/*/.row */}
                    </li>
                    {/*/.mega-menu-content*/}
                  </ul>
                  {/*/.dropdown-menu */}
                </li>
              </ul>
              {/* /.navbar-nav */}
              <div className="offcanvas-footer xl:hidden lg:hidden">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse"
                  >
                    info@email.com
                  </a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other lg:!ml-4 xl:!ml-4">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item hidden xl:block lg:block md:block">
                <a href="#" className="btn btn-sm btn-white !rounded-[50rem]">
                  Free Trial
                </a>
              </li>
              <li className="nav-item xl:hidden lg:hidden">
                <button className="hamburger offcanvas-nav-btn">
                  <span />
                </button>
              </li>
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-other */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
    {/* /header */}
    <section
  className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
  style={{ backgroundImage: "url('/assets/img/photos/bg4.jpg')" }}
>
<div
  className="container pt-32 pb-24"
  style={{ zIndex: 5, position: "relative" }}
>
  <div className="flex flex-wrap mx-0 mt-[-70px] items-center">
    {/* First Column */}
    <div
      className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-6/12 w-full flex-[0_0_auto] max-w-full content text-center lg:text-left xl:text-left mt-[70px]"
      data-cues="slideInDown"
      data-group="page-title"
      data-delay={600}
    >
      <h1 className="xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.25] mb-5 text-white">
        Crafting project specific solutions with expertise.
      </h1>
      <p className="lead text-[1.05rem] !leading-[1.5] font-medium mb-7 xl:pr-10">
        We’re a creative company that focuses on establishing long-term relationships with customers.
      </p>
      <div
        className="flex justify-center lg:!justify-start xl:!justify-start"
        data-cues="slideInDown"
        data-group="page-title-buttons"
        data-delay={900}
      >
        <span>
          <a
            href="#"
            className="btn btn-lg btn-white !rounded-[50rem] !mr-2"
          >
            Explore Now
          </a>
        </span>
        <span>
          <a
            href="#"
            className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
          >
            Contact Us
          </a>
        </span>
      </div>
    </div>
    {/* First Column End */}

    {/* Second Column */}
    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[70px]">
      <div
        className="swiper-container dots-over !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] relative z-10"
        data-margin={5}
        data-nav="true"
        data-dots="true"
      >
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Swiper Slide 1 */}
            <div className="swiper-slide">
              <img
                src="./assets/img/photos/about21.jpg"
                srcSet="./assets/img/photos/about21@2x.jpg 2x"
                className="rounded-[.4rem] w-full h-auto"
                alt="image"
              />
            </div>
            {/* Swiper Slide 2 */}
            <div className="swiper-slide">
              <a
                href="./assets/media/movie.mp4"
                className="btn btn-circle btn-white btn-play ripple !mx-auto mb-5 !absolute z-[2] xl:text-[2.3rem] !w-[3.5rem] !h-[3.5rem] text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]  before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: 3
                }}
                data-glightbox=""
                data-gallery="hero"
              >
                <i className="icn-caret-right" />
              </a>
              <img
                src="./assets/img/photos/about22.jpg"
                srcSet="./assets/img/photos/about22@2x.jpg 2x"
                className="rounded-[.4rem] w-full h-auto"
                alt="image"
              />
            </div>
            {/* Swiper Slide 3 */}
            <div className="swiper-slide">
              <img
                src="./assets/img/photos/about23.jpg"
                srcSet="./assets/img/photos/about23@2x.jpg 2x"
                className="rounded-[.4rem] w-full h-auto"
                alt="image"
              />
            </div>
          </div>
          {/* /.swiper-wrapper */}
        </div>
        {/* /.swiper */}
      </div>
      {/* /.swiper-container */}
    </div>
    {/* Second Column End */}
  </div>
  {/* /.row */}
</div>

      {/* /.container */}
    </section>
    {/* /section */}
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              What We Do?
            </h2>
            <h3 className="xl:text-[1.8rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold mb-10 xl:!px-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="relative !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div
            className="shape !rounded-[50%] rellax !w-[6rem] !h-[6rem] !absolute bg-[#f2f3fb]"
            data-rellax-speed={1}
            style={{ bottom: "-0.5rem", right: "-2.5rem", zIndex: 0 }}
          />
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[7rem] absolute opacity-50 bg-[radial-gradient(#747ed1_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
          />
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center">
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-phone-volume before:content-['\ec50']" />{" "}
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-shield-exclamation before:content-['\ecb3']" />{" "}
                  </div>
                  <h4>Secure Payments</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-laptop-cloud before:content-['\ebb2']" />{" "}
                  </div>
                  <h4>Daily Updates</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-chart-line before:content-['\e9d3']" />{" "}
                  </div>
                  <h4>Market Research</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.relative */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                src="./assets/img/illustrations/i11.png"
                srcSet="./assets/img/illustrations/i11@2x.png 2x"
                alt="image"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Why Choose Us?
            </h2>
            <h3 className="xl:text-[1.8rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold mb-7">
              We bring solutions to make life easier for our clients.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_0.8rem_0] !border-0"
                  id="headingOne"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    Professional Design{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_.8rem_0] !border-0"
                  id="headingTwo"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {" "}
                    Top-Notch Support{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_.8rem_0] !border-0"
                  id="headingThree"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {" "}
                    Header and Slider Options{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center xl:!mb-[5rem] lg:!mb-[5rem] md:!mb-[5rem]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                src="./assets/img/illustrations/i17.png"
                srcSet="./assets/img/illustrations/i17@2x.png 2x"
                alt="image"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Our Solutions
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5">
              We make your spending stress-free for you to have the perfect
              control.
            </h3>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus.
            </p>
            <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Aenean quam ornare. Curabitur blandit.</span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Nullam quis risus eget urna mollis ornare</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Etiam porta euismod malesuada mollis.</span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Vivamus sagittis lacus vel augue rutrum.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /section */}
    <section className="wrapper  bg-[rgba(246,247,249,1)] ">
      <div className="container py-[4.5rem] xl:pt-0 lg:pt-0 md:pt-0 xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] xl:!-translate-y-2/4 lg:!-translate-y-2/4 md:!-translate-y-2/4 !mb-[4.5rem] xl:!mb-7 lg:!mb-7 md:!mb-7">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div
              className="card image-wrapper bg-full bg-image bg-overlay bg-cover [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
              data-image-src="./assets/img/photos/bg2.jpg"
            >
              <div className="card-body p-[2.25rem] xl:!p-[2.5rem]">
                <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-40px] !text-center text-white">
                  <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                    <h3 className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2">
                      7518
                    </h3>
                    <p className="!m-0">Completed Projects</p>
                  </div>
                  {/*/column */}
                  <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                    <h3 className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2">
                      3472
                    </h3>
                    <p className="!m-0">Happy Customers</p>
                  </div>
                  {/*/column */}
                  <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                    <h3 className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2">
                      2184
                    </h3>
                    <p className="!m-0">Expert Employees</p>
                  </div>
                  {/*/column */}
                  <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                    <h3 className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2">
                      4523
                    </h3>
                    <p className="!m-0">Awards Won</p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Case Studies
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="!relative">
          <div
            className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#747ed1_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{ top: 0, left: "-1.7rem" }}
          />
          <div
            className="swiper-container dots-closer blog grid-view !mb-6"
            data-margin={0}
            data-dots="true"
            data-items-xl={3}
            data-items-md={2}
            data-items-xs={1}
          >
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale group">
                          <a href="#">
                            {" "}
                            <img
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              src="./assets/img/photos/b4.jpg"
                              alt="image"
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                              Read More
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                          <div className="post-header">
                            <h2 className="post-title h3 !mt-1 !mb-3">
                              <a
                                className="text-[#343f52] hover:text-[#747ed1]"
                                href="./blog-post.html"
                              >
                                Ligula tristique quis risus
                              </a>
                            </h2>
                          </div>
                          {/* /.post-header */}
                          <div className="!relative">
                            <p>
                              Mauris convallis non ligula non interdum. Gravida
                              vulputate convallis tempus vestibulum cras
                              imperdiet nun eu dolor.
                            </p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                          <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>14 Apr 2022</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                                href="#"
                              >
                                <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                                Coding
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale group">
                          <a href="#">
                            {" "}
                            <img
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              src="./assets/img/photos/b5.jpg"
                              alt="image"
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                              Read More
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                          <div className="post-header">
                            <h2 className="post-title h3 !mt-1 !mb-3">
                              <a
                                className="text-[#343f52] hover:text-[#747ed1]"
                                href="./blog-post.html"
                              >
                                Nullam id dolor elit id nibh
                              </a>
                            </h2>
                          </div>
                          {/* /.post-header */}
                          <div className="!relative">
                            <p>
                              Mauris convallis non ligula non interdum. Gravida
                              vulputate convallis tempus vestibulum cras
                              imperdiet nun eu dolor.
                            </p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                          <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>29 Mar 2022</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                                href="#"
                              >
                                <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                                Workspace
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale group">
                          <a href="#">
                            {" "}
                            <img
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              src="./assets/img/photos/b6.jpg"
                              alt="image"
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                              Read More
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                          <div className="post-header">
                            <h2 className="post-title h3 !mt-1 !mb-3">
                              <a
                                className="text-[#343f52] hover:text-[#747ed1]"
                                href="./blog-post.html"
                              >
                                Ultricies fusce porta elit
                              </a>
                            </h2>
                          </div>
                          {/* /.post-header */}
                          <div className="!relative">
                            <p>
                              Mauris convallis non ligula non interdum. Gravida
                              vulputate convallis tempus vestibulum cras
                              imperdiet nun eu dolor.
                            </p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                          <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>26 Feb 2022</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                                href="#"
                              >
                                <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                                Meeting
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale group">
                          <a href="#">
                            {" "}
                            <img
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              src="./assets/img/photos/b7.jpg"
                              alt="image"
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                              Read More
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                          <div className="post-header">
                            <h2 className="post-title h3 !mt-1 !mb-3">
                              <a
                                className="text-[#343f52] hover:text-[#747ed1]"
                                href="./blog-post.html"
                              >
                                Morbi leo risus porta eget
                              </a>
                            </h2>
                          </div>
                          {/* /.post-header */}
                          <div className="!relative">
                            <p>
                              Mauris convallis non ligula non interdum. Gravida
                              vulputate convallis tempus vestibulum cras
                              imperdiet nun eu dolor.
                            </p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                          <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>7 Jan 2022</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                                href="#"
                              >
                                <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                                Business Tips
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div>
                {/*/.swiper-slide */}
              </div>
              {/*/.swiper-wrapper */}
            </div>
            {/*/.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.relative */}
      </div>
      {/* /.container */}
    </section>
    {/* /section */}
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
        <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
            <a
              href="./assets/media/movie.mp4"
              className="btn btn-circle btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] btn-play ripple !mx-auto mb-5 !absolute xl:text-[2.3rem] text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#747ed1] after:!bg-[#747ed1] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0  after:content-[''] after:block after:absolute after:z-[-1] after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 3
              }}
              data-glightbox=""
            >
              <i className="icn-caret-right ml-[0.15rem] !relative z-[2] before:content-['\e900'] text-[calc(1.355rem_+_1.26vw)]" />
            </a>
            <div
              className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
              data-rellax-speed={0}
              style={{
                bottom: "-1.8rem",
                right: "-1.5rem",
                width: "85%",
                height: "90%"
              }}
            />
            <figure className="!rounded-[.4rem] relative z-[2]">
              <img
                className="!rounded-[.4rem]"
                src="./assets/img/photos/about12.jpg"
                srcSet="./assets/img/photos/about12@2x.jpg 2x"
                alt="image"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[80px]">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Who Are We?
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6">
              Company that believes in the power of creative strategy.
            </h3>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <div className="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] !mb-3">
          <div className="md:w-10/12 lg:w-full xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Our Team
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-7 lg:!px-36 xl:!px-32">
              Think unique and be innovative. Make a difference with Sandbox.
            </h3>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[-40px] xl:mt-0 lg:mt-0 xl:!mb-[10rem] lg:!mb-[10rem] md:!mb-[10rem]">
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
            <div className="!relative">
              <div
                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                data-rellax-speed={0}
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0
                }}
              />
              <div className="card">
                <figure className="card-img-top">
                  <img
                    className="max-w-full h-auto"
                    src="./assets/img/avatars/t1.jpg"
                    srcSet="./assets/img/avatars/t1@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="!mb-1">Coriss Ambady</h4>
                  <p className="!mb-0 text-[.85rem]">Financial Analyst</p>
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /div */}
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
            <div className="!relative">
              <div
                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                data-rellax-speed={0}
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0
                }}
              />
              <div className="card">
                <figure className="card-img-top">
                  <img
                    className="max-w-full h-auto"
                    src="./assets/img/avatars/t2.jpg"
                    srcSet="./assets/img/avatars/t2@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="!mb-1">Cory Zamora</h4>
                  <p className="!mb-0 text-[.85rem]">Marketing Specialist</p>
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /div */}
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
            <div className="!relative">
              <div
                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                data-rellax-speed={0}
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0
                }}
              />
              <div className="card">
                <figure className="card-img-top">
                  <img
                    className="max-w-full h-auto"
                    src="./assets/img/avatars/t3.jpg"
                    srcSet="./assets/img/avatars/t3@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="!mb-1">Nikolas Brooten</h4>
                  <p className="!mb-0 text-[.85rem]">Sales Manager</p>
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /div */}
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
            <div className="!relative">
              <div
                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                data-rellax-speed={0}
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0
                }}
              />
              <div className="card">
                <figure className="card-img-top">
                  <img
                    className="max-w-full h-auto"
                    src="./assets/img/avatars/t4.jpg"
                    srcSet="./assets/img/avatars/t4@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="!mb-1">Jackie Sanders</h4>
                  <p className="!mb-0">Investment Planner</p>
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /div */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /section */}
    <section className="wrapper  bg-[rgba(246,247,249,1)] ">
      <div className="container py-[4.5rem] xl:pt-0 lg:pt-0 md:pt-0 xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] text-white !text-center">
          <div className="xl:w-10/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !mb-[4.5rem] xl:!mb-[-1.5rem] lg:!mb-[-1.5rem]">
            <div
              className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-[-1.25rem] xl:!mt-0 lg:!mt-0  xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
              data-image-src="./assets/img/photos/bg2.jpg"
            >
              <div className="card-body p-9 xl:!p-14">
                <div className="flex flex-wrap mx-0">
                  <div className="xxl:w-9/12 w-full flex-[0_0_auto] max-w-full !mx-auto">
                    <div
                      className="swiper-container dots-light dots-closer !mb-6 relative z-10"
                      data-margin={30}
                      data-dots="true"
                    >
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                            <blockquote className="pl-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] mb-2">
                              <p>
                                “Vivamus sagittis lacus augue laoreet rutrum
                                faucibus auctor vestibulum ligula porta felis,
                                euismod semper cras justo odio consectetur.”
                              </p>
                              <div className="flex items-center justify-center !text-center">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-white">
                                    Coriss Ambady
                                  </h5>
                                  <p className="!mb-0 text-[.8rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/*/.swiper-slide */}
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                            <blockquote className="pl-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] mb-2">
                              <p>
                                “Vivamus sagittis lacus augue laoreet rutrum
                                faucibus auctor vestibulum ligula porta felis,
                                euismod semper cras justo odio consectetur.”
                              </p>
                              <div className="flex items-center justify-center !text-center">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-white">
                                    Cory Zamora
                                  </h5>
                                  <p className="!mb-0 text-[.8rem]">
                                    Marketing Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/*/.swiper-slide */}
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                            <blockquote className="pl-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] mb-2">
                              <p>
                                “Vivamus sagittis lacus augue laoreet rutrum
                                faucibus auctor vestibulum ligula porta felis,
                                euismod semper cras justo odio consectetur.”
                              </p>
                              <div className="flex items-center justify-center !text-center">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-white">
                                    Nikolas Brooten
                                  </h5>
                                  <p className="!mb-0 text-[.8rem]">
                                    Sales Manager
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/*/.swiper-slide */}
                        </div>
                        {/*/.swiper-wrapper */}
                      </div>
                      {/*/.swiper */}
                    </div>
                    {/* /.swiper-container */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Our Pricing
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-10 xl:!px-10">
              We offer great prices, premium products and quality service for
              your business.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-11/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className="pricing-wrapper !relative mb-10 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem]">
              <div
                className="shape bg-dot purple rellax !w-[6rem] !h-[8rem] bg-[radial-gradient(#747ed1_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                data-rellax-speed={1}
                style={{ top: "2rem", right: "-2.4rem" }}
              />
              <div
                className="shape !rounded-[50%] bg-line purple rellax !w-[8rem] !h-[8rem] hidden xl:block lg:block absolute z-[1] opacity-50"
                data-rellax-speed={1}
                style={{ bottom: "0.5rem", left: "-2.5rem" }}
              />
              <div className="flex flex-wrap items-center justify-center switcher">
                <p className="!mb-0 !pr-[.75rem]">Monthly</p>
                <div className="pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] box-content rounded-3xl border-[0.2rem] border-solid border-transparent">
                  <div className="pricing-switcher pricing-switcher-active cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercase text-white" />
                  <div className="pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercase" />
                  <div className="h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-[#747ed1] opacity-100 switcher-button" />
                </div>
                <p className="!mb-0 !pl-3 !relative">Yearly</p>
              </div>
              <div className="flex flex-wrap mx-[-15px] mt-3 xl:!mt-5 lg:!mt-5 md:!mt-5">
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="pricing card">
                    <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <div className="prices text-[#343f52]">
                        <div className="price price-show !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">9</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                        <div className="price price-hide price-hidden !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">99</span>{" "}
                          <span className="price-duration">yr</span>
                        </div>
                      </div>
                      {/*/.prices */}
                      <h4 className="card-title !mt-2">Basic Plan</h4>
                      <ul className="pl-0 list-none bullet-bg bullet-soft-primary mt-7 !mb-8 text-left">
                        <li className="relative pl-6">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>1</strong> Project{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>100K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>100MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        Choose Plan
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.pricing */}
                </div>
                {/*/column */}
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] popular">
                  <div className="pricing card">
                    <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <div className="prices text-[#343f52]">
                        <div className="price price-show !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">19</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                        <div className="price price-hide price-hidden !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">199</span>{" "}
                          <span className="price-duration">yr</span>
                        </div>
                      </div>
                      {/*/.prices */}
                      <h4 className="card-title !mt-2">Premium Plan</h4>
                      <ul className="pl-0 list-none bullet-bg bullet-soft-primary mt-7 !mb-8 text-left">
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>5</strong> Projects{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>100K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>200MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        Choose Plan
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.pricing */}
                </div>
                {/*/column */}
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 md:!ml-[25%] w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:!ml-0 lg:!ml-0">
                  <div className="pricing card">
                    <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <div className="prices text-[#343f52]">
                        <div className="price price-show !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">49</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                        <div className="price price-hide price-hidden !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">499</span>{" "}
                          <span className="price-duration">yr</span>
                        </div>
                      </div>
                      {/*/.prices */}
                      <h4 className="card-title !mt-2">Corporate Plan</h4>
                      <ul className="pl-0 list-none bullet-bg bullet-soft-primary mt-7 !mb-8 text-left">
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>20</strong> Projects{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>300K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            <strong>500MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li className="relative pl-6 mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        Choose Plan
                      </a>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.pricing */}
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/.pricing-wrapper */}
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-sm btn-circle btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                      <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                    </span>
                  </div>
                  <div>
                    <h4>Can I cancel my subscription?</h4>
                    <p className="!mb-0">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod maecenas.
                    </p>
                  </div>
                </div>
              </div>
              {/* /column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-sm btn-circle btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                      <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                    </span>
                  </div>
                  <div>
                    <h4>Which payment methods do you accept?</h4>
                    <p className="!mb-0">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod maecenas.
                    </p>
                  </div>
                </div>
              </div>
              {/* /column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-sm btn-circle btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                      <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                    </span>
                  </div>
                  <div>
                    <h4>How can I manage my Account?</h4>
                    <p className="!mb-0">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod maecenas.
                    </p>
                  </div>
                </div>
              </div>
              {/* /column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-sm btn-circle btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none mr-5 w-[1.8rem] h-[1.8rem] text-[0.8rem] inline-flex items-center justify-center !leading-none !p-0 !rounded-[100%]">
                      <i className="uil uil-comment-exclamation before:content-['\ea41'] text-[.85rem]" />
                    </span>
                  </div>
                  <div>
                    <h4>Is my credit card information secure?</h4>
                    <p className="!mb-0">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod maecenas.
                    </p>
                  </div>
                </div>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /section */}
  </div>
  {/* /.content-wrapper */}
  <footer className="bg-[rgba(52,63,82)] opacity-100 text-[#cacaca]">
    <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
      <div className="xl:flex lg:flex flex-row xl:!items-center lg:!items-center">
        <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 xl:!mb-0 lg:!mb-0 lg:pr-40 xl:pr-60 xxl:pr-[22.5rem] text-white">
          Join our community by using our services and grow your business.
        </h3>
        <a
          href="#"
          className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem]  !mb-0 whitespace-nowrap"
        >
          Try It For Free
        </a>
      </div>
      {/*/div */}
      <hr className="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
      <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
        <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
          <div className="widget text-[#cacaca]">
            <img
              className="!mb-4"
              src="./assets/img/logo-light.png"
              srcSet="./assets/img/logo-light@2x.png 2x"
              alt="image"
            />
            <p className="!mb-4">
              © 2024 Sandbox.{" "}
              <br className="hidden xl:block lg:block text-[#cacaca]" />
              All rights reserved.
            </p>
            <nav className="nav social social-white">
              <a
                className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]" />
              </a>
              <a
                className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]" />
              </a>
              <a
                className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]" />
              </a>
              <a
                className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]" />
              </a>
              <a
                className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]" />
              </a>
            </nav>
            {/* /.social */}
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
          <div className="widget text-[#cacaca]">
            <h4 className="widget-title text-white !mb-3">Get in Touch</h4>
            <address className="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a
              className="text-[#cacaca] hover:text-[#747ed1]"
              href="mailto:first.last@email.com"
            >
              info@email.com
            </a>
            <br /> 00 (123) 456 78 90
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
          <div className="widget text-[#cacaca]">
            <h4 className="widget-title text-white !mb-3">Learn More</h4>
            <ul className="pl-0 list-none   !mb-0">
              <li>
                <a className="text-[#cacaca] hover:text-[#747ed1]" href="#">
                  About Us
                </a>
              </li>
              <li className="mt-[0.35rem]">
                <a className="text-[#cacaca] hover:text-[#747ed1]" href="#">
                  Our Story
                </a>
              </li>
              <li className="mt-[0.35rem]">
                <a className="text-[#cacaca] hover:text-[#747ed1]" href="#">
                  Projects
                </a>
              </li>
              <li className="mt-[0.35rem]">
                <a className="text-[#cacaca] hover:text-[#747ed1]" href="#">
                  Terms of Use
                </a>
              </li>
              <li className="mt-[0.35rem]">
                <a className="text-[#cacaca] hover:text-[#747ed1]" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
          <div className="widget text-[#cacaca]">
            <h4 className="widget-title text-white !mb-3">Our Newsletter</h4>
            <p className="!mb-5">
              Subscribe to our newsletter to get our news &amp; deals delivered
              to you.
            </p>
            <div className="newsletter-wrapper">
              {/* Begin Mailchimp Signup Form */}
              <div id="mc_embed_signup2">
                <form
                  action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a"
                  method="post"
                  id="mc-embedded-subscribe-form2"
                  name="mc-embedded-subscribe-form"
                  className="validate dark-fields"
                  target="_blank"
                  noValidate=""
                >
                  <div id="mc_embed_signup_scroll2">
                    <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                      <input
                        type="email"
                        defaultValue=""
                        name="EMAIL"
                        className="required email form-control block w-full text-[12px] font-medium leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:mt-[-0.6rem] file:mr-[-1rem] file:mb-[-0.6rem] file:ml-[-1rem] file:text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] text-[#cacaca] focus:!border-[rgba(116,126,209,.5)] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(116,126,209,.5)] focus-visible:!outline-0"
                        placeholder="Email Address"
                        id="mce-EMAIL2"
                      />
                      <label
                        className="!ml-[0.05rem] text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                        htmlFor="mce-EMAIL2"
                      >
                        Email Address
                      </label>
                      <input
                        type="submit"
                        defaultValue="Join"
                        name="subscribe"
                        id="mc-embedded-subscribe2"
                        className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !relative z-[2] focus:z-[5] hover:!transform-none border-0"
                      />
                    </div>
                    <div id="mce-responses2" className="clear">
                      <div
                        className="response"
                        id="mce-error-response2"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response2"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                        tabIndex={-1}
                        defaultValue=""
                      />
                    </div>
                    <div className="clear" />
                  </div>
                </form>
              </div>
              {/*End mc_embed_signup*/}
            </div>
            {/* /.newsletter-wrapper */}
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </footer>
  {/* progress wrapper */}
  <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#a07cc5] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        className="fill-none stroke-[#a07cc5] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      />
    </svg>
  </div>
</>

  );
};

export default Header;
