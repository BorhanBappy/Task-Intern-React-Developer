import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="app-footer py-16" style={{ backgroundColor: "var(--fa-navy)", color: "var(--fa-gravy)" }}>
      <div className="container">
        {/* Header Section */}
        <div className="md:flex md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <a href="/" className="block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-10">
                {/* Add SVG Path here */}
              </svg>
              <span className="sr-only">Font Awesome</span>
            </a>
            <h2 className="text-lg font-semibold mb-4">Go Make Something Awesome</h2>
            <p className="text-sm leading-relaxed mb-4">
              Font Awesome is the internet&apos;s icon library and toolkit used by millions of designers, developers, and content creators.
            </p>
            <p className="text-sm">
              Made with
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-4 h-4 mx-1">
                {/* Add SVG Path here */}
              </svg>
              and
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="inline-block w-4 h-4 mx-1">
                {/* Add SVG Path here */}
              </svg>
              in
              <a href="https://www.google.com/maps/place/Bentonville, AR" target="_blank" className="no-underline text-white">
                Bentonville
              </a>,
              <a href="https://www.google.com/maps/place/Boston, MA" target="_blank" className="no-underline text-white">
                Boston
              </a>
              {/* Add more locations here */}
            </p>
          </div>
          {/* Navigation Section */}
          <div className="md:w-1/2 md:ml-16">
            <div className="md:flex justify-between">
              {/* Project Links */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-sm font-semibold text-muted mb-2">Project</h3>
                <a href="/download" className="block mb-2">Download</a>
                <a href="/docs/changelog" className="block mb-2">Changelog</a>
                <a href="/#commissions" className="block mb-2">Commission Icons</a>
                <a href="/versions" className="block">All Versions</a>
              </div>
              {/* Community Links */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-sm font-semibold text-muted mb-2">Community</h3>
                <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank" className="block mb-2">GitHub</a>
                <a href="/leaderboard/new" className="block mb-2">Icon Requests</a>
                <a href="https://twitter.com/fontawesome/" target="_blank" className="block mb-2">Twitter</a>
                <a href="https://blog.fontawesome.com" target="_blank" className="block">Blog Awesome</a>
              </div>
            </div>
            {/* Help Links */}
            <div className="mt-8 md:flex justify-between">
              <div className="md:w-1/2">
                <h3 className="text-sm font-semibold text-muted mb-2">Help</h3>
                <a href="/support" className="block mb-2">Support</a>
                <a href="/docs/web/troubleshoot" className="block mb-2">Troubleshooting</a>
                <a href="mailto:hello@fontawesome.com?subject=Hello, Font Awesome!" className="block mb-2">Contact Us</a>
                <a href="https://status.fortawesome.com/" target="_blank" className="block">Status</a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="md:flex justify-between items-center text-sm mt-8">
          <div className="md:w-1/2">
            <a href="/license" className="inline-block mr-4">License</a>
            <a href="/tos" className="inline-block mr-4">Terms of Service</a>
            <a href="/privacy" className="inline-block mr-4">Privacy Policy</a>
            <a href="/refunds" className="inline-block">Refunds</a>
          </div>
          <div className="md:w-1/2 text-right">
            <p className="text-muted">© Fonticons, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
