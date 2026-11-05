import MainMenu from "../components/menus/MainMenu";

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <>
            <header>
                <MainMenu />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <i>Footer</i>
            </footer>
        </>
    )
}
export default MainLayout;