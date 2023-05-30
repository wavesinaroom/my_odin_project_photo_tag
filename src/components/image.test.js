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
  it(`opens dialog`,()=>{
    render(<Image/>);
    expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole(`img`));
    expect(screen.getByRole(`dialog`)).toBeInTheDocument();
  });

  it(`renders all items names in a list`,()=>{
    render(<Image/>);

    fireEvent.click(screen.getByRole(`img`));
    expect(screen.getAllByRole(`button`).length).toBe(5);
    expect(screen.getByRole(`button`,{name:`Cat`})).toBeInTheDocument();
    expect(screen.getByRole(`button`,{name:`Dog`})).toBeInTheDocument();
    expect(screen.getByRole(`button`,{name:`Crayons`})).toBeInTheDocument();
    expect(screen.getByRole(`button`,{name:`Book`})).toBeInTheDocument();
    expect(screen.getByRole(`button`,{name:`Doll`})).toBeInTheDocument();
  });

  it(`positions CSS`,()=>{
    render(<Image/>);

    fireEvent.click(screen.getByRole(`img`));

    const style = window.getComputedStyle(document.getElementsByTagName(`dialog`)[0])

    expect(style.position).toMatch(`absolute`);
    expect(style.top).toMatch(`0px`);
    expect(style.left).toMatch(`0px`);
  });

  it(`closes dialog when clicking on an item`,()=>{
    render(<Image/>);

    fireEvent.click(screen.getByRole(`img`));
    expect(screen.getByRole(`dialog`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole(`button`,{name:`Cat`}));
    expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
  });

  it(`closes dialog when clicking outside of component`,()=>{
    render(<Image/>);

    fireEvent.click(screen.getByRole(`img`));
    expect(screen.getByRole(`dialog`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole(`img`));
    expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
  });
})
