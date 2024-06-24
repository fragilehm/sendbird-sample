import React, { useState } from 'react'

import SBConversation from '@sendbird/uikit-react/GroupChannel'
import SBChannelList from '@sendbird/uikit-react/GroupChannelList'
import SBChannelSettings from '@sendbird/uikit-react/ChannelSettings'

export default function CustomizedApp() {
  // useState
  const [showSettings, setShowSettings] = useState(false)
  const [currentChannelUrl, setCurrentChannelUrl] = useState(window?.sendbirdChatVariables?.channelUrl)

  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap" style={{
          width: "0px"
        }}>
          <SBChannelList
            selectedChannelUrl={currentChannelUrl}
            onChannelCreated={(channel) => {
              setCurrentChannelUrl(channel.url)
            }}
            disableAutoSelect
            onChannelSelect={(channel) => {
              setCurrentChannelUrl(channel?.url)
            }}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true)
            }}
          />
        </div>
      </div>
      {showSettings && (
        <div className="sendbird-app__settingspanel-wrap">
          <SBChannelSettings
            channelUrl={currentChannelUrl}
            onCloseClick={() => {
              setShowSettings(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
