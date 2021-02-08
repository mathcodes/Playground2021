import React from "react";
import "./App.css";
import VertSidebar from "./components/VertSidebar/index";
import VSB from "./components/VSB/index";
import 'react-pro-sidebar/dist/css/styles.css';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
          <header className="App-header">
            <h3 className="titleJIS">J o b I n S i g h t</h3>
            <p>Hello, I'm Jon</p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              BASIC
            </button>

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLabel"
            >
              BASIC
            </button>
          </header>

          {/* BASIC */}

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="col-10">
          <div className="row">
            <ul>
            <button className="topBtn">Notes</button>
            <button className="topBtn">Tasks</button>
            <button className="topBtn">Goals</button>
            <button className="topBtn logoutBtn">Logout</button>
            </ul>
          </div>
        {/* MAIN CONTENT */}
        <div className="row">

      
        <VSB/>
 
 
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
