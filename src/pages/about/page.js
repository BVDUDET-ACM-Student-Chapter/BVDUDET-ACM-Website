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

const About = () => {
  return (
    <>
      <div className="p-10 bg-gray-200 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-4xl font-bold pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          About Us - ACM BVUDET Student Chapter
        </span>
      </div>
      <div className="container mx-auto">
        {/* About ACM Section */}
        <div className="flex flex-col lg:flex-row gap-8 my-10 mx-10">
          <div
            className="lg:w-1/2 bg-gray-900 rounded-2xl shadow-lg shadow-gray-600 flex justify-center items-center"
            style={{
              height: "450px",
            }}
          >
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
        <div className="flex flex-col-reverse lg:flex-row gap-8 my-10 mx-10">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-blue-400 my-5">
              BVDUDET ACM
            </h1>
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
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn my-5 w-32"
            >
              Learn More
            </a>
          </div>
          <div
            className="lg:w-1/2 bg-gray-900 shadow-lg shadow-gray-600  rounded-2xl flex justify-center items-center"
            style={{
              height: "450px",
            }}
          >
            <img
              src={BVDUDETACMLogo}
              alt="BVDUDET ACM Logo"
              height={400}
              width={400}
            />
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mx-10 my-20" id="contact-us">
          <h1 className="text-4xl mb-5">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reach Us Section */}
            <div className="md:col-span-1 mt-5">
              <h2 className="text-3xl mb-3">Reach Us</h2>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  height={20}
                  width={20}
                  className="inline-block"
                />{" "}
                bvdudet.acm@gmail.com
              </p>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.799925472132!2d73.05603407489873!3d19.028535982166375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c38a077ce761%3A0x2133ad39bcf67618!2sBharati%20Vidyapeeth%20Deemed%20To%20be%20University%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1697221472495!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  title="BVDUDET Location"
                  className="w-full h-80"
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
                      height={60}
                      width={60}
                      className="hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://www.facebook.com/acm_bvdudet">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      height={60}
                      width={60}
                      className="hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://twitter.com/acm_bvdudet">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      height={60}
                      width={60}
                      className="hover:text-blue-500"
                    />
                  </a>
                </li>
                <li className="mb-2 inline-block mx-5">
                  <a href="https://www.linkedin.com/in/acm-bvdudet-364009294/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      height={60}
                      width={60}
                      className="hover:text-blue-500"
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
                      className="inline-block"
                    />{" "}
                    FahimKhan@acm.org
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
                      className="inline-block"
                    />{" "}
                    Kashish@acm.org
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
