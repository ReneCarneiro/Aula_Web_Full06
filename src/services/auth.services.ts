
class AuthService {

    private readonly url = 'http://localhost:3030/auth/login'

    public async login(username: string, password: string) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password})
        })

        if (response.status === 201) {
            response.json().then(logged => {
            console.log(logged)
            return true
        })

        return false
    }

}

export const authService = new AuthService()