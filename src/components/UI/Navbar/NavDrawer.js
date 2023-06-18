import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";

const NavDrawer = (props) => {
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    list: "list-none cursor-pointer  text-neutral-600 my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm font-normal",
    input: "bg-transparent mx-4",
  };
  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(255,255,255)",
        backgroundColor: "#fff",

        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="h-[40vh] font flex flex-col my-8 bg-white items-center">
          {/* <Image src={""} height={1} width={1}/> */}
          <h2 className="text-3xl font-bold text-neutral-600 mx-auto my-24  tracking-wide">
            Odilah Tech
          </h2>
          {/* adding the navs */}
          <ul className="flex  flex-col">
            <Link to="/" className="text-center">
              <li className={style.list}>Home</li>
            </Link>
            <Link to="/services" className="text-center">
              <li
                className={style.list}
                onClick={() => props.onScroll("services")}
              >
                Services
              </li>
            </Link>
            <Link to="/faq" className="text-center">
              <li
                className={style.list}
                onClick={() => props.onScroll("leaderboard")}
              >
                Faq
              </li>
            </Link>
            <Link to="/privacy" className="text-center">
              <li
                className={style.list}
                onClick={() => props.onScroll("features")}
              >
                Privacy
              </li>
            </Link>
          </ul>
          <Link to="/contact">
            <button className="mx-auto bg-neutral-600 text-white px-12 py-2 rounded-lg mt-48 cursor-pointer hover:opacity-[0.9]">
              Contact
            </button>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="px-2 py-4 flex items-center justify-between w-[100vw] border-b-[1px]">
            <h2 className="text-3xl font-bold text-white  tracking-wide">
              Odilah Tech
            </h2>
            <section className="flex">
              <div className="" onClick={toggleDrawer(anchor, true)}>
                {
                  <svg
                    viewBox="0 0 100 80"
                    width="30"
                    height="20"
                    style={{ fill: "#fff" }}
                  >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                  </svg>
                }
              </div>
            </section>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
