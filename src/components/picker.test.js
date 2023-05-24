import React from "react";
import { render, screen } from "@testing-library/react";
import Picker from "./picker";

it(`shows dialogue`,()=>{

});

it(`hides dialogue`,()=>{

});

it.only(`renders all items names in a list`,()=>{

  render(<Picker/>);

  expect(screen.getByText(`Cat`)).toBeInTheDocument();
  expect(screen.getByText(`Dog`)).toBeInTheDocument();
  expect(screen.getByText(`Crayons`)).toBeInTheDocument();
  expect(screen.getByText(`Doll`)).toBeInTheDocument();
  expect(screen.getByText(`Book`)).toBeInTheDocument();
});

it(`positions CSS`,()=>{

});

it(`sets selection state from image`,()=>{

});
