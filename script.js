function calculateAge() {
        const birthdate = new Date(document.getElementById('birthdate').value);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
                age--;
        }

        document.getElementById('result').innerHTML = `Your age is ${age} years.`;
}