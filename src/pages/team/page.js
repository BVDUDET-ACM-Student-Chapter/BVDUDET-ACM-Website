import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import "./page.scss";
import FacultyJSON from "../../json/team-2023-24/FacultyProfiles.json";
import CoordinatorsJSON from "../../json/team-2023-24/CoordinatorProfiles.json";
import TechnicalTeamJSON from "../../json/team-2023-24/TechnicalTeamProfiles.json";
import WebsiteTeamJSON from "../../json/team-2023-24/WebsiteTeamProfiles.json";
import DesignTeamJSON from "../../json/team-2023-24/DesignTeamProfiles.json";
import OrganizingTeamJSON from "../../json/team-2023-24/OrganizingTeamProfiles.json";
import MarketingTeamJSON from "../../json/team-2023-24/MarkingTeamProfiles.json";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { Helmet } from "react-helmet";

const Team = () => {
  const [Faculty, setFaculty] = useState([]);
  const [Coordinators, setCoordinators] = useState([]);
  const [TechnicalTeam, setTechnicalTeam] = useState([]);
  const [WebsiteTeam, setWebsiteTeam] = useState([]);
  const [DesignTeam, setDesignTeam] = useState([]);
  const [OrganizingTeam, setOrganizingTeam] = useState([]);
  const [MarketingTeam, setMarketingTeam] = useState([]);

  useEffect(() => {
    setFaculty(FacultyJSON);
    setCoordinators(CoordinatorsJSON);
    setTechnicalTeam(TechnicalTeamJSON);
    setWebsiteTeam(WebsiteTeamJSON);
    setDesignTeam(DesignTeamJSON);
    setOrganizingTeam(OrganizingTeamJSON);
    setMarketingTeam(MarketingTeamJSON);
  }, []);
  return (
    <>
      <Helmet>
        <title>ACM Team | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 bg-gray-200 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-2xl md:text-4xl font-bold md:pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          Meet Our Team
        </span>
      </div>
      <Tabs defaultIndex={0} className="my-8">
        <TabList className="flex flex-wrap justify-center">
          <Tab>2023 - 24</Tab>
          <Tab>2024 - 25</Tab>
        </TabList>
        <TabPanel className="my-5">
          <Tabs defaultIndex={0}>
            <TabList className="flex flex-wrap justify-center">
              <Tab>Faculty</Tab>
              <Tab>Co-ordinators</Tab>
              <Tab>Technical Team</Tab>
              <Tab>Website Team</Tab>
              <Tab>Design Team</Tab>
              <Tab>Organizing Team</Tab>
              <Tab>Marketing Team</Tab>
            </TabList>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {Faculty.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {Coordinators.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {TechnicalTeam.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {WebsiteTeam.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {DesignTeam.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {OrganizingTeam.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-center">
                {MarketingTeam.map((item) => (
                  <div
                    key={item}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <ProfileCard data={item} />
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <h1 className="text-6xl text-center font-bold text-blue-400 mt-20">
            Next Team coming soon...
          </h1>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Team;
