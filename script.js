const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMI60YqjlUyUAmMD1lvuaorn2sg4bg908-WBuyoOwMDMbFB_VxNXC3niy5zuSj0-F7/exec";

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("applyForm");

  if (!form) return;

  form.addEventListener("submit", async function (e) {

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

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
      });

      alert("আপনার আবেদন সফলভাবে জমা হয়েছে।");

      window.location.href = "syllabus.html";

    } catch (err) {

      alert("দুঃখিত! আবেদন জমা দেওয়া যায়নি। আবার চেষ্টা করুন।");

    }

  });

});
