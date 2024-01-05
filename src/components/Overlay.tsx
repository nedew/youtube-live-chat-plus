import { FC, useEffect, useState } from 'react';

export const Overlay: FC = () => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const elOriginChatIframe = document.querySelector(
      '#chat iframe.ytd-live-chat-frame'
    );

    if (!elOriginChatIframe) {
      setUrl(null);
      return;
    }

    setUrl(elOriginChatIframe.getAttribute('src'));
  }, []);

  return <></>;

  return (
    <div className="ylcp-overlay">
      <div className="ylcp-chatframe-base">
        {url && (
          <iframe
            scrolling="no"
            // id="chatframe"
            className="ylcp-chatframe"
            // src={url}
          />
        )}
      </div>
    </div>
  );
};
