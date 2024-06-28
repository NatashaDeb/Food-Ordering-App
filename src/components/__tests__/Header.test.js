import { fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("Testing Header Component", ()=>{
    it("Should render Header component with a login button",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore()}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        )
    
       // const login = screen.getByRole("button", {name:"Login"});// specifing name of the button in case there are many buttons
        const login = screen.getByRole("button");
         // const login = screen.getByText("Login");  
    
        expect(login).toBeInTheDocument();
    });
    
    it("Should render Header component with cart items 0",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore()}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        )
     
        const cart = screen.getByText("cart- (0 items)")
        expect(cart).toBeInTheDocument();
    });
    
    it("check if cart is present",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore()}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        )
     
        const cart = screen.getByText(/cart/); // /cart/ <--- rejex
        expect(cart).toBeInTheDocument();
    });
    
    it("check if login button is changing to logout onclick",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore()}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        )
     
        const login = screen.getByRole("button", {name:"Login"}); 
        fireEvent.click(login) //on firing the click event to login we should expect something
    
        const logout = screen.getByRole("button", {name:"Logout"}); 
        
        expect(logout).toBeInTheDocument();  //we should expect Logout
    });
    
    
})