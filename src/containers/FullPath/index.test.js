import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import FullPath from "./index";
import { RunesContext } from "../../pages/SkillTree";

describe("Full Path", () => {
  let runes = {
    runes: [
      {
        id: "chevrons",
        purchased: 0,
        spriteOffset: 1,
        spriteSheetURL: "assets/talent-icons-sprite.png",
        price: 1,
      },
      {
        id: "silverware",
        purchased: 0,
        spriteOffset: 2,
        spriteSheetURL: "assets/talent-icons-sprite.png",
        price: 1,
      },
      {
        id: "cake",
        purchased: 0,
        spriteOffset: 3,
        spriteSheetURL: "assets/talent-icons-sprite.png",
        price: 1,
      },
      {
        id: "crown",
        purchased: 0,
        spriteOffset: 4,
        spriteSheetURL: "assets/talent-icons-sprite.png",
        price: 1,
      },
    ],
  };
  test("renders Full Path", () => {
    render(
      <RunesContext.Provider value={runes}>
        <FullPath
          path={{
            id: "path1",
            runesOnPath: ["chevrons", "silverware", "cake", "crown"],
            title: "TALENT PATH 1",
          }}
          index={0}
        />
      </RunesContext.Provider>
    );

    const pathText = screen.getByText(/Talent path 1/i);
    const runeWrappers = screen.getAllByTestId(/rune-wrapper/i);
    const grayBar = screen.getByTestId(/gray-bar/i);
    const fullPath = screen.getByTestId(/full-path/i);

    expect(pathText).toBeInTheDocument();
    runeWrappers.map((wrapper) => expect(wrapper).toBeInTheDocument());
    expect(runeWrappers.length).toBe(4);
    expect(fullPath).toBeInTheDocument();
    expect(grayBar).toBeInTheDocument();
  });
});
