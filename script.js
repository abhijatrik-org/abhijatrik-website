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

           document.getElementById("applyForm").innerHTML = `
<div style="
background:#f0fff4;
border:2px solid #28a745;
padding:35px;
border-radius:12px;
text-align:center;
margin-top:20px;
">

<h2 style="color:#28a745;">
✅ আবেদন সফলভাবে সম্পন্ন হয়েছে
</h2>

<p style="font-size:18px;">
আপনার আবেদন সফলভাবে গ্রহণ করা হয়েছে।
</p>

<p>
এখন আপনার শ্রেণির সিলেবাস ডাউনলোড করতে নিচের বাটনে ক্লিক করুন।
</p>

<a href="syllabus.html"
style="
display:inline-block;
margin-top:20px;
padding:12px 25px;
background:#0d6efd;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
">
📖 সিলেবাস ডাউনলোড করুন
</a>

</div>
`;

            setTimeout(() => {
    window.location.href = "syllabus.html";
}, 3000);

        }else{

            alert("আবেদন জমা হয়নি।");

        }

    } catch(err){

        alert("সার্ভারের সাথে সংযোগ করা যায়নি।");

    }

});
