import Http from './modules/http/Http';
import Number from './modules/number/Number';
import String from './modules/string/String';

// If you want to add your
// own method, just put it
// here. This is the main
// class for the whole
// project.
export default class Codeaid {
  static string = String;
  static http = Http;
  static number = Number;
}
