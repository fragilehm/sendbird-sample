import './App.css'

import SBProvider from '@sendbird/uikit-react/SendbirdProvider'
import '@sendbird/uikit-react/dist/index.css'
import CustomizedApp from './CustomizedApp'

function App() {
  return (
    <SBProvider appId={window?.sendbirdChatVariables?.appId} userId={window?.sendbirdChatVariables?.userId}>
      <CustomizedApp />
    </SBProvider>
  )
}

export default App
