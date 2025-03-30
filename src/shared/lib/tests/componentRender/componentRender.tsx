import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(children: ReactNode, options: componentRenderOptions = {}) {
    const { route = "/", initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
        </StoreProvider>,
    );
}
