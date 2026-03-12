import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

describe("Home page", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    document.documentElement.lang = "es";
  });

  it("renders in Spanish by default with language and theme controls", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: /fabian galan/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /proyectos que demuestran rango de producto y profundidad de ingeniería/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ES" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /oscuro/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getAllByRole("link", { name: /github/i })).toHaveLength(2);
  });

  it("switches the visible content to English", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /projects that show both product range and engineering depth/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.lang).toBe("en");
  });
});
