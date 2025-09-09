import { useEffect } from "react";
import AircallWorkspace from "aircall-everywhere";

function AircallWidget() {
  useEffect(() => {
    const workspace = new AircallWorkspace({
      domToLoadWorkspace: "#workspace",
      size: "small", 
      integrationToLoad: "phone",
      onLogin: (settings) => console.log("Login exitoso:", settings),
      onLogout: () => console.log("Logout")
    });
  }, []);

  return (
  <div
    id="workspace"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 375,      
      height: 600,    
      border: "1px solid #ddd",
      borderRadius: 12,
      boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
      backgroundColor: "#fff",
      overflow: "hidden" 
    }}
  />
);


}

export default AircallWidget;
