# Pacman Game
For Ironhack Module 1 project, this Pacman game was built using JavaScript, HTML, and CSS. Navigate Pacman around the grid, eat the food, and avoid the enemies! 

### Features
- Grid-based layout: Pacman and enemies can move within defined boundaries.
- Enemies: Four enemies move randomly within the grid.
- Superfood: Eating superfood grants Pacman the ability to freeze the enemies for a short time.
- Scoring System: Players earn points by collecting food and superfood.
- Game Win & Over: Win by collecting all the food or lose if an enemy catches Pacman.
- Tunnels: Pass through tunnels that teleport Pacman from one side of the grid to the other.

### How to Play
1. Click the "Start Game" button to begin. The game will not start automatically.
2. Control Pacman: Use the arrow keys to move Pacman:
- ArrowLeft for left
- ArrowRight for right
- ArrowUp for up
- ArrowDown for down
3. Collect Food: Navigate the grid to collect food items and increase your score.
4. Avoid the Enemies: They are constantly moving. Avoid them, or the game will be over!
5. Superfood: Eat superfood to freeze enemies for 5 seconds, giving you a chance to collect more food.
6. Win: Collect all the food to win the game!
7. Click the "Restart" button after a game over or win to play again.

### Project Structure

Pacman/
│
├── index.html 
├── style.css   
├── index.js
└── README.md

### Code Highlights
- Game Space Creation: The grid layout is dynamically generated using JavaScript, and each cell is assigned a type (food, wall, superfood, etc.).
- Pacman Movement: Pacman’s movement is handled by keyboard events, allowing for smooth directional changes.
- Enemy Movements: The enemies move randomly across the grid, but they can still catch Pacman!
- Superfood Effect: Eating a superfood temporarily freezes all enemies, giving Pacman a strategic advantage.

### Future Enhancements
- Add levels with increasing difficulty.
- Improve the enemy AI to make them more intelligent.
- Add sounds and animations for a more immersive experience.
