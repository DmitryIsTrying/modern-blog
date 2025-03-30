import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "@/widgets/Sidebar";
import { fireEvent, screen } from "@testing-library/react";

describe("Sidebar", () => {
    test("render component", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("collapsed sidebar", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
