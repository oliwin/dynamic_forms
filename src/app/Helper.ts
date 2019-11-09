export abstract class Helper {
  static sort(array: any, key: string, int?: boolean, reverse?: boolean) {
    return array.sort(function(a: any, b: any) {
      let textA;
      let textB;

      if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
        if (int) {
          textA = parseInt(a[key]);
          textB = parseInt(b[key]);
        } else {
          textA = a[key].toString().toUpperCase();
          textB = b[key].toString().toUpperCase();
        }
      } else {
        textA = a;
        textB = b;
      }

      if (reverse) {
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      }

      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }

  static validateJSON = <T>(json: string): T => JSON.parse(json);
}
