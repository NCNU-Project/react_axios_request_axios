import React from "react";
import { render, fireEvent, cleanup, waitFor } from "test-utils";
import DemoPage from "../../src/screen/DemoPage";
import MockAdapter from "axios-mock-adapter";
import { userRequest } from "../../src/_services/api.services";

// not sure how, but use 2 more promose will cause error, just replace the global Promise
// ref https://github.com/callstack/react-native-testing-library/issues/379#issuecomment-762597260
import Promise from "promise-polyfill";
global.Promise = Promise;

const mock = new MockAdapter(userRequest, { delayResponse: 500 });

beforeEach(() => {
  mock.onGet("http://192.168.0.120:3001/students").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
});

afterEach(() => {
  mock.restore();
  cleanup();
});

async function waitForEvent(cb) {
  await waitFor(async () => {
    await cb();
    await new Promise((resolve) => process.nextTick(resolve));
  });
}

describe("test create", () => {
  test("smoking test", async () => {
    const { getByText, findByText, toJSON } = render(<DemoPage />);

    const axiosGetBtn = getByText("read(axios)");

    await findByText('"loading"');
    await waitForEvent(() => fireEvent(axiosGetBtn, "press"));
    await findByText('"John Smith"');
  });
});
