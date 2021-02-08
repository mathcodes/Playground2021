import React, { Component } from 'react'
import "./style.css"

export default class VSB extends Component {
	render() {
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
    }
    
    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
		return (
			<React.Fragment>
<div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{width:200}} id="mySidebar">
  <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button>
  <a href="#" className="w3-bar-item w3-button">Link 1</a>
  <a href="#" className="w3-bar-item w3-button">Link 2</a>
  <a href="#" className="w3-bar-item w3-button">Link 3</a>
</div>

<div className="w3-main" style="margin-left:200px">
<div className="w3-teal">
  <button className="w3-button w3-teal w3-xlarge w3-hide-large" onclick="w3_open()">&#9776;</button>
  <div className="w3-container">
    <h1>My Page</h1>
  </div>
</div>

<div className="w3-container">
  <h3>Responsive Sidebar</h3>
  <p>The sidebar in this example will always be displayed on screens wider than 992px, and hidden on tablets or mobile phones (screens less than 993px wide).</p>
  <p>On tablets and mobile phones the sidebar is replaced with a menu icon to open the sidebar.</p>
  <p>The sidebar will overlay of the page content.</p>
  <p><b>Resize the browser window to see how it works.</b></p>
</div>
   
</div>
		</React.Fragment>
		)
	}
}
