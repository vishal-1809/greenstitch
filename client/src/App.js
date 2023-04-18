import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./DashBoard.css";
import logo from "./img/logo.jpg";
import dashboard from "./img/dashboard.jpg";
import pages from "./img/pages.jpg";
import file from "./img/file.jpg";
import rhs from "./img/rhs.jpg";
import graph from "./img/graph.jpg";
import React, { useEffect, useState } from "react";

function App() {
  const [jan,setJan] = useState({});
  const [feb,setFeb] = useState({});
  const [mar,setMar] = useState({});
  const [apr,setApr] = useState({});
  const [may,setMay] = useState({});
  const [june,setJune] = useState({});
  const [july,setJuly] = useState({});

  const [down, setdown] = useState({ display: "none" });
  const [up, setUp] = useState({ display: "block" });
  const [Pgdown, setPgdown] = useState({ display: "none" });
  const [Pgup, setPgUp] = useState({ display: "block" });
  const [Filedown, setFiledown] = useState({ display: "none" });
  const [Fileup, setFileUp] = useState({ display: "block" });
  const [dropper, setDropper] = useState({ display: "none", height: "0rem" });
  const [dropper1, setDropper1] = useState({ display: "none", height: "0rem" });
  const [dropper2, setDropper2] = useState({ display: "none", height: "0rem" });
  const dropdown = (e) => {
    if (e === "down") {
      setdown({ display: "none" });
      setUp({ display: "block" });
      setDropper({ display: "block", height: "8rem" });
    } else if (e === "up") {
      setUp({ display: "none" });
      setdown({ display: "block" });
      setDropper({ display: "none", height: "0rem" });
    } else if (e === "Pgdown") {
      setPgdown({ display: "none" });
      setPgUp({ display: "block" });
      setDropper1({ display: "block", height: "8rem" });
    } else if (e === "PgUp") {
      setPgUp({ display: "none" });
      setPgdown({ display: "block" });
      setDropper1({ display: "none", height: "0rem" });
    } else if (e === "Filedown") {
      setFiledown({ display: "none" });
      setFileUp({ display: "block" });
      setDropper2({ display: "block", height: "8rem" });
    } else if (e === "FileUp") {
      setFileUp({ display: "none" });
      setFiledown({ display: "block" });
      setDropper2({ display: "none", height: "0rem" });
    }
  };

  const ready = () => {
    let a = ["99","83","67","51","35","19","3"];
    let b = ["101","85","69","53","37","21","5"];
    let c = ["103","87","71","55","39","23","7"];
    let d = ["105","89","72","57","41","25","9"];
    let e = ["107","91","74","59","43","27","11"];
    let f = ["109","93","75","61","45","29","13"];
    let g = ["111","95","77","63","47","31","15"];


    for(let i=0;i<(jan.spinning+49999)/50000;i++){
      document.getElementById(a[i]).backgroundColor = "#57CC78";
    }
  }

  useEffect(() => {
    let a = ["99","83","67","51","35","19","3"];
    let b = ["101","85","69","53","37","21","5"];
    let c = ["103","87","71","55","39","23","7"];
    let d = ["105","89","73","57","41","25","9"];
    let e = ["107","91","75","59","43","27","11"];
    let f = ["109","93","77","61","45","29","13"];
    let g = ["111","95","79","63","47","31","15"];



    fetch("http://localhost:5000/api/getData/Jan")
    .then(response => response.json())
    .then(data => {
      setJan(data);
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(a[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(a[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(a[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(a[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(a[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(a[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/Feb")
    .then(response => response.json())
    .then(data => {
      setFeb(data);
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(b[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(b[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(b[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(b[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(b[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(b[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/Mar")
    .then(response => response.json())
    .then(data => {
      setMar(data);
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(c[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(c[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(c[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(c[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(c[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(c[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/Apr")
    .then(response => response.json())
    .then(data => {
      setApr(data);
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(d[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(d[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(d[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(d[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(d[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(d[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/May")
    .then(response => response.json())
    .then(data => {
      setMay(data);
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(e[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(e[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(e[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(e[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(e[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(e[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/June")
    .then(response => response.json())
    .then(data => {
      setJune(data)
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(f[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(f[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(f[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(f[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(f[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(f[cnt]).style.borderTopRightRadius = "0.6rem";
    })

    fetch("http://localhost:5000/api/getData/July")
    .then(response => response.json())
    .then(data => {
      let cnt=0;
      for(let i=0;i<(data.spinning)/50000;i++){
        document.getElementById(g[cnt++]).style.background = "#57CC78";
      }
      for(let i=0;i<(data.transportation)/50000;i++){
        document.getElementById(g[cnt++]).style.background = "#55DBDB";
      }
      for(let i=0;i<(data.carding)/50000;i++){
        document.getElementById(g[cnt++]).style.background = "#E2FF32";
      }
      for(let i=0;i<(data.heatingCooling)/50000;i++){
        document.getElementById(g[cnt++]).style.background = "#FEC102";
      }
      cnt--;
      document.getElementById(g[cnt]).style.borderTopLeftRadius = "0.6rem";
      document.getElementById(g[cnt]).style.borderTopRightRadius = "0.6rem";
      setJuly(data)
    })

    ready();
  },[])

  
  return (
    <div className="Apps">
      <div className="sideBar">
        <img src={logo} alt="Logo" className="logo" />
        <span className="dashBoard">DASHBOARD</span>
        <div className="dbElem">
          <span className="dash">
            <img src={dashboard} alt="Dashboard" className="DashboardLogo" />
            Dashboard
            <span id="down">
              <svg
                onClick={() => dropdown("down")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 down"
                style={down}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <span id="up">
              <svg
                onClick={() => dropdown("up")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 up"
                style={up}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </span>
          <div className="dropper" id="dropper" style={dropper}>
            <li>Record</li>
            <li>Report</li>
            <li>Analysis</li>
            <li>Learn</li>
          </div>
        </div>

        <div className="pages">PAGES</div>
        <div className="pgElem">
          <span className="dash">
            <img src={pages} alt="Pages" className="PagesLogo" />
            Help Center
            <span id="down">
              <svg
                onClick={() => dropdown("Pgdown")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 down"
                style={Pgdown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <span id="up">
              <svg
                onClick={() => dropdown("PgUp")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 up"
                style={Pgup}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </span>
          <div className="dropper1" id="dropper1" style={dropper1}>
            <li>XYZ</li>
            <li>XYZ</li>
            <li>XYZ</li>
          </div>

          <span className="dash">
            <img src={file} alt="Pages" className="PagesLogo" />
            File Manager
            <span id="down">
              <svg
                onClick={() => dropdown("Filedown")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 down"
                style={Filedown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <span id="up">
              <svg
                onClick={() => dropdown("FileUp")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 up"
                style={Fileup}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </span>
          <div className="dropper2" id="dropper2" style={dropper2}>
            <li>XYZ</li>
            <li>XYZ</li>
            <li>XYZ</li>
          </div>
        </div>
      </div>

      <div className="srchBar">
        <input className="srchBox" placeholder="          Search..."></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 srchLogo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 noti"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 calender"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
        <img src={rhs} alt="Logo" className="rhs" />
      </div>

      <div className="container">
        <div className="fourBox">
          <div className="box">
            <div>Carbon FootPrint</div>
            <h2>2,412,314t</h2>
            <h2 className="secondh2">CO2e</h2>
            <span className="percentage" style={{backgroundColor:"#57CC78"}}>-45%</span>
          </div>
          <div className="box">
            <div>Emissions by spinning</div>
            <h2>72,369t</h2>
            <h2 className="secondh2">CO2e</h2>
            <span className="percentage"style={{"backgroundColor": "#57CC78"}}>-60%</span>
          </div>
          <div className="box">
            <div>Emission by Transportation</div>
            <h2>361,874t</h2>
            <h2 className="secondh2">CO2e</h2>
            <span className="percentage" style={{"backgroundColor": "grey"}}>0.0%</span>
          </div>
          <div className="box">
            <div>Emission by Carding</div>
            <h2>241,231</h2>
            <h2 className="secondh2">CO2e</h2>
            <span className="percentage" style={{"backgroundColor": "#57CC78"}}>0.6%</span>
          </div>
        </div>
      </div>

      <div className="bar">
        <div className="naming">
          <h2 style={{marginRight: "4rem", marginTop: "0.5rem", marginLeft: "1rem"}}>Carbon Footprint</h2>
          <div style={{marginTop:"1rem"}}>
              <div style={{ backgroundColor: "#57CC78",marginTop:"0.1rem", marginRight: "0.5rem" }}></div>
              <div style={{marginRight: "4rem", fontSize: "0.8rem"}}>Spinning</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div style={{ backgroundColor: "#55DBDB", marginTop:"0.1rem", marginRight: "0.5rem"  }}></div>
            <div style={{marginRight: "6rem", fontSize: "0.8rem"}}>Transportation</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div style={{ backgroundColor: "#E2FF32",marginTop:"0.1rem", marginRight: "0.5rem"  }}></div>
            <div style={{marginRight: "4rem", fontSize: "0.8rem"}}>Carding</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div style={{ backgroundColor: "#FEC102",marginTop:"0.1rem", marginRight: "0.5rem"    }}></div>
            <div style={{fontSize: "0.8rem", width: "8rem"}}>Heating & Cooling</div>
          </div>
          <img src={graph} alt="Graph" />
        </div>

        <div className="graph">
          <div id="1">350k</div>
          <div id="2"></div>
          <div id="3"></div>
          <div id="4"></div>
          <div id="5"></div>
          <div id="6"></div>
          <div id="7"></div>
          <div id="8"></div>
          <div id="9"></div>
          <div id="10"></div>
          <div id="11"></div>
          <div id="12"></div>
          <div id="13"></div>
          <div id="14"></div>
          <div id="15"></div>
          <div id="16"></div>
          <div id="17">300k</div>
          <div id="18"></div>
          <div id="19"></div>
          <div id="20"></div>
          <div id="21"></div>
          <div id="22"></div>
          <div id="23"></div>
          <div id="24"></div>
          <div id="25"></div>
          <div id="26"></div>
          <div id="27"></div>
          <div id="28"></div>
          <div id="29"></div>
          <div id="30"></div>
          <div id="31"></div>
          <div id="32"></div>
          <div id="33">250k</div>
          <div id="34"></div>
          <div id="35"></div>
          <div id="36"></div>
          <div id="37"></div>
          <div id="38"></div>
          <div id="39"></div>
          <div id="40"></div>
          <div id="41"></div>
          <div id="42"></div>
          <div id="43"></div>
          <div id="44"></div>
          <div id="45"></div>
          <div id="46"></div>
          <div id="47"></div>
          <div id="48"></div>
          <div id="49">200k</div>
          <div id="50"></div>
          <div id="51"></div>
          <div id="52"></div>
          <div id="53"></div>
          <div id="54"></div>
          <div id="55"></div>
          <div id="56"></div>
          <div id="57"></div>
          <div id="58"></div>
          <div id="59"></div>
          <div id="60"></div>
          <div id="61"></div>
          <div id="62"></div>
          <div id="63"></div>
          <div id="64"></div>
          <div id="65">150k</div>
          <div id="66"></div>
          <div id="67"></div>
          <div id="68"></div>
          <div id="69"></div>
          <div id="70"></div>
          <div id="71"></div>
          <div id="72"></div>
          <div id="73"></div>
          <div id="74"></div>
          <div id="75"></div>
          <div id="76"></div>
          <div id="77"></div>
          <div id="78"></div>
          <div id="79"></div>
          <div id="80"></div>
          <div id="81">100k</div>
          <div id="82"></div>
          <div id="83"></div>
          <div id="84"></div>
          <div id="85"></div>
          <div id="86"></div>
          <div id="87"></div>
          <div id="88"></div>
          <div id="89"></div>
          <div id="90"></div>
          <div id="91"></div>
          <div id="92"></div>
          <div id="93"></div>
          <div id="94"></div>
          <div id="95"></div>
          <div id="96"></div>
          <div id="97">50k</div>
          <div id="98"></div>
          <div id="99"></div>
          <div id="100"></div>
          <div id="101"></div>
          <div id="102"></div>
          <div id="103"></div>
          <div id="104"></div>
          <div id="105"></div>
          <div id="106"></div>
          <div id="107"></div>
          <div id="108"></div>
          <div id="109"></div>
          <div id="110"></div>
          <div id="111"></div>
          <div id="112"></div>
          <div id="113"></div>
          <div id="114"></div>
          <div id="115" className="months">Jan</div>
          <div id="116"></div>
          <div id="117" className="months">Feb</div>
          <div id="118"></div>
          <div id="119" className="months">Mar</div>
          <div id="120"></div>
          <div id="121" className="months">Apr</div>
          <div id="122"></div>
          <div id="123" className="months">May</div>
          <div id="124"></div>
          <div id="125" className="months">June</div>
          <div id="126"></div>
          <div id="127" className="months">July</div>
          <div id="128"></div>
          <div id="129"></div>
          <div id="130"></div>
          <div id="131"></div>
          <div id="132"></div>
          <div id="133"></div>
          <div id="134"></div>
          <div id="135"></div>
          <div id="136"></div>
          <div id="137"></div>
          <div id="138"></div>
          <div id="139"></div>
          <div id="140"></div>
          <div id="141"></div>
          <div id="142"></div>
          <div id="143"></div>
          <div id="144"></div>
        </div>
      </div>

      <div className="circle">
        <h2 style={{marginLeft: "1rem"}}>Top emissions by type</h2>
        <div className="piechart"></div>
        <div style={{marginLeft: "3rem"}}>
        <div style={{marginTop:"1rem"}}>
              <div className="cir" style={{ backgroundColor: "#57CC78",marginTop:"0.1rem", marginRight: "0.5rem" }}></div>
              <div style={{marginLeft: "1rem", fontSize: "0.8rem", marginTop: "-1rem"}}>Spinning &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40%</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div className="cir"  style={{ backgroundColor: "#55DBDB", marginTop:"0.1rem", marginRight: "0.5rem"  }}></div>
            <div style={{marginLeft: "1rem", fontSize: "0.8rem", marginTop: "-1rem"}}>Transportation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30%</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div className="cir"  style={{ backgroundColor: "#E2FF32",marginTop:"0.1rem", marginRight: "0.5rem"  }}></div>
            <div style={{marginLeft: "1rem", fontSize: "0.8rem", marginTop: "-1rem"}}>Carding&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10%</div>
          </div>
          <div style={{marginTop:"1rem"}}>
            <div className="cir"  style={{ backgroundColor: "#FEC102",marginTop:"0.1rem", marginRight: "0.5rem"    }}></div>
            <div style={{marginLeft: "1rem", fontSize: "0.8rem", marginTop: "-1rem"}}>Heating & Cooling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
