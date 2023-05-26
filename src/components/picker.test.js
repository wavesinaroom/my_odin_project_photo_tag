import React from "react";
import {cleanup, fireEvent, render, screen } from "@testing-library/react";
import Picker from "./picker";

beforeEach(()=>{
  cleanup();
})

it(`renders all items names in a list`,()=>{
  render(<Picker/>);

  expect(screen.getByRole(`button`,{name:`Cat`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Dog`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Crayons`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Book`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Doll`, hidden:true})).toBeInTheDocument();
});

it.skip(`shows dialogue`,()=>{
});

it.skip(`hides dialogue`,()=>{

});


it.skip(`positions CSS`,()=>{
  render(<Picker click={{x:500, y:450}}/>);

  const picker = document.getElementsByTagName('dialog');
  const style = window.getComputedStyle(picker[0]);

  fireEvent.click(screen.queryByRole(`img`));
    expect(style.top).toBe(450);
    expect(style.left).toBe(500);
});

