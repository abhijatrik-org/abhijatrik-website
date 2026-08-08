// =========================
// OVIJATRIK SCRIPT V2.0
// =========================

document.addEventListener("DOMContentLoaded", function() {
    
   // 1. Gallery Filtering Logic (Updated for Hidden by Default on Homepage)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove("active"));
                // Add active class to clicked button
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                galleryItems.forEach(item => {
                    if (filterValue === "all") {
                        item.classList.remove("hide");
                        item.classList.add("show");
                    } else {
                        if (item.classList.contains(filterValue)) {
                            item.classList.remove("hide");
                            item.classList.add("show");
                        } else {
                            item.classList.remove("show");
                            item.classList.add("hide");
                        }
                    }
                });
            });
        });
    }
    // 2. Online Application Form Submission
    const applyForm = document.getElementById("applyForm");
    if (applyForm) {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMI60YqjlUyUAmMD1lvuaorn2sg4bg908-WBuyoOwMDMbFB_VxNXC3niy5zuSj0-F7/exec";

        applyForm.addEventListener("submit", async function(e ) {
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
                    
                    applyForm.reset();
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
    }

    // 3. Sticky Navbar Effect
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navbar.style.background = "rgba(0, 86, 179, 0.95)";
                navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
            } else {
                navbar.style.background = "var(--primary)";
                navbar.style.boxShadow = "none";
            }
        });
    }
});
