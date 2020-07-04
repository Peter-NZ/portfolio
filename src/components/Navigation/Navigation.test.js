import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Navigation Desktop", () => {
  beforeEach(() => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation></Navigation>
        </BrowserRouter>,
        container
      );
    });
  });
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should show desktop sidenav", () => {
    const sidenavEl = container.querySelector(".sidenav");
    expect(getComputedStyle(sidenavEl).getPropertyValue("display")).toBe(
      "block"
    );
  });
  it("should hide toggle button", () => {
    const toggleButtonEl = container.querySelector(".toggle-button");
    console.log(document);

    expect(getComputedStyle(toggleButtonEl).getPropertyValue("display")).toBe(
      "none"
    );
    expect(getComputedStyle(toggleButtonEl).getPropertyValue("display")).toBe(
      "0"
    );
  });
});

describe("Navigation Mobile", () => {
  beforeEach(() => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation></Navigation>
        </BrowserRouter>,
        container
      );
      window.innerHeight = 700;
      window.innerWidth = 375;
      window.dispatchEvent(new Event("resize"));
    });
  });

  it("should hide desktop sidenav", () => {
    const sidenavEl = container.querySelector(".sidenav");
    expect(getComputedStyle(sidenavEl).getPropertyValue("display")).toBe(
      "none"
    );
  });

  it("should show toggle button", () => {
    const toggleButtonEl = container.querySelector(".toggle-button");
    //expect(getComputedStyle(toggleButtonEl).getPropertyValue('display')).toBe("block");
    expect(toggleButtonEl).toHaveStyle(`display: 'block'`);
    //expect(getComputedStyle(toggleButtonEl).getPropertyValue('opacity')).toBe("1");
  });

  it("should show mobile nav on button press", () => {
    const toggleButtonEl = container.querySelector(".toggle-button");
    let mobileNavEl;
    act(() => {
      Simulate.click(toggleButtonEl);
    });
    mobileNavEl = container.querySelector(".mobile-nav");
    expect(mobileNavEl).toBeTruthy();
  });
});
