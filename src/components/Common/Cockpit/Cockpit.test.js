import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Cockpit from "./Cockpit";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(
      <Cockpit
        title="Test Link"
        subTitle="sub title"
        label="test"
        links={[
          { href: "https://www.test.co.nz/", text: "test" },
          { href: "https://www.test2.co.nz/", text: "test2" },
        ]}
      ></Cockpit>,
      container
    );
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("WideCard Rendering", () => {
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should render heading in correct location", () => {
    const headerEl = container.querySelector(".portfolio-heading--main");
    expect(headerEl.textContent).toBe("Test Link");
  });
  it("should render subtext in correct location", () => {
    const subTitleEl = container.querySelector(".portfolio-heading--sub");
    expect(subTitleEl.textContent).toBe("sub title");
  });
  it("should render subtext in correct location", () => {
    const labelEl = container.querySelector(".portfolio-heading--label");
    expect(labelEl.textContent).toBe("test");
  });
  it("should render 2 links given as props correctly", () => {
    const links = container.querySelectorAll(".portfolio-heading__link");
    expect(links[0].textContent).toBe("test");
    expect(links[1].textContent).toBe("test2");
    expect(links[0].href).toBe("https://www.test.co.nz/");
    expect(links[1].href).toBe("https://www.test2.co.nz/");
  });
});
