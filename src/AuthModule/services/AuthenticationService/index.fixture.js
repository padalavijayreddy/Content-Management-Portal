import SignInResponse from '../../fixtures/getUserSignInResponse.json';


class SignInFixtureService {
    signInAPI() {
        console.log(SignInResponse);
        return new Promise((resolve, reject) => {
            resolve(SignInResponse);
        });
    }
}

export default SignInFixtureService;
