// 页面加载完成后执行动画
document.addEventListener('DOMContentLoaded', () => {
    // Logo动画
    gsap.from('.logo-image', {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: 'power3.out'
    });

    // 标题动画
    gsap.from('.logo-title', {
        duration: 1.5,
        opacity: 0,
        x: 50,
        delay: 0.5,
        ease: 'power3.out'
    });

    // 项目卡片动画
    gsap.from('.project-card', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        delay: 1.2,
        ease: 'power3.out'
    });

    // 页脚动画
    gsap.from('.footer', {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 1.8,
        ease: 'power3.out'
    });

    // 添加鼠标悬停效果
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}); 