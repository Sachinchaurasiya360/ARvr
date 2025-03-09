# CareerVerse - AI-Driven Career Exploration Platform

CareerVerse is an innovative career exploration platform that combines AI-powered assessments, gamified storytelling, and browser-based AR/VR simulations to help students discover and explore potential career paths.

## Features

- **AI Career Pathfinder**: Personalized career recommendations based on interests, skills, and values
- **Virtual Job Shadowing**: Browser-based AR/VR simulations of different careers
- **Gamified Learning**: Interactive storylines and challenges to explore careers
- **Real-Time Insights**: Current job market data and industry trends
- **Progress Tracking**: Monitor your career exploration journey

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/careerverse.git
cd careerverse
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **3D/AR**: Three.js, A-Frame, AR.js
- **State Management**: Zustand
- **AI/ML**: OpenAI GPT-4
- **API**: Next.js API Routes

## Project Structure

```
careerverse/
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── lib/             # Utilities and stores
│   └── ...              # Page components
├── public/              # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- The Next.js team for the amazing framework
- All contributors and supporters of the project
