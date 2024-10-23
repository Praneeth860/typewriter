type QueueItem = () => Promise<void>;
export default class Typewriter {
  private element: HTMLElement;
  private loop: boolean;
  private typeSpeed: number;
  private deletingSpeed: number;
  #queue: QueueItem[] = [];

  constructor(
    element: HTMLElement,
    {
      loop = false,
      typeSpeed = 50,
      deletingSpeed = 51,
    }: { loop?: boolean; typeSpeed?: number; deletingSpeed?: number }
  ) {
    this.element = element;
    this.loop = loop;
    this.typeSpeed = typeSpeed;
    this.deletingSpeed = deletingSpeed;
  }
  typeString(string: string) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(string[i]);
        i++;
        if (i == string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typeSpeed);
    });
    return this;
  }
  deleteChars(number: number) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        i++;
        if (i == number) {
          clearInterval(interval);
          resolve();
        }
      }, this.deletingSpeed);
    });
    return this;
  }
  deleteAll(deleteSpeed = this.deletingSpeed) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        i++;
        if (0 == this.element.innerText.length) {
          clearInterval(interval);
          resolve();
        }
      }, deleteSpeed);
    });
    return this;
  }
  pauseFor(duration: number) {
    this.#addToQueue((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
    return this;
  }
  async start() {
    let cb = this.#queue.shift();
    while (cb != null) {
      await cb();
      if (this.loop) {
        this.#queue.push(cb);
      }
      cb = this.#queue.shift();
    }
    return this;
  }
  #addToQueue(cd: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(cd));
  }
}
