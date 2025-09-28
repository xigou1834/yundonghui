// Windows Phone 8 Style Sports News Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Initialize based on current page
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'news':
            initializeNewsPage();
            break;
        case 'news-detail':
            initializeNewsDetailPage();
            break;
    }
    
    // Initialize common features
    initializeCommonFeatures();
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('news-detail.html')) return 'news-detail';
    if (path.includes('news.html')) return 'news';
    return 'index';
}

// Home Page Initialization
function initializeHomePage() {
    console.log('Initializing home page...');
    
    // Add tile click animations
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Simulate live data updates
    updateLiveData();
}

// News Page Initialization
function initializeNewsPage() {
    console.log('Initializing news page...');
    
    // Initialize news filtering
    initializeNewsFilters();
    
    // Add news item hover effects
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// News Detail Page Initialization
function initializeNewsDetailPage() {
    console.log('Initializing news detail page...');
    
    // Load article content based on URL parameter
    loadArticleContent();
    
    // Initialize video player
    initializeVideoPlayer();
    
    // Add reading progress indicator
    addReadingProgress();
}

// News Filtering System
function initializeNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter category
            const category = this.getAttribute('data-category');
            
            // Filter news items
            filterNewsItems(category, newsItems);
        });
    });
}

function filterNewsItems(category, newsItems) {
    newsItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'grid';
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            const itemCategories = item.getAttribute('data-category').split(' ');
            if (itemCategories.includes(category)) {
                item.style.display = 'grid';
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Article Content Loading
function loadArticleContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        loadArticleById(articleId);
    }
}

function loadArticleById(id) {
    // Article data (in a real application, this would come from an API)
    const articles = {
        '1': {
            title: '2025年世界田径锦标赛开幕',
            category: '田径',
            time: '2025-09-27 10:30',
            image: 'https://via.placeholder.com/800x400/0078d4/ffffff?text=田径锦标赛开幕式',
            content: `
                <p class="article-lead">全球顶尖运动员齐聚一堂，为期10天的精彩赛事正式拉开帷幕。开幕式以独特的文化表演展示了主办国的魅力，为这场体育盛宴营造了完美的开端。</p>
                
                <p>今天上午10时，2025年世界田径锦标赛在主体育场隆重开幕。来自全球200多个国家和地区的近3000名运动员将在接下来的10天里，为48个项目的金牌展开激烈角逐。</p>
                
                <h3>开幕式精彩亮点</h3>
                <p>开幕式以"速度与激情"为主题，通过现代科技与传统文化的完美融合，呈现了一场视觉盛宴。特别是运用了全息投影技术，让观众仿佛置身于时空隧道中，感受人类追求更快、更高、更强的体育精神。</p>
                
                <div class="video-container">
                    <h4>🎥 开幕式精彩回顾</h4>
                    <div class="video-player">
                        <video controls poster="https://via.placeholder.com/800x450/0078d4/ffffff?text=开幕式视频">
                            <source src="videos/opening-ceremony.mp4" type="video/mp4">
                            <source src="videos/opening-ceremony.webm" type="video/webm">
                            您的浏览器不支持视频播放。
                        </video>
                        <p class="video-caption">开幕式精彩瞬间 - 时长: 5分23秒</p>
                    </div>
                </div>
                
                <h3>比赛项目预告</h3>
                <p>本届锦标赛共设置48个比赛项目，包括短跑、中长跑、跨栏、跳跃、投掷、全能等各个田径分项。其中，备受关注的男子100米飞人大战将在本周六进行，多位世界纪录保持者将同场竞技。</p>
            `
        },
        '2': {
            title: '游泳世界纪录被打破',
            category: '游泳',
            time: '2025-09-27 15:45',
            image: 'https://via.placeholder.com/800x400/00bcf2/ffffff?text=游泳比赛',
            content: `
                <p class="article-lead">在今天的男子100米自由泳决赛中，来自澳大利亚的选手以惊人的成绩打破了保持3年的世界纪录，现场观众为这一历史时刻沸腾不已。</p>
                
                <p>澳大利亚游泳选手约翰·史密斯在今天下午的比赛中游出了46.86秒的惊人成绩，将原世界纪录提升了0.12秒。这是他职业生涯的巅峰表现，也为澳大利亚代表团赢得了本届比赛的首枚金牌。</p>
                
                <div class="highlight-box">
                    <h4>比赛成绩</h4>
                    <ul>
                        <li>🥇 约翰·史密斯 (澳大利亚) - 46.86秒 🌟 世界纪录</li>
                        <li>🥈 马克·约翰逊 (美国) - 47.01秒</li>
                        <li>🥉 山田太郎 (日本) - 47.15秒</li>
                    </ul>
                </div>
                
                <p>史密斯在赛后采访中表示："这个成绩超出了我的预期，我为能在这样的舞台上创造历史而感到骄傲。感谢所有支持我的人。"</p>
            `
        },
        '3': {
            title: '篮球决赛精彩回顾',
            category: '篮球',
            time: '2025-09-26 22:15',
            image: 'https://via.placeholder.com/800x400/ff4343/ffffff?text=篮球决赛',
            content: `
                <p class="article-lead">昨晚的篮球决赛堪称经典，双方在最后时刻展开激烈争夺。精彩的三分球和扣篮让现场观众沸腾不已。</p>
                
                <div class="video-container">
                    <h4>🎥 决赛精彩集锦</h4>
                    <div class="video-player">
                        <video controls poster="https://via.placeholder.com/800x450/ff4343/ffffff?text=篮球集锦">
                            <source src="videos/basketball-highlights.mp4" type="video/mp4">
                            <source src="videos/basketball-highlights.webm" type="video/webm">
                            您的浏览器不支持视频播放。
                        </video>
                        <p class="video-caption">篮球决赛精彩瞬间 - 时长: 8分15秒</p>
                    </div>
                </div>
                
                <p>比赛在加时赛中决出胜负，最终比分定格在98:95。MVP获得者在比赛中贡献了32分、8个篮板和6次助攻的全面表现。</p>
            `
        },
        '4': {
            title: '马拉松比赛实况直播',
            category: '田径',
            time: '正在直播',
            image: 'https://via.placeholder.com/800x400/107c10/ffffff?text=马拉松直播',
            content: `
                <p class="article-lead">42.195公里的挑战正在进行中，目前领先选手已经通过30公里标志。天气条件良好，适合创造佳绩。</p>
                
                <div class="video-container">
                    <h4>🔴 实时直播</h4>
                    <div class="video-player">
                        <video controls autoplay poster="https://via.placeholder.com/800x450/107c10/ffffff?text=马拉松直播">
                            <source src="videos/marathon-live.mp4" type="video/mp4">
                            <source src="videos/marathon-live.webm" type="video/webm">
                            您的浏览器不支持视频播放。
                        </video>
                        <p class="video-caption">马拉松比赛实况直播 - 正在进行中</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h4>当前排名（30公里处）</h4>
                    <ul>
                        <li>🥇 肯尼亚选手 - 1小时28分30秒</li>
                        <li>🥈 埃塞俄比亚选手 - 1小时28分45秒</li>
                        <li>🥉 日本选手 - 1小时29分10秒</li>
                    </ul>
                </div>
            `
        },
        '5': {
            title: '体操表演精彩瞬间',
            category: '体操',
            time: '2025-09-26 18:30',
            image: 'https://via.placeholder.com/800x400/9a0089/ffffff?text=体操表演',
            content: `
                <p class="article-lead">女子体操全能决赛中，选手们展现了完美的技术和艺术性。每一个动作都充满了力量与美感的完美结合。</p>
                
                <div class="video-container">
                    <h4>🎥 体操表演回放</h4>
                    <div class="video-player">
                        <video controls poster="https://via.placeholder.com/800x450/9a0089/ffffff?text=体操表演">
                            <source src="videos/gymnastics-performance.mp4" type="video/mp4">
                            <source src="videos/gymnastics-performance.webm" type="video/webm">
                            您的浏览器不支持视频播放。
                        </video>
                        <p class="video-caption">体操表演精彩瞬间 - 时长: 6分42秒</p>
                    </div>
                </div>
                
                <p>本次比赛中，多位选手在平衡木和自由体操项目上表现出色，获得了评委的高分认可。技术动作的完成度和艺术表现力都达到了很高的水准。</p>
            `
        }
    };
    
    const article = articles[id];
    if (article) {
        updateArticleContent(article);
    }
}

function updateArticleContent(article) {
    // Update title
    const titleElement = document.querySelector('.article-title');
    if (titleElement) {
        titleElement.textContent = article.title;
    }
    
    // Update category
    const categoryElement = document.querySelector('.article-category');
    if (categoryElement) {
        categoryElement.textContent = article.category;
    }
    
    // Update time
    const timeElement = document.querySelector('.article-time');
    if (timeElement) {
        timeElement.textContent = article.time;
    }
    
    // Update main image
    const imageElement = document.querySelector('.article-image img');
    if (imageElement) {
        imageElement.src = article.image;
        imageElement.alt = article.title;
    }
    
    // Update content
    const contentElement = document.querySelector('.article-content');
    if (contentElement) {
        contentElement.innerHTML = article.content;
    }
    
    // Re-initialize video player after content update
    setTimeout(initializeVideoPlayer, 100);
}

// Video Player Enhancement
function initializeVideoPlayer() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Add custom controls behavior
        video.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        video.addEventListener('canplay', function() {
            console.log('Video can start playing');
        });
        
        video.addEventListener('error', function() {
            console.log('Video loading error');
            showVideoError(this);
        });
        
        // Add click to play/pause
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
}

function showVideoError(videoElement) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'video-error';
    errorMessage.innerHTML = `
        <div style="background-color: #ff4343; color: white; padding: 20px; text-align: center;">
            <h4>🎥 视频暂时无法播放</h4>
            <p>视频文件正在加载中，请稍后再试。<br>
            如需查看视频，请确保网络连接正常。</p>
        </div>
    `;
    
    // Replace video with error message
    videoElement.parentNode.insertBefore(errorMessage, videoElement);
    videoElement.style.display = 'none';
}

// Reading Progress Indicator
function addReadingProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    
    // Add CSS for progress bar
    const style = document.createElement('style');
    style.textContent = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: rgba(255, 255, 255, 0.1);
            z-index: 1001;
        }
        .reading-progress-bar {
            height: 100%;
            background-color: #0078d4;
            width: 0%;
            transition: width 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', updateReadingProgress);
}

function updateReadingProgress() {
    const article = document.querySelector('.article');
    if (!article) return;
    
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    const articleStart = articleTop - windowHeight / 2;
    const articleEnd = articleTop + articleHeight - windowHeight / 2;
    
    if (scrollTop < articleStart) {
        updateProgressBar(0);
    } else if (scrollTop > articleEnd) {
        updateProgressBar(100);
    } else {
        const progress = ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100;
        updateProgressBar(progress);
    }
}

function updateProgressBar(percentage) {
    const progressBar = document.querySelector('.reading-progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

// Live Data Updates (simulated)
function updateLiveData() {
    // Update live badges periodically
    setInterval(() => {
        const liveBadges = document.querySelectorAll('.news-badge');
        liveBadges.forEach(badge => {
            if (badge.textContent.includes('直播')) {
                // Add pulsing effect to live badges
                badge.style.animation = 'pulse 2s infinite';
            }
        });
    }, 5000);
    
    // Add pulse animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Common Features
function initializeCommonFeatures() {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize tooltips (if needed)
    initializeTooltips();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Initialize theme switching (optional)
    // initializeThemeSwitcher();
}

function initializeTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[title]');
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(event) {
    // Simple tooltip implementation
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.getAttribute('title');
    tooltip.style.cssText = `
        position: absolute;
        background-color: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    event.target.setAttribute('data-original-title', event.target.getAttribute('title'));
    event.target.removeAttribute('title');
    
    // Position tooltip
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
}

function hideTooltip(event) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
    
    const originalTitle = event.target.getAttribute('data-original-title');
    if (originalTitle) {
        event.target.setAttribute('title', originalTitle);
        event.target.removeAttribute('data-original-title');
    }
}

function addKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // ESC key to go back
        if (event.key === 'Escape') {
            const backBtn = document.querySelector('.back-btn');
            if (backBtn) {
                backBtn.click();
            }
        }
        
        // Arrow keys for navigation
        if (event.key === 'ArrowLeft') {
            history.back();
        }
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization
window.addEventListener('scroll', throttle(updateReadingProgress, 16));

// Error handling
window.addEventListener('error', function(event) {
    console.error('页面发生错误:', event.error);
});

// Service Worker registration (for offline support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('ServiceWorker registered successfully');
        //     })
        //     .catch(function(error) {
        //         console.log('ServiceWorker registration failed');
        //     });
    });
}