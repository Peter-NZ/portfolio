import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LinkCard from "./LinkCard";
import { BrowserRouter } from "react-router-dom";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(
      <BrowserRouter>
          <LinkCard
            title="Test Card"
            backgroundImage=" linear-gradient(to bottom right, #30cfd0, #5b397d)"
            icon="perm_identity"
            subTitle="test sub"
            link="/about"
          ></LinkCard>
      </BrowserRouter>,
      container
    );
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("LinkCard Rendering", () => {
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should render heading in correct location", () => {
    const cardHeadingEl = container.querySelector(".card__title");
    expect(cardHeadingEl.textContent).toBe("Test Card");
  });
  it("should render subtitle in correct location", () => {
    const cardTextEl = container.querySelector(".card__text");
    expect(cardTextEl.textContent).toBe("test sub");
  });
  it("should render icon in correct location with material-icons class", () => {
    const cardIconEl = container.querySelector(".card__icon");
    expect(cardIconEl.textContent).toBe("perm_identity");
    expect(cardIconEl.classList.contains("material-icons")).toBe(true);
  });
  it("should add link prop as href to wrapping link element", () => {
    const cardLink = container.querySelector(".card");
    expect(cardLink.href).toBe(window.location + "about");
  });
});
