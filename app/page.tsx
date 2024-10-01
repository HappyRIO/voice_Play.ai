"use client";

import { useEffect, useState } from "react";
import { open as openEmbed } from "@play-ai/web-embed";
import Image from "next/image";

// Replace with your web embed ID
const webEmbedId = "ML4V4KHHvKYxv7-9fN_ct";

/*
 * [Agent Greeting]
 * Hello what do you want to change the text on the screen to?
 *
 * [Agent Prompt]
 * Your only job is to change the text on the page to a given string.
 * Do not do anything else. Do not offer to do anything else.
 * After changing the text, END THE CALL IMMEDIATELY.
 */

export default function Home() {
  const [text, setText] = useState("");

  // Define your events here
  const events = [
    {
      name: "change-text",
      when: "The user says what they want to change the text on the screen to",
      data: {
        text: { type: "string", description: "The text to change to" },
      },
    },
  ] as const;

  // Define your event handler here
  const onEvent = (event: any) => {
    console.log("onEvent: ", event);
    if (event.name === "change-text") {
      setText(event.data.text);
    }
  };

  useEffect(() => {
    openEmbed(webEmbedId, { events, onEvent });
    // const iframe = document.getElementById('play-ai-embed') as HTMLIFrameElement;
    // console.log("--->", iframe);
    // const element = iframe.contentDocument
    // console.log("--->", element);
    // if (element) console.log("element--->");
    
    

    // Now you can manipulate the elements as needed
   
    // elements[0].style.display = "none"
    // Call the function to remove links
    // removeLinksFromIframe();
  }, []);

  // const removeLinksFromIframe = () => {
  //   const iframe = document.getElementById('play-ai-embed');
  //   console.log(iframe)

  //   if (iframe) {
  //     const iframeDocument = iframe.contentDocument;
  //     console.log("iframeDocument---->", iframeDocument)

  //     // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //     // const links = iframeDocument.getElementsByTagName('a');

  //     // Convert HTMLCollection to an array and remove each link
  //     // Array.from(links).forEach(link => {
  //     //   link.parentNode.removeChild(link);
  //     // });
  //   }
  // };

  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="flex items-center bg-[#000016] pt-5 pl-2">
          <Image
            className="h-14"
            src={"/image/pharmacy.webp"}
            alt=""
            width={500}
            height={50}
          />
          <div className="text-white text-5xl pl-40 text-nowrap">
            24 Hours Smart Pharmacist
          </div>
          <div className="flex justify-end items-center w-full pb-5">
            <Image
              className="pr-1"
              src={"/image/logo.webp"}
              alt=""
              width={200}
              height={1200}
            ></Image>
          </div>
        </div>
        <div className="flex bg-[#ee1c2d] text-white text-xl w-full text-center justify-center">
          {" "}
          Ken - Your online and 24 Hour AI Pharmacist
        </div>
        <div className="h-[80vh]">
          <Image
            className="w-full h-full shadow-2xl"
            src={"/image/background.jpg"}
            alt=""
            width={2000}
            height={1000}
          ></Image>
          {/* <div className="font-medium text-2xl absolute top-3/4 px-10">{text}</div> */}
        </div>
        {/* <div className="w-full text-center text-2xl text-blue-800 font-semibold">How can I help you?</div> */}
      </div>
    </>
  );
}
