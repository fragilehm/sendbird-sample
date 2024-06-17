import './App.css'

import SBProvider from '@sendbird/uikit-react/SendbirdProvider'
import '@sendbird/uikit-react/dist/index.css'
import CustomizedApp from './CustomizedApp'

import { APP_ID, USER_ID, NICKNAME } from './const'

function App() {
  if (!APP_ID) {
    return (
      <p>Set APP_ID in const.js</p>
    )
  }
  console.log('🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 window?.sendbirdChatVariables', window?.sendbirdChatVariables);
  
  return (
    <SBProvider appId={APP_ID} userId={window?.sendbirdChatVariables?.userId} nickname={NICKNAME}>
      <CustomizedApp />
    </SBProvider>
  )
}

export default App
