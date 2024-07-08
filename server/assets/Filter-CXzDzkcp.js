import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const width_first = "_width_first_15eoo_1";
const width_second = "_width_second_15eoo_1";
const width_third = "_width_third_15eoo_1";
const disp = "_disp_15eoo_2";
const notDisp = "_notDisp_15eoo_15";
const main = "_main_15eoo_22";
const filterAuthors = "_filterAuthors_15eoo_27";
const closeMenu = "_closeMenu_15eoo_49";
const buttons = "_buttons_15eoo_63";
const result = "_result_15eoo_71";
const clear = "_clear_15eoo_82";
const authors = "_authors_15eoo_94";
const invisible = "_invisible_15eoo_113";
const listAuthors = "_listAuthors_15eoo_118";
const years = "_years_15eoo_146";
const lineBetween = "_lineBetween_15eoo_166";
const chosenAuthor = "_chosenAuthor_15eoo_170";
const yearFromTo = "_yearFromTo_15eoo_184";
const plus = "_plus_15eoo_188";
const pointer = "_pointer_15eoo_202";
const classes = {
  width_first,
  width_second,
  width_third,
  disp,
  notDisp,
  main,
  filterAuthors,
  closeMenu,
  buttons,
  result,
  clear,
  authors,
  invisible,
  listAuthors,
  years,
  lineBetween,
  chosenAuthor,
  yearFromTo,
  plus,
  pointer
};
const Filter = ({
  disp: disp2,
  setDisp,
  authors: authors2,
  locations,
  selectAuthors,
  selectLocations,
  notChosenClass,
  showFilterResult,
  setSelectedYearsFrom,
  setSelectedYearsTo,
  chosenClass,
  clear: clear2
}) => {
  const [plusMinusAuthors, setPlusMinusAuthors] = useState("plus");
  const [plusMinusLocations, setPlusMinusLocations] = useState("plus");
  const [plusMinusYears, setPlusMinusYears] = useState("plus");
  const [pointerAuthors, setPointerAuthors] = useState(classes.invisible);
  const [pointerLocations, setPointerLocations] = useState(classes.invisible);
  const [authorsOpen, setAuthorsOpen] = useState(classes.invisible);
  const [locationsOpen, setLocationsOpen] = useState(classes.invisible);
  const [yearsOpen, setYearsOpen] = useState(classes.invisible);
  const [authorsList, setAuthorsList] = useState(classes.invisible);
  const [locationsList, setLocationsList] = useState(classes.invisible);
  const openAuthors = () => {
    if (authorsOpen == classes.invisible) {
      setAuthorsOpen(classes.authors);
    } else {
      setAuthorsOpen(classes.invisible);
      setAuthorsList(classes.invisible);
    }
  };
  const openLocations = () => {
    if (locationsOpen == classes.invisible) {
      setLocationsOpen(classes.authors);
    } else {
      setLocationsOpen(classes.invisible);
      setLocationsList(classes.invisible);
    }
  };
  const openYears = () => {
    if (yearsOpen == classes.invisible) {
      setYearsOpen(classes.years);
    } else {
      setYearsOpen(classes.invisible);
    }
  };
  const authorsListOpen = () => {
    if (authorsList == classes.invisible) {
      setAuthorsList(classes.listAuthors);
    } else setAuthorsList(classes.invisible);
  };
  const locationsListOpen = () => {
    if (locationsList == classes.invisible) {
      setLocationsList(classes.listAuthors);
    } else setLocationsList(classes.invisible);
  };
  return /* @__PURE__ */ jsxs("div", { className: disp2 ? classes.disp : classes.notDisp, children: [
    /* @__PURE__ */ jsx("div", { onClick: () => setDisp(false) }),
    /* @__PURE__ */ jsxs("div", { className: classes.main, children: [
      /* @__PURE__ */ jsx("button", { className: classes.closeMenu, onClick: () => setDisp(false), children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z", fill: "#DEDEDE" }) }) }),
      /* @__PURE__ */ jsx("input", { className: classes.filterAuthors, type: "text", value: "ARTIST", onClick: () => {
        if (plusMinusAuthors == "plus") {
          setPlusMinusAuthors("minus");
          setPointerAuthors(classes.pointer);
        } else {
          setPlusMinusAuthors("plus");
          setPointerAuthors(classes.invisible);
        }
        openAuthors();
      }, readOnly: true }),
      /* @__PURE__ */ jsx("div", { className: classes.plus, children: plusMinusAuthors == "plus" ? /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusAuthors == "plus") {
          setPlusMinusAuthors("minus");
          setPointerAuthors(classes.pointer);
        } else {
          setPlusMinusAuthors("plus");
          setPointerAuthors(classes.invisible);
        }
        openAuthors();
      }, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z", fill: "#575757" }) }) : /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusAuthors == "plus") {
          setPlusMinusAuthors("minus");
          setPointerAuthors(classes.pointer);
        } else {
          setPlusMinusAuthors("plus");
          setPointerAuthors(classes.invisible);
        }
        openAuthors();
      }, width: "16", height: "2", viewBox: "0 0 16 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z", fill: "#575757" }) }) }),
      /* @__PURE__ */ jsx("input", { type: "text", value: "Select the artist", className: authorsOpen, onClick: () => authorsListOpen(), readOnly: true }),
      /* @__PURE__ */ jsx("div", { className: pointerAuthors, children: /* @__PURE__ */ jsx("svg", { width: "12", height: "6", viewBox: "0 0 12 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M6 6L0.803848 0.75L11.1962 0.749999L6 6Z", fill: "#575757" }) }) }),
      /* @__PURE__ */ jsx("div", { className: authorsList, children: authors2.map((author, i) => /* @__PURE__ */ jsx("input", { type: "text", value: author.name, onClick: () => selectAuthors(event), className: notChosenClass, readOnly: true })) }),
      /* @__PURE__ */ jsx("input", { className: classes.filterAuthors, type: "text", value: "LOCATION", onClick: () => {
        if (plusMinusLocations == "plus") {
          setPlusMinusLocations("minus");
          setPointerLocations(classes.pointer);
        } else {
          setPlusMinusLocations("plus");
          setPointerLocations(classes.invisible);
        }
        openLocations();
      }, readOnly: true }),
      /* @__PURE__ */ jsx("div", { className: classes.plus, children: plusMinusLocations == "plus" ? /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusLocations == "plus") {
          setPlusMinusLocations("minus");
          setPointerLocations(classes.pointer);
        } else {
          setPlusMinusLocations("plus");
          setPointerLocations(classes.invisible);
        }
        openLocations();
      }, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z", fill: "#575757" }) }) : /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusLocations == "plus") {
          setPlusMinusLocations("minus");
          setPointerLocations(classes.pointer);
        } else {
          setPlusMinusLocations("plus");
          setPointerLocations(classes.invisible);
        }
        openLocations();
      }, width: "16", height: "2", viewBox: "0 0 16 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z", fill: "#575757" }) }) }),
      /* @__PURE__ */ jsx("input", { type: "text", value: "Select the location", className: locationsOpen, onClick: () => locationsListOpen(), readOnly: true }),
      /* @__PURE__ */ jsx("div", { className: pointerLocations, children: /* @__PURE__ */ jsx("svg", { width: "12", height: "6", viewBox: "0 0 12 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M6 6L0.803848 0.75L11.1962 0.749999L6 6Z", fill: "#575757" }) }) }),
      /* @__PURE__ */ jsx("div", { className: locationsList, children: locations.map((location, i) => /* @__PURE__ */ jsx("input", { type: "text", value: location.location, onClick: () => selectLocations(event), className: notChosenClass, readOnly: true })) }),
      /* @__PURE__ */ jsx("div", { className: classes.locations }),
      /* @__PURE__ */ jsx("input", { className: classes.filterAuthors, type: "text", value: "YEARS", onClick: () => {
        if (plusMinusYears == "plus") {
          setPlusMinusYears("minus");
        } else setPlusMinusYears("plus");
        openYears();
      }, readOnly: true }),
      /* @__PURE__ */ jsx("div", { className: classes.plus, children: plusMinusYears == "plus" ? /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusYears == "plus") {
          setPlusMinusYears("minus");
        } else setPlusMinusYears("plus");
        openYears();
      }, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z", fill: "#575757" }) }) : /* @__PURE__ */ jsx("svg", { onClick: () => {
        if (plusMinusYears == "plus") {
          setPlusMinusYears("minus");
        } else setPlusMinusYears("plus");
        openYears();
      }, width: "16", height: "2", viewBox: "0 0 16 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z", fill: "#575757" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: yearsOpen, children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "From", className: classes.yearFromTo, onChange: () => {
          if (event.target.value == "") {
            setSelectedYearsFrom("0");
          } else setSelectedYearsFrom(event.target.value);
        } }),
        /* @__PURE__ */ jsx("svg", { className: classes.lineBetween, width: "16", height: "2", viewBox: "0 0 16 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.7 1.6998H15.4C15.6 1.6998 15.7 1.5998 15.9 1.4998C15.9 1.2998 16 1.1998 16 0.999804C16 0.799805 15.9 0.699804 15.8 0.499804C15.7 0.399804 15.5 0.299805 15.3 0.299805H8.7H7.3H0.7C0.5 0.299805 0.4 0.399804 0.2 0.499804C0.1 0.699804 0 0.799805 0 0.999804C0 1.1998 0.1 1.2998 0.2 1.4998C0.3 1.5998 0.5 1.6998 0.7 1.6998H7.4H8.7Z", fill: "#9C9C9C" }) }),
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "To", className: classes.yearFromTo, onChange: () => {
          if (event.target.value == "") {
            setSelectedYearsTo("2000");
          } else setSelectedYearsTo(event.target.value);
        } })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes.buttons, children: [
        /* @__PURE__ */ jsx("a", { className: classes.result, onClick: () => showFilterResult(), children: "Show the result" }),
        /* @__PURE__ */ jsx("a", { className: classes.clear, onClick: () => {
          const elements = document.getElementsByClassName(chosenClass);
          const fromTo = document.getElementsByClassName(classes.yearFromTo);
          const elementsArray = Array.from(elements);
          const fromToArray = Array.from(fromTo);
          elementsArray.forEach((element) => {
            element.classList.add(notChosenClass);
            element.classList.remove(chosenClass);
          });
          fromToArray.forEach((element) => {
            element.value = "";
          });
          clear2();
        }, children: "Clear" })
      ] })
    ] })
  ] });
};
export {
  Filter as default
};
