const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMI60YqjlUyUAmMD1lvuaorn2sg4bg908-WBuyoOwMDMbFB_VxNXC3niy5zuSj0-F7/exec";

document.getElementById("applyForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রসেসিং হচ্ছে...';

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
            Swal.fire({
                title: 'আবেদন সফল হয়েছে!',
                text: 'আপনার আবেদন সফলভাবে গ্রহণ করা হয়েছে। আমরা ভেরিফাই করে আপনাকে মেসেজ বা কল করে জানিয়ে দেব। এখন আপনি সিলেবাস ডাউনলোড করতে পারেন।',
                icon: 'success',
                confirmButtonText: 'সিলেবাস ডাউনলোড করুন',
                confirmButtonColor: '#28a745',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "syllabus.html";
                }
            });
            
            document.getElementById("applyForm").reset();
        } else {
            Swal.fire({
                title: 'দুঃখিত!',
                text: 'আবেদন জমা হয়নি। দয়া করে আবার চেষ্টা করুন।',
                icon: 'error',
                confirmButtonText: 'ঠিক আছে',
                confirmButtonColor: '#0056b3'
            });
        }
    } catch(err){
        Swal.fire({
            title: 'এরর!',
            text: 'সার্ভারের সাথে সংযোগ করা যায়নি। আপনার ইন্টারনেট কানেকশন চেক করুন।',
            icon: 'warning',
            confirmButtonText: 'ঠিক আছে',
            confirmButtonColor: '#ffc107'
        });
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'আবেদন জমা দিন <i class="fas fa-paper-plane"></i>';
    }
});
