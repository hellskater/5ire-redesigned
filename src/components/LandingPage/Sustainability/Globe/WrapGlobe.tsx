import dynamic from "next/dynamic";

const WrapGlobe = dynamic(import("./Globe"), { ssr: false });

export default WrapGlobe;
