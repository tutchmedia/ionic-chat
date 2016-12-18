import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

declare let Parse: any;

export class GamesService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }


    createAuthorizationHeader(headers: Headers) {
      headers.append('X-Parse-Application-Id','b2ZMbVeLyOsB2MvfXnRAqRR6dUTPWlhJ9pRhz9Kr');
      headers.append('X-Parse-REST-API-Key', 'Fi38rKH49m7tDWz7odywN3qvXWdhzPgU89CRrpc9');

    }


    listGames() {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        var query = 'where={"hidden":false}';
        var url = 'https://pg-app-ycsxxc0b1aklbx7bed8xdcredpqdde.scalabl.cloud/1/classes/Games?'+query;
        var response = this.http.get(url, {
          headers: headers
        }).map(res => res.json());
		    return response;
    }

    register(email: string, password: string, birthday?: any) {
      console.log('registering ' + email);
      var user = new Parse.User();
      user.set("username", email);
      user.set("email", email);
      user.set("password", password);

      // other fields can be set just like with Parse.Object
      user.set("birthday", birthday);

      user.signUp(null, {
        success: function (user) {
          console.log('success');
        },
        error: function (user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }


}
