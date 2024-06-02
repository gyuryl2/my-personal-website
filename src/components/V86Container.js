import { useState } from "react";
import { V86Starter } from "v86";
import PropTypes from "prop-types";

// it is unfortunate that react router would not refresh the page automatically
// when switch to different routes, this implementation, as a result, would have
// some performance drawback
const V86Container = ({biosURL, vgaURL, hdaURL, wasmPath}) => {   
    const [emulatorOn, setEmulatorOn] = useState(false);
    const activate = () =>{
      if(emulatorOn === true) return;
      window.emulator = new V86Starter({
        wasm_path: wasmPath,
        memory_size: 32 * 1024 * 1024,
        vga_memory_size: 4 * 1024,
        screen_container: document.getElementById("screen_container"),
        bios: {
          url: biosURL,
        },
        vga_bios: {
          url: vgaURL,
        },
        hda: {
          url: hdaURL,
        },
        autostart: true,
      });
      setEmulatorOn(true);
    }

    const stopRun = () => {
      let x = 4 * 5;
    }

    return (<>
        <div className="control-panel">
          <button id="run-emulator" onClick={()=>activate()}> Run </button>
        </div>
        <div id="screen_container">
          <div className="emulator_text"></div>
          <canvas style={{display: "none"}}></canvas>
        </div>
    </>);
};

// prop checking
V86Container.propTypes = {
    biosURL: PropTypes.string.isRequired,
    vgaURL: PropTypes.string.isRequired,
    hdaURL: PropTypes.string.isRequired,
    wasmPath: PropTypes.string.isRequired,
}

export default V86Container;
