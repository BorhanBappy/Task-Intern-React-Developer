import React from "react";

const Footer = () => {
  // Define a CSS class for the hover effect
  const linkHoverStyle = {
    textDecoration: "underline", // Add any styles you want for the hover effect
    color: "lightblue", // Add your desired hover color
    transition: "color 0.3s ease-in-out", // Add a smooth transition for the effect
  };
  return (
    <footer className=" py-10 bg-[#183153] text-white">
      <div className=" mx-[99.5px] px-8">
        <div className="flex items-center justify-start ">
          <div className="px-4 w-[467px]">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-[24px] w-[24px] text-blue-700"
              >
                <path
                  d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"
                  className="fill-current"
                />
              </svg>
            </a>
            <div className="">
              <h2 className="font-4 mt-6 mb-2 font-bold">
                Go Make Something Awesome
              </h2>
              <p className="mb-4" style={{ fontSize: "14px" }}>
                Font Awesome is the internet's icon library and toolkit used by
                millions of designers, developers, and content creators.
              </p>
              <p className="" style={{ fontSize: "14px" }}>
                Made with and in Bentonville, Boston, Chicago, Grand Rapids,
                Joplin, Kansas City, Seattle, Tampa, and Vergennes.
              </p>
            </div>
          </div>
          <div className="flex justify-between w-[560px] ml-[96.31px]">
            {/* Project Links */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-4 font-semibold text-muted mb-2 text-[#616D8A]">
                Project
              </h3>
              <a href="/download" className="block mb-2 hover:text-[#65C0FC]">
                Download
              </a>
              <a
                href="/docs/changelog"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                Changelog
              </a>
              <a
                href="/#commissions"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                Commission Icons
              </a>
              <a href="/versions" className="block hover:text-[#65C0FC]">
                All Versions
              </a>
            </div>
            {/* Community Links */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-4 font-semibold text-muted mb-2 text-[#616D8A]">
                Community
              </h3>
              <a
                href="https://github.com/FortAwesome/Font-Awesome"
                target="_blank"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                GitHub
              </a>
              <a
                href="/leaderboard/new"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                Icon Requests
              </a>
              <a
                href="https://twitter.com/fontawesome/"
                target="_blank"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                Twitter
              </a>
              <a
                href="https://blog.fontawesome.com"
                target="_blank"
                className="block hover:text-[#65C0FC]"
              >
                Blog Awesome
              </a>
            </div>
          </div>
          {/* Help Links */}
          <div className="mt-8 md:flex justify-between">
            <div className="md:w-1/2">
              <h3 className="text-4 font-semibold text-muted mb-2 text-[#616D8A]">
                Help
              </h3>
              <a href="/support" className="block mb-2 hover:text-[#65C0FC]">
                Support
              </a>
              <a
                href="/docs/web/troubleshoot"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                Troubleshooting
              </a>
              <a
                href="mailto:hello@fontawesome.com?subject=Hello, Font Awesome!"
                className="block mb-2 hover:text-[#65C0FC]"
              >
                ContactUs
              </a>
              <a
                href="https://status.fortawesome.com/"
                target="_blank"
                className="block hover:text-[#65C0FC]"
              >
                Status
              </a>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 ml-4" style={{ fontSize: "14px" }}>
          <a
            href="/license"
            className="display-inline-block no-underline margin-right-md hover:text-[#65C0FC]"
          >
            License
          </a>
          <a
            href="/tos"
            className="display-inline-block no-underline margin-right-md hover:text-[#65C0FC]"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="display-inline-block no-underline margin-right-md hover:text-[#65C0FC]"
          >
            Privacy Policy
          </a>
          <a
            href="/refunds"
            className="display-inline-block no-underline hover:text-[#65C0FC]"
          >
            Refunds
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
