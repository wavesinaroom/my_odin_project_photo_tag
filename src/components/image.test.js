import React from "react";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import Image from "./image";

beforeEach(()=>{
  cleanup();
});

describe(`Image`,()=>{
  it(`renders an image`,()=>{
    render(<Image/>);
    expect(screen.getByRole(`img`)).toBeInTheDocument();
    expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
  });

  it.skip(`fetches item coordinates from server based on selection`,()=>{

  });

  it.skip(`checks user input coordinates matches item coordinates`,()=>{

  });
})

describe(`Pop up dialog`,()=>{
  it.skip(`opens dialog`,()=>{
    render(<Image/>)

  });

  it.skip(`renders all items names in a list`,()=>{
  });

  it.skip(`positions CSS`,()=>{
  });

  it.skip(`closes dialog when clicking on an item`,()=>{
  });

  it.skip(`closes dialog when clicking outside of component`,()=>{

  });
})
