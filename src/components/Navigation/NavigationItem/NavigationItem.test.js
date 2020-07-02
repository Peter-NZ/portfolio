import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import NavigationItem from "./NavigationItem";
import { BrowserRouter } from "react-router-dom";

let container = null;
const mockToggleSidenav = jasmine.createSpy('mockToggleSidenav');

const mockItemSettings = {
    icon: "perm_identity",
    title: "Test Link",
    path: "about"
}
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
 
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("NavigationItem Desktop", () => {
    beforeEach(()=>{
        act(() => {
            render(
              <BrowserRouter>
                  <NavigationItem
                    toggleSidenav={undefined}
                    itemSettings={mockItemSettings}
                    mobile={false}
                  ></NavigationItem>
              </BrowserRouter>,
              container
            );
          });
    });
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should render title in correct location", () => {
    const cardHeadingEl = container.querySelector(".sidenav__item");
    expect(cardHeadingEl.textContent).toContain("Test Link");
  });
 
  it("should render icon in correct location with material-icons class", () => {
    const cardIconEl = container.querySelector(".sidenav__icon");
    expect(cardIconEl.textContent).toBe("perm_identity");
    expect(cardIconEl.classList.contains("material-icons")).toBe(true);
  });
  it("should add link prop as href to wrapping link element", () => {
    const cardLink = container.querySelector(".sidenav__item");
    expect(cardLink.href).toBe(window.location + mockItemSettings.path);
  });

});

describe("NavigationItem Mobile", () => {
    beforeEach(()=>{
        act(() => {
            render(
              <BrowserRouter>
                  <NavigationItem
                    toggleSidenav={mockToggleSidenav}
                    itemSettings={mockItemSettings}
                    mobile={true}
                  ></NavigationItem>
              </BrowserRouter>,
              container
            );
          });
    });

    it("should use class sidenav__item--mobile for link wrapper", () => {
        const cardHeadingEl = container.querySelector(".sidenav__item--mobile");
        expect(cardHeadingEl).toBeTruthy();
      });
     
      it("should use class sidenav__icon--mobile for icon", () => {
        const cardIconEl = container.querySelector(".sidenav__icon--mobile");
        expect(cardIconEl).toBeTruthy();
        expect(cardIconEl.classList.contains("material-icons")).toBe(true);
      });
      it("should call toggleSidenav on click", () => {
        const sideNavItemEl = container.querySelector(".sidenav__item--mobile");
        Simulate.click(sideNavItemEl);
        expect(mockToggleSidenav).toHaveBeenCalled();
      });
});