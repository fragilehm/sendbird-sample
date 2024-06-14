import React from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";

export default function CustomizedApp() {
  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={"sendbird_group_channel_29484954_207b796608cb959bb040ac0658854639c86ac538"}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
