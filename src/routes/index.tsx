import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhabkar Super Speciality Clinic — Best medical clinic in Maninagar, Ahmedabad, Gujarat 380008" },
      { name: "description", content: "Expert medical care in Maninagar, Ahmedabad, Gujarat 380008. 4.7★ from 231 patients. Cardiology, Pathology, Health Checkups, and preventive care." },
      { property: "og:title", content: "Dhabkar Super Speciality Clinic — Maninagar, Ahmedabad, Gujarat 380008" },
      { property: "og:description", content: "Your health is our priority. Visit Dhabkar Super Speciality Clinic for advanced and personalized medical treatments." },
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
        @keyframes pulseLogo {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 15px rgba(109,211,255,0.6)); }
        }
        .pulse-logo {
          color: #6DD3FF;
          animation: pulseLogo 2s infinite ease-in-out;
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
      <div className="clinic-name pulse-logo" style={{ fontSize: "2rem" }}>Dhabkar Clinic</div>
    </div>
  );
}
