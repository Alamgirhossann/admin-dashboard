import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import {
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  ColorPicker,
  Calender,
} from "./pages";
import Area from "./pages/Charts/Area";
import Bar from "./pages/Charts/Bar";
import ColorMapping from "./pages/Charts/ColorMapping";
import Financial from "./pages/Charts/Financial";
import Line from "./pages/Charts/Line";
import Pie from "./pages/Charts/Pie";
import Pyramid from "./pages/Charts/Pyramid";
import Stacked from "./pages/Charts/Stacked";
import { Navbar, Sidebar, Footer, ThemeSetting } from "./components";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'bg-black' : 'bg-gray-200'}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className=" fixed right-4 bottom-4 z-50">
            <TooltipComponent content="Settings" position="Top">
              <button
              onClick={()=>setThemeSettings(true)}
                type="button"
                className=" text-3xl p-3 hover:drop-shadow-xl  hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div  
            className={`w-72 fixed sidebar ${currentMode === 'Dark' ? 'bg-gray-900' : 'bg-white'}`}
            >
              <Sidebar />
            </div>
          ) : (
            <div className={currentMode === 'Dark' ? 'bg-black w-0' : 'bg-white w-0'}>
              <Sidebar />
            </div>
          )}
          <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
          >
            <div className={` fixed md:static navbar w-full ${currentMode === "Dark" ? 'bg-black border-b-2 border-gray-900' : 'bg-gray-200 border-b-2 border-gray-50'}`}>
              <Navbar />
            </div>

            <div>
            {themeSettings && <ThemeSetting/>}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
