import { render, waitFor } from "@testing-library/react";
import Body from "../../components/Body.js";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server.js";
import { RESTAURANT_DATA } from "../../mocks/data.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  //   console.log(shimmer);
  expect(shimmer.children.length).toBe(10);
});

test("restaurent should load on page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});
