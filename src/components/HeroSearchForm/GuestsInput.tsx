import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import imgWa from "../../images/wa.png";

export interface GuestsInputProps {
  defaultValue: {
    guestAdults?: number;
    guestChildren?: number;
    guestInfants?: number;
  };
  onChange?: (data: GuestsInputProps["defaultValue"]) => void;
  fieldClassName?: string;
}

const GuestsInput: FC<GuestsInputProps> = ({
  defaultValue,
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    defaultValue.guestAdults || 0
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    defaultValue.guestChildren || 0
  );
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    defaultValue.guestInfants || 0
  );

  useEffect(() => {
    setGuestAdultsInputValue(defaultValue.guestAdults || 0);
    setGuestChildrenInputValue(defaultValue.guestChildren || 0);
    setGuestInfantsInputValue(defaultValue.guestInfants || 0);
  }, [defaultValue]);

  useEffect(() => {
    if (onChange) {
      onChange({
        guestAdults: guestAdultsInputValue,
        guestChildren: guestChildrenInputValue,
        guestInfants: guestInfantsInputValue,
      });
    }
  }, [guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue]);

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;

  return (
    <Popover className="flex relative [ nc-flex-1 ]">
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex text-left w-full flex-shrink-0 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="50px" height="50px"><path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"/><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"/><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"/><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"/><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"/><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"/><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"/><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"/><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"/><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"/><path fill="#add4a1" d="M51.5,25C38.5,25,28,35.5,28,48.5c0,4.5,1.2,8.6,3.4,12.2L28,71.1l10.1-3.3c3.8,2.7,8.4,4.2,13.4,4.2 C64.5,72,75,61.5,75,48.5S64.5,25,51.5,25z"/><path fill="#472b29" d="M51.5,72.7c-4.9,0-9.5-1.4-13.5-4.1l-9.7,3.2c-0.3,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.5-0.2-0.7l3.3-10.1 c-2.2-3.7-3.3-7.9-3.3-12.3c0-13.3,10.9-24.2,24.2-24.2s24.2,10.9,24.2,24.2S64.8,72.7,51.5,72.7z M38.1,67.1c0.1,0,0.3,0,0.4,0.1 c3.8,2.7,8.3,4.1,13,4.1c12.6,0,22.8-10.2,22.8-22.8c0-12.6-10.2-22.8-22.8-22.8c-12.6,0-22.8,10.2-22.8,22.8 c0,4.2,1.1,8.3,3.3,11.8c0.1,0.2,0.1,0.4,0.1,0.6L29.1,70l8.7-2.9C37.9,67.1,38,67.1,38.1,67.1z"/><path fill="#5aba9e" d="M66.6,37.1c-3.5-4.5-8.9-7.5-15.1-7.5c-10.4,0-18.9,8.5-18.9,18.9c0,3.9,1.2,7.6,3.3,10.6l-2,6.2l6-1.9 c3.2,2.5,7.3,4.1,11.7,4.1c10.4,0,18.9-8.5,18.9-18.9c0-1.1-0.1-2.1-0.3-3.2"/><path fill="#472b29" d="M51.5,67.9c-4.3,0-8.4-1.4-11.8-4L34,65.8c-0.2,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l1.9-6 c-2.1-3.2-3.2-6.9-3.2-10.7c0-10.7,8.7-19.4,19.4-19.4c6.1,0,11.8,2.8,15.5,7.7c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1 c-3.5-4.6-8.9-7.3-14.7-7.3c-10.1,0-18.4,8.3-18.4,18.4c0,3.7,1.1,7.3,3.2,10.3c0.1,0.1,0.1,0.3,0.1,0.4l-1.7,5.3l5-1.6 c0.2-0.1,0.3,0,0.5,0.1c3.3,2.6,7.2,4,11.4,4c10.1,0,18.4-8.3,18.4-18.4c0-1-0.1-2.1-0.3-3.1c0-0.3,0.1-0.5,0.4-0.6 c0.3,0,0.5,0.1,0.6,0.4c0.2,1.1,0.3,2.2,0.3,3.2C70.9,59.2,62.2,67.9,51.5,67.9z"/><g><path fill="#5aba9e" d="M69.5,42.6c-0.4-1.1-0.9-2.2-1.4-3.3"/><path fill="#472b29" d="M69.5,43.1c-0.2,0-0.4-0.1-0.5-0.3c-0.4-1.1-0.8-2.2-1.4-3.2c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2 c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3-0.1,0.5-0.3,0.6C69.6,43.1,69.5,43.1,69.5,43.1z"/></g><g><path fill="#fdfcee" d="M59.1,58.7c-1.4,0-3.4-0.5-6.3-1.7c-3.8-1.5-7.6-4.6-10.7-8.8l-0.2-0.2c-0.9-1.2-2.5-3.6-2.5-6 c-0.1-1.8,0.7-3.6,2.2-4.8c0.5-0.4,1.2-0.6,1.8-0.6l0.2,0l0.7,0c0,0,0.1,0,0.2,0s0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2 c0.2,0.2,0.3,0.4,0.4,0.7l0.8,1.7c0.6,1.3,1.1,2.5,1.2,2.6c0.1,0.1,0.3,0.5,0.1,0.9c-0.2,0.3-0.4,0.6-0.6,0.8 c-0.1,0.2-0.2,0.3-0.3,0.4L46.3,44c-0.1,0.1-0.4,0.4-0.6,0.6c-0.5,0.5-0.6,1.1-0.3,1.6c1,1.6,2.2,3,3.7,4.2c1.5,1.3,3.2,2.3,5.1,3 l0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,0.9-0.2,1.2-0.5c0.5-0.6,1-1.2,1.5-1.8l0.3-0.4c0.1-0.1,0.3-0.4,0.7-0.4 c0.1,0,0.3,0,0.4,0.1c0.5,0.2,3.3,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0.2,0.1,0.3,0.2,0.3,0.4c0,0.9-0.1,1.7-0.4,2.5 c-0.5,1.2-2.5,2.4-4.1,2.7C60,58.7,59.6,58.7,59.1,58.7z"/><path fill="#472b29" d="M44.4,37.1c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.3,0.3,0.5l0.6,1.3c0.8,1.7,1.3,3,1.4,3.2s0.1,0.3,0.1,0.4 c-0.1,0.3-0.3,0.5-0.5,0.7l-0.1,0.1c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6c-0.7,0.6-0.8,1.5-0.3,2.2 c1,1.6,2.3,3.1,3.8,4.3c1.5,1.3,3.3,2.3,5.2,3l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.2c0.6,0,1.2-0.2,1.6-0.6c0.5-0.6,1.1-1.2,1.5-1.8 l0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0.1c0.5,0.2,3.2,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0,0.8-0.1,1.6-0.4,2.3 c-0.4,1.1-2.2,2.1-3.7,2.4c-0.3,0.1-0.6,0.1-1.1,0.1c-1,0-2.7-0.3-6.2-1.6c-3.7-1.4-7.5-4.5-10.5-8.6l-0.2-0.2 c-0.9-1.2-2.4-3.4-2.4-5.7c-0.1-1.7,0.7-3.3,2-4.5c0.4-0.3,1-0.5,1.5-0.5c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0 C44.2,37.1,44.3,37.1,44.4,37.1 M44.4,36.1c-0.1,0-0.1,0-0.2,0h-0.6c-0.1,0-0.1,0-0.2,0c-0.8,0-1.5,0.3-2.1,0.7c0,0,0,0,0,0 c-1.6,1.3-2.4,3.3-2.4,5.2c0,2.5,1.7,5,2.7,6.3l0.2,0.2c3.1,4.2,7,7.4,10.9,8.9c3,1.2,5.1,1.7,6.5,1.7c0.6,0,1-0.1,1.3-0.1 c1.7-0.3,3.9-1.5,4.4-3c0.3-0.8,0.5-1.8,0.5-2.7c0-0.4-0.3-0.7-0.6-0.9l-0.5-0.2l-0.4-0.2c-0.9-0.4-3.8-1.8-4.4-2 c-0.1,0-0.3-0.1-0.6-0.1c-0.7,0-1,0.5-1.1,0.6l-0.3,0.4c-0.5,0.6-0.9,1.2-1.4,1.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.2,0-0.4,0-0.5-0.1 l-0.2-0.1c-1.8-0.7-3.5-1.6-4.9-2.9c-1.4-1.2-2.6-2.6-3.6-4.1c-0.2-0.3-0.1-0.7,0.1-0.9c0,0,0.1-0.1,0.1-0.1 c0.2-0.2,0.4-0.4,0.5-0.6l0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.3-0.8-0.1-1.4 c-0.1-0.2-0.6-1.3-1.2-2.6l-0.2-0.5l-0.6-1.3c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.4-0.3-0.6-0.3C44.5,36.1,44.4,36.1,44.4,36.1 L44.4,36.1z"/></g></svg>
       
       
            </div>
            <div className="flex-grow">
              <span className="block xl:text-lg font-semibold">
                WhatsApp
              </span>
              <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                934323453
              </span>
           
            </div>
          </Popover.Button>
       {/*    <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          > *
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <NcInputNumber
                className="w-full"
                defaultValue={guestAdultsInputValue}
                onChange={(value) => setGuestAdultsInputValue(value)}
                max={10}
                min={1}
                label="Adults"
                desc="Ages 13 or above"
              />
              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestChildrenInputValue}
                onChange={(value) => setGuestChildrenInputValue(value)}
                max={4}
                label="Children"
                desc="Ages 2–12"
              />

              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestInfantsInputValue}
                onChange={(value) => setGuestInfantsInputValue(value)}
                max={4}
                label="Infants"
                desc="Ages 0–2"
              />
            </Popover.Panel>
          </Transition>*/}
        </>
      )}
    </Popover>
  );
};

export default GuestsInput;
