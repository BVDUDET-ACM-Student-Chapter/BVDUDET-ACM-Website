import { Helmet } from "react-helmet";

const Contribute = () => {
  return (
    <>
      <Helmet>
        <title>ACM Contribute | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 bg-gray-200 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-4xl font-bold pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          Get Started - open source contribution
        </span>
      </div>
      <div className="container-fluid mx-auto my-8">
        <div className="md:w-3/4 mx-8 lg:mx-auto">
          <h2 className="text-3xl font-extrabold mt-4 mb-3">
            What is open source?
          </h2>
          <p className="text-lg">
            Open source software is code that is made freely available for
            anyone to use or enhance! Here at ACM, we take pride in all of our
            projects being open-source and open for anyone to work on.
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            What makes open source possible?
          </h2>
          <p className="text-lg">
            The main backbone of open source initiatives are tools that simplify
            collaboration and sharing of code. Git and Github are two popular
            tools used by researchers, companies, and students; at ACM, we use
            both.
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            How can I contribute?
          </h2>
          <p className="text-lg">
            We&apos;ll quickly go over how we can use git/github to work on some
            open source projects. If you want to learn more about the specifics
            of what we&apos;ll cover, you can check out git&apos;s documentation
            or our writeups on git workflows and github as a collaboration tool
            to get a closer look at what we&apos;re doing!
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            Jumping into contributing on a project
          </h2>
          <p className="text-lg">
            There are thousands of open-source projects out there - it&apos;s
            hard to even find out where to start! Luckily, some repositories, or
            the main hub of projects, have issues, or project tasks, marked as
            good first issue. These are great starting points for people to hop
            in and contribute!
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            Contribution workflow
          </h2>
          <p className="text-lg">
            Repositories normally tell you how the steps you need to take to get
            to work, usually within their README.md or their CONTRIBUTING.md but
            generally, there&apos;s generally a standard couple steps
            you&apos;ll have to take. For a detailed contribution guide, check
            out github&apos;s contribution guide!
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            Forking and cloning a repo
          </h2>
          <p className="text-lg">
            By clicking fork on a project that you want to contribute to, GitHub
            generates a personal copy of that repo under your account. To clone
            it onto your computer, you can click the code button above the list
            of files and run
            <br />
            <code className="text-pink-600">
              $ git clone git@github.com:Kamran1819G/opensource.git
            </code>
            <br />
            to get it onto your machine.
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">Making a branch</h2>
          <p className="text-lg">
            Generally, when you want to make a specific change to a project, you
            make a branch, so that you can work on a new feature without
            affecting other people&apos;s work. To do so, run the{" "}
            <code className="text-pink-600">git checkout -b BRANCH_NAME</code>{" "}
            command to generate a new branch or{" "}
            <code className="text-pink-600">git checkout BRANCH_NAME</code> to
            switch between branches.
            <br />
            After you&apos;ve made your changes, run{" "}
            <code className="text-pink-600">git add .</code> then{" "}
            <code className="text-pink-600">
              git commit -m &quot;a short commit description&quot;
            </code>{" "}
            to take a snapshot of all the changes you&apos;ve made and git push
            to push the changes you made to GitHub.
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-3">
            Making a pull request
          </h2>
          <p className="text-lg">
            Now that you&apos;ve successfully made the changes you want on your
            fork of the project, if you head over to the original project
            repository and click Open a pull request, you can put in a title and
            description of your changes.
            <br />
            After making a pull request, the maintainers of the project will
            check if your code is up to snuff and request changes as necessary.
            Once they approve your changes, however, you can merge your changes
            in and you&apos;ve successfully contributed to the project!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contribute;
