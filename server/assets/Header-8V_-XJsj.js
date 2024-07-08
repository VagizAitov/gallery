import { jsx, jsxs } from "react/jsx-runtime";
const header = "_header_16gpj_1";
const ellipse = "_ellipse_16gpj_13";
const logo = "_logo_16gpj_21";
const classes = {
  header,
  ellipse,
  logo
};
const sun = "data:image/svg+xml,%3csvg%20width='20'%20height='15'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2015C11.3261%2015%2012.5979%2014.4732%2013.5355%2013.5355C14.4732%2012.5979%2015%2011.3261%2015%2010C15%208.67392%2014.4732%207.40215%2013.5355%206.46447C12.5979%205.52678%2011.3261%205%2010%205C8.67392%205%207.40215%205.52678%206.46447%206.46447C5.52678%207.40215%205%208.67392%205%2010C5%2011.3261%205.52678%2012.5979%206.46447%2013.5355C7.40215%2014.4732%208.67392%2015%2010%2015ZM10%200C10.1658%200%2010.3247%200.065848%2010.4419%200.183058C10.5592%200.300269%2010.625%200.45924%2010.625%200.625V3.125C10.625%203.29076%2010.5592%203.44973%2010.4419%203.56694C10.3247%203.68415%2010.1658%203.75%2010%203.75C9.83424%203.75%209.67527%203.68415%209.55806%203.56694C9.44085%203.44973%209.375%203.29076%209.375%203.125V0.625C9.375%200.45924%209.44085%200.300269%209.55806%200.183058C9.67527%200.065848%209.83424%200%2010%200ZM10%2016.25C10.1658%2016.25%2010.3247%2016.3158%2010.4419%2016.4331C10.5592%2016.5503%2010.625%2016.7092%2010.625%2016.875V19.375C10.625%2019.5408%2010.5592%2019.6997%2010.4419%2019.8169C10.3247%2019.9342%2010.1658%2020%2010%2020C9.83424%2020%209.67527%2019.9342%209.55806%2019.8169C9.44085%2019.6997%209.375%2019.5408%209.375%2019.375V16.875C9.375%2016.7092%209.44085%2016.5503%209.55806%2016.4331C9.67527%2016.3158%209.83424%2016.25%2010%2016.25ZM20%2010C20%2010.1658%2019.9342%2010.3247%2019.8169%2010.4419C19.6997%2010.5592%2019.5408%2010.625%2019.375%2010.625H16.875C16.7092%2010.625%2016.5503%2010.5592%2016.4331%2010.4419C16.3158%2010.3247%2016.25%2010.1658%2016.25%2010C16.25%209.83424%2016.3158%209.67527%2016.4331%209.55806C16.5503%209.44085%2016.7092%209.375%2016.875%209.375H19.375C19.5408%209.375%2019.6997%209.44085%2019.8169%209.55806C19.9342%209.67527%2020%209.83424%2020%2010ZM3.75%2010C3.75%2010.1658%203.68415%2010.3247%203.56694%2010.4419C3.44973%2010.5592%203.29076%2010.625%203.125%2010.625H0.625C0.45924%2010.625%200.300269%2010.5592%200.183058%2010.4419C0.065848%2010.3247%200%2010.1658%200%2010C0%209.83424%200.065848%209.67527%200.183058%209.55806C0.300269%209.44085%200.45924%209.375%200.625%209.375H3.125C3.29076%209.375%203.44973%209.44085%203.56694%209.55806C3.68415%209.67527%203.75%209.83424%203.75%2010ZM17.0713%202.92875C17.1884%203.04595%2017.2542%203.2049%2017.2542%203.37063C17.2542%203.53635%2017.1884%203.6953%2017.0713%203.8125L15.3038%205.58125C15.2456%205.63928%2015.1767%205.68529%2015.1008%205.71667C15.0249%205.74804%2014.9436%205.76416%2014.8614%205.7641C14.6956%205.76398%2014.5366%205.69798%2014.4194%205.58063C14.3613%205.52251%2014.3153%205.45355%2014.284%205.37765C14.2526%205.30176%2014.2365%205.22043%2014.2365%205.13831C14.2366%204.97246%2014.3026%204.81344%2014.42%204.69625L16.1875%202.92875C16.3047%202.81158%2016.4636%202.74576%2016.6294%202.74576C16.7951%202.74576%2016.954%202.81158%2017.0713%202.92875ZM5.58%2014.42C5.69717%2014.5372%205.76299%2014.6961%205.76299%2014.8619C5.76299%2015.0276%205.69717%2015.1865%205.58%2015.3038L3.8125%2017.0713C3.69462%2017.1851%203.53675%2017.2481%203.37287%2017.2467C3.209%2017.2452%203.05224%2017.1795%202.93636%2017.0636C2.82048%2016.9478%202.75475%2016.791%202.75333%2016.6271C2.7519%2016.4633%202.8149%2016.3054%202.92875%2016.1875L4.69625%2014.42C4.81345%2014.3028%204.9724%2014.237%205.13812%2014.237C5.30385%2014.237%205.4628%2014.3028%205.58%2014.42ZM17.0713%2017.0713C16.954%2017.1884%2016.7951%2017.2542%2016.6294%2017.2542C16.4636%2017.2542%2016.3047%2017.1884%2016.1875%2017.0713L14.42%2015.3038C14.3062%2015.1859%2014.2432%2015.028%2014.2446%2014.8641C14.246%2014.7003%2014.3117%2014.5435%2014.4276%2014.4276C14.5435%2014.3117%2014.7003%2014.246%2014.8641%2014.2446C15.028%2014.2432%2015.1859%2014.3062%2015.3038%2014.42L17.0713%2016.1875C17.1884%2016.3047%2017.2542%2016.4636%2017.2542%2016.6294C17.2542%2016.7951%2017.1884%2016.954%2017.0713%2017.0713ZM5.58%205.58125C5.4628%205.69842%205.30385%205.76424%205.13812%205.76424C4.9724%205.76424%204.81345%205.69842%204.69625%205.58125L2.92875%203.8125C2.86906%203.75485%202.82144%203.68588%202.78869%203.60963C2.75593%203.53338%202.73869%203.45136%202.73797%203.36838C2.73725%203.28539%202.75306%203.20309%202.78449%203.12628C2.81591%203.04947%202.86232%202.97969%202.921%202.921C2.97969%202.86232%203.04947%202.81591%203.12628%202.78449C3.20309%202.75306%203.28539%202.73725%203.36838%202.73797C3.45136%202.73869%203.53338%202.75593%203.60963%202.78869C3.68588%202.82144%203.75485%202.86906%203.8125%202.92875L5.58%204.69625C5.6382%204.75431%205.68438%204.82328%205.71589%204.89921C5.7474%204.97514%205.76362%205.05654%205.76362%205.13875C5.76362%205.22096%205.7474%205.30236%205.71589%205.37829C5.68438%205.45422%205.6382%205.52319%205.58%205.58125Z'%20fill='%23DEDEDE'/%3e%3c/svg%3e";
const moon = "data:image/svg+xml,%3csvg%20width='20'%20height='15'%20viewBox='0%200%2020%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.974%2015.5556C18.3712%2017.2238%2017.3527%2018.7145%2016.0011%2019.9068C14.6495%2021.0992%2013.0027%2021.9598%2011.1941%2022.419C9.38543%2022.8782%207.46576%2022.923%205.59048%2022.5498C3.7152%2022.1766%201.93702%2021.396%200.399902%2020.271C2.97377%2020.4397%205.49576%2019.8308%207.599%2018.5329C9.70224%2017.2351%2011.277%2015.316%2012.0943%2013.0548C12.9115%2010.7937%2012.9286%208.30836%2012.143%205.96044C11.3575%203.61251%209.81024%201.52446%207.7264%200C9.62527%200.124041%2011.4893%200.667312%2013.1674%201.58583C14.8456%202.50435%2016.2908%203.77229%2017.386%205.28702C18.4813%206.80175%2019.1957%208.52068%2019.4716%2010.3046C19.7475%2012.0886%2019.577%2013.8875%2018.974%2015.5556Z'%20fill='%23121212'/%3e%3c/svg%3e";
const Header = ({ logo: logo2, func }) => {
  if (logo2 == "sun") {
    logo2 = sun;
  } else logo2 = moon;
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: classes.header, children: [
    /* @__PURE__ */ jsx("div", { className: classes.logo, children: /* @__PURE__ */ jsxs("svg", { width: "91", height: "20", viewBox: "0 0 91 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("path", { d: "M1.12081 1.11949V2.10377H9.40729V3.2327H1.12081V5.33647H0V0H9.40729V1.11949H1.12081Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M18.0466 3.23275C18.2631 3.23349 18.4775 3.18959 18.6762 3.10382C18.8668 3.02209 19.0399 2.90467 19.1863 2.75791C19.4886 2.45215 19.6582 2.03983 19.6585 1.61011C19.6608 1.39369 19.6168 1.17927 19.5294 0.981181C19.4487 0.791029 19.3322 0.618098 19.1863 0.471748C19.0391 0.326029 18.8661 0.208754 18.6762 0.125836C18.4772 0.0411398 18.2629 -0.00167951 18.0466 5.0401e-05H10.2418V5.34595H11.3626V3.23275H16.5165L18.4653 5.33652H19.9954L18.0466 3.23275ZM11.3626 1.13212H18.034C18.0979 1.1312 18.1613 1.14407 18.2197 1.16986C18.2786 1.19651 18.3319 1.23383 18.3771 1.27992C18.4246 1.32584 18.4631 1.38024 18.4905 1.4403C18.5153 1.49845 18.5282 1.56103 18.5282 1.62426C18.5282 1.68749 18.5153 1.75007 18.4905 1.80822C18.4638 1.86793 18.4265 1.92228 18.3803 1.9686C18.335 2.01603 18.2803 2.05352 18.2197 2.07866C18.1613 2.10445 18.0979 2.11733 18.034 2.1164H11.3626V1.13212Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M29.6606 1.62582C29.526 1.31208 29.3338 1.02625 29.0939 0.783057C28.8511 0.538859 28.5636 0.343499 28.247 0.207586C27.9173 0.0686936 27.5628 -0.00191373 27.2049 3.94416e-05H23.1467C22.7909 -0.00167371 22.4385 0.068941 22.1109 0.207586C21.8007 0.346725 21.519 0.541813 21.2797 0.783057C21.0379 1.02526 20.8445 1.31129 20.7099 1.62582C20.5701 1.95284 20.4983 2.30483 20.4989 2.66041V5.33651H21.5945V3.79563H28.7382V5.33651H29.859V2.66041C29.8642 2.30565 29.7967 1.95356 29.6606 1.62582ZM23.1467 1.13211H27.2049C27.4108 1.12987 27.6148 1.17169 27.8031 1.25475C28.1762 1.40926 28.4736 1.70403 28.6311 2.07551C28.7106 2.26248 28.7513 2.46359 28.7508 2.6667L21.5945 2.67299C21.5971 2.46688 21.6422 2.26351 21.7268 2.07551C21.8074 1.89149 21.9217 1.72408 22.0637 1.5818C22.2059 1.44054 22.3736 1.32744 22.5579 1.24847C22.7438 1.16887 22.9444 1.12922 23.1467 1.13211Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M39.9904 0V5.35848H38.8727V2.01886L35.3497 4.75471L31.8267 2.01886V5.35848H30.7122V0L35.3497 3.33647L39.9904 0Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M42.1533 1.90882C42.1174 1.97156 42.0858 2.03671 42.0589 2.10379H50.2446V3.23272H42.0589C42.0858 3.2998 42.1174 3.36494 42.1533 3.42769C42.2448 3.58349 42.3606 3.72363 42.4965 3.84278C42.6327 3.96062 42.7882 4.05423 42.9562 4.11951C43.1284 4.18385 43.3107 4.21687 43.4945 4.21699H50.2446V5.33649H43.4945C43.1374 5.33835 42.7837 5.26663 42.4556 5.1258C42.138 4.99145 41.8493 4.79712 41.6055 4.55347C41.3636 4.31009 41.1703 4.02303 41.0357 3.70756C40.8965 3.37869 40.8248 3.02529 40.8248 2.66825C40.8248 2.31122 40.8965 1.95782 41.0357 1.62895C41.1703 1.31348 41.3636 1.02642 41.6055 0.783037C41.8501 0.539459 42.1385 0.344213 42.4556 0.207566C42.7844 0.0692563 43.1378 -0.0013357 43.4945 1.91383e-05H50.2446V1.13209H43.4945C43.3107 1.13222 43.1284 1.16524 42.9562 1.22958C42.7882 1.29486 42.6327 1.38846 42.4965 1.50631C42.3617 1.62165 42.2459 1.75749 42.1533 1.90882Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M60.6626 0L58.0652 5.35848L55.7921 1.50314L53.519 5.35848L50.9248 0H52.1684L53.604 3.15094L55.3325 0H56.2612L57.9771 3.15094L59.4222 0H60.6626Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M69.7265 1.62897C69.5897 1.31397 69.3953 1.02712 69.1535 0.783057C68.9096 0.538768 68.621 0.343424 68.3035 0.207587C67.9748 0.0686915 67.6213 -0.00192469 67.2645 3.98929e-05H63.2C62.8421 -0.0016523 62.4877 0.0689446 62.1579 0.207587C61.8408 0.344233 61.5524 0.53948 61.3078 0.783057C61.0659 1.02644 60.8726 1.3135 60.738 1.62897C60.5988 1.95784 60.5271 2.31124 60.5271 2.66827C60.5271 3.02531 60.5988 3.37871 60.738 3.70758C60.8726 4.02305 61.0659 4.31011 61.3078 4.55349C61.5516 4.79714 61.8403 4.99147 62.1579 5.12582C62.487 5.26698 62.8418 5.33871 63.2 5.33651H67.2645C67.6217 5.33901 67.9755 5.26726 68.3035 5.12582C68.6215 4.99225 68.9102 4.79782 69.1535 4.55349C69.3953 4.30943 69.5897 4.02258 69.7265 3.70758C69.8636 3.37819 69.9342 3.02499 69.9342 2.66827C69.9342 2.31156 69.8636 1.95836 69.7265 1.62897ZM67.2645 4.21701H63.2C62.9941 4.21897 62.7902 4.17716 62.6018 4.09437C62.4174 4.0154 62.2497 3.9023 62.1075 3.76104C61.9655 3.61876 61.8513 3.45134 61.7706 3.26733C61.6906 3.07834 61.6499 2.87505 61.651 2.66985C61.6499 2.46363 61.6906 2.25932 61.7706 2.06922C61.8513 1.88521 61.9655 1.71779 62.1075 1.57551C62.2497 1.43425 62.4174 1.32115 62.6018 1.24218C62.7902 1.15939 62.9941 1.11758 63.2 1.11953H67.2645C67.4703 1.11796 67.6741 1.15975 67.8627 1.24218C68.047 1.32115 68.2147 1.43425 68.357 1.57551C68.4976 1.7206 68.6107 1.89002 68.6907 2.07551C68.7733 2.26492 68.8151 2.46955 68.8135 2.67614C68.8151 2.8817 68.7732 3.08529 68.6907 3.27362C68.61 3.45687 68.497 3.62411 68.357 3.76733C68.2179 3.90504 68.0546 4.01591 67.8753 4.09437C67.6829 4.17855 67.4745 4.22038 67.2645 4.21701Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M78.5798 3.23275C78.7963 3.23349 79.0107 3.18959 79.2094 3.10382C79.4 3.02209 79.5731 2.90467 79.7195 2.75791C79.8651 2.61014 79.9816 2.43624 80.0627 2.24533C80.1497 2.04715 80.1937 1.8328 80.1917 1.6164C80.1925 1.40012 80.1485 1.18602 80.0627 0.987471C79.9006 0.600793 79.5948 0.291934 79.2094 0.125836C79.0104 0.0411398 78.7961 -0.00167951 78.5798 5.0401e-05H70.7719V5.34595H71.8927V3.23275H77.0465L78.9954 5.33652H80.5255L78.5798 3.23275ZM71.8927 1.13212H78.5798C78.6426 1.13155 78.7049 1.14442 78.7624 1.16986C78.8222 1.19649 78.8766 1.23379 78.923 1.27992C78.9695 1.32597 79.0069 1.38038 79.0331 1.4403C79.0596 1.4975 79.0736 1.55968 79.0741 1.62269C79.0734 1.68637 79.0606 1.74935 79.0363 1.80822C79.0085 1.86728 78.9713 1.92144 78.9261 1.9686C78.8797 2.01611 78.8239 2.05357 78.7624 2.07866C78.7049 2.10411 78.6426 2.11697 78.5798 2.1164H71.8927V1.13212Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M86.1137 2.66981L91 5.33647H88.6828L84.8166 3.22327H82.1216V5.33647H81.0134V0H82.1216V2.1132H84.8166L88.6828 0H91L86.1137 2.66981Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M20.203 8.94008V10.7703H11.0161V19.9904H9.18375V10.7703H0V8.94008H20.203Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M25.8133 12.6382C25.6466 12.9233 25.5205 13.2303 25.4387 13.5502H43.4756V15.3772H25.4387C25.5194 15.6975 25.6455 16.0046 25.8133 16.2892C26.2407 17.0443 26.9173 17.6278 27.7275 17.9401C28.1431 18.0968 28.5837 18.1768 29.0278 18.176H43.4756V19.9998H29.0278C28.2886 20.0029 27.5567 19.8541 26.8775 19.5627C26.2198 19.286 25.6222 18.8844 25.1176 18.3804C24.6129 17.8757 24.21 17.2789 23.9306 16.6225C23.6439 15.9421 23.4963 15.2113 23.4963 14.4731C23.4963 13.7349 23.6439 13.0042 23.9306 12.3238C24.4927 10.9982 25.5498 9.94351 26.8775 9.38352C27.5569 9.09315 28.2888 8.94544 29.0278 8.94955H43.4756V10.7546H29.0278C28.5835 10.7523 28.1427 10.8322 27.7275 10.9904C27.3249 11.1456 26.9522 11.369 26.6256 11.6508C26.3025 11.9332 26.0281 12.2668 25.8133 12.6382Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M66.9088 12.3082C66.6293 11.6588 66.2299 11.0678 65.7314 10.5661C65.2298 10.0619 64.6354 9.65929 63.9809 9.38052C63.3003 9.09042 62.5674 8.94273 61.8274 8.94656H52.9427C52.2058 8.94223 51.4759 9.08997 50.7987 9.38052C49.4765 9.94215 48.4236 10.9938 47.8613 12.3145C47.5715 12.9911 47.4246 13.7201 47.43 14.456V20H49.2434V16.6101H65.5267V20H67.3465V14.4497C67.3498 13.7134 67.2008 12.9843 66.9088 12.3082ZM52.9427 10.7547H61.8274C62.323 10.7523 62.8139 10.8519 63.2693 11.0472C63.7106 11.2366 64.1114 11.5088 64.45 11.8491C64.788 12.1856 65.0566 12.5852 65.2402 13.0252C65.4325 13.4754 65.53 13.9603 65.5267 14.4497V14.7956H49.2434V14.4497C49.2426 13.9599 49.3422 13.475 49.5362 13.0252C49.92 12.1423 50.6225 11.4361 51.5039 11.0472C51.9582 10.8517 52.4481 10.7521 52.9427 10.7547Z", fill: "#575757" }),
      /* @__PURE__ */ jsx("path", { d: "M90.9843 8.94046V19.9908H89.1835V12.3398L81.1394 18.5757L73.1111 12.343V19.9908H71.3071V8.94046L81.1394 16.2864L90.9843 8.94046Z", fill: "#575757" })
    ] }) }),
    /* @__PURE__ */ jsx("button", { className: classes.ellipse, type: "button", onClick: func, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: logo2, alt: "" }) }) })
  ] }) });
};
export {
  Header as default
};
