import { Link, Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";

export function Layout() {
  return <div className={ "app" }>
    <Header/>
    <Outlet/>
  </div>;
}