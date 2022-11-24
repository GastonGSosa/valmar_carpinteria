import NavBar from "./NavBar"


export const Layout = ({children}) => {
    return (
        <main className="flex flex-col h-screen bg-slate-200">
             <NavBar />
             {children}
        </main>
    );
};