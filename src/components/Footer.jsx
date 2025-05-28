import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Images } from "@/data/images";
import { footerData, socialData } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-dark-teal-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-end"> */}
          {/* Logo and description */}
          <span className="block text-center">
            <a href={"#"}>
              <Image
                src={Images.footerLogo} // Replace with your actual logo path
                alt="Health Compass Logo"
                width={220}
                height={100}
                className="mb-4 mx-auto"
              />
            </a>
            <p className="text-md text-gray-100">
              2968 South Coast Hwy, <br /> #2604 Laguna Beach, CA 92651
            </p>
          </span>

          {/* {footerData.map((item, index) => {
            const title = item.title;
            const data = item.data;
            return (
              <div key={index}>
                {title && (
                  <h3 className="text-base font-semibold mb-4">
                    Getting Started
                  </h3>
                )}
                <ul className="space-y-2 text-md text-gray-200">
                  {data.map((ele, i) => {
                    const title = ele.title;
                    const path = ele.path;
                    return (
                      <li key={i}>
                        <a href={path}>{title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })} */}
        </div>

        <div className="border-t flex flex-col gap-4 sm:flex-row items-center justify-between border-white/30 mt-6 sm:mt-12 pt-6 text-sm text-gray-400 text-center md:text-right">
          <div className="flex space-x-3">
            {socialData.map((item, index) => {
              const Icon = item.icon;
              const path = item.path;
              return (
                <a
                  key={index}
                  href={path}
                  className="hover:text-teal-400 transition text-gray-200 "
                >
                  <Icon size={25} />
                </a>
              );
            })}
          </div>
          <span className="text-gray-200">
            {/* © {new Date().getFullYear()} HealthCompass LLC. All rights reserved. */}
            HealthCompass LLC © All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
