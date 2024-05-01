'use client'
import { useEffect } from 'react';

const DisqusComments = ({ pageUrl, pageIdentifier }) => {
  useEffect(() => {
    const loadDisqus = () => {
      window.disqus_config = function () {
        this.page.url = pageUrl;
        this.page.identifier = pageIdentifier;
      };

      const script = document.createElement('script');
      script.src = 'https://meoneeb.disqus.com/embed.js';
      script.setAttribute('data-timestamp', +new Date());
      document.body.appendChild(script);
    };

    loadDisqus();

    return () => {
      // Clean up Disqus script when component unmounts
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        while (disqusThread.firstChild) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }
    };
  }, [pageUrl, pageIdentifier]);

  return (
    <div id="disqus_thread"></div>
  );
};

export default DisqusComments;
