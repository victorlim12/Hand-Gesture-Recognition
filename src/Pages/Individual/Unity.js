import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityGame () {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Game.loader.js",
    dataUrl: "buildUnity/Game.data",
    frameworkUrl: "buildUnity/Game.framework.js",
    codeUrl: "buildUnity/Game.wasm",
    webglContextAttributes:{
        preserveDrawingBuffer: true
    }
  });

  return <Unity unityProvider={unityProvider} />;
}