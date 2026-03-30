import { useMemo, useState } from "react";
import {
  Share2,
  Link2,
  Bookmark,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

function buildShareLinks(url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
    },
  ];
}

export default function ArticleShare({ url, title }) {
  const [feedback, setFeedback] = useState("");
  const shareLinks = useMemo(() => buildShareLinks(url, title), [title, url]);

  const setTemporaryFeedback = (message) => {
    setFeedback(message);
    window.clearTimeout(window.__articleShareTimer);
    window.__articleShareTimer = window.setTimeout(() => setFeedback(""), 2200);
  };

  const handleNativeShare = async () => {
    if (!navigator.share) {
      setTemporaryFeedback("Native share is not available in this browser.");
      return;
    }

    try {
      await navigator.share({ title, url });
    } catch {
      // User cancelled or share failed; we stay quiet here.
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setTemporaryFeedback("Link copied to clipboard.");
    } catch {
      setTemporaryFeedback("Could not copy the link.");
    }
  };

  const handleBookmark = () => {
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    setTemporaryFeedback(`Press ${isMac ? "Cmd" : "Ctrl"}+D to bookmark this article.`);
  };

  return (
    <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 shadow-sm dark:border-dark-border dark:bg-dark-card">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            <Share2 size={16} />
            Share This Article
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Share directly to social platforms, copy the article link, or save it
            to your browser bookmarks for later.
          </p>
          {feedback && (
            <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-300">
              {feedback}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-gray-200"
          >
            <Share2 size={16} />
            Share
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-gray-200"
          >
            <Link2 size={16} />
            Copy Link
          </button>

          <button
            type="button"
            onClick={handleBookmark}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-gray-200"
          >
            <Bookmark size={16} />
            Bookmark
          </button>

          {shareLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-gray-200"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
