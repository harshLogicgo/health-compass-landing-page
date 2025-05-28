"use client";

import MailchimpForm from "@/components/MailChimpForm";
import { Images } from "@/data/images";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function CTABanner() {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = useCallback(() => setIsModal(true), []);
  const handleCloseModal = useCallback(() => setIsModal(false), []);
  return (
    <>
      <section className="main-container mx-auto px-4 section-p-b">
        <div className="cta-banner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title text-white font-medium mb-3">
                Sign up when it's live—navigate your health with confidence!
              </h2>
              {/* <Link
                href="/signup"
                className="inline-block font-semibold bg-primary text-white py-3 px-7 rounded hover:bg-primary-light transition-colors mt-4"
              >
                Sign up
              </Link> */}
              <button
                onClick={handleOpenModal}
                className="inline-block font-semibold bg-primary text-white py-3 px-7 rounded hover:bg-primary-light transition-colors mt-4"
              >
                Sign up
              </button>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="rounded-lg overflow-hidden max-w-xs">
                <Image
                  src={Images.other.ctaBanner}
                  alt="Person using health app on tablet"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MailchimpForm isOpen={isModal} onHide={handleCloseModal} />
    </>
  );
}
