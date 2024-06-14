import React, {useState} from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";
import SBChannelList from '@sendbird/uikit-react/GroupChannelList'

export default function CustomizedApp() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");

  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <SBChannelList
          selectedChannelUrl={currentChannelUrl}
          onChannelCreated={(channel) => {
            setCurrentChannelUrl(channel.url);
          }}
          onChannelSelect={(channel) => {
            setCurrentChannelUrl(channel?.url);
          }}
        />
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
