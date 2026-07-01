import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the repository foundation heading and summary", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "Phuc Dev Notes" })).toBeInTheDocument();
    expect(screen.getByText("Foundation setup")).toBeInTheDocument();
  });
});
