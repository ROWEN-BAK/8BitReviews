import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loggedInUser");
    alert("Je bent uitgelogd");
    navigate("/"); 
  }, [navigate]);

  return null;
}
