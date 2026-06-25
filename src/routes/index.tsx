import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smile Dental Care — Best Dental Clinic in Kuvempu Nagara, Mysuru" },
      { name: "description", content: "Expert dental care in Kuvempu Nagara, Mysuru. 4.8★ from 1940 patients. Invisalign, implants, veneers, teeth whitening, and preventive care." },
      { property: "og:title", content: "Smile Dental Care — Kuvempu Nagara, Mysuru" },
      { property: "og:description", content: "Healthy teeth and gums start with the right habits. Visit Smile Dental Care for advanced, painless, and personalized dental treatments." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0A1628",
      color: "#FFFFFF",
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      gap: "1.5rem"
    }}>
      <style>{`
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
      `}</style>
      <img src="/assets/images/logo.png?v=2" alt="Smile Dental Care" style={{ height: "64px" }} />
      <div className="clinic-name">Smile Dental Care</div>
    </div>
  );
}
