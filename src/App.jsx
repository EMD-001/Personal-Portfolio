function App() {
  
return (
    <>
    {/*[if lte IE 9]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]*/}
    {/* top-area Start */}
    <header className="top-area">
      <div className="header-area">
        {/* Start Navigation */}
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                portfolio
              </a>
            </div>
            {/*/.navbar-header*/}
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
            <li className=" smooth-menu active" />
            <li className=" smooth-menu">
            <a href="#education">education</a>
                </li>
                <li className="smooth-menu">
                  <a href="#skills">skills</a>
                </li>
                <li className="smooth-menu">
                  <a href="#portfolio">projects</a>
                </li>
                <li className="smooth-menu">
                  <a href="#contact">contact</a>
                </li>
              </ul>
              {/*/.nav */}
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/*/.container*/}
        </nav>
        {/*/nav*/}
        {/* End Navigation */}
      </div>
      {/*/.header-area*/}
      <div className="clearfix" />
    </header>
    {/* /.top-area*/}
    {/* top-area End */}
    {/*welcome-hero start */}
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hello <span>,</span> i am <br /> Elloisa  Degula <span>.</span>{" "}
              </h2>
              <p>aspiring it professional</p>
              <a href="/personal-portfolio/assets/resume/my-resume.pdf" className="btn btn-fill" target="_blank" download>
              download resume </a>
               </div>
            {/*/.header-text*/}
          </div>
          {/*/.col*/}
        </div>
        {/* /.row*/}
      </div>
      {/* /.container*/}
    </section>
    {/*/.welcome-hero*/}
    {/*welcome-hero end */}
    {/*about start */}
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  I am Bachelor of Science in Information System Student.
                  Currently studying in La Verdad Christian College, Apalit Pampanga. 
                </h3>
                <p>
                I am an aspiring IT professional. Hoping that someday I can develop something that will change the world. I believe in the saying, 
                "You can dream for free, but to make those dreams come true, you must work for it."
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>0945-776-4443</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>elloisadegula.01@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img
                  src="assets/images/about/hero1.jpeg"
                  alt="profile_image"
                />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/elloisa.degula">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>

                    <li>
                      <a href="https://github.com/EMD-001">
                        <i className="fa fa-github" aria-hidden="true" />
                      </a>
                    </li>
                   
                    <li>
                      <a href="https://www.linkedin.com/in/elloisa-degula-64a124305/">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    {/* / li */}
                    <li>
                      <a href="https://www.instagram.com/__elleezy/">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    {/* / li */}
                  </ul>
                  {/* / ul */}
                </div>
                {/* /.about-list-icon */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/.about*/}
    {/*about end */}
    {/*education start */}
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2012-2013</h2>
                  <h3>
                     Primary Education
                  </h3>
                </div>
                {/*/.experience-time*/}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true" />
                  <span className="single-timeline-horizontal" />
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Catmon Elementary School</h4>
                    <h5>Saint Bernard, Southern Leyte</h5>
                    
                  </div>
                  {/*/.timeline-content*/}
                </div>
                {/*/.timeline*/}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2018 - 2020</h2>
                  <h3>
                    Senior High School
                  </h3>
                </div>
                {/*/.experience-time*/}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true" />
                  <span className="single-timeline-horizontal" />
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Ragay National Agricultural and Fisheries School</h4>
                    <h5>Ragay, Camarines Sur</h5>
                    <p className="description">
                      With Honors
                    </p>
                  </div>
                  {/*/.timeline-content*/}
                </div>
                {/*/.timeline*/}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2021 - Present</h2>
                  <h3>
                    bachelor <span>of </span> Science in Information Systems
                  </h3>
                </div>
                {/*/.experience-time*/}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true" />
                  <span
                    className="single-timeline-horizontal spacial-horizontal-line
                    "
                  />
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">La Verdad Christian College</h4>
                    <h5>Apalit, Pampanga</h5>
                    
                  </div>
                  {/*/.timeline-content*/}
                </div>
                {/*/.timeline*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/.education*/}
    {/*education end */}
    {/*skills start */}
   
    <section id="skills" className="section-skills">
    <div className="container">
    <div className="section-heading text-center">
    <h2>Skills</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="single-skill">
          <div className="barWrapper">
            <span className="progressText">Java</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={50}></div>
              </div>
              <h3>50%</h3>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">Javascript</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={75}></div>
              </div>
              <h3>75%</h3>
            </div>
          </div>

          <div className="barWrapper">
            <span className="progressText">PHP</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={50}></div>
              </div>
              <h3>50%</h3>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">HTML & CSS</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={90}></div>
              </div>
              <h3>90%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="single-skill">
          <div className="barWrapper">
            <span className="progressText">Communication</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={90}></div>
              </div>
              <h3>90%</h3>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">Problem Solving</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={85}></div>
              </div>
              <h3>85%</h3>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">Time Management</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={97}></div>
              </div>
              <h3>97%</h3>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">Creativity</span>
            <div className="single-progress-txt">
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal={90}></div>
              </div>
              <h3>90%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>projects</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/p.PNG" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://dazzling-snickerdoodle-8bb823.netlify.app/">
                          I created a Portfolio web page for our Web Dev 1 final project
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                    <div className="item">
                      <img src="assets/images/portfolio/p2.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://github.com/EMD-001/appdev1">
                         Activites 
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/p3.png" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.figma.com/design/dSUpHuSEIFKF5Zmu14CcdO/Group-A?node-id=42-1339">
                         Compassion and cares for the animals mobile application
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/p4.PNG" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://github.com/EMD-001/webapp2-Final-Project">
                         It's our final project in Web Dev 2 using php programming language, a simple post-page with database
                        <i className="fa fa-link" aria-hidden="true"></i>  
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                    <div className="item">
                      <img src="assets/images/portfolio/p5.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                        project management
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/*/.isotope*/}
            </div>{/*/.gallery-content*/}
          </div>{/*/.container*/}
        </div>{/*/.portfolio-details*/}

      </section>
    {/*portfolio end */}

    {/*contact start */}
    <section id="contact" className="contact">
      <div className="section-heading text-center">
        <h2>contact me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name*"
                            name="name"
                          />
                        </div>
                        {/*/.form-group*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email*"
                            name="email"
                          />
                        </div>
                        {/*/.form-group*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                        {/*/.form-group*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={8}
                            id="comment"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        {/*/.form-group*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <a className="contact-btn" href="#" role="button">
                            submit
                          </a>
                        </div>
                        {/*/.single-single-contact-btn*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                  </form>
                  {/*/form*/}
                </div>
                {/*/.contact-form*/}
              </div>
              {/*/.single-contact-box*/}
            </div>
            {/*/.col*/}
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>Elloisa Degula</h3>
                    <p>Aspiring IT Professional</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>phone</h3>
                      <p>0945-776-4443</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>email</h3>
                      <p>elloisadegula.01@gmail.com</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>github</h3>
                      <p>https.//github.com/EMD-001</p>
                    </div>
                  </div>
                </div>
                {/*/.contact-adress*/}
                <div className="hm-foot-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/elloisa.degula">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    {/*/li*/}
                    <li>
                      <a href="https://www.linkedin.com/in/elloisa-degula-64a124305/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    {/*/li*/}
                    <li>
                      <a href="https://www.instagram.com/__elleezy/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    {/*/li*/}
                  </ul>
                  {/*/ul*/}
                </div>
                {/*/.hm-foot-icon*/}
              </div>
              {/*/.single-contact-box*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.contact-content*/}
      </div>
      {/*/.container*/}
    </section>
    {/*/.contact*/}
    {/*contact end */}
    {/*footer-copyright start*/}
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>
            © copyright elloisaDegula. design and developed by{" "}
            <a href="https://www.themesine.com/">themesine</a>
          </p>
          {/*/p*/}
        </div>
        {/*/.text-center*/}
      </div>
      {/*/.container*/}
       
      <div id="scroll-Top">
              <div className="return-to-top">
                <i className="fa fa-angle-up " id="scroll-top" ></i>
              </div>
              
            </div>{/*/.scroll-Top*/}
      
    </footer>
    
  </>
  
  )
}

export default App
