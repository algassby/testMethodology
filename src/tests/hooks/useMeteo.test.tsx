// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const handlers = [
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
             results: [
                {
                  name:{
                    title: "Damn",
                    first: "DWEEZ",
                    last: "In-the-game"
                  },
                  picture:{
                    thumbnail: "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png"
                  }
                }
              ]
        })
      );
    }
  ),

  rest.get(
    "https://prevision-meteo.ch/services/json/aix-en-provence",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            icon_big:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
        })
      );
    }
  ),

  ];

  const server = setupServer(...handlers);



beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Météo actuel/i));
  expect(container.getElementsByTagName("img").length).toBe(1);
});

test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Utilisateur/i));
  expect(container.getElementsByTagName("p")[1].textContent).toContain("Damn DWEEZ In-the-game");
  
});
