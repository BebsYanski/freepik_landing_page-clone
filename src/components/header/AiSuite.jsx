import React from "react";
import { drop } from "../../assets/images";

const AiSuite = () => {
  return (
    <div style={{ paddingTop: "1em" }}>
      {/* Dropdown Content */}
      <div
        style={{ padding: "2em" }}
        className="bg-(--drop) rounded-xl space-y-3"
      >
        <h2 className="text-2xl" style={{ marginBottom: "1em" }}>
          AiSuite
        </h2>
        <div
          style={{ paddingBottom: "2em" }}
          className="border-b-2 border-(--search-bg)  flex gap-8"
        >
          <div className="image flex flex-col gap-2 min-w-[12em] ">
            <div className="border-b-2 border-(--search-bg) flex items-center gap-2">
              <img src={drop} alt="drop" />
              <h3>IMAGE</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="">
                AI Image Generator
              </a>
              <a href="#">Image Editor</a>
              <a href="#">Image Upscaler</a>
              <a href="#">
                Assistant
                <span
                  style={{ padding: "2px", marginLeft: "1em" }}
                  className="text-[15px] text-blue-700 bg-(--search-bg) rounded p-2"
                >
                  New
                </span>{" "}
              </a>
            </div>
          </div>
          <div className="video flex flex-col gap-2 min-w-[12em]">
            <div className="border-b-2 border-(--search-bg) flex items-center gap-2">
              <img src={drop} alt="drop" />
              <h3>VIDEO</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">AI Video Generator</a>
              <a href="#">Video Project Editor</a>
              <a href="#">Clip Editor</a>
            </div>
          </div>
          <div className="audio flex flex-col gap-2 min-w-[12em]">
            <div className="border-b-2 border-(--search-bg) flex items-center gap-2">
              <img src={drop} alt="drop" />
              <h3>AUDIO</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">Text to Speech</a>
              <a href="#">Sound Effects Generator</a>
              <a href="#">Music Generator</a>
            </div>
          </div>
          <div className="others flex flex-col gap-2 w-[12em]">
            <div className="border-b-2 border-(--search-bg) flex items-center gap-2">
              <img src={drop} alt="drop" />
              <h3>OTHERS</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">Design Editor</a>
              <a href="#">Mockup Generator</a>
              <a href="#">Icon Generator</a>
              <a href="#">Background Remover</a>
              <a href="#">Image Expander</a>
              <a href="#">Reimagine</a>
              <a href="#">Sketch to Image</a>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-blue-700">
            AI News
          </a>
          <a href="#">Community</a>
        </div>
      </div>
    </div>
  );
};

export default AiSuite;
