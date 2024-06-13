import React from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";

export default function CustomizedApp() {
  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={window?.sendbirdChatVariables?.channelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
