import { useState } from "react";

import "./App.css";

function App() {
  const colorName = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",

    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "whitesmoke",
    "white",
    "yellow",
    "yellowgreen",
  ];
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const [bgColor, setBgColor] = useState("white");
  const [colorType, setColorType] = useState("");

  const getTypeOfColor = (e) => {
    setColorType(e.currentTarget.textContent);
  };
  function getColorName() {
    let index = Math.floor(Math.random() * colorName.length);
    setBgColor(colorName[index]);
  }
  function getColorCode() {
    let hexInitial = "#";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexValues.length);
      hexInitial += hexValues[index];
    }
    setBgColor(hexInitial);
  }

  function onClick() {
    if (colorType === "Simple" || colorType === "") {
      getColorName();
    } else {
      getColorCode();
    }
  }

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="navItem">
              <h2 className="logo">Color Flipper</h2>
              <div className="colorTypes">
                <div onClick={getTypeOfColor}>Simple</div>
                <div className="" onClick={getTypeOfColor}>
                  Hex
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ background: bgColor }}>
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <h2>Background Color: {bgColor}</h2>
              <button className="btn" onClick={onClick}>
                Change Color
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
