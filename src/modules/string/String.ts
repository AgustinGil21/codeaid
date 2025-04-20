export default class String {
  // Utils
  static lower(str: string) {
    return str.toLowerCase();
  }

  static upper(str: string) {
    return str.toUpperCase();
  }

  static split(str: string, splitter?: string): string[] {
    if (!splitter) {
      return str.split(/[-_\s]+/);
    }

    return str.split(splitter);
  }

  static join(arr: string[], splitter: string = ''): string {
    return arr.join(splitter);
  }

  static camel(str: string): string {
    let splittedString = this.split(str);

    return splittedString
      .map((word, index) => {
        word = word.toLowerCase();
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }

  static snake(str: string): string {
    let splittedString = this.split(str);

    return splittedString
      .map((word, _) => {
        return word.toLowerCase();
      })
      .join('_');
  }

  static kebab(str: string): string {
    let splittedString = this.split(str);

    return splittedString
      .map((word, _) => {
        return word.toLowerCase();
      })
      .join('-');
  }

  static pascal(str: string): string {
    let splittedString = this.split(str);

    return splittedString
      .map((word, _) => {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }

  static len(str: string): number {
    return str.length;
  }
}
