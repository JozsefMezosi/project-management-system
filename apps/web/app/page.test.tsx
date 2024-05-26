import { describe, expect, it } from "vitest";
import Page from "./page";
import { render, screen } from "@testing-library/react";

describe("web/page", () => {
  it("should render the main element", () => {
    render(<Page />);
    expect(screen.getByRole("main")).toBeDefined();
  });
});
