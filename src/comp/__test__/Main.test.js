import { render,screen,fireEvent } from "@testing-library/react";
import Head from '../main/Head'
import {CountryProvider} from '../context/CountryContext'
import { ThemeProvider } from "../context/ThemeContext";
import Search from "../main/Search";
import List from "../main/List";





describe("Test main page and component",()=>{
    test("head container",()=>{
        render(
            <CountryProvider>
                <ThemeProvider>
                <Head/>
                </ThemeProvider>   
            </CountryProvider>
        )
        const h1Element=screen.getByText(/Where in the world?/i);
        expect(h1Element).toBeInTheDocument();

    })


    test("Search container",()=>{
        render(
            <CountryProvider>
               <ThemeProvider>
                <Search/>
               </ThemeProvider>   
            </CountryProvider>
        )

        const inputSearch=screen.getByPlaceholderText(/Search for country/i);
        const inputSelect=screen.getByText(/Filter by Region/i);
        
        expect(inputSearch).toBeInTheDocument();
        expect(inputSelect).toBeInTheDocument();


    })


    test("List container",()=>{
        render(
            <CountryProvider>
                <ThemeProvider>
                    <Search/>
                    <List/>
                </ThemeProvider>
            </CountryProvider>
        )

        const inputSearch=screen.getByPlaceholderText(/Search for country/i);
        fireEvent.change(inputSearch, { target: { value: "India" } })
        fireEvent.click(inputSearch);
    })

    



})