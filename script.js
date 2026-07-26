const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMI60YqjlUyUAmMD1lvuaorn2sg4bg908-WBuyoOwMDMbFB_VxNXC3niy5zuSj0-F7/exec";

document.getElementById("applyForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name_bn: document.getElementById("name_bn").value,
        name_en: document.getElementById("name_en").value,
        father: document.getElementById("father").value,
        mother: document.getElementById("mother").value,
        school: document.getElementById("school").value,
        class: document.getElementById("class").value,
        dob: document.getElementById("dob").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        payment_method: document.getElementById("payment_method").value,
        payment_number: document.getElementById("payment_number").value
    };

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if(result.status === "success"){

            alert("✅ আবেদন সফলভাবে জমা হয়েছে।");

            window.location.href = "syllabus.html";

        }else{

            alert("আবেদন জমা হয়নি।");

        }

    } catch(err){

        alert("সার্ভারের সাথে সংযোগ করা যায়নি।");

    }

});
