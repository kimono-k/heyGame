export class SoundManager {
    constructor() {
        this.letters = ['abcdefghijklmnopqrstuvwxyz'];
        this.audioPlayer = new Audio();
    }
    playAudio(src) {
        this.audioPlayer.src = `../assets/audio/general/${src}.wav`;
        this.audioPlayer.play();
    }
}
//# sourceMappingURL=soundManager.js.map