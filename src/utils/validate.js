export const checkValidData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!emailRegex) {
        alert("Please enter a valid email address.");
        return false;
    } else if (!isPasswordValid) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return false;
    } else {
        return true;
    }
}