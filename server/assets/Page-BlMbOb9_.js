import { jsxs, jsx } from "react/jsx-runtime";
const width_first = "_width_first_awin2_1";
const width_second = "_width_second_awin2_1";
const width_third = "_width_third_awin2_1";
const container = "_container_awin2_2";
const painting = "_painting_awin2_7";
const infoHolder = "_infoHolder_awin2_12";
const secondRect = "_secondRect_awin2_20";
const nameYear = "_nameYear_awin2_30";
const authorLocation = "_authorLocation_awin2_43";
const decorationLine = "_decorationLine_awin2_68";
const paintingName = "_paintingName_awin2_76";
const paintingCreated = "_paintingCreated_awin2_84";
const author = "_author_awin2_43";
const location = "_location_awin2_101";
const classes = {
  width_first,
  width_second,
  width_third,
  container,
  painting,
  infoHolder,
  secondRect,
  nameYear,
  authorLocation,
  decorationLine,
  paintingName,
  paintingCreated,
  author,
  location
};
const Page = ({ authors, locations, paintings, key }) => {
  return /* @__PURE__ */ jsxs("div", { className: classes.container, children: [
    /* @__PURE__ */ jsx("img", { className: classes.painting, src: "https://test-front.framework.team" + paintings.imageUrl, alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: classes.infoHolder, children: [
      /* @__PURE__ */ jsxs("div", { className: classes.nameYear, children: [
        /* @__PURE__ */ jsx("p", { className: classes.paintingName, children: paintings == void 0 ? "Loading..." : paintings.name }),
        /* @__PURE__ */ jsx("p", { className: classes.paintingCreated, children: paintings == void 0 ? "Loading..." : paintings.created })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes.authorLocation, children: [
        /* @__PURE__ */ jsx("p", { className: classes.author, children: authors == void 0 || paintings == void 0 ? "Loading... " : authors[paintings.authorId - 1].name }),
        /* @__PURE__ */ jsx("p", { className: classes.location, children: locations == void 0 || paintings == void 0 ? "Loading..." : locations[paintings.locationId - 1].location })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { className: classes.secondRect, children: /* @__PURE__ */ jsx("svg", { width: "16", height: "10", viewBox: "0 0 16 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0 5C0 4.85268 0.0602 4.71139 0.167357 4.60722C0.274514 4.50305 0.41985 4.44452 0.571392 4.44452L14.0482 4.44452L10.4519 0.949457C10.3446 0.845154 10.2843 0.703687 10.2843 0.556179C10.2843 0.408671 10.3446 0.267204 10.4519 0.162901C10.5592 0.0585966 10.7047 0 10.8565 0C11.0082 0 11.1537 0.0585966 11.261 0.162901L15.8321 4.60672C15.8853 4.65832 15.9276 4.71962 15.9564 4.7871C15.9852 4.85459 16 4.92694 16 5C16 5.07306 15.9852 5.14541 15.9564 5.2129C15.9276 5.28038 15.8853 5.34168 15.8321 5.39328L11.261 9.8371C11.1537 9.9414 11.0082 10 10.8565 10C10.7047 10 10.5592 9.9414 10.4519 9.8371C10.3446 9.7328 10.2843 9.59133 10.2843 9.44382C10.2843 9.29631 10.3446 9.15485 10.4519 9.05054L14.0482 5.55548L0.571392 5.55548C0.41985 5.55548 0.274514 5.49695 0.167357 5.39278C0.0602 5.28861 0 5.14732 0 5Z", fill: "#575757" }) }) }),
    /* @__PURE__ */ jsx("div", { className: classes.decorationLine })
  ] }, key);
};
export {
  Page as default
};
