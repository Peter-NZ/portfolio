import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import LayoutContext from "../../context/LayoutContext";

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

describe("Navigation Menus", () => {
  it("should compile", () => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation></Navigation>
        </BrowserRouter>,
        container
      );
    });
    expect(container).toBeTruthy();
  });
  it("should show mobile menu and background if openSidenav true", () => {
    act(() => {
      render(
        <LayoutContext.Provider
          value={{ toggleSidenav: () => {}, openSidenav: true }}
        >
          <BrowserRouter>
            <Navigation></Navigation>
          </BrowserRouter>
        </LayoutContext.Provider>,
        container
      );
    });
    const mobileNavEl = container.querySelector(".mobile-nav");
    const mobileBackgroundEl = container.querySelector(".background");

    expect(mobileNavEl).toBeTruthy();
    expect(mobileBackgroundEl).toBeTruthy();
  });
  it("should hide mobile menu and background if openSidenav false", () => {
    render(
      <LayoutContext.Provider
        value={{ toggleSidenav: () => {}, openSidenav: false }}
      >
        <BrowserRouter>
          <Navigation></Navigation>
        </BrowserRouter>
      </LayoutContext.Provider>,
      container
    );

    const mobileNavEl = container.querySelector(".mobile-nav");
    const mobileBackgroundEl = container.querySelector(".background");

    expect(mobileNavEl).toBeFalsy();
    expect(mobileBackgroundEl).toBeFalsy();
  });
  it("should call toggleSidenav on button click", () => {
    const mockToggleSidenav = jasmine.createSpy("mockToggleSidenav");
    act(() => {
      render(
        <LayoutContext.Provider
          value={{ toggleSidenav: mockToggleSidenav, openSidenav: true }}
        >
          <BrowserRouter>
            <Navigation></Navigation>
          </BrowserRouter>
        </LayoutContext.Provider>,
        container
      );
    });
    const buttonEl = container.querySelector(".toggle-button");
    Simulate.click(buttonEl);
    expect(mockToggleSidenav).toHaveBeenCalled();
  });
});
