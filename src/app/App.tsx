import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/pages/layout/Layout";
import { Suspense } from "react";
import { AboutPageAsync } from "@/pages/about/ui/AboutPageAsync";
import { MainPageAsync } from "@/pages/main/ui/MainPageAsync";
import "@/app/styles/index.scss";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import path from "path";
import { AppRouter } from "@/app/providers/RouterProvider/ui/AppRouter";

interface AppProps {

}

export function App(props: AppProps) {
  return <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={ <div>LOADING...</div> }>
        <AppRouter/>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>;
}
