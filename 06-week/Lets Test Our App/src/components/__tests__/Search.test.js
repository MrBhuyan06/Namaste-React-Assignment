import { render } from "@testing-library/react";
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

test("get The bpdy", () => {
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
