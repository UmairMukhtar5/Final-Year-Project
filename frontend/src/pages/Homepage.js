import React, { Component } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import Xlider from "./Xlider";
import { BoxLoading } from "react-loadingg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header Class="header">
          <div Class="container">
            <nav Class="navbar navbar-inverse" role="navigation">
              <div Class="navbar-header">
                <button
                  type="button"
                  id="nav-toggle"
                  Class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#main-nav"
                >
                  {" "}
                  <span Class="sr-only">Toggle navigation</span>{" "}
                  <span Class="icon-bar"></span> <span Class="icon-bar"></span>{" "}
                  <span Class="icon-bar"></span>{" "}
                </button>
                <a
                  href="#"
                  Class="navbar-brand scroll-top logo  animated bounceInLeft"
                >
                  <b>
                    <i>{/* {Agile} */} IMPORTEXT</i>
                  </b>
                </a>{" "}
              </div>
              {/* <!--/.navbar-header--> */}
              <div id="main-nav" Class="collapse navbar-collapse">
                <ul Class="nav navbar-nav" id="mainNav">
                  <li Class="active" id="firstLink">
                    <a href="#home" Class="scroll-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" Class="scroll-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" Class="scroll-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#work" Class="scroll-link">
                      Events
                    </a>
                  </li>
                  {/* <li>
                    <a href='#plans' Class='scroll-link'>
                      Plans
                    </a>
                  </li> */}
                  <li>
                    <a href="#team" Class="scroll-link">
                      Team
                    </a>
                  </li>
                  <li>
                    {/* <Link to='/signup' Class='scroll-link'>
                      Contact Us
                    </Link> */}
                    <a href="#contactUs" Class="scroll-link">
                      Contact Us
                    </a>
                    {/* <a href='/signup' Class='scroll-link'>
                      Contact Us
                    </a> */}
                  </li>
                  <li>
                    <Link to="/signup" Class="scroll-link">
                      LOGIN / SIGN UP !
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--/.navbar-collapse-->  */}
            </nav>
            {/* <!--/.navbar-->  */}
          </div>
          {/* <!--/.container-->  */}
        </header>
        {/* <!--/.header--> */}
        <div id="#top"></div>
        <section id="home">
          <div Class="banner-container">
            {/* <!-- Slider -->  */}
            <Xlider style={{ position: "absolute", height: "238px" }}></Xlider>
            {/* <!-- end slider --> */}
          </div>
          <div Class="container hero-text2">
            <h3>
              Importext will be a system to communicate with the audience in a
              much effective and efficient way ! <BoxLoading />
            </h3>
          </div>
        </section>
        <section id="services" Class="page-section colord">
          <div Class="container">
            <div Class="row">
              {/* <!-- item --> */}
              <div Class="col-md-3 text-center">
                <div Class="b1">
                  {" "}
                  <i Class="circle">
                    <img src="assets/images/stream.png" alt="" />
                  </i>
                  <h3>LIVE STREAMING</h3>
                  <p>
                    You can stream on our platform. Just go live and deliver
                    your message to the audience. A great platform for people
                    with audience.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div Class="col-md-3 text-center">
                <div Class="b1">
                  <i Class="circle">
                    <img src="assets/images/a2.jpg" alt="" />
                  </i>
                  <h3>OTHER PLATFORM </h3>
                  <p>
                    If you streaming on any other platform such as Facebook or
                    youtube. Just share a link with us and we are good to go.{" "}
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div Class="col-md-3 text-center">
                <div Class="b1">
                  <i Class="circle">
                    {" "}
                    <img src="assets/images/a3.jpg" alt="" />
                  </i>
                  <h3>PROCESS QUERIES</h3>
                  <p>
                    Have alot of queries ? We will manage all the queries for
                    you and make sure you see only important ones.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div Class="col-md-3 text-center">
                <div Class="b1">
                  <i Class="circle">
                    {" "}
                    <img src="assets/images/Prioritize.png" alt="" />
                  </i>
                  <h3>RANK QUERIES</h3>
                  <p>
                    All your queries will be ranked according to their
                    importance. So you see what you should see !Irrelevent
                    queries will be ignored
                  </p>
                </div>
              </div>
              {/* <!-- end:-->  */}
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id="aboutUs">
          <div Class="container">
            <div Class="heading text-center">
              {/* <!-- Heading --> */}
              <h2>About Importext</h2>
              <p>
                The purpose of this project is to minimize the communication gap
                between Speakers and Audience. Enhance the experience of using
                live streams.
              </p>
            </div>
            <div Class="row feature design">
              <div Class="area1 columns right">
                <h3>CLEAR AND EFFECTIVE COMMUNICATION !</h3>
                <p>
                  For the Speaker/ Organizer, ImporText will provide the basic
                  facility to start any stream or schedule live streaming for
                  later. The speaker will be able to manage and communicate with
                  his/her audience much better as he/she will only see the
                  queries that are important !
                </p>
                <p>
                  The viewers of the stream will also be facilitated. They will
                  have an option to see already answered questions. The system
                  will maintain the record of Frequently Asked Questions.
                </p>
                <a href="#" Class="btn">
                  Download Mobile App
                </a>
              </div>
              <div Class="area2 columns feature-media left">
                {" "}
                <img src="assets/images/mine.png" alt="" width="70%" />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="clients">
          <div id="demo" Class="clients">
            <div Class="container">
              <div Class="row">
                <div Class="col-md-12">
                  <div Class="customNavigation">
                    {" "}
                    <a Class="prev">
                      <i Class="fa fa-chevron-circle-left"></i>
                    </a>{" "}
                    <a Class="next">
                      <i Class="fa fa-chevron-circle-right"></i>
                    </a>{" "}
                  </div>
                  <div id="owl-demo" Class="owl-carousel">
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-1.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-2.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-3.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-4.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-5.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-6.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-7.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-8.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div Class="item">
                      {" "}
                      <span Class="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-9.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" Class="page-section page">
          <div Class="container text-center">
            <div Class="heading">
              <h2>STREAMS </h2>
              <p>
                Here are the streams currently on our system. You can see anyone
                of these or create your own.{" "}
              </p>
            </div>
            <div Class="row">
              <div Class="col-md-12">
                <div id="portfolio">
                  <ul Class="filters list-inline">
                    <li>
                      {" "}
                      <a Class="active" data-filter="*" href="#">
                        All
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".photography" href="#">
                        Ongoing
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".branding" href="#">
                        Shcheduled
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".web" href="#">
                        Recorded
                      </a>{" "}
                    </li>
                  </ul>
                  <ul
                    Class="items list-unstyled clearfix animated fadeInRight showing"
                    data-animation="fadeInRight"
                    style={{ position: "relative", height: "438px" }}
                  >
                    <li
                      Class="item branding"
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="images/work/1.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/1.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Etiam porta</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item photography"
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="images/work/2.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/2.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Lorem ipsum</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item branding"
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="images/work/3.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/3.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Vivamus quis</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item photography"
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="images/work/4.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/4.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Donec ac tellus</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item photography"
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="images/work/5.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/5.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Etiam volutpat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item web"
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="images/work/6.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/6.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Donec congue </span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item photography"
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="images/work/7.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/7.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Nullam a ullamcorper diam</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      Class="item web"
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="images/work/8.jpg" Class="fancybox">
                        {" "}
                        <img src="assets/images/work/8.jpg" alt="" />
                        <div Class="overlay">
                          {" "}
                          <span>Etiam consequat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id='plans' Class='page-section'>
          <div Class='container'>
            <div Class='heading text-center'> */}
        {/* <!-- Heading --> */}
        {/* <h2>Our Plans</h2>
              <p>
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected humour.
              </p>
            </div>
            <div Class='row flat'>
              <div Class='col-lg-3 col-md-3 col-xs-12'>
                <ul Class='plan plan1'>
                  <li Class='plan-name'>Basic </li>
                  <li Class='plan-price'>
                    {" "}
                    <strong>$29</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li Class='plan-action'>
                    {" "}
                    <a href='#' Class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div Class='col-lg-3 col-md-3 col-xs-12'>
                <ul Class='plan plan2 featured'>
                  <li Class='plan-name'>Standard </li>
                  <li Class='plan-price'>
                    {" "}
                    <strong>$39</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li Class='plan-action'>
                    {" "}
                    <a href='#' Class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div Class='col-lg-3 col-md-3 col-xs-12'>
                <ul Class='plan plan3'>
                  <li Class='plan-name'>Advanced </li>
                  <li Class='plan-price'>
                    {" "}
                    <strong>$199</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li Class='plan-action'>
                    {" "}
                    <a href='#' Class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div Class='col-lg-3 col-md-3 col-xs-12'>
                <ul Class='plan plan4'>
                  <li Class='plan-name'>Mighty </li>
                  <li Class='plan-price'>
                    {" "}
                    <strong>$999</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li Class='plan-action'>
                    {" "}
                    <a href='#' Class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section id="team" Class="page-section">
          <div Class="container">
            <div Class="heading text-center">
              {/* <!-- Heading --> */}
              <h2>Our Team</h2>
              <p>We ar a team of 4 people working on this project. </p>
            </div>
            {/* <!-- Team Member's Details --> */}
            <div Class="team-content">
              <div Class="row">
                <div Class="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div Class="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div Class="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        Class="img-responsive"
                        src="assets/images/umair.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Umair Mukhtar</h4>
                    {/* <!-- Designation -->  */}
                    <span Class="pos">SP17-BCS-046</span>
                    <div Class="team-socials">
                      {" "}
                      <a href="#">
                        <i Class="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div Class="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div Class="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div Class="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        Class="img-responsive"
                        src="assets/images/zeeshan.PNG"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Zeeshan Yasin</h4>
                    {/* <!-- Designation -->  */}
                    <span Class="pos">SP17-BCS-048</span>
                    <div Class="team-socials">
                      {" "}
                      <a href="#">
                        <i Class="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div Class="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div Class="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div Class="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        Class="img-responsive"
                        src="assets/images/sir1.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Inayat-ur-Rehman</h4>
                    {/* <!-- Designation -->  */}
                    <span Class="pos">Supervisor</span>
                    <div Class="team-socials">
                      {" "}
                      <a href="#">
                        <i Class="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div Class="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div Class="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div Class="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        Class="img-responsive"
                        src="assets/images/sir2.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Saif-ur-Rehman Khan</h4>
                    {/* <!-- Designation -->  */}
                    <span Class="pos">co. supervisor</span>
                    <div Class="team-socials">
                      {" "}
                      <a href="#">
                        <i Class="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i Class="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id="contactUs" Class="contact-parlex">
          <div Class="parlex-back">
            <div Class="container">
              <div Class="row">
                <div Class="heading text-center">
                  {/* <!-- Heading --> */}
                  <h2>Contact Us</h2>
                  <p>
                    If you have any queries or questions regarding any aspect of
                    the system, or if you have any suggestions that you think
                    will improve the systems, do let us know ! Your suggestions
                    are apprciated !{" "}
                  </p>
                </div>
              </div>
              <div Class="row mrgn30">
                <form method="post" action="" id="contactfrm" role="form">
                  <div Class="col-sm-12">
                    <div Class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        Class="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        title="Please enter your name (at least 2 characters)"
                      />
                    </div>
                    <div Class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        Class="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        title="Please enter a valid email address"
                      />
                    </div>
                    <div Class="form-group">
                      <label for="comments">Comments</label>
                      <textarea
                        name="comment"
                        Class="form-control"
                        id="comments"
                        cols="3"
                        rows="5"
                        placeholder="Enter your message…"
                        title="Please enter your message (at least 10 characters)"
                      ></textarea>
                      <button
                        name="submit"
                        type="submit"
                        Class="btn btn-lg btn-primary"
                        id="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div Class="result"></div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!--/.container-->  */}
          </div>
        </section>
        <footer>
          <div Class="container">
            <div Class="row">
              <div Class="col-md-6">
                <div Class="col">
                  <h4>Contact us</h4>
                  <ul>
                    <li>Comsats Univesty Islmabad </li>
                    <li>Phone: +92 348 5055784 | +92 346 6510798 </li>
                    <li>
                      Email:{" "}
                      <a title="Email Us">
                        zeeshanyasin340@gmail.com || umairmukhtar332@gmail.com
                      </a>
                    </li>
                    <li>
                      Skype:{" "}
                      <a href="skype:my.test?call" title="Skype us">
                        importext
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div Class='col-md-3'>
                <div Class='col'>
                  <h4>Mailing list</h4>
                  <p>
                    Lorem ipsum dolor sit amet, ea eum labitur scsstie
                    percipitoleat.
                  </p>
                  <form Class='form-inline'>
                    <div Class='input-group'>
                      <input
                        type='text'
                        Class='form-control'
                        placeholder='Your email address...'
                      />
                      <span Class='input-group-btn'>
                        <button Class='btn' type='button'>
                          Go!
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
 */}
              <div Class="col-md-6">
                <div Class="col col-social-icons">
                  <h4>Follow us</h4>
                  <a href="#">
                    <i Class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-google-plus"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-flickr"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-skype"></i>
                  </a>
                  <a href="#">
                    <i Class="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
              {/* 
              <div Class='col-md-3'>
                <div Class='col'>
                  <h4>Latest News</h4>
                  <p>
                    Lorem ipsum dolor labitur scsstie per sit amet, ea eum
                    labitur scsstie percipitoleat.
                    <br />
                    <a href='#' Class='btn'>
                      Get Mores!
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </footer>
        {/* <!--/.page-section--> */}
        <section Class="copyright">
          <div Class="container">
            <div Class="row">
              <div Class="col-sm-12 text-center">
                {" "}
                Copyright 2020 | All Rights Reserved -- Importext{" "}
              </div>
            </div>
            {/* <!-- / .row -->  */}
          </div>
        </section>
        <a href="#top" Class="topHome">
          <i Class="fa fa-chevron-up fa-2x"></i>
        </a>
      </div>
    );
  }
}

export default Homepage;
