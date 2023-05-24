import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Picker from "./picker";

beforeEach(()=>{
  cleanup();
});

it(`shows dialogue`,()=>{

});

it.only(`hides dialogue`,()=>{

});

it(`renders all items names in a list`,()=>{

  render(<Picker/>);

  expect(screen.getByText(`Cat`)).toBeInTheDocument();
  expect(screen.getByText(`Dog`)).toBeInTheDocument();
  expect(screen.getByText(`Crayons`)).toBeInTheDocument();
  expect(screen.getByText(`Doll`)).toBeInTheDocument();
  expect(screen.getByText(`Book`)).toBeInTheDocument();
});

it(`positions CSS`, async()=>{
  const coordinates = {x:500, y:400};

  render(<Picker click={coordinates}/>);

  const picker = document.getElementsByTagName('dialog');
  const style = window.getComputedStyle(picker[0]);

  waitFor(()=>{
    expect(style.top).toBe(500);
    expect(style.left).toBe(400);
  })
});

it(`sets selection state from image`,()=>{

});
