import React from "react";
import {cleanup, waitFor, render, screen } from "@testing-library/react";
import Picker from "./picker";

beforeEach(()=>{
  cleanup();
})

it(`renders all items names in a list`,()=>{
  render(<Picker click={{x:500, y:450}}/>);

  expect(screen.getByRole(`button`,{name:`Cat`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Dog`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Crayons`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Book`, hidden:true})).toBeInTheDocument();
  expect(screen.getByRole(`button`,{name:`Doll`, hidden:true})).toBeInTheDocument();
});

it(`positions CSS`,()=>{
  render(<Picker click={{x:500, y:450}}/>);

  const picker = document.getElementsByTagName('dialog');
  const style = window.getComputedStyle(picker[0]);

  expect(style.position).toBe(`absolute`)
  expect(style.top).toBe('450px'); 
  expect(style.left).toBe('500px');
});

it.skip(`closes dialog when clicking on an item`,()=>{

});

it.skip(`closes dialog when clicking outside of component`,()=>{

});
