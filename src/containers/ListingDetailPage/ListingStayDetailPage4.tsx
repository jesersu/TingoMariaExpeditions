import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import CommentListing from "components/CommentListing/CommentListing";
import FiveStartIconForRate from "components/FiveStartIconForRate/FiveStartIconForRate";
import GuestsInput from "components/HeroSearchForm/GuestsInput";
import StayDatesRangeInput from "components/HeroSearchForm/StayDatesRangeInput";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import StartRating from "components/StartRating/StartRating";
import GoogleMapReact from "google-map-react";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonCircle from "shared/Button/ButtonCircle";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Input from "shared/Input/Input";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import ModalPhotos from "./ModalPhotos";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import { PaqueteType } from "data/types";

export interface ListingStayDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
 
}

const PHOTOS: string[] = [
  "http://www.tingomariaexpedition.com/paquetes/vn1.jpg",
  "http://www.tingomariaexpedition.com/paquetes/vn2.png",
  "http://www.tingomariaexpedition.com/paquetes/vn3.png",
  "http://www.tingomariaexpedition.com/paquetes/vn4.png",
  "http://www.tingomariaexpedition.com/paquetes/vn5.png",
 
];

const Amenities_demos = [
  { name: "Ticket", icon: "la-key" },
  { name: "Traslados", icon: "la-luggage-cart" },
  { name: "Guías locales de la selva en turism", icon: "la-shower" },
  { name: "Botiquín de primeros auxilios", icon: "la-suitcase" },
  { name: "la-suitcase-rolling", icon: "la-suitcase-rolling" },
  { name: "la-swimmer", icon: "la-swimmer" },
  { name: "la-swimming-pool", icon: "la-swimming-pool" },
  { name: "la-tv", icon: "la-tv" },
  { name: "la-umbrella-beach", icon: "la-umbrella-beach" },
  { name: "la-utensils", icon: "la-utensils" },
  { name: "la-wheelchair", icon: "la-wheelchair" },
  { name: "la-wifi", icon: "la-wifi" },
  { name: "la-baby-carriage", icon: "la-baby-carriage" },
  { name: "la-bath", icon: "la-bath" },
  { name: "la-bed", icon: "la-bed" },
  { name: "la-briefcase", icon: "la-briefcase" },
  { name: "la-car", icon: "la-car" },
  { name: "la-cocktail", icon: "la-cocktail" },
  { name: "la-coffee", icon: "la-coffee" },
  { name: "la-concierge-bell", icon: "la-concierge-bell" },
  { name: "la-dice", icon: "la-dice" },
  { name: "la-dumbbell", icon: "la-dumbbell" },
  { name: "la-hot-tub", icon: "la-hot-tub" },
  { name: "la-infinity", icon: "la-infinity" },
];

const Incluye_fd = [
  { name: "Ticket", icon: "la-key" },
  { name: "Traslados", icon: "la-luggage-cart" },
  { name: "Guías locales de la selva en turism", icon: "la-shower" },
  { name: "Botiquín de primeros auxilios", icon: "la-suitcase" },
  { name: "Actividades", icon: "la-swimmer" },

];
const NoIncluye_fd = [
  { name: "Propinas", icon: "la-suitcase-rolling" },
  { name: "Snacks", icon: "la-swimming-pool" },
  { name: "Desayuno, almuerzo y cena", icon: "la-utensils" },
];

const ListingStayDetailPage4: FC<ListingStayDetailPageProps> = ({
  className = "",
  isPreviewMode,
 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days"),
  });

  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
    useState<FocusedInputShape>("startDate");
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const windowSize = useWindowSize();

  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34;
    }
    if (windowSize.width <= 500) {
      return undefined;
    }
    if (windowSize.width <= 1280) {
      return 56;
    }
    return 48;
  };

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        Escalada en el velo de la novia
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1"> Tingo Maria</span>
          </span>
        </div>

        {/* 4 */}
     {/*    <div className="flex items-center">
          <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Kevin Francis
            </span>
          </span>
        </div> */}

        {/* 5 */}
   {/*      <div className="w-full border-b border-neutral-100 dark:border-neutral-700" /> */}

        {/* 6 */}
       {/*  <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div> */}
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Itinerario</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>
          · 8:00am recojo del Hotel y nos enrumbaremos hacia el boquerón del padre abad.<br />

· Una parada en la divisoria limite entre la región Ucayali y la región Huánuco donde podremos apreciar la diferencia climatológica entre la selva alta y la selva baja.
<br />
· Luego visitaremos La catarata el Velos de la novia y también la ducha del diablo.
<br />
· Visitaremos la provincia de la Aguaytia ; el puente mas largo de la amazonia y el puerto, Visitaremos el Ovni de la amazonia.
<br />
· 6:00pm llegada a Tingo María Expedition Ciudad de la bella Durmiente
        
          </span>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Incluye </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Acerca de nuestros servicios
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {Incluye_fd.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderSectionNoIn = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">No Incluye </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Sea precavido
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {NoIncluye_fd.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full">
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Amenities_demos.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-6 space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Recomendaciones </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Llevar : 
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Ropa deBaño</span>
              <span>Toalla</span>
            </div>
            <div className="p-4  flex justify-between items-center space-x-4 rounded-lg">
              <span>Repelente</span>
              <span>Cámara Fotográfica</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Protector solar</span>
              <span>Botiquín personal</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Sandalias</span>
              <span>Zapatillas para caminatas.</span>
            </div>
  
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            S/. 85.00
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /persona
            </span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
         <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
         {/* <StayDatesRangeInput
            wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700"
            onChange={(date) => setSelectedDate(date)}
            numberOfMonths={1}
            fieldClassName="p-5"
            defaultValue={selectedDate}
            anchorDirection={windowSize.width > 1400 ? "left" : "right"}
          /> */}
         {/*  <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div> */}
          <GuestsInput
            fieldClassName="p-5"
            defaultValue={{
              guestAdults: 1,
              guestChildren: 2,
              guestInfants: 0,
            }}
          />
        </form>

        {/* SUM */}
     {/*    <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$119 x 3 night</span>
            <span>$357</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div> */}

        {/* SUBMIT */}
        {/* <ButtonPrimary>Reserve</ButtonPrimary> */}
      </div>
    );
  };

  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[0]}
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ""}
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Mirar todas las fotos
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={PHOTOS}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
          uniqueClassName="nc-ListingStayDetailPage-modalPhotos"
        />
      </>

      {/* MAIn */}
      <main className="container relative z-10 mt-11 flex flex-col lg:flex-row ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSectionNoIn()}
          {renderSection4()}

        </div>

        {/* SIDEBAR */}
        <div className="block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-24">{renderSidebar()}</div>
        </div>
      </main>

      {/* STICKY FOOTER MOBILE */}
      {!isPreviewMode && (
        <div className="block lg:hidden fixed bottom-0 inset-x-0 py-4 bg-white text-neutral-900 border-t border-neutral-200 z-20">
          <div className="container flex items-center justify-between">
            <span className="text-2xl font-semibold">
              $311
              <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
                /night
              </span>
            </span>

            <ButtonPrimary href="##">Reserve</ButtonPrimary>
          </div>
        </div>
      )}

      {/* OTHER SECTION */}
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          {/* SECTION 1 */}
{/*           <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewCategories
              heading="Explore by types of stays"
              subHeading="Explore houses based on 10 types of stays"
              categoryCardType="card5"
              itemPerRow={5}
              sliderStyle="style2"
              uniqueClassName={"ListingStayDetailPage4"}
            />
          </div> */}

          {/* SECTION */}
       {/*    <SectionSubscribe2 className="pt-24 lg:pt-32" /> */}
        </div>
      )}
    </div>
  );
};

export default ListingStayDetailPage4;
