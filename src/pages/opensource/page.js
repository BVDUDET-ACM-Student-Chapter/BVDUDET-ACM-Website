import { NavLink } from "react-router-dom";

const OpenSource = () => {
    const cardDetails = [
        {
          title: "Projects ->",
          text: "All of our projects are open-source! Literally, all of them.",
          to: "/projects",
        },
        {
          title: "Learning ->",
          text: "Pick up the skills to write great software.",
          to: "/learning",
        },
        {
          title: "Events ->",
          text: "We love talking about open-source. Come talk with us!",
          to: "/events",
        },
        {
          title: "Contribute ->",
          text: "Make your first pull request with us!",
          to: "/contribute",
        },
      ];
  return (
    <>
    <div className="p-10 bg-gray-200 shadow-inner shadow-lg">
        <span className="text-blue-400 text-4xl font-bold pl-8" style={{fontFamily: "Fredoka"}}>We love open-source!</span>
      </div>
      <div className="container-fluid lg:px-28 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
          {cardDetails.map((card, index) => (
            <div key={index} className="w-full hover:underline hover:decoration-blue-400 hover:decoration-2">
              <NavLink to={card.to} className="block">
                <div className="p-4 border border-gray-300 rounded-md">
                  <h2 className="text-2xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400">{card.text}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OpenSource