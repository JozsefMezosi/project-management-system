import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import RootLayout from "./layout";

vi.mock("next/font/google", () => ({ Inter: vi.fn().mockReturnValue({ className: undefined }) }));

describe("web/page", () => {
  it("should render the children element", () => {
    const { queryByRole } = render(
      <RootLayout>
        <div />
      </RootLayout>
    );
    expect(queryByRole("div")).toBeDefined();
  });
});
