import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React, { useEffect } from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SectionEmail from "components/SectionEmail/SectionEmail";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { Helmet } from "react-helmet";
import SectionHero2 from "components/SectionHero2/SectionHero2";

import HIW1img from "images/HIW2-1.png";
import HIW2img from "images/HIW2-2.png";
import HIW3img from "images/HIW2-3.png";
import HIW1imgDark from "images/HIW2-1-dark.png";
import HIW2imgDark from "images/HIW2-2-dark.png";
import HIW3imgDark from "images/HIW2-3-dark.png";
import rightImgPng from "images/our-features-2.png";

import SectionGridFeatureProperty from "./SectionGridFeatureProperty";
import SectionDowloadApp from "./SectionDowloadApp";

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    nc:"",
    cci:"",
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    nc:"",
    cci:"",
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    nc:"",
    cci:"",
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    nc:"",
    cci:"",
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    nc:"",
    cci:"",
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome2() {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-cyan-blueGrey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      <Helmet>
        <title>Tingo María Expedition Expeditions</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        <SectionHero2 className="lg:mt-2" />

        {/* SECTION */}
        <SectionHowItWork
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1imgDark,
              title: "Tours",
              desc: "Disfruta de la naturaleza, y la aventura de la selva peruana,  en la ciudad de la bella durmiente.",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2imgDark,
              title: "Traslados",
              desc: "Servicios de traslados del aeropuerto  a su hospedaje, puntualidad y responsabilidad.",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3imgDark,
              title: "Privados",
              desc: "Elige tu mismo cuantos dias y noches quieres quedarte, y nosotros te ofreceremos un viaje inolvidable.",
            },
          ]}
        />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>

        {/* SECTION */}
        <SectionDowloadApp />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Formas de Pago"
          subHeading="Puede realizar sus pagos a nombre de Inversiones mhilux E.I.R.L."
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome2_s2"
        />
       {/*  <div className="relative py-16">
        <BackgroundSection />
        <SectionEmail/>
        </div> */}
      </div>
    </div>
  );
}

export default PageHome2;
