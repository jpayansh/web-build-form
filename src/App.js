// import { Routes, Route } from "react-router-dom";
// import Form from "./Form";
import React, { useState } from "react";
// import { useState } from "react";

function App() {
  const [field, setField] = useState({
    OwnerName: "",
    PhoneNumber: "",
    Email: "",
    ProjectName: "",
    Plan: "",
    Closing: "",
    TopUpMethod: false,
    LevelIncomeGenrate: false,
    Roi: false,
    ReferalBuss: false,
    ChatSupport: false,
    Subscription: false,
  });
  function updateField(e) {
    setField((prv) => ({ ...prv, [e.target.id]: e.target.value }));
  }
  function updateRadio(e) {
    setField((prv) => ({ ...prv, [e.target.name]: e.target.id }));
  }
  function updateClosing(e) {
    setField((prv) => ({ ...prv, [e.target.name]: e.target.id }));
  }
  function updateCheck(e) {
    setField((prv) => ({ ...prv, [e.target.id]: e.target.checked }));
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        OwnerName: field.OwnerName,
        PhoneNumber: field.PhoneNumber,
        Email: field.Email,
        ProjectName: field.ProjectName,
        Plan: field.Plan,
        Closing: field.Closing,
        TopUpMethod: field.TopUpMethod,
        LevelIncomeGenrate: field.LevelIncomeGenrate,
        Roi: field.Roi,
        ReferalBuss: field.ReferalBuss,
        ChatSupport: field.ChatSupport,
        Subscription: field.Subscription,
      });
      const res = await fetch(`http://192.168.29.102:2500/api/web-builder`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: body,
      });
      const response = await res.json();
      console.log(response);

      if (response.status) {
        setField({
          OwnerName: "",
          PhoneNumber: "",
          Email: "",
          ProjectName: "",
          Plan: "",
          Closing: "",
          TopUpMethod: false,
          LevelIncomeGenrate: false,
          Roi: false,
          ReferalBuss: false,
          ChatSupport: false,
          Subscription: false,
        });
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">OwnerName:</label>
          <input
            type="text"
            class="form-control"
            id="OwnerName"
            placeholder="Enter OwnerName"
            onChange={(e) => {
              updateField(e);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPhoneno">PhoneNumber:</label>
          <input
            type="number"
            class="form-control"
            id="PhoneNumber"
            placeholder="Enter Phone no"
            onChange={(e) => {
              updateField(e);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Enter email"
            onChange={(e) => {
              updateField(e);
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputProject">ProjectName:</label>
          <input
            type="text"
            class="form-control"
            id="ProjectName"
            placeholder="Enter ProjectName"
            onChange={(e) => {
              updateField(e);
            }}
          />
        </div>

        <div class="form-group">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label for="exampleInputplan">Plan: </label>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Plan"
                id="DownLine"
                onClick={(e) => {
                  {
                    updateRadio(e);
                  }
                }}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                DownLine
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Plan"
                id="Referal System"
                onChange={(e) => {
                  {
                    updateRadio(e);
                    // updateField(e);
                  }
                }}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Referal System
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label for="exampleInputplan">Closing:</label>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Closing"
                id="Monthly"
                onChange={(e) => {
                  updateClosing(e);
                }}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Montly
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Closing"
                id="Weekly"
                onChange={(e) => {
                  updateClosing(e);
                }}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Weekly
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Closing"
                id="Daily"
                onChange={(e) => {
                  updateClosing(e);
                }}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Daily
              </label>
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="TopUpMethod"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                TopUpMethod
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="LevelIncomeGenrate"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                LevelIncomeGenrate
              </label>
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="Roi"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                Return on investment
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="ReferalBuss"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                ReferalBuss
              </label>
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="ChatSupport"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                ChatSupport
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="Subscription"
                onChange={(e) => {
                  updateCheck(e);
                }}
              />
              <label class="form-check-label" for="exampleCheck1">
                Subscription
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
