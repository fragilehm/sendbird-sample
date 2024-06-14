import './App.css'

import SBProvider from '@sendbird/uikit-react/SendbirdProvider'
import '@sendbird/uikit-react/dist/index.css'
import CustomizedApp from './CustomizedApp'

import { APP_ID } from './const'

function App() {
  if (!APP_ID) {
    return (
      <p>Set APP_ID in const.js</p>
    )
  }
  return (
    <SBProvider appId={APP_ID} userId={"2_TESTQA_4c9a5dbc5ea2c8d497102df1086fa831"} >
      <CustomizedApp />
    </SBProvider>
  )
}

export default App