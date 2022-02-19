import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "../../styles/faq.css";

const FAQ = () => {
  return (
    <>
      <div className="shadow-lg bg-white w-3/4 mx-auto mt-8 rounded-3xl pb-8 text-gray-600">
        <p className="text-center p-12 font-bold text-2xl font-sans ">Pertanyaan yang Sering Ditanyakan</p>
        <Accordion allowZeroExpanded>
          <AccordionItem className="">
            <AccordionItemHeading className="">
              <AccordionItemButton className="shadow-md accordion__button rounded-full border border-gray-100">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel mx-auto">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
                minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="">
            <AccordionItemHeading className="">
              <AccordionItemButton className="shadow-md accordion__button rounded-full border border-gray-100">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel mx-auto">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
                minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="">
            <AccordionItemHeading className="">
              <AccordionItemButton className="shadow-md accordion__button rounded-full border border-gray-100">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel mx-auto">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
                minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      ;
    </>
  );
};

export default FAQ;
