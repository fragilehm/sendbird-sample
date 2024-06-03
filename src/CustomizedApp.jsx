import React from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";

export default function CustomizedApp() {
  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={window?.sendbirdChatVariables?.channelUrl || "sendbird_group_channel_307520883_40661d50d869510c511fe7b4663dfa0c944daeee"}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
