import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../../app/providers/ThemeProvider";

export function Layout() {
  return <div className={ "app" }>
    <Link to={ "/" }>MAIN</Link>
    <Link to={ "/about" }>ABOUT</Link>
    <Outlet/>
  </div>;
}