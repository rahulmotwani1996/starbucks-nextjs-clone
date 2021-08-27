import NavBar from "../NavBar/NavBar";
import React from 'react';
import Navigator from '../Navigator/Navigator';
import Footer from "../Footer/Footer";



function Layout({ children, withPaddedTitle = false }: { children: JSX.Element, withPaddedTitle?: boolean }) {
    const [showNavigator, setShowNavigator] = React.useState<boolean>(false)
    return <>
        {
            showNavigator ? < Navigator onCloseNaviagtor={() => setShowNavigator(false)} /> :
                <>

                    <NavBar onMenuButtonClick={() => setShowNavigator(true)} withPaddedTitle={withPaddedTitle} />
                    {children}
                    <Footer />

                </>
        }
    </>
}

export default Layout;