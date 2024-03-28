export function decodeToken (token) {
    let decodedToken;    
    try {    
        decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken;
    } catch (error) {
        return null;
    }
}
