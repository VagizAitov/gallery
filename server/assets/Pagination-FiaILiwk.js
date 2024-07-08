import { jsxs, Fragment, jsx } from "react/jsx-runtime";
const currentPage = "_currentPage_k4ifw_1";
const notCurrentPage = "_notCurrentPage_k4ifw_18";
const next = "_next_k4ifw_35";
const prev = "_prev_k4ifw_48";
const dots = "_dots_k4ifw_61";
const classes = {
  currentPage,
  notCurrentPage,
  next,
  prev,
  dots
};
const Pagination = ({ pageNumbers, currentPage: currentPage2, setCurrentPage, totalPages }) => {
  const nextPage = () => {
    if (currentPage2 < totalPages) {
      setCurrentPage(currentPage2 + 1);
    }
  };
  const prevPage = () => {
    if (currentPage2 > 1) {
      setCurrentPage(currentPage2 - 1);
    }
  };
  const setPage = (page) => {
    if (page != "...") {
      setCurrentPage(page);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { className: classes.prev, onClick: prevPage, children: /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.68774 0.283372C7.51288 0.0696493 7.19787 0.0381482 6.98415 0.213012L0.384147 5.61301C0.268079 5.70798 0.200766 5.85002 0.200766 5.99999C0.200766 6.14996 0.268079 6.29201 0.384147 6.38697L6.98415 11.787C7.19787 11.9618 7.51288 11.9303 7.68774 11.7166C7.86261 11.5029 7.83111 11.1879 7.61739 11.013L1.49036 5.99999L7.61739 0.986969C7.83111 0.812106 7.86261 0.497094 7.68774 0.283372Z", fill: "#DEDEDE" }) }) }),
    pageNumbers.map((page, i) => page == currentPage2 ? /* @__PURE__ */ jsx("button", { className: classes.currentPage, disabled: true, children: page.toString() }, i) : /* @__PURE__ */ jsx("button", { className: classes.notCurrentPage, onClick: () => setPage(page), children: page.toString() }, i)),
    /* @__PURE__ */ jsx("button", { className: classes.next, onClick: nextPage, children: /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z", fill: "#DEDEDE" }) }) })
  ] });
};
export {
  Pagination as default
};
