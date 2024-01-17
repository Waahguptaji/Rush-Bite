import React from "react";
import resLogo from "../images/resLogoMobile.png";

function Footer() {
  return (
    <>
      <footer class="bg-white rounded-lg shadow-lg shadow-gray-400 m-4 dark:bg-gray-800 box-border">
        <div class="flex flex-col items-center w-full mx-auto max-w-screen-xl p-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://rrushbite.vercel.app/" class="hover:underline">
              RushBite™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
