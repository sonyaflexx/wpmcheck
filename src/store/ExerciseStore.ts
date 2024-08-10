import { makeAutoObservable } from "mobx";
import { wordPool, punctuationMarks } from "../assets/wordPool";

class ExerciseStore {
    text: string = "";
    input: string = '';
    startTime: number | null = null;
    endTime: number | null = null;
    wpm: number = 0;
    errors: number = 0;
    isFinished: boolean = false;
    punctuation: boolean = false;
    numbers: boolean = false;
    wordCount: number = 30;
    timeTaken: number | null = null;

    constructor() {
        makeAutoObservable(this);
        this.generateText();
    }

    generateText() {
        const words: string[] = [];
        let addPunctuation = this.punctuation;

        for (let i = 0; i < this.wordCount; i++) {
            let word = wordPool[Math.floor(Math.random() * wordPool.length)];

            if (this.numbers && Math.random() > 0.8) {
                word += ` ${Math.floor(Math.random() * 100000)}`;
            }

            if (addPunctuation && Math.random() > 0.8) {
                word += punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];
            }

            words.push(word);
        }

        if (this.punctuation && words.length > 0) {
            words[0] = this.capitalize(words[0]);
        }

        if (this.punctuation) {
            for (let i = 0; i < words.length; i++) {
                if ([".", "!", "?"].includes(words[i].slice(-1))) {
                    if (i + 1 < words.length) {
                        words[i + 1] = this.capitalize(words[i + 1]);
                    }
                }
            }

            if (![".", "!", "?"].includes(words[words.length - 1].slice(-1))) {
                words[words.length - 1] += ".";
            }
        }

        this.text = words.join(" ");
        this.input = '';
        this.startTime = null;
        this.endTime = null;
        this.wpm = 0;
        this.errors = 0;
        this.isFinished = false;
        this.timeTaken = null;
    }

    capitalize(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    setInput(input: string) {
        this.input = input;
        this.calculateErrors();
        this.calculateWPM();
        if (this.input === this.text) {
            this.finishExercise();
        }
    }

    calculateWPM() {
        if (!this.startTime) {
            this.startTime = Date.now();
        }
        if (this.isFinished && this.startTime) {
            this.endTime = Date.now();
            this.timeTaken = (this.endTime - this.startTime) / 1000; 
            const timeElapsed = this.timeTaken / 60;
            const wordsTyped = this.input.split(' ').length;
            this.wpm = Math.floor(wordsTyped / timeElapsed);
        }
    }

    calculateErrors() {
        this.errors = 0;
        for (let i = 0; i < this.input.length; i++) {
            if (this.input[i] !== this.text[i]) {
                this.errors++;
            }
        }
    }

    finishExercise() {
        this.isFinished = true;
        this.calculateWPM();
    }

    restartExercise() {
        this.generateText();
    }

    setPunctuation(value: boolean) {
        this.punctuation = value;
        this.generateText();
    }

    setNumbers(value: boolean) {
        this.numbers = value;
        this.generateText();
    }

    setWordCount(count: number) {
        this.wordCount = count;
        this.generateText();
    }
}

const exerciseStore = new ExerciseStore();
export default exerciseStore;