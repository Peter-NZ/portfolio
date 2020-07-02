import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ContactLink from "./ContactLink";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(
          <ContactLink
            title="Test Link"
            subTitle="sub title"
            icon="perm_identity"
            href='https://www.test.co.nz/'
          ></ContactLink>,
      container
    );
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("ContactLink Rendering", () => {
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should render heading in correct location", () => {
    const cardHeadingEl = container.querySelector(".contact__heading");
    expect(cardHeadingEl.textContent).toBe("Test Link");
  });
  it("should render subtext in correct location", () => {
    const cardTextEl = container.querySelector(".contact__sub-title");
    expect(cardTextEl.textContent).toBe("sub title");
  });
  it("should render subtext in correct location", () => {
    const cardTextEl = container.querySelector(".contact");
    expect(cardTextEl.href).toBe("https://www.test.co.nz/");
  });
  it("should render icon in correct location with material-icons class", () => {
    const cardIconEl = container.querySelector(".contact__icon");
    expect(cardIconEl.textContent).toBe("perm_identity");
    expect(cardIconEl.classList.contains("material-icons")).toBe(true);
  });
});
