import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { lazy, useState, useEffect, Suspense } from "react";
import { renderToPipeableStream } from "react-dom/server";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
const width_first = "_width_first_1e1hf_1";
const width_second = "_width_second_1e1hf_1";
const width_third = "_width_third_1e1hf_1";
const grid = "_grid_1e1hf_2";
const wrapperSearch = "_wrapperSearch_1e1hf_10";
const wrapperPage = "_wrapperPage_1e1hf_17";
const wrapperPagination = "_wrapperPagination_1e1hf_24";
const notChosen = "_notChosen_1e1hf_35";
const chosen = "_chosen_1e1hf_48";
const noMatches = "_noMatches_1e1hf_61";
const classes = {
  width_first,
  width_second,
  width_third,
  grid,
  wrapperSearch,
  wrapperPage,
  wrapperPagination,
  notChosen,
  chosen,
  noMatches
};
async function getAuthors() {
  const { data } = await axios.get(`https://test-front.framework.team/authors`);
  return { data }.data;
}
async function getPaintings() {
  const { data } = await axios.get(`https://test-front.framework.team/paintings`);
  return { data }.data;
}
async function getLocations() {
  const { data } = await axios.get(`https://test-front.framework.team/locations`);
  return { data }.data;
}
const Filter = lazy(() => import("./assets/Filter-CXzDzkcp.js"));
const Pagination = lazy(() => import("./assets/Pagination-FiaILiwk.js"));
const Page = lazy(() => import("./assets/Page-BlMbOb9_.js"));
const Header = lazy(() => import("./assets/Header-8V_-XJsj.js"));
const Search = lazy(() => import("./assets/Search-CkPyE8sL.js"));
function App() {
  const [key, setKey] = useState("");
  const [selectedYearsFrom, setSelectedYearsFrom] = useState("0");
  const [selectedYearsTo, setSelectedYearsTo] = useState("2000");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isDisp, setIsDisp] = useState(false);
  const authorsData = useQuery("authors", getAuthors);
  const [authors, setAuthors] = useState(authorsData.isLoading ? [] : authorsData.data);
  const locationsData = useQuery("locations", getLocations);
  const [locations, setLocations] = useState(locationsData.isLoading ? [] : locationsData.data);
  const [count, setCount] = useState(0);
  const paintingsData = useQuery("paintings", getPaintings);
  const paintings = paintingsData.data;
  const [paintingsToDisplay, setPaintingsToDisplay] = useState(paintingsData.isLoading ? [] : paintingsData.data);
  const [icon, setIcon] = useState("moon");
  const [theme, setTheme] = useState("dark");
  const [resize, setResize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paintingsPerPage] = useState(6);
  const clear = () => {
    setSelectedYearsFrom("0");
    setSelectedYearsTo("2000");
    setSelectedAuthors([]);
    setSelectedLocations([]);
  };
  const search = (event) => {
    let sortedPaintings = [];
    let authorsBool = false;
    let locationsBool = false;
    if (selectedAuthors.length == 0) {
      authorsBool = true;
      for (let i = 0; i < authors.length; i++) {
        selectedAuthors.push(authors[i].name);
      }
    }
    if (selectedLocations.length == 0) {
      locationsBool = true;
      for (let i = 0; i < locations.length; i++) {
        selectedLocations.push(locations[i].location);
      }
    }
    for (let i = 0; i < paintings.length; i++) {
      if (paintings[i].name.includes(event.target.value) && selectedAuthors.includes(authors[paintings[i].authorId - 1].name) && selectedLocations.includes(locations[paintings[i].locationId - 1].location) && Number(paintings[i].created) >= Number(selectedYearsFrom) && Number(paintings[i].created) <= Number(selectedYearsTo)) {
        sortedPaintings.push(paintings[i]);
      }
    }
    if (authorsBool) {
      setSelectedAuthors([]);
    }
    if (locationsBool) {
      setSelectedLocations([]);
    }
    setCurrentPage(1);
    setPaintingsToDisplay(sortedPaintings);
  };
  const showFilterResult = () => {
    let sortedPaintings = [];
    let authorsBool = false;
    let locationsBool = false;
    if (selectedAuthors.length == 0) {
      authorsBool = true;
      for (let i = 0; i < authors.length; i++) {
        selectedAuthors.push(authors[i].name);
      }
    }
    if (selectedLocations.length == 0) {
      locationsBool = true;
      for (let i = 0; i < locations.length; i++) {
        selectedLocations.push(locations[i].location);
      }
    }
    for (let i = 0; i < paintings.length; i++) {
      if (paintings[i].name.includes(key) && selectedAuthors.includes(authors[paintings[i].authorId - 1].name) && selectedLocations.includes(locations[paintings[i].locationId - 1].location) && Number(paintings[i].created) >= Number(selectedYearsFrom) && Number(paintings[i].created) <= Number(selectedYearsTo)) {
        sortedPaintings.push(paintings[i]);
      }
      setCurrentPage(1);
      setPaintingsToDisplay(sortedPaintings);
    }
    if (authorsBool) {
      setSelectedAuthors([]);
    }
    if (locationsBool) {
      setSelectedLocations([]);
    }
  };
  if (!paintingsData.isLoading && !authorsData.isLoading && !locationsData.isLoading && count < 1) {
    setPaintingsToDisplay(paintingsData.data);
    setAuthors(authorsData.data);
    setLocations(locationsData.data);
    setCount(count + 1);
  }
  const lastPaintingIndex = currentPage * paintingsPerPage;
  const firstPaintingIndex = lastPaintingIndex - paintingsPerPage;
  const currentPainting = paintingsToDisplay.slice(firstPaintingIndex, lastPaintingIndex);
  const totalPaintings = paintingsToDisplay.length;
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPaintings / paintingsPerPage);
  for (let i = 1; i <= Math.ceil(totalPaintings / paintingsPerPage); i++) {
    pageNumbers.push(i);
  }
  const switchTheme = () => {
    setIcon((cur) => cur === "moon" ? "sun" : "moon");
    setTheme((cur) => cur === "light" ? "dark" : "light");
    if (theme == "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setResize(classes.width_first);
      } else if (window.innerWidth > 500 && window.innerWidth <= 786) {
        setResize(classes.width_second);
      } else {
        setResize(classes.width_third);
      }
    });
  }
  useEffect(() => {
    const resize2 = () => {
      if (window.innerWidth > 768) {
        setResize(classes.width_first);
      } else if (window.innerWidth > 500 && window.innerWidth <= 786) {
        setResize(classes.width_second);
      } else {
        setResize(classes.width_third);
      }
    };
    resize2();
  }, []);
  if (currentPage > 3) {
    pageNumbers.splice(1, currentPage - 3, "...");
  }
  if (currentPage < totalPages - 2) {
    pageNumbers.splice(currentPage + 1, totalPages - currentPage - 2, "...");
  }
  const showFilterMenu = () => {
    if (isDisp == false) {
      setIsDisp(true);
    } else setIsDisp(false);
  };
  const selectAuthors = (event) => {
    if (selectedAuthors.includes(event.target.value)) {
      selectedAuthors.splice(selectedAuthors.indexOf(event.target.value), 1);
      event.target.className = classes.notChosen;
    } else {
      setSelectedAuthors([...selectedAuthors, event.target.value]);
      event.target.className = classes.chosen;
    }
  };
  const selectLocations = (event) => {
    if (selectedLocations.includes(event.target.value)) {
      selectedLocations.splice(selectedLocations.indexOf(event.target.value), 1);
      event.target.className = classes.notChosen;
    } else {
      setSelectedLocations([...selectedLocations, event.target.value]);
      event.target.className = classes.chosen;
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: resize, children: [
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading component..." }), children: /* @__PURE__ */ jsx(
      Filter,
      {
        disp: isDisp,
        setDisp: setIsDisp,
        authors,
        locations,
        selectAuthors,
        selectLocations,
        notChosenClass: classes.notChosen,
        showFilterResult,
        setSelectedYearsFrom,
        setSelectedYearsTo,
        chosenClass: classes.chosen,
        clear
      }
    ) }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading component..." }), children: /* @__PURE__ */ jsx(Header, { logo: icon, func: switchTheme }) }),
    /* @__PURE__ */ jsxs("div", { className: classes.grid, children: [
      /* @__PURE__ */ jsx("div", { className: classes.wrapperSearch, children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading card component..." }), children: /* @__PURE__ */ jsx(Search, { search, disp: showFilterMenu, setKey }) }) }),
      /* @__PURE__ */ jsx("div", { className: classes.wrapperPage, children: paintingsData.isLoading ? /* @__PURE__ */ jsx("div", { children: "loading..." }) : currentPainting.length == 0 ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: classes.noMatches, children: [
        "No matches for ",
        /* @__PURE__ */ jsx("b", { children: key }),
        /* @__PURE__ */ jsx("p", { children: "Please try again with a different spelling or keywords." })
      ] }) }) : currentPainting.map((painting, i) => /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading painting..." }), children: /* @__PURE__ */ jsx(Page, { authors, locations, paintings: painting }, i) })) }),
      /* @__PURE__ */ jsx("div", { className: classes.wrapperPagination, children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading component..." }), children: /* @__PURE__ */ jsx(Pagination, { pageNumbers, currentPage, setCurrentPage, totalPages }) }) })
    ] })
  ] }) });
}
const queryClient = new QueryClient();
function render(_url, _ssrManifest, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(App, {}) }) }),
    options
  );
}
export {
  render
};
