import "./App.css";

// const GODOT_CONFIG = {
//   args: [],
//   canvasResizePolicy: 2,
//   executable: "index",
//   experimentalVK: true,
//   fileSizes: {
//     "index.pck": 4671808,
//     "index.wasm": 12660493,
//   },
//   gdnativeLibs: [],
// };
// var engine = new Engine(GODOT_CONFIG);

// (function () {
//   const INDETERMINATE_STATUS_STEP_MS = 100;
//   var statusLogo = document.getElementById("status-logo");
//   var statusProgress = document.getElementById("status-progress");
//   var statusProgressInner = document.getElementById("status-progress-inner");
//   var statusIndeterminate = document.getElementById("status-indeterminate");
//   var statusNotice = document.getElementById("status-notice");

//   var initializing = true;
//   var statusMode = "hidden";

//   var animationCallbacks = [];

//   function animate(time) {
//     animationCallbacks.forEach((callback) => callback(time));
//     requestAnimationFrame(animate);
//   }
//   requestAnimationFrame(animate);

//   function setStatusMode(mode) {
//     if (statusMode === mode || !initializing) return;
//     [statusProgress, statusIndeterminate, statusNotice, statusLogo].forEach(
//       (elem) => {
//         elem.style.display = "none";
//       }
//     );
//     animationCallbacks = animationCallbacks.filter(function (value) {
//       return value != animateStatusIndeterminate;
//     });
//     switch (mode) {
//       case "progress":
//         statusProgress.style.display = "block";
//         statusLogo.style.display = "block";
//         break;
//       case "indeterminate":
//         statusIndeterminate.style.display = "block";
//         animationCallbacks.push(animateStatusIndeterminate);
//         break;
//       case "notice":
//         statusNotice.style.display = "block";
//         break;
//       case "hidden":
//         break;
//       default:
//         throw new Error("Invalid status mode");
//     }
//     statusMode = mode;
//   }

//   function animateStatusIndeterminate(ms) {
//     var i = Math.floor((ms / INDETERMINATE_STATUS_STEP_MS) % 8);
//     if (statusIndeterminate.children[i].style.borderTopColor == "") {
//       Array.prototype.slice
//         .call(statusIndeterminate.children)
//         .forEach((child) => {
//           child.style.borderTopColor = "";
//         });
//       statusIndeterminate.children[i].style.borderTopColor = "#dfdfdf";
//     }
//   }

//   function setStatusNotice(text) {
//     while (statusNotice.lastChild) {
//       statusNotice.removeChild(statusNotice.lastChild);
//     }
//     var lines = text.split("\n");
//     lines.forEach((line) => {
//       statusNotice.appendChild(document.createTextNode(line));
//       statusNotice.appendChild(document.createElement("br"));
//     });
//   }

//   function displayFailureNotice(err) {
//     var msg = err.message || err;
//     console.error(msg);
//     setStatusNotice(msg);
//     setStatusMode("notice");
//     initializing = false;
//   }

//   if (!Engine.isWebGLAvailable()) {
//     displayFailureNotice("WebGL not available");
//   } else {
//     setStatusMode("indeterminate");
//     engine
//       .startGame({
//         onProgress: function (current, total) {
//           if (total > 0) {
//             statusProgressInner.style.width = (current / total) * 100 + "%";
//             setStatusMode("progress");
//             if (current === total) {
//               setTimeout(() => {
//                 setStatusMode("indeterminate");
//               }, 500);
//             }
//           } else {
//             setStatusMode("indeterminate");
//           }
//         },
//       })
//       .then(() => {
//         setStatusMode("hidden");
//         initializing = false;
//       }, displayFailureNotice);
//   }
// })();

const handleContextMenu = (event) => {
  event.preventDefault();
};

function App() {
  return (
    <div>
      <canvas id="canvas">
        HTML5 canvas appears to be unsupported in the current browser.
        <br />
        Please try updating or use a different browser.
      </canvas>

      <img id="status-logo" src="panther.gif" alt="12REACT" />

      <div id="status">
        <div
          id="status-progress"
          style={{ display: "none" }}
          onContextMenu={handleContextMenu}>
          <div id="status-progress-inner"></div>
        </div>
        <div
          id="status-indeterminate"
          style={{ display: "none" }}
          onContextMenu={handleContextMenu}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          id="status-notice"
          className="godot"
          style={{ display: "none" }}></div>
      </div>
    </div>
  );
}

export default App;
