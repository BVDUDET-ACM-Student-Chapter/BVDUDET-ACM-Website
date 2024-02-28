import BVDUDETACMLogo from "../../assets/images/BVDUDET ACM Chapter.png";
import ACMLogo from "../../assets/images/ACM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter as faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-2xl md:text-4xl font-bold md:pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          About Us - ACM BVUDET Student Chapter
        </span>
      </div>
      <div className="container mx-auto">
        {/* About ACM Section */}
        <div className="flex flex-col lg:flex-row gap-8 my-20 mx-10">
          <div className="lg:w-1/2 bg-gray-900 rounded-2xl shadow-xl shadow-gray-600 flex justify-center items-center h-96">
            <img src={ACMLogo} alt="ACM Logo" height={500} width={500} />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-blue-400 my-5">ACM</h1>
            <p>
              ACM is the world&apos;s largest educational and scientific
              computing society, aimed at increasing the level and visibility of
              ACM activities across the globe. ACM is a society of dedicated
              professionals, academicians, and research scientists, who
              contribute towards the growth of technological innovations. The
              purpose of Society is to inculcate computational thinking aiding
              in career development and a lifelong learning experience.
            </p>
            <a
              href="https://india.acm.org/"
              target="_blank"
              rel="noreferrer"
              className="btn my-5 w-32"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* About BVDUDET ACM Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 my-20 mx-10">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-blue-400 my-5">
              BVDUDET ACM Student Chapter
            </h1>
            <p>
              ACM at Bharati Vidyapeeth Deemed University Department of
              Engineering and Technology brings together computing educators,
              researchers, and professionals to inspire dialogue, share
              resources, and address the field's challenges.
            </p>
            <hr className="my-5 border-t-2" />
            <h1 className="my-2 text-xl font-extrabold italic">
              Basic Information
            </h1>
            <ul className="list-none">
              <li className="my-1">
                <span className="float-left font-bold w-40">
                  Establishment:
                </span>
                <p>Sept 25, 2023</p>
              </li>
              <li className="my-1">
                <span className="float-left font-bold w-40">Address:</span>
                <p>Kharghar, Navi Mumbai, Maharashtra 410210, India</p>
              </li>
              <li className="my-1">
                <span className="float-left font-bold w-40">Phone:</span>
                <p>+91 1234567890</p>
              </li>
              <li className="my-1">
                <span className="float-left font-bold w-40">Email:</span>
                <p>
                  <a href="mailto:bvdudet.acm@gmail.com">
                    bvdudet.acm@gmail.com
                  </a>
                </p>
              </li>
              <li className="my-1">
                <span className="float-left font-bold w-40">Website:</span>
                <p>
                  <a
                    href="https://bvdudet.acm.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://bvdudet.acm.org
                  </a>
                </p>
              </li>
            </ul>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn my-5 w-32"
            >
              Learn More
            </a>
          </div>
          <div className="lg:w-1/2 bg-slate-100 shadow-xl shadow-gray-600  rounded-2xl flex justify-center items-center h-96">
            <img
              src={BVDUDETACMLogo}
              alt="BVDUDET ACM Logo"
              height={400}
              width={400}
            />
          </div>
        </div>
        <hr className="my-10 border-t-2 w-11/12 mx-auto" />

        {/* Contact Us Section */}
        <div className="mx-10 my-10" id="contact-us">
          <h1 className="text-4xl mb-5">
            <span className="border-b-4 border-blue-400">Contact Us</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reach Us Section */}
            <div className="md:col-span-1 mt-5">
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.799925472132!2d73.05603407489873!3d19.028535982166375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c38a077ce761%3A0x2133ad39bcf67618!2sBharati%20Vidyapeeth%20Deemed%20To%20be%20University%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1697221472495!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="BVDUDET Location"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>

            {/* Our Socials and Sponsorship Contacts */}
            <div className="md:col-span-1 mt-5">
              <h2 className="text-3xl text-center mb-3">Our Socials</h2>
              <ul className="list-none text-center">
                <li className="mb-2 inline-block mx-5">
                  <a href="https://www.instagram.com/acm_bvdudet?igsh=aXJtaGY4c3U1ZHpu">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-5xl hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://www.facebook.com/acm_bvdudet">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-5xl hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://twitter.com/acm_bvdudet">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-5xl hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://www.linkedin.com/in/acm-bvdudet-364009294/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-5xl hover:text-blue-500"
                    />
                  </a>
                </li>
              </ul>

              <hr className="my-5" />

              <h2 className="text-3xl text-center mb-3">
                Contact for Sponsorship
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Fahim Khan's Contact */}
                <div className="text-center">
                  <h4 className="text-2xl text-blue-500 font-bold mb-1">
                    Fahim Khan
                  </h4>
                  <p className="mb-1">Secretary</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      height={20}
                      width={20}
                      className="inline-block mx-1"
                    />
                    ******@acm.org
                  </p>
                </div>

                {/* Kashish Durgapal's Contact */}
                <div className="text-center">
                  <h4 className="text-2xl text-blue-500 font-bold mb-1">
                    Kashish Durgapal
                  </h4>
                  <p className="mb-1">Publicity Head</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      height={20}
                      width={20}
                      className="inline-block  mx-1"
                    />
                    *******@acm.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
