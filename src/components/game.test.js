import {render, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {pointer} from "@testing-library/user-event/dist/types/pointer";
import React from "react";
import Game from "./game";

beforeEach(()=>{
  cleanup();
})

it.skip(`pops up Ready? dialog`,()=>{

});

it.skip(`starts game on player confirmation`,()=>{

});

it.skip(`throws error on failure`, ()=>{

});

it.skip(`renders input on success`,async ()=>{
  render(<Game/>);
  
  const user = userEvent.setup();
  pointer({keys:`[MouseLeft]`,})
});

it.skip(`resets states on game over`,()=>{

});
