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

describe("test demoPage", () => {
  beforeEach(() => {
    mock.onGet("http://192.168.0.120:3001/students").reply(200, [{ id: 1, name: "John Smith" }]);
  });
  
  afterEach(() => {
    mock.restore();
    cleanup();
  });

  test("test whether the data fetch when click read from axios", async () => {
    const { getByText, findByText, toJSON } = render(<DemoPage />);

    const axiosGetBtn = getByText("read(axios)");
    fireEvent(axiosGetBtn, "press");
    await findByText('"loading"');
    await findByText('"John Smith"');
  });
});
