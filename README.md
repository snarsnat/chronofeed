# ChronoFeed 🕐

A minimalist Twitter/X client that shows only chronological tweets—no algorithmic manipulation, no "For You" bias.

## The Problem

Twitter's algorithm increasingly prioritizes engagement-bait, viral content, and sponsored posts over the tweets from accounts you actually follow. Many users feel disconnected from their timeline because:

- **Algorithmic bias**: "For You" tab shows what X thinks you want, not what you chose to follow
- **Engagement farming**: Popular tweets get boosted regardless of quality or relevance
- **Missing context**: Tweets appear out of chronological order, breaking conversation flow
- **Noise overload**: Promoted content and suggested accounts clutter your feed

## The Solution

ChronoFeed is a read-only Twitter client that returns to the platform's roots:

### Features
- **100% Chronological Timeline**: Tweets appear in exact posting order, newest first
- **No Algorithmic Sorting**: Every tweet from followed accounts, in order, always
- **No Ads or Promoted Content**: Clean, distraction-free reading experience  
- **Focus Mode**: Hide likes, retweets, and engagement metrics to focus on content
- **Multi-Account Support**: Switch between accounts seamlessly
- **Offline Reading**: Cache tweets for later reading without internet
- **Dark/Light Theme**: Beautiful reading experience in any lighting

### Why This Matters

Power users, journalists, and privacy-conscious users have been asking for chronological feeds for years. Third-party clients were the answer until Twitter API restrictions. This project explores building a compliant, read-only client that serves users who want simplicity.

## Tech Stack

- **Frontend**: React Native (iOS/Android)
- **Backend**: Node.js with Twitter API v2 (free tier compatible)
- **State**: Zustand for lightweight state management
- **Styling**: Tailwind CSS

## Getting Started

```bash
# Clone the repository
git clone https://github.com/snarsnat/chronofeed.git
cd chronofeed

# Install dependencies
npm install

# Start development server
npm start
```

## API Usage

This app uses Twitter API v2 with OAuth 2.0. Currently configured for:
- Tweet read (GET /2/tweets)
- User timeline (GET /2/users/:id/tweets)
- Follows read (GET /2/users/:id/following)

## Contributing

Contributions welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - See LICENSE file for details

---

*Built because sometimes you just want to see what your friends posted. In order.*
