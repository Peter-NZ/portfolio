import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LargeCard from "./LargeCard";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<LargeCard 
        title="Test Card" 
        bottomListItems = {[
            { color: "rgb(255, 255, 255)", label: "test" },
            { color: "rgb(0, 0, 0)", label: "test2" }
        ]}
        icon="perm_identity"
    >this is some test text</LargeCard>, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("LargeCard Rendering", () => {
  it("should compile", () => {
    expect(container).toBeTruthy();
  });
  it("should render heading in correct location", () => {
      const cardHeadingEl = container.querySelector('.card__title');
      expect(cardHeadingEl.textContent).toBe("Test Card");
  });
  it("should render text in correct location", () => {
    const cardTextEl = container.querySelector('.card__text');
    expect(cardTextEl.textContent).toBe("this is some test text");
  });
  it("should render icon in correct location with material-icons class", () => {
    const cardIconEl = container.querySelector('.card__icon');
    expect(cardIconEl.textContent).toBe("perm_identity");
    expect(cardIconEl.classList.contains('material-icons')).toBe(true);
  });
  it("should render 2 list items passed as props in correct location", () => {
    const listItems = container.querySelectorAll('.card__list-item');
    const listItem1 = listItems[0];
    const listItem2 = listItems[1];
    expect(listItems.length).toBe(2);
    expect(listItem1.textContent).toBe("test");
    expect(listItem2.textContent).toBe("test2");
  });
  it("should render 2 list items passed as props with correct hexagon backgroundColor", () => {
    const hexagons = container.querySelectorAll('.card__hexagon');
    const hexagon1Styles = hexagons[0].style;
    const hexagonItem2Styles = hexagons[1].style;
    console.log(hexagon1Styles);
    expect(hexagons.length).toBe(2);
    expect(hexagon1Styles).toContain("background-color");
    expect(hexagonItem2Styles).toContain("background-color");
    expect(hexagon1Styles['background-color']).toBe("rgb(255, 255, 255)");
    expect(hexagonItem2Styles['background-color']).toBe("rgb(0, 0, 0)");
  });
});
