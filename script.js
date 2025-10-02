// Magical Health Tips Script

// Health tips data
const healthTips = [
    {
        title: "Stay Hydrated",
        description: "Drink at least 8 glasses of water daily to keep your body functioning optimally. Your skin will thank you!",
        type: "Hydration",
        emoji: "💧"
    },
    {
        title: "Take Short Walks",
        description: "A 10-minute walk every hour boosts circulation, energy levels, and creativity. Movement is medicine!",
        type: "Exercise",
        emoji: "🚶‍♀️"
    },
    {
        title: "Eat the Rainbow",
        description: "Different colored fruits and vegetables provide unique nutrients. Aim for a colorful plate!",
        type: "Nutrition",
        emoji: "🌈"
    },
    {
        title: "Practice Deep Breathing",
        description: "Take 5 deep breaths when stressed. Inhale for 4 counts, hold for 4, exhale for 6. Instant calm!",
        type: "Mindfulness",
        emoji: "🌬️"
    },
    {
        title: "Get Quality Sleep",
        description: "Aim for 7-9 hours of sleep. Create a bedtime routine and limit screens an hour before bed.",
        type: "Sleep",
        emoji: "😴"
    },
    {
        title: "Stretch Daily",
        description: "Spend 5 minutes stretching to improve flexibility, reduce tension, and boost blood flow.",
        type: "Movement",
        emoji: "🧘‍♂️"
    },
    {
        title: "Laugh Often",
        description: "Laughter reduces stress hormones and increases immune cells. Watch a funny video today!",
        type: "Mental Health",
        emoji: "😂"
    },
    {
        title: "Snack Smart",
        description: "Choose protein-rich snacks like nuts or yogurt over processed foods to maintain steady energy.",
        type: "Nutrition",
        emoji: "🥜"
    },
    {
        title: "Take Breaks",
        description: "Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
        type: "Eye Health",
        emoji: "👀"
    },
    {
        title: "Connect with Others",
        description: "Social connections improve mental health and longevity. Call a friend or family member today!",
        type: "Social",
        emoji: "🤗"
    }
];

// Cute character reminders
const characters = [
    {
        emoji: "💧",
        message: "Đừng quên uống nước nhé!"
    },
    {
        emoji: "🍎",
        message: "Ăn táo mỗi ngày để khỏe mạnh!"
    },
    {
        emoji: "☁️",
        message: "Hít thở sâu và thư giãn nào!"
    },
    {
        emoji: "👟",
        message: "Giày dép đâu, đi bộ thôi!"
    },
    {
        emoji: "😴",
        message: "Ngủ đủ giấc rất quan trọng đó!"
    }
];

// DOM Elements
const tipButton = document.getElementById('tipButton');
const tipCard = document.getElementById('tipCard');
const tipType = document.getElementById('tipType');
const tipTitle = document.getElementById('tipTitle');
const tipDescription = document.getElementById('tipDescription');
const tipEmoji = document.getElementById('tipEmoji');
const character = document.getElementById('character');
const characterEmoji = document.getElementById('characterEmoji');
const characterMessage = document.getElementById('characterMessage');
const particlesContainer = document.getElementById('particles');
const sparklesContainer = document.getElementById('sparkles');

// Show a random health tip
function showRandomTip() {
    // Hide character if visible
    character.classList.add('hidden');
    
    // Get random tip
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    const tip = healthTips[randomIndex];
    
    // Update tip card content
    tipType.textContent = tip.type;
    tipTitle.textContent = tip.title;
    tipDescription.textContent = tip.description;
    tipEmoji.textContent = tip.emoji;
    
    // Show tip card with animation
    tipCard.classList.remove('hidden');
    tipCard.style.animation = 'none';
    setTimeout(() => {
        tipCard.style.animation = 'fadeIn 0.5s ease-out';
    }, 10);
    
    // Create magical effects
    createParticles();
    createSparkles();
    
    // Randomly show character reminder (30% chance)
    if (Math.random() < 0.3) {
        setTimeout(showCharacterReminder, 2000);
    }
    
    // Add button press effect
    tipButton.classList.add('button-pressed');
    setTimeout(() => {
        tipButton.classList.remove('button-pressed');
    }, 300);
}

// Show character reminder
function showCharacterReminder() {
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    characterEmoji.textContent = randomChar.emoji;
    characterMessage.textContent = randomChar.message;
    character.classList.remove('hidden');
    
    // Add entrance animation
    character.style.animation = 'none';
    setTimeout(() => {
        character.style.animation = 'slideIn 0.5s ease-out, pulseGlow 3s infinite';
    }, 10);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        character.classList.add('hidden');
    }, 5000);
}

// Create magical particles
function createParticles() {
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = Math.random() * 0.7 + 0.3;
        particle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.backgroundColor = getRandomMagicColor();
        
        particlesContainer.appendChild(particle);
    }
}

// Create sparkle effects
function createSparkles() {
    // Create 20 sparkles at random positions around the button
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.textContent = '✨';
        
        // Position around the button
        const buttonRect = tipButton.getBoundingClientRect();
        const posX = buttonRect.left + Math.random() * buttonRect.width;
        const posY = buttonRect.top + Math.random() * buttonRect.height;
        
        sparkle.style.left = `${posX}px`;
        sparkle.style.top = `${posY}px`;
        sparkle.style.color = getRandomMagicColor();
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Get random magical color (purple/lavender tones)
function getRandomMagicColor() {
    const colors = [
        '#9c27b0', // Purple
        '#673ab7', // Deep Purple
        '#3f51b5', // Indigo
        '#9575cd', // Light Purple
        '#ce93d8', // Lighter Purple
        '#ff9800', // Orange
        '#ffeb3b'  // Yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event Listeners
tipButton.addEventListener('click', showRandomTip);

// Add hover effect to tip card
tipCard.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
});

tipCard.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Initialize with a tip
window.addEventListener('load', () => {
    // Create initial particles
    createParticles();
    
    // Show a tip after a short delay
    setTimeout(showRandomTip, 1000);
});