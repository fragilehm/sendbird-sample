import React from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";

export default function CustomizedApp() {
  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={"sendbird_group_channel_29462571_cac170e570074e58cb7751ecd367ee193f24b0ca"}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
