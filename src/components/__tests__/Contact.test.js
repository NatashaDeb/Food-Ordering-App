import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("To Check whether h1 tag is loaded", ()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading", {level: 1});
    expect(heading).toBeInTheDocument();
});

test("To Check whether h4 call tag is loaded", ()=>{
    render(<Contact />);
   const heading = screen.getByRole("heading", {level: 4, name: /Call/i });
   console.log(heading);
    expect(heading).toBeInTheDocument();
});

