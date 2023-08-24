import { Suspense } from "react";
import { Layout } from "@/pages/layout/Layout";
import { AboutPageAsync } from "@/pages/about/ui/AboutPageAsync";
import { MainPageAsync } from "@/pages/main/ui/MainPageAsync";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "@/app/providers/RouterProvider/config/routerConfig";

interface AppRouterProps {

}

export function AppRouter(props: AppRouterProps) {

  return <Suspense fallback={ <div>LOADING...</div> }>
    <Routes>
      <Route path={ "/" } element={ <Layout/> }>
        { routerConfig.map(route => <Route key={ route.path.toString() } { ...route }/>) }
      </Route>
    </Routes>
  </Suspense>;
}