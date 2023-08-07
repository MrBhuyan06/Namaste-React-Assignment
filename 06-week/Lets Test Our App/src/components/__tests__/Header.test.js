import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";

test("Logo Should load on render header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //virtual dom

  console.log(header);
  const image = header.getByTestId("image");
  // console.log(image);
  expect(image.src).toBe("http://localhost/DUMMY%20LOGO");
});

//test as soon the page load  the cart will be 0

test("The cart value should bw zero on initial render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  // console.log(cart);
  expect(cart.innerHTML).toBe("Cart-0 -Store");
});

//check the user is online not init render
test("check the user is online in the init render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const online = header.getByTestId("online");
  expect(online.innerHTML).toBe("✅");
});
