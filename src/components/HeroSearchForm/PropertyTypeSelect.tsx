import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FC } from "react";
import Checkbox from "shared/Checkbox/Checkbox";

// DEMO DATA
const typeOfProperty = [
  {
    name: "Duplex House",
    description: "Have a place to yourself",
    checked: true,
  },
  {
    name: "Ferme House",
    description: "Have your own room and share some common spaces",
    checked: true,
  },
  {
    name: "Chalet House",
    description:
      "Have a private or shared room in a boutique hotel, hostel, and more",
    checked: true,
  },
  {
    name: "Maison House",
    description: "Stay in a shared space, like a common room",
  },
];

export interface PropertyTypeSelectProps {
  onChange?: (data: any) => void;
  fieldClassName?: string;
}

const PropertyTypeSelect: FC<PropertyTypeSelectProps> = ({
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  return (
    <Popover className="flex relative [ nc-flex-1 ]">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex text-left w-full flex-shrink-0 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <svg
                className="nc-icon-field nc-icon-field-2"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
                ></path>
              </svg>
            </div>
            <div className="flex-grow">
              <span className="block xl:text-lg font-semibold">Seguridad</span>
              <span className="block mt-1 text-sm text-neutral-400 leading-none font-light ">
                En cada momento del recorrido
              </span>
            </div>
          </Popover.Button>
     
       
        </>
      )}
    </Popover>
  );
};

export default PropertyTypeSelect;
