import React from "react";

function Footer() {
  return (
    <footer className="w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-600">
      <div className="px-8 py-2">
        <p>India</p>
      </div>
      <div>
        <div className="flex justify-center items-center w-full px-6 py-3 text-xs flex-wrap sm:justify-evenly sm:text-sm lg:justify-between">
          <div className="flex sm:py-0 py-2">
            <a
              href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              About
            </a>
            <a
              href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              Advertising
            </a>
            <a
              href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              Business
            </a>
            <a
              href="https://google.com/search/howsearchworks/?fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              How Search works
            </a>
          </div>
          <div className="flex sm:py-0 py-2">
            <a
              href="https://policies.google.com/privacy?hl=en-IN&fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              Privacy
            </a>
            <a
              href="https://policies.google.com/terms?hl=en-IN&fg=1"
              target="_blank"
              rel="noreferrer"
              className="link px-2"
            >
              Terms
            </a>
            <p className="link px-2">Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
