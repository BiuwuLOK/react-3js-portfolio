import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// 測試用的 .lottie 文件
import animation from "../assets/lotties/fullstack.lottie";

const LottieViewer = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Lottie Viewer</h1>

      {/* 測試 animation1 */}
      <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-lg">
        <DotLottieReact
          autoplay
          loop
          src={animation} // 測試 animation1
          style={{ height: "200px", width: "200px" }}
        />
        <h2 className="text-lg font-semibold mt-4">Animation 1</h2>
      </div>
    </div>
  );
};

export default LottieViewer;
