import { ThemeProvider } from '@material-ui/styles';
import type { NextPage } from 'next'
import React from 'react';
import CookiesDialog from '../components/CookiesDialog/CookiesDialog';
import HomePage from '../components/HomePage/HomePage';
import Navigator from '../components/Navigator/Navigator';
import theme from '../theme'

function Home() {
        const [showNavigator, setShowNavigator] = React.useState<boolean>(false)
        return <>
        {/* {
                showNavigator ? <Navigator onCloseNaviagtor={() => setShowNavigator(false)} /> :
        }
         */}
          <HomePage onMenuButtonClick={() => setShowNavigator(true)}/>

        </>

}

export default Home;
