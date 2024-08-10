declare module '@vimeo/player' {
  export default class Player {
    constructor(container: Element | string, options?: PlayerOptions);
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    // Add other methods and properties you need
  }

  interface PlayerOptions {
    id?: number;
    width?: number;
    // Add other options you need
  }
}
