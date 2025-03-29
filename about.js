document.addEventListener('DOMContentLoaded', () => {
    // 创建主时间轴
    const tl = gsap.timeline();

    // 初始化
    gsap.set('.section', { opacity: 0, y: 20 });
    gsap.set('.animate-text', { opacity: 0, y: 20 });
    gsap.set('.github-link', { opacity: 0, y: 20 });

    // Logo和标题动画
    tl.from('.logo-title-wrapper', {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
    })

    // 介绍部分动画
    .to('.intro-section', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    })
    .to('.intro-section .animate-text', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 1,
        ease: 'power3.out'
    })

    // 历史部分动画
    .to('.history-section', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    }, '+=1')
    .to('.history-section .animate-text', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 1,
        ease: 'power3.out'
    })

    // 未来部分动画
    .to('.future-section', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    }, '+=1')
    .to('.future-section .animate-text', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 1,
        ease: 'power3.out'
    })

    // 合作部分动画
    .to('.collaboration-section', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    }, '+=1')
    .from('.section-title', {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: 'power3.out'
    })
    .to('.collaboration-section .animate-text, .feature-list li', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.5,
        ease: 'power3.out'
    })

    // GitHub链接部分动画
    .to('.github-section', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    }, '+=1')
    .to('.github-link', {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // 背景动画
    gsap.to('.about-container', {
        background: 'linear-gradient(135deg, var(--secondary-color) 0%, #051a30 100%)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'none'
    });

    // 添加鼠标悬停效果
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            gsap.to(section, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        });

        section.addEventListener('mouseleave', () => {
            gsap.to(section, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}); 