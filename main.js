function toggleNav() {
                const sidebar = document.getElementById("sidebar");
                if (sidebar.style.width === "100%") {
                    sidebar.style.width = "0";
                    main.style.marginLeft = "0";
                } else {
                    sidebar.style.width = "100%";
                    main.style.marginLeft = "100%";
                }
            }

            document.addEventListener("DOMContentLoaded", function() {
                const texts = ["linkedin", "github", "instagram", "Email", "Facebook"];
                const typingSpeed = 150; // سرعة الكتابة لكل حرف (بالملي ثانية)
                const erasingSpeed = 90; // سرعة مسح النص لكل حرف (بالملي ثانية)
                const delayBetweenWords = 2000; // تأخير بين الكلمات (بالملي ثانية)
                let textIndex = 0;
                let charIndex = 0;
                let isTyping = true;
            
                const spanElement = document.querySelector('.typing-text-contact span');
                const spanElementAfter = window.getComputedStyle(spanElement, '::after');
            
                function typeText() {
                    if (charIndex < texts[textIndex].length) {
                        if (isTyping) {
                            spanElement.textContent += texts[textIndex].charAt(charIndex);
                            charIndex++;
                            setTimeout(() => {
                                updateCursor();
                                typeText();
                            }, typingSpeed);
                        }
                    } else {
                        setTimeout(() => {
                            isTyping = false;
                            eraseText();
                        }, delayBetweenWords);
                    }
                }
            
                function eraseText() {
                    if (charIndex > 0) {
                        spanElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(() => {
                            updateCursor();
                            eraseText();
                        }, erasingSpeed);
                    } else {
                        isTyping = true;
                        textIndex = (textIndex + 1) % texts.length;
                        setTimeout(typeText, typingSpeed);
                    }
                }
            
                function updateCursor() {
                    const textWidth = spanElement.scrollWidth;
                    const cursor = window.getComputedStyle(spanElement, '::after');
                    spanElement.style.setProperty('--cursor-position', textWidth + 'px');
                }
            
                typeText();
            });
            
            document.addEventListener("DOMContentLoaded", function() {
                const texts = ["student", "trainee", "Passionate"];
                const typingSpeed = 150; // سرعة الكتابة لكل حرف (بالملي ثانية)
                const erasingSpeed = 90; // سرعة مسح النص لكل حرف (بالملي ثانية)
                const delayBetweenWords = 2000; // تأخير بين الكلمات (بالملي ثانية)
                let textIndex = 0;
                let charIndex = 0;
                let isTyping = true;
            
                const spanElement = document.querySelector('.typing-text span');
                const spanElementAfter = window.getComputedStyle(spanElement, '::after');
            
                function typeText() {
                    if (charIndex < texts[textIndex].length) {
                        if (isTyping) {
                            spanElement.textContent += texts[textIndex].charAt(charIndex);
                            charIndex++;
                            setTimeout(() => {
                                updateCursor();
                                typeText();
                            }, typingSpeed);
                        }
                    } else {
                        setTimeout(() => {
                            isTyping = false;
                            eraseText();
                        }, delayBetweenWords);
                    }
                }
            
                function eraseText() {
                    if (charIndex > 0) {
                        spanElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(() => {
                            updateCursor();
                            eraseText();
                        }, erasingSpeed);
                    } else {
                        isTyping = true;
                        textIndex = (textIndex + 1) % texts.length;
                        setTimeout(typeText, typingSpeed);
                    }
                }
            
                function updateCursor() {
                    const textWidth = spanElement.scrollWidth;
                    const cursor = window.getComputedStyle(spanElement, '::after');
                    spanElement.style.setProperty('--cursor-position', textWidth + 'px');
                }
            
                typeText();
            });
    



            