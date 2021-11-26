import React from "react";
import { render, fireEvent, cleanup } from "test-utils";
import DemoPage from "../../src/screen/DemoPage";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

beforeEach(()=> {
  mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
})

afterEach(() => {
  mock.restore();
  cleanup();
});

describe("test create", () => {
  test("smoking test", async () => {
    const { getByText, findByText } = render(<DemoPage />);
    const axiosGetBtn = getByText("read(axios)");
    fireEvent(axiosGetBtn, "press");
    await findByText("\"loading\"");
    await findByText("\"John Smith\"");
  });
});
