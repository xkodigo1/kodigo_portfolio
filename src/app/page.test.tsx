import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

describe("Home page", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    document.documentElement.lang = "es";
  });

  it("renders in Spanish by default with full-stack positioning", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: /fabian galan/i })).toBeInTheDocument();
    expect(screen.getAllByText(/desarrollador full-stack/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /proyectos que demuestran rango de producto y profundidad de ingeniería/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /backend y lógica de dominio/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ES" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /oscuro/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.queryByText(/rol:\s*rol:/i)).not.toBeInTheDocument();
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
    expect(
      screen.getByText(/full-stack developer \+ product systems engineer/i),
    ).toBeInTheDocument();
    expect(screen.queryByText(/role:\s*role:/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /backend and domain logic/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.lang).toBe("en");
  });
});
