document.addEventListener('DOMContentLoaded', () => {

const topHeaderHTML = `
        <div id="global-header">
            <a href="../writing-set/color test.html" class="header-message hover-wrapper">
                message<span class="zh-name">留言板</span>
            </a>
            <a href="../index.html" class="header-logo">
                <img src="../assets/index/greetings.png" alt="Index">
            </a>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', topHeaderHTML);

    const navHTML = `
        <div id="nav-anchor">
            <div class="nav-card" id="nav-postcard">
                <div class="nav-face nav-front">
                    <div class="postcard-design">
                        <div class="pc-divider"></div>
                        <div class="pc-stamp"></div>
                        <div class="pc-lines">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    
                    <img src="../assets/chinese/writing.png" class="nav-cn-img nav-top" alt="">
                    <img src="../assets/chinese/image.png"   class="nav-cn-img nav-bottom" alt="">
                    <img src="../assets/chinese/time.png"    class="nav-cn-img nav-left" alt="">
                    <img src="../assets/chinese/space.png"   class="nav-cn-img nav-right" alt="">
                    
                    <a href="../writing-set/glyphs.html" class="nav-word nav-top">writing</a>
                    <a href="../image-set/river.html" class="nav-word nav-bottom">image</a>
                    <a href="../script-set/script.html" class="nav-word nav-left">time</a>
                    <a href="../space-set/space.html" class="nav-word nav-right">space</a>
                </div>
                
                <div class="nav-peel" id="nav-peel-layer"></div>

                <div class="nav-face nav-back">
                    <img id="nav-random-img" src="" alt="Random Postcard">
                </div>
            </div>
        </div>
    `;

    const navContainer = document.createElement('div');
    navContainer.id = 'draggable-nav';
    navContainer.innerHTML = navHTML;
    document.body.appendChild(navContainer);

    const nav = document.getElementById('draggable-nav');
    const navAnchor = document.getElementById('nav-anchor');
    const navCard = document.getElementById('nav-postcard'); 
    const randomImg = document.getElementById('nav-random-img');
    const navWords = document.querySelectorAll('.nav-word');
    const peelLayer = document.getElementById('nav-peel-layer');

    // ==========================================
    // 💡 交互变色逻辑
    // ==========================================
    const colors = ['#e16e3c', '#f5cd46', '#f096d2', '#aa9bc8', '#5a50a0', '#1e283c', '#50a0dc', '#a0c364', '#785a37', '#2d6e3c'];
    const currentUrl = window.location.href.toLowerCase();

    navWords.forEach(word => {
        const keyword = word.innerText.trim().toLowerCase();
        let isActive = false;
        
        // 如果是当前页面，保持随机彩色
        if (currentUrl.includes(keyword + '-set')) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            word.style.setProperty('color', randomColor, 'important');
            isActive = true;
        }

        // 悬停变为随机彩色
        word.addEventListener('mouseenter', () => {
            if (!isActive) {
                word.style.color = colors[Math.floor(Math.random() * colors.length)];
            }
        });
        
        // 移开变回黑色
        word.addEventListener('mouseleave', () => {
            if (!isActive) {
                word.style.color = '#000000';
            }
        });

        // 点击时变换彩色
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isActive) {
                word.style.color = colors[Math.floor(Math.random() * colors.length)];
            }
        });
    });

    if (typeof postcardPool !== 'undefined' && postcardPool.length > 0) {
        const randomIndex = Math.floor(Math.random() * postcardPool.length);
        const randomCardData = postcardPool[randomIndex];
        const imgUrl = `../assets/postcards/${randomCardData.id}f.JPG`;
        
        randomImg.onload = function() {
            const aspect = this.naturalHeight / this.naturalWidth;
            nav.style.height = (234 * aspect) + 'px';
        };
        
        randomImg.src = imgUrl; 

        if (peelLayer) {
            peelLayer.style.backgroundImage = `url('${imgUrl}')`;
        }
    }

    let targetRotY = 0;
    let currentRotY = 0;

    window.addEventListener('scroll', () => {
        targetRotY = window.scrollY * 0.15; 
    });

    window.addEventListener('wheel', (e) => {
        if (document.documentElement.scrollHeight <= window.innerHeight) {
            targetRotY += e.deltaY * 0.15;
        }
    }, { passive: true });

    function renderScrollRotation() {
        currentRotY += (targetRotY - currentRotY) * 0.08; 
        if (Math.abs(targetRotY - currentRotY) > 0.01) {
            navAnchor.style.transform = `rotateY(${currentRotY}deg)`;
        }
        requestAnimationFrame(renderScrollRotation);
    }
    renderScrollRotation();

    let isDragging = false;
    let isMoved = false; 
    let currentX = 0, currentY = 0; 
    let initialX = 0, initialY = 0;
    let xOffset = 0, yOffset = 0;
    let dragStartX = 0, dragStartY = 0; 

    nav.addEventListener('pointerdown', (e) => {
        if (e.target.closest('a')) return; 
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        
        isDragging = true;
        isMoved = false;
        nav.setPointerCapture(e.pointerId); 
    });

    nav.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const dx = Math.abs(e.clientX - dragStartX);
        const dy = Math.abs(e.clientY - dragStartY);
        
        if (dx > 5 || dy > 5) {
            isMoved = true;
        }
        
        if (isMoved) {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            nav.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
    });

    nav.addEventListener('pointerup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        nav.releasePointerCapture(e.pointerId);

        if (!isMoved) {
            navCard.classList.toggle('is-flipped');
        }
    });
});