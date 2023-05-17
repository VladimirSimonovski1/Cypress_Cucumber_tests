import { Base } from "./Base";

export class Posts extends Base {
  private apiUrl: string;

  constructor(url: string) {
    super("https://qamind.com/wp-json/wp/v2");
    this.apiUrl = url;
  }

  public getPosts(method: string): any {
    return this.get(method, this.apiUrl);
  }
}
