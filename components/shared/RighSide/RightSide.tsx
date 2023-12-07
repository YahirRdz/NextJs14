import Image from "next/image";
import React from "react";

const RightSide = () => {
  return (
    <section className=" background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col">
        <h1 className="h1-bold">Hot Network</h1>
        <div className="flex flex-col">
          <div className="flex h-full w-full">
            <p className="text-sm text-white">
              Would it be appropriate to point out an error in another paper
              during a referee report?
            </p>
            <Image
              src="assets/icons/chevron-right.svg"
              alt="chevron"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSide;
