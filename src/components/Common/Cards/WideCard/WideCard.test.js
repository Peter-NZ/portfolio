import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WideCard from "./WideCard";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(
          <WideCard
            title="Test Card"
            icon="perm_identity"
          >test text</WideCard>,
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
    const cardHeadingEl = container.querySelector(".card__title");
    expect(cardHeadingEl.textContent).toBe("Test Card");
  });
  it("should render text in correct location", () => {
    const cardTextEl = container.querySelector(".card__text");
    expect(cardTextEl.textContent).toBe("test text");
  });
  it("should render icon in correct location with material-icons class", () => {
    const cardIconEl = container.querySelector(".card__icon");
    expect(cardIconEl.textContent).toBe("perm_identity");
    expect(cardIconEl.classList.contains("material-icons")).toBe(true);
  });

});
