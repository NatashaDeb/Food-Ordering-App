import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "./mocks/RestaurantCardMockData.json"
import "@testing-library/jest-dom"

describe("Testing of RestaurantCard component",()=>{
    it("should render RestaurantCard component with props data",()=>{
        render(<RestaurantCard restaurant = {MOCK_DATA}/>)

        const name = screen.getByText("McDonald's");

        expect(name).toBeInTheDocument();
    })
})