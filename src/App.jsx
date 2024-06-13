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
    <SBProvider appId={APP_ID} userId={window?.sendbirdChatVariables?.userId} >
      <CustomizedApp />
    </SBProvider>
  )
}

export default App