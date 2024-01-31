import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

export default function Home() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 1.25,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="hero-section h-96 flex flex-col justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to, <br />
            <span className="text-blue-500">ACM Student Chapter</span>
          </h1>
          <p className=" text-3xl text-gray-600 font-bold">
            Bharati Vidyapeeth Department of Engineering and Technology, Navi
            Mumbai
          </p>
        </div>
        <div className="container mx-auto text-center mt-3">
          <p className="text-xl">
            <Typewriter
              words={[
                "Code, Connect, Create.",
                "Transforming Ideas into Impact.",
                "Empowering Innovators, Connecting Minds.",
                "Where Code Meets Creativity.",
              ]}
              cursor
              cursorStyle="_"
              loop={0}
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
        </div>
        <div className="container mx-auto text-center mt-3">
          <a href="#footer" className="scroll" onClick={handleScrollDown}>
            <FontAwesomeIcon icon={faAngleDoubleDown} height={20} width={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center py-20 bg-blue-500">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold text-center text-white">
            Want to stay updated on what`s going on?
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-5 lg:mt-0">
          <a
            href="example.com"
            className="btn btn-lg text-blue-500 hover:bg-blue-500 hover:text-white hover:border-4 hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            Join our Discord Server!
          </a>
        </div>
      </div>
    </>
  );
}
