export class SoundManager {
    letters = ['abcdefghijklmnopqrstuvwxyz'];
    audioPlayer = new Audio();

    public playAudio(src: string) {
        this.audioPlayer.src = `../assets/audio/general/${src}.wav`;
        this.audioPlayer.play();
    }
}
