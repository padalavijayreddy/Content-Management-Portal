import SignInResponse from '../../fixtures/getUserSignInResponse.json';


class SignInFixtureService {
    signInAPI() {
        console.log(SignInResponse);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(SignInResponse), 2000);
        });
    }
}

export default SignInFixtureService;
