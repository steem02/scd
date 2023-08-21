import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/pages/layout/Layout";
import { Suspense } from "react";
import { AboutPageAsync } from "@/pages/about/ui/AboutPageAsync";
import { MainPageAsync } from "@/pages/main/ui/MainPageAsync";
import "@/app/styles/index.scss";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import path from "path";

interface AppProps {

}

export function App(props: AppProps) {
  return <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={ <div>LOADING...</div> }>
        <Routes>
          <Route path={ "/" } element={ <Layout/> }>
            <Route path="/about" element={ <AboutPageAsync/> }/>
            <Route index element={ <MainPageAsync/> }/>
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>;
}
