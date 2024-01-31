import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ data }) => {
  return (
    <div className="mt-4 border-2 border-blue-400 shadow-blue-400 shadow-lg rounded-box hover:bg-blue-400 hover:text-white">
      <img
        className="my-3 mx-auto object-cover rounded-full border-8 border-slate-100 "
        src={data.image}
        width={200}
        height={200}
        alt={data.name}
      />
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p>{data.role}</p>
        <ul className="list-none">
          {data.linkedin && (
            <li className="inline-block mx-2">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-3xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          )}
          {data.github && (
            <li className="inline-block mx-2">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="text-3xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          )}
          {data.portfolio && (
            <li className="inline-block mx-2">
              <a
                href={data.portfolio}
                target="_blank"
                rel="noreferrer"
                className="text-3xl"
              >
                <FontAwesomeIcon icon={faGlobeAsia} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
