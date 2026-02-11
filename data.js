// data.js
export const ENHANCEMENT_DB = [
  {
    "keywords": ["intern", "cognizant", "ai"],
    "output": "Worked as an Artificial Intelligence intern at Cognizant, developing predictive models."
  },
  {
    "keywords": ["hackathon", "prize", "won", "1st", "hackify"],
    "output": "Secured First Place at Hackify 2.0 Hackathon, demonstrating rapid prototyping skills."
  },
  {
    "keywords": ["flutter", "api", "backend", "rest"],
    "output": "Explored REST APIs and integrated Flutter frontend with backend services."
  },
  {
    "keywords": ["machine learning", "ml", "supervised", "unsupervised"],
    "output": "Studied fundamentals of machine learning, including supervised and unsupervised algorithms."
  },
  {
    "keywords": ["google", "course", "crash", "ml"],
    "output": "Successfully completed Google Machine Learning Crash Course."
  },
  {
    "keywords": ["tcs", "intern", "backend"],
    "output": "Completed a summer internship at TCS focusing on scalable backend development."
  },
  {
    "keywords": ["udemy", "flutter", "bootcamp"],
    "output": "Earned certification for completing Flutter Bootcamp from Udemy."
  },
  {
    "keywords": ["arduino", "locker", "wifi", "servo"],
    "output": "Implemented a WiFi-controlled locker system using Arduino and SG90 servo motor."
  },
  {
    "keywords": ["ieee", "presenter", "expo", "iot"],
    "output": "Awarded Best Presenter at IEEE Project Expo for presenting an IoT-based environmental monitor."
  },
  {
    "keywords": ["lm35", "temperature", "monitor", "lcd"],
    "output": "Designed a temperature monitoring system using LM35 sensor with LCD display."
  },
  {
    "keywords": ["comsoc", "ieee", "member"],
    "output": "Active member of IEEE Communications Society (ComSoc), participated in multiple technical events."
  },
  {
    "keywords": ["irrigation", "esp8266", "smart", "firebase"],
    "output": "Designed a smart irrigation system using ESP8266 and Firebase for automated watering control."
  },
  {
    "keywords": ["music", "player", "flutter", "equalizer"],
    "output": "Built a Flutter-based music player app with real-time seekbar, equalizer, and intuitive UI."
  },
  {
    "keywords": ["electrical", "engineering", "mace", "b.tech"],
    "output": "Completed B.Tech in Electrical and Electronics Engineering from MACE (2021–2025)."
  },
  {
    "keywords": ["class 12", "cbse", "95%"],
    "output": "Secured 95% in Class 12 under CBSE board."
  },
  {
    "keywords": ["iste", "documentation", "committee"],
    "output": "Served as sub-committee member in ISTE documentation team, contributing to content writing."
  }
];

// Fuzzy Matching Logic
export function findBestMatch(userInput) {
    if (!userInput || userInput.length < 3) return null;
    
    const userWords = userInput.toLowerCase().split(' ');
    let bestMatch = null;
    let maxScore = 0;

    ENHANCEMENT_DB.forEach(entry => {
        let score = 0;
        // Check how many keywords from the entry exist in user input
        entry.keywords.forEach(k => {
            if (userInput.toLowerCase().includes(k)) score += 3; 
        });

        // Penalize slightly for very short inputs to avoid false positives
        if (score > maxScore && score >= 3) {
            maxScore = score;
            bestMatch = entry;
        }
    });

    return bestMatch;
}