import React from "react";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import Image from "./image";

beforeEach(()=>{
  cleanup();
});

it(`renders an image`,()=>{
  render(<Image/>);
  expect(screen.getByRole(`img`)).toBeInTheDocument();
});


it(`fetches item coordinates from server based on <Picker/> selection`,()=>{

});

it(`checks user input coordinates matches item coordinates`,()=>{

});

it(`shows dialogue`,()=>{

});

it.only(`hides dialogue`,()=>{

});

it(`renders all items names in a list`,()=>{

});

it(`positions CSS`,()=>{

});
