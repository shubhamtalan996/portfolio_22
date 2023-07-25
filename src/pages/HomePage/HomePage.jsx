import "../../App.css";
import { SVG } from "../../assets";

const socialMediaLinks = [
  {
    key: "github",
    alt: "github link",
    src: SVG.github,
    link: "https://github.com/shubhamtalan996",
  },
  {
    key: "linkedin",
    alt: "linkedin link",
    src: SVG.linkedin,
    link: "https://www.linkedin.com/in/shubhamtalan/",
  },
  {
    key: "instagram",
    alt: "instagram link",
    src: SVG.instagram,
    link: "https://www.instagram.com/shubham_talan_/?hl=en",
  },
];

const HomePage = () => {
  return (
    <div className="App">
      <main>
        <header>
          <h1>Shubham Talan</h1>
          <p>🚀 Welcome to my website!</p>
        </header>

        <blockquote>
          <p>Transforming ideas into elegant web solutions.</p>
        </blockquote>

        <section>
          <h2>📜 Manifesto</h2>
          <p>
            I am a Web Developer based in Delhi, India. My passion lies in
            building user-friendly, responsive, and scalable web applications.
          </p>

          <p>
            The vast ocean of web technologies fascinates me, and I consider
            myself a sailor with an insatiable desire to learn and explore new
            and intriguing concepts. With an adventurous spirit, I eagerly
            embrace new challenges and continuously seek opportunities to
            enhance my skills and knowledge in the dynamic world of web
            development.
          </p>
        </section>

        <canvas class="globe-location"></canvas>

        <blockquote>
          <p>
            The best way to predict the future is to create it.
            <br />- Peter Drucker
          </p>
        </blockquote>

        <section class="left">
          <h2>🌮 Work History</h2>

          <h3>
            <a
              href="https://cimpress.com/"
              target="_blank"
              class="company-name"
              rel="noreferrer"
            >
              Cimpress India&nbsp;
            </a>
            ~ (June 2021 - Present)
          </h3>
          <h4>~ e-Commerce</h4>
          <p>
            Key contributor in building&nbsp;
            <a
              href="https://boxup.com"
              target="_blank"
              class="boxup-link"
              rel="noreferrer"
            >
              BoxUp's
            </a>
            &nbsp; e-commerce website.
          </p>
          <p>
            Website is built using NextJS, with highly customisable components
            using CDN. Researched & Implemented methods to improve core
            web-vitals & UX. Worked on key features like authentication, cart
            checkout, payments and segments for tracking user behaviour. Worked
            with GraphQL and Rest APIs for data. The project is strongly typed
            using TypeScript. Used Gitlab for code maintainance and CI-CD
            workflows. Used netflify for deployments.
          </p>

          <h3>
            <a
              href="https://wheelseye.com/"
              target="_blank"
              class="company-name"
              rel="noreferrer"
            >
              WheelsEye&nbsp;
            </a>
            ~ (Aug 2019 - July 2021)
          </h3>
          <h4>~ Logitics Solutions</h4>
          <p>
            Maintained and took ownership of legacy jquery code, later migrated
            the code to ReactJS + Redux model following best practices and
            design patterns. Used Atomic design to standardize components across
            all WheelsEye platforms. Integrated CDN for faster load times and
            caching. Helped in building hybrid mobile web-app using Cordova.
          </p>
          <span>
            <h3>
              <a
                href="https://www.lybrate.com/"
                target="_blank"
                class="company-name"
                rel="noreferrer"
              >
                LYBRATE&nbsp;
              </a>
              ~ (Aug 2019 - Oct 2019)
            </h3>
            <h4>~ Healthcare</h4>
          </span>
          <p>
            Worked as a UI Developer for internal application and briefly got
            the chance to work on unique &nbsp;
            <a
              href="https://doctor.lybrate.com/"
              target="_blank"
              class="lybrate-link"
              rel="noreferrer"
            >
              social network
            </a>
            &nbsp; developed exclusively for doctors. Majorly solved bugs
            developed web pages using HTML5, CSS3, JavaScript and AngularJS.
          </p>
        </section>

        <footer>
          <p>Feel free to react out!</p>
          <div className="social-links">
            {socialMediaLinks && socialMediaLinks?.length ? (
              socialMediaLinks.map(({ key, alt, link, src }) => (
                <div className="image">
                  <a key={key} href={link} rel="noreferrer" target="_blank">
                    <img alt={alt} src={src} className="social-img" />
                  </a>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <span className="contact-info">
            <p>📞&nbsp;+91-8595398234</p>&nbsp;&nbsp;&#183;&nbsp;&nbsp;
            <p> ✉️&nbsp;me@shubhamtalan.com</p>
          </span>
        </footer>
      </main>
    </div>
  );
};
export default HomePage;
