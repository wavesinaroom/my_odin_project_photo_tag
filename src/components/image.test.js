import React from "react";
import {cleanup} from "@testing-library/react";
import {render} from "react-dom";
import Image from "./image";

beforeEach(()=>{
  cleanup();
});

it(`renders an image`,()=>{
  render(<Image/>);
  expect(screen.getByRole(`img`)).toBeInTheDocument();
});

it(`gets non zero user's click coordinates`,()=>{

});

it(`fetches item coordinates from server based on <Picker/> selection`,()=>{

});

it(`checks user input coordinates matches item coordinates`,()=>{

});
