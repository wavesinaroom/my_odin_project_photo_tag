import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import Image from "./image";

beforeEach(()=>{
  cleanup();
});

it(`renders an image`,()=>{
  render(<Image/>);
  expect(screen.getByRole(`img`)).toBeInTheDocument();
  expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
});

it.skip(`fetches item coordinates from server based on selection`,()=>{

});

it.skip(`checks user input coordinates matches item coordinates`,()=>{

});

it.skip(`opens dialog`,()=>{

});

