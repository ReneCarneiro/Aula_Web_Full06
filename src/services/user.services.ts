import { authRepository } from "@/repositories/auth.repository"

class UserService {

    private readonly url = 'http://localhost:3030/auth/login'

    public getLoggedUser() {
        return authRepository.getLogged()
    }

    public async User(name: string, username: string, password: string, roles: string) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, password, roles})
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