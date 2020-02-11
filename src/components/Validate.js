export const validateInfo = (user) => {
    let flag = 0;
    //console.log("indise validate omfo");
    if (user.name == null) {
        alert("Name can't be empty, please enter your Full Name...");
        flag++;
        return false;
    } else {
        let regex = /^[a-zA-Z ]+$/;
        if (!regex.test(user.name)) {
            alert("Please enter valid name. e.g. John Doe.");
            flag++;
            return false;
        }
    }

    if (user.email == null) {
        alert("e-Mail can't be empty, please enter your e-Mail ID...");
        flag++;
        return false;
    } else {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(user.email)) {
            alert("Please enter valid email. e.g. johndoe@example.com");
            flag++;
            return false;
        }
    }
    if (user.age == null) {
        alert("Age can't be empty, please enter your age...");
        flag++;
        return false;
    } else {
        if (user.age <= 13) {
            alert("Age must be less greater than 13 & less then 85.");
            flag++;
            return false;
        }
    }

    if (user.gender === "") {
        alert("Gender can't be empty, please enter your gender...");
        flag++;
        return false;
    } else {
        if (user.gender !== "Male" && user.gender !== "Female" && user.gender !== "Others") {
            alert("Gender must be Male or Female.");
            flag++;
            return false;
        }
    }

    if (flag === 0) {
        return true;
    }
}