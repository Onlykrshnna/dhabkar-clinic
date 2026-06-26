import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B3wROTbr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	(0, import_react.useEffect)(() => {
		window.location.replace("/index.html");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			background: "#0A1628",
			color: "#FFFFFF",
			fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
			gap: "1.5rem"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes pulseTooth {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 15px rgba(109,211,255,0.6)); }
        }
        .pulse-logo {
          width: 64px;
          height: 64px;
          color: #6DD3FF;
          animation: pulseTooth 2s infinite ease-in-out;
        }
        .clinic-name {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }
        .clinic-name span {
          color: #6DD3FF;
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "https://placehold.co/600x400",
				alt: "Dhabkar Super Speciality Clinic",
				style: { height: "64px" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "clinic-name",
				children: "Dhabkar Super Speciality Clinic"
			})
		]
	});
}
//#endregion
export { Index as component };
