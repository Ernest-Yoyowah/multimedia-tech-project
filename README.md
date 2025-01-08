# Project Overview

This web application is designed to connect individuals with diverse skill sets, providing a platform for collaboration, idea sharing, and community building. Users can join groups based on their interests, such as Frontend, Backend, DevOps, and Cybersecurity, and participate in discussions, share resources, and collaborate in real-time.

---

## Features

- **Landing Page**: A welcoming interface that allows users to log in or register.
- **User Authentication**: Secure login and registration system.
- **Skill-Based Groups**: Users can browse and join groups tailored to specific skill areas.
- **Real-Time Chat**: Facilitates group discussions with support for text, images, and file sharing.
- **User Profiles**: Customizable profiles to showcase skills and connect with others.

---

## Technology Stack

- **Frontend**: React.js with MUI.
- **Backend**: Node.js/Express.js.
- **Database**: MongoDB.
- **Real-Time Communication**: Socket.IO.
- **File Storage**: Firebase.

---



# API ENDPOINT URL

# login and signup

***********************# login as a new user (signup)******************
# POST REQUEST
url - login/new_user
expected request body - {
    name,phone,email,password
}

**************# login as an old user*******************
# POST REQUEST
url - login/old_user
expected request body - {
    email,password
}


# both login routes returns user_id
# user id should be store in a localstorage.



************************************************# urls for group creation operations*****************************************************
# POST REQUEST
url - /space/create_campus?user_id=
expected request body - {
    space_name,image[using multer]
}


# GET REQUEST
url - /space/request_campus?user_id=
# store this data in a localstorage which is all the available groups present on the server


# GET REQUEST
url - /space/join_campus?user_id=#&space_id=#


# GET REQUEST
url - /space/request_campus_specific?user_id=#&space_id=#
# user_id is the users id in the local storage and space id is the id of the space been requested for.



# POST REQUEST
url - /space/send_ugc?user_id=#&space_id=#
# where user_id is the id of the auther of the ugc
# where space_id is the group id in which the content or ugc is being sent to

expected request body - {
    message,image[using multer]
}






**************************************************************************************************# http should use this snippet to send image ******************************************
snippet example in which recieving image on the server side is base on

const formData = new FormData();
const imageFile = document.querySelector("input[type='file']").files[0]; // File input
formData.append("image", imageFile);

axios.post("http://localhost:3000/upload", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
})
.then((response) => {
    console.log("Image uploaded successfully:", response.data);
})
.catch((error) => {
    console.error("Error uploading image:", error);
});



*******************************************snippet example for byte image rendeing in the front end**************
function renderImageFromBytes(byteData) {
    // Convert byte data to Base64
    const base64Image = btoa(
        Array.from(byteData)
            .map(byte => String.fromCharCode(byte))
            .join("")
    );

    // Create an <img> element and set the Base64 image
    const img = document.createElement("img");
    img.src = `data:image/png;base64,${base64Image}`; // Adjust MIME type if necessary
    document.body.appendChild(img);
}

***************************************************************************************# end of check snippet*************************************************



********************************* client side code to send image byte data through the socket***************
const ws = new WebSocket("ws://localhost:8080");

const fileInput = document.querySelector("#fileInput");
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        ws.send(reader.result); // Send binary data to the server
    };

    reader.readAsArrayBuffer(file);
});
