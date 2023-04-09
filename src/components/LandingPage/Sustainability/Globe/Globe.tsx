import { sdgs } from "@/constants/constants";
import { useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";

const Globe = () => {
  const globeEl = useRef<any>(null);
  const [hoverD, setHoverD] = useState<any>();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  return (
    <ReactGlobe
      polygonsData={sdgs}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
      height={1200}
      backgroundColor="white"
      ref={globeEl}
      lineHoverPrecision={0}
      onPolygonHover={setHoverD}
      polygonsTransitionDuration={300}
      polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
      polygonCapColor={(d: any) =>
        d === hoverD ? "#b234fa" : d.properties.color
      }
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonLabel={(d: any) => `
        <div style="
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 10px;
        width: 200px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        position: relative;
      ">
        <div style="
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: green;
          padding: 5px 10px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        ">
          SDG ${d.properties.id}
        </div>
        ${d.properties.title}
        <div style="
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          margin: auto;
          width: 80%;
          height: 4px;
          background-color: green;
          border-radius: 5px;
          animation: pulse 2s ease-in-out infinite;
        "></div>
      </div>
      <style>
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      </style>
      `}
    />
  );
};

export default Globe;
