import React from "react";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import Image from "./image";

beforeEach(()=>{
  cleanup();
});

it(`renders an image`,()=>{
  render(<Image/>);
  expect(screen.getByRole(`img`)).toBeInTheDocument();
  expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
});


it.skip(`fetches item coordinates from server based on <Picker/> selection`,()=>{

});

it.skip(`checks user input coordinates matches item coordinates`,()=>{

});

it(`shows dialogue`,()=>{
  render(<Image/>);
  fireEvent.click(screen.queryByRole(`img`));

  expect(screen.getByRole(`dialog`)).toBeInTheDocument();
});

it(`hides dialogue`,()=>{
  render(<Image/>);
  fireEvent.click(screen.queryByRole(`img`));
  fireEvent.click(screen.getByRole(`button`,{name:`Cat`}));
  
  expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();

});

it(`renders all items names in a list`,()=>{
  render(<Image/>);
  fireEvent.click(screen.queryByRole(`img`));

  expect(screen.getAllByRole(`button`)).toHaveLength(5);
  expect(screen.getByText(`Cat`)).toBeInTheDocument();
  expect(screen.getByText(`Dog`)).toBeInTheDocument();
  expect(screen.getByText(`Crayons`)).toBeInTheDocument();
  expect(screen.getByText(`Book`)).toBeInTheDocument();
  expect(screen.getByText(`Doll`)).toBeInTheDocument();
});

it.skip(`positions CSS`,()=>{

});
